// Ekran render fonksiyonları. Her fonksiyon container'ı doldurur ve olayları bağlar.

const STATUS_LABELS = [
  { key: 'tamamlandi', label: 'Tamamlandı', emo: '✅' },
  { key: 'kismi', label: 'Kısmi', emo: '🌓' },
  { key: 'atlandi', label: 'Atlandı', emo: '✖️' }
];

function itemRowHtml(item, rec, isNext) {
  const status = rec && rec.status;
  const note = (rec && rec.note) || '';
  const statusBtns = STATUS_LABELS.map((s) =>
    `<button class="status-btn ${status === s.key ? 'active' : ''}" data-status="${s.key}">
       <span class="emo">${s.emo}</span>${s.label}
     </button>`
  ).join('');
  return `
    <div class="item-card cat-${item.category} ${isNext ? 'is-next' : ''}" data-hour="${item.hour}">
      <div class="item-head" data-toggle="1">
        <div class="item-hour">${formatHour(item.hour)}</div>
        <div class="item-main">
          <div class="item-title">${escapeHtml(item.title)}</div>
          <div class="item-tags">
            <span class="item-cat">${CATEGORY_ICON[item.category] || ''} ${escapeHtml(item.category)}</span>
            ${item.duration > 0 ? `<span class="item-dur">${item.duration} dk</span>` : ''}
          </div>
        </div>
        <div class="item-chevron">▾</div>
      </div>
      <div class="item-body">
        <div class="item-detail">${escapeHtml(item.detail)}</div>
        <div class="status-row">${statusBtns}</div>
        <textarea class="note-input" data-note="1" placeholder="Not / belirti ekle...">${escapeHtml(note)}</textarea>
      </div>
    </div>`;
}

function itemsListHtml(planDay, byHour, nextHour) {
  return planDay.items.map((it) => itemRowHtml(it, byHour[it.hour], it.hour === nextHour)).join('');
}

// Bir uygulama listesi kabına (id="items-list", data-date) tıklama/kaydetme olaylarını bağlar.
function wireItemsEvents(listEl) {
  if (!listEl || listEl._wired) return;
  listEl._wired = true;
  const date = listEl.dataset.date;

  listEl.addEventListener('click', (e) => {
    const head = e.target.closest('.item-head');
    if (head) {
      head.closest('.item-card').classList.toggle('expanded');
      return;
    }
    const statusBtn = e.target.closest('.status-btn');
    if (statusBtn) {
      const card = statusBtn.closest('.item-card');
      const hour = Number(card.dataset.hour);
      const wasActive = statusBtn.classList.contains('active');
      const newStatus = wasActive ? null : statusBtn.dataset.status;
      card.querySelectorAll('.status-btn').forEach((b) => b.classList.remove('active'));
      if (newStatus) statusBtn.classList.add('active');
      DB.setDayItem(date, hour, { status: newStatus });
      return;
    }
  });

  listEl.addEventListener('input', (e) => {
    const ta = e.target.closest('textarea[data-note]');
    if (!ta) return;
    const card = ta.closest('.item-card');
    const hour = Number(card.dataset.hour);
    clearTimeout(ta._t);
    ta._t = setTimeout(() => {
      DB.setDayItem(date, hour, { note: ta.value });
    }, 500);
  });
}

// ================= Bugün =================
function defaultTodayViewDate() {
  const iso = todayISO();
  if (isDateInPlanRange(iso)) return iso;
  return iso < PLAN_DATA.meta.startDate ? PLAN_DATA.meta.startDate : PLAN_DATA.meta.endDate;
}

async function renderToday(container, dateParam) {
  const start = PLAN_DATA.meta.startDate;
  const end = PLAN_DATA.meta.endDate;
  const realToday = todayISO();
  const realTodayInRange = isDateInPlanRange(realToday);

  const date = dateParam ? clampDateToPlan(dateParam) : defaultTodayViewDate();
  const planDay = findDayByDate(date);
  const isRealToday = date === realToday;

  let bannerHtml = '';
  if (!realTodayInRange) {
    const before = realToday < start;
    bannerHtml = `
      <div class="card empty-state">
        ${before
          ? `Program <b>${formatDateTr(start)}</b> tarihinde başlıyor. Aşağıdaki tarih seçiciden 28 günün tamamını önceden inceleyebilirsin.`
          : `4 haftalık program <b>${formatDateTr(end)}</b> tarihinde tamamlandı. Aşağıdaki tarih seçiciden geçmiş günlere göz atabilirsin.`}
      </div>`;
  }

  const dateNavHtml = `
    <div class="date-nav">
      <button id="today-prev" ${date <= start ? 'disabled' : ''}>‹</button>
      <div class="date-label">${formatDateTr(date)}${isRealToday ? ' · Bugün' : ''}</div>
      <button id="today-next" ${date >= end ? 'disabled' : ''}>›</button>
    </div>
    <input type="date" class="text-input" id="today-date-picker" value="${date}" min="${start}" max="${end}" style="margin-bottom:14px">
    ${(!isRealToday && realTodayInRange) ? `<button class="btn secondary" id="today-back-btn" style="margin-bottom:14px">Bugüne dön</button>` : ''}
  `;

  const records = await DB.getDayItems(date);
  const byHour = {};
  records.forEach((r) => { byHour[r.hour] = r; });

  let nextBoxHtml;
  let nextHour = null;
  if (isRealToday) {
    const curHour = new Date().getHours();
    const nextItem = planDay.items.find((it) => it.hour >= curHour) || null;
    if (!nextItem) {
      nextBoxHtml = `
        <div class="next-box done">
          <div class="next-label">Bugünkü plan</div>
          <div class="next-title">Günün son uygulaması geçti 🎉</div>
          <div class="next-meta">Aşağıdan durumunu işaretleyebilirsin.</div>
        </div>`;
    } else {
      nextHour = nextItem.hour;
      const isNow = nextItem.hour === curHour;
      nextBoxHtml = `
        <div class="next-box">
          <div class="next-label">${isNow ? 'Şimdi yapılacak' : 'Sıradaki uygulama'}</div>
          <div class="next-title">${escapeHtml(nextItem.title)}</div>
          <div class="next-meta">${formatHour(nextItem.hour)} · ${escapeHtml(nextItem.category)}${isNow ? '' : ' · ' + (nextItem.hour - curHour) + ' saat sonra'}</div>
        </div>`;
    }
  } else {
    nextBoxHtml = `
      <div class="next-box">
        <div class="next-label">Hafta ${planDay.week} · Gün ${planDay.day}</div>
        <div class="next-title">${formatDateTr(date)}</div>
        <div class="next-meta">${planDay.items.length} uygulama</div>
      </div>`;
  }

  container.innerHTML = `
    <div class="page-heading">Bugün</div>
    ${bannerHtml}
    ${dateNavHtml}
    ${nextBoxHtml}
    <div class="section-title">Saatlik program</div>
    <div id="items-list" data-date="${date}">${itemsListHtml(planDay, byHour, nextHour)}</div>
  `;
  wireItemsEvents(document.getElementById('items-list'));

  document.getElementById('today-prev').addEventListener('click', () => {
    if (date > start) navigate('today/' + addDaysISO(date, -1));
  });
  document.getElementById('today-next').addEventListener('click', () => {
    if (date < end) navigate('today/' + addDaysISO(date, 1));
  });
  document.getElementById('today-date-picker').addEventListener('change', (e) => {
    navigate('today/' + clampDateToPlan(e.target.value));
  });
  const backBtn = document.getElementById('today-back-btn');
  if (backBtn) backBtn.addEventListener('click', () => navigate('today'));
}

// ================= Takvim =================
async function renderCalendar(container, params) {
  const week = params && params.week ? Number(params.week) : currentWeekGuess();
  const weeks = [1, 2, 3, 4];
  const wm = PLAN_DATA.weekMeta.find((w) => w.week === week);

  container.innerHTML = `
    <div class="page-heading">Takvim</div>
    <div class="tab-row" id="week-tabs">
      ${weeks.map((w) => `<button class="tab-btn ${w === week ? 'active' : ''}" data-week="${w}">Hafta ${w}</button>`).join('')}
    </div>
    <div class="week-range">${wm ? wm.dateRange : ''}</div>
    <div class="day-grid" id="day-grid"><div class="empty-state">Yükleniyor…</div></div>
  `;

  container.querySelectorAll('#week-tabs [data-week]').forEach((btn) => {
    btn.addEventListener('click', () => navigate('calendar/' + btn.dataset.week));
  });

  const allRecords = await DB.getAllDayItems();
  const recordsByDate = {};
  allRecords.forEach((r) => {
    (recordsByDate[r.date] = recordsByDate[r.date] || []).push(r);
  });

  const days = getWeekDays(week);
  const todayIso = todayISO();
  const grid = document.getElementById('day-grid');
  if (!grid) return;
  grid.innerHTML = days.map((d) => {
    const pct = computeDayCompletionPct(d, recordsByDate[d.date]);
    const dt = parseISODate(d.date);
    return `
      <button class="day-cell ${d.date === todayIso ? 'is-today' : ''}" data-date="${d.date}">
        <div class="dow">${TR_DOW_SHORT[dt.getDay()]}</div>
        <div class="dnum">${dt.getDate()}</div>
        <span class="pct-badge ${pctClass(pct)}">${pct}%</span>
      </button>`;
  }).join('');
  grid.querySelectorAll('[data-date]').forEach((el) => {
    el.addEventListener('click', () => navigate('today/' + el.dataset.date));
  });
}

// ================= Belirti Takibi =================
async function renderSymptoms(container, dateParam) {
  const start = PLAN_DATA.meta.startDate;
  const end = PLAN_DATA.meta.endDate;
  let date = dateParam || todayISO();
  date = clampDateToPlan(date);

  const planDay = findDayByDate(date);
  const sym = (await DB.getSymptom(date)) || {};
  const dayRecords = planDay ? await DB.getDayItems(date) : [];
  const completionPct = planDay ? computeDayCompletionPct(planDay, dayRecords) : 0;

  const slidersHtml = SYMPTOM_FIELDS.map((f) => {
    const val = (typeof sym[f.key] === 'number') ? sym[f.key] : 5;
    const hint = f.higherIsBetter ? '0 = çok kötü · 10 = çok iyi' : '0 = yok · 10 = en şiddetli';
    return `
      <div class="slider-field" data-field="${f.key}">
        <div class="slider-label"><span>${f.label}</span><span class="slider-value">${val}</span></div>
        <input type="range" min="0" max="10" step="1" value="${val}" data-slider="${f.key}">
        <div class="slider-hint">${hint}</div>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="page-heading">Belirti Takibi</div>
    <div class="date-nav">
      <button id="sym-prev" ${date <= start ? 'disabled' : ''}>‹</button>
      <div class="date-label">${formatDateTr(date)}</div>
      <button id="sym-next" ${date >= end ? 'disabled' : ''}>›</button>
    </div>
    <input type="date" class="text-input" id="sym-date-picker" value="${date}" min="${start}" max="${end}" style="margin-bottom:16px">

    <div class="card">
      ${slidersHtml}
      <div class="stat-box" style="margin-bottom:4px">
        <div class="stat-name">Egzersiz tamamlanma % (otomatik)</div>
        <div class="stat-num">${completionPct}%</div>
      </div>
    </div>

    <div class="card">
      <label class="field-label" for="sym-trigger">Baskın tetikleyici</label>
      <input type="text" class="text-input" id="sym-trigger" placeholder="Ör. kahve, stres, gazlı içecek…" value="${escapeHtml(sym.baskinTetikleyici || '')}" style="margin-bottom:14px">
      <label class="field-label" for="sym-note">Günlük not</label>
      <textarea class="text-input" id="sym-note" placeholder="Bugünle ilgili kısa not…">${escapeHtml(sym.gunlukNot || '')}</textarea>
    </div>
  `;

  container.querySelectorAll('[data-slider]').forEach((input) => {
    input.addEventListener('input', () => {
      const wrap = input.closest('.slider-field');
      wrap.querySelector('.slider-value').textContent = input.value;
      const key = input.dataset.slider;
      clearTimeout(input._t);
      input._t = setTimeout(() => {
        DB.setSymptom(date, { [key]: Number(input.value) });
      }, 250);
    });
  });

  const triggerInput = document.getElementById('sym-trigger');
  triggerInput.addEventListener('input', () => {
    clearTimeout(triggerInput._t);
    triggerInput._t = setTimeout(() => DB.setSymptom(date, { baskinTetikleyici: triggerInput.value }), 500);
  });

  const noteInput = document.getElementById('sym-note');
  noteInput.addEventListener('input', () => {
    clearTimeout(noteInput._t);
    noteInput._t = setTimeout(() => DB.setSymptom(date, { gunlukNot: noteInput.value }), 500);
  });

  document.getElementById('sym-prev').addEventListener('click', () => {
    if (date > start) navigate('symptoms/' + addDaysISO(date, -1));
  });
  document.getElementById('sym-next').addEventListener('click', () => {
    if (date < end) navigate('symptoms/' + addDaysISO(date, 1));
  });
  document.getElementById('sym-date-picker').addEventListener('change', (e) => {
    navigate('symptoms/' + clampDateToPlan(e.target.value));
  });
}

// ================= Haftalık Değerlendirme =================
async function renderWeekly(container, weekParam) {
  const week = weekParam ? Number(weekParam) : currentWeekGuess();
  const weeks = [1, 2, 3, 4];
  const wm = PLAN_DATA.weekMeta.find((w) => w.week === week);
  const days = getWeekDays(week);

  const [symptomsAll, dayItemsAll, weeklyRec] = await Promise.all([
    DB.getAllSymptoms(),
    DB.getAllDayItems(),
    DB.getWeekly(week)
  ]);
  const wr = weeklyRec || {};
  const symByDate = {};
  symptomsAll.forEach((s) => { symByDate[s.date] = s; });
  const itemsByDate = {};
  dayItemsAll.forEach((r) => { (itemsByDate[r.date] = itemsByDate[r.date] || []).push(r); });

  const avgStats = WEEKLY_AVG_FIELDS.map((f) => {
    const vals = days.map((d) => symByDate[d.date] ? symByDate[d.date][f.key] : undefined).filter((v) => typeof v === 'number');
    return { label: f.label, value: fmt1(average(vals)) };
  });
  const completionPct = Math.round(average(days.map((d) => computeDayCompletionPct(d, itemsByDate[d.date]))) || 0);

  const statBoxes = avgStats.map((s) => `
    <div class="stat-box"><div class="stat-name">${s.label}</div><div class="stat-num">${s.value}</div></div>
  `).join('') + `
    <div class="stat-box"><div class="stat-name">Tamamlama %</div><div class="stat-num">${completionPct}%</div></div>
  `;

  const questionsHtml = PLAN_DATA.sundayQuestions.map((q, i) => `
    <div style="margin-bottom:14px">
      <label class="field-label">${escapeHtml(q)}</label>
      <textarea class="text-input" data-q="${i}" placeholder="Cevabını yaz…">${escapeHtml((wr.answers && wr.answers[i]) || '')}</textarea>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="page-heading">Haftalık Değerlendirme</div>
    <div class="tab-row" id="weekly-tabs">
      ${weeks.map((w) => `<button class="tab-btn ${w === week ? 'active' : ''}" data-week="${w}">Hafta ${w}</button>`).join('')}
    </div>
    <div class="week-range">${wm ? wm.dateRange : ''}</div>

    <div class="section-title">Otomatik hesaplanan ortalamalar</div>
    <div class="stat-grid">${statBoxes}</div>

    <div class="card">
      <label class="field-label" for="wk-atak">Atak Sayısı</label>
      <input type="number" min="0" step="1" class="text-input" id="wk-atak" value="${wr.atakSayisi ?? ''}" placeholder="0" style="margin-bottom:14px">
      <label class="field-label" for="wk-karar">Karar / Ayarlama</label>
      <textarea class="text-input" id="wk-karar" placeholder="Gelecek hafta için karar/ayarlama…">${escapeHtml(wr.karar || '')}</textarea>
    </div>

    <div class="section-title">Pazar günü soruları</div>
    <div class="card">${questionsHtml}</div>
  `;

  container.querySelectorAll('#weekly-tabs [data-week]').forEach((btn) => {
    btn.addEventListener('click', () => navigate('weekly/' + btn.dataset.week));
  });

  const atakInput = document.getElementById('wk-atak');
  atakInput.addEventListener('input', () => {
    clearTimeout(atakInput._t);
    atakInput._t = setTimeout(() => {
      const v = atakInput.value === '' ? null : Number(atakInput.value);
      DB.setWeekly(week, { atakSayisi: v });
    }, 400);
  });
  const kararInput = document.getElementById('wk-karar');
  kararInput.addEventListener('input', () => {
    clearTimeout(kararInput._t);
    kararInput._t = setTimeout(() => DB.setWeekly(week, { karar: kararInput.value }), 500);
  });

  container.querySelectorAll('[data-q]').forEach((ta) => {
    ta.addEventListener('input', () => {
      clearTimeout(ta._t);
      ta._t = setTimeout(async () => {
        const current = (await DB.getWeekly(week)) || {};
        const answers = Array.isArray(current.answers) ? current.answers.slice() : [];
        answers[Number(ta.dataset.q)] = ta.value;
        DB.setWeekly(week, { answers });
      }, 500);
    });
  });
}

// ================= Atak Protokolleri =================
function renderProtocols(container) {
  const cards = PLAN_DATA.protocols.map((p) => `
    <div class="card protocol-card">
      <div class="protocol-title">${escapeHtml(p.durum)}</div>
      <div class="protocol-row"><b>Hemen Yap</b>${escapeHtml(p.hemenYap)}</div>
      <div class="protocol-row"><b>Süre</b>${escapeHtml(p.sure)}</div>
      <div class="protocol-row"><b>Kaçın</b>${escapeHtml(p.kacin)}</div>
      <div class="protocol-row"><b>Devam Kararı</b>${escapeHtml(p.devamKarari)}</div>
      <div class="protocol-medical">⚠️ ${escapeHtml(p.tibbiUyari)}</div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="page-heading">Atak Protokolleri</div>
    <div class="page-subtext">Belirti arttığında kullanılacak kısa protokoller. Bu sayfa salt okunurdur.</div>
    ${cards}
  `;
}

// ================= Rehber =================
function renderGuide(container) {
  const sections = PLAN_DATA.guide.sections.map((s) => `
    <div class="card">
      <div class="guide-section-title">${escapeHtml(s.heading)}</div>
      ${s.bullets.map((b) => `<div class="guide-bullet"><span class="dot">•</span><span>${escapeHtml(b)}</span></div>`).join('')}
    </div>
  `).join('');

  container.innerHTML = `
    <div class="page-heading">${escapeHtml(PLAN_DATA.guide.title)}</div>
    <div class="page-subtext">Salt okunur rehber metni.</div>
    ${sections}
  `;
}

// ================= Diğer (menü) =================
function renderMore(container) {
  container.innerHTML = `
    <div class="page-heading">Diğer</div>
    <div class="more-list">
      <div class="more-item" data-nav="protocols"><span class="more-icon">🚨</span>Atak Protokolleri<span class="more-arrow">›</span></div>
      <div class="more-item" data-nav="guide"><span class="more-icon">📖</span>Rehber<span class="more-arrow">›</span></div>
      <div class="more-item" data-nav="settings"><span class="more-icon">⚙️</span>Ayarlar ve Yedekleme<span class="more-arrow">›</span></div>
    </div>
  `;
  container.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', () => navigate(el.dataset.nav));
  });
}

// ================= Ayarlar =================
async function renderSettings(container) {
  const notifPerm = ('Notification' in window) ? Notification.permission : 'unsupported';
  const notifPillClass = notifPerm === 'granted' ? 'ok' : (notifPerm === 'denied' ? 'warn' : 'off');
  const notifText = { granted: 'İzin verildi', denied: 'Reddedildi', default: 'Sorulmadı', unsupported: 'Desteklenmiyor' }[notifPerm];

  let persisted = false;
  if (navigator.storage && navigator.storage.persisted) {
    persisted = await navigator.storage.persisted();
  }

  container.innerHTML = `
    <div class="page-heading">Ayarlar ve Yedekleme</div>

    <div class="section-title">Bildirimler</div>
    <div class="card">
      <div class="settings-row">
        <div>
          <div class="settings-label">Ön plan bildirimleri</div>
          <div class="settings-desc">Uygulama açıkken saatlik program zamanı geldiğinde bildirim gösterir.</div>
        </div>
        <span class="pill ${notifPillClass}">${notifText}</span>
      </div>
      ${notifPerm === 'default' ? '<button class="btn" id="btn-ask-notif" style="margin-top:10px">Bildirimlere izin ver</button>' : ''}
      <div class="page-subtext" style="margin-top:10px">
        iOS/Safari kısıtlaması: Uygulama kapalıyken veya arka plandayken sunucu tabanlı bir push servisi olmadan
        güvenilir bildirim gönderilemez. Bu, kodla aşılamayan bir WebKit sınırıdır. iOS 16.4+ üzerinde ana ekrana
        eklenmiş PWA'larda web push teorik olarak desteklenir, ancak bu bir push sunucusu (VAPID anahtarı + sunucu
        tarafı bileşen) gerektirir — bu da "sunucusuz" hedefimizle çelişeceği için şu an eklenmedi. İstersen ileride
        ayrı bir seçenek olarak eklenebilir.
      </div>
    </div>

    <div class="section-title">Depolama</div>
    <div class="card">
      <div class="settings-row">
        <div>
          <div class="settings-label">Kalıcı depolama</div>
          <div class="settings-desc">Verilerinin tarayıcı tarafından otomatik silinmesini engellemeye yardımcı olur.</div>
        </div>
        <span class="pill ${persisted ? 'ok' : 'off'}">${persisted ? 'Etkin' : 'Etkin değil'}</span>
      </div>
    </div>

    <div class="section-title">Veri Yedekleme</div>
    <div class="card">
      <button class="btn" id="btn-export">⬇️ Dışa Aktar (JSON indir)</button>
      <button class="btn secondary" id="btn-import">⬆️ İçe Aktar (JSON yükle)</button>
      <input type="file" id="file-import" accept="application/json">
      <div class="page-subtext" style="margin-top:2px">
        Tüm Durum/Not, belirti puanları ve haftalık cevapların tek bir dosyaya kaydedilir. Telefon değiştirirsen
        bu dosyayı İçe Aktar ile geri yükleyebilirsin.
      </div>
    </div>

    <div class="page-subtext" style="text-align:center;margin-top:20px">IBS ve Sinir Sistemi Programı — sürüm 1.0</div>
  `;

  const askBtn = document.getElementById('btn-ask-notif');
  if (askBtn) {
    askBtn.addEventListener('click', async () => {
      await requestNotificationPermission();
      renderSettings(container);
    });
  }

  document.getElementById('btn-export').addEventListener('click', async () => {
    const data = await DB.exportAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ibs-program-yedek-' + todayISO() + '.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    showToast('Yedek dosyası indirildi');
  });

  const fileInput = document.getElementById('file-import');
  document.getElementById('btn-import').addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const data = JSON.parse(reader.result);
        const ok = confirm('İçe aktarma, cihazdaki mevcut verilerin üzerine yazacak. Devam edilsin mi?');
        if (!ok) return;
        await DB.importAll(data);
        showToast('Veriler içe aktarıldı');
      } catch (err) {
        alert('Dosya okunamadı: geçerli bir yedek JSON dosyası seç.');
      }
      fileInput.value = '';
    };
    reader.readAsText(file);
  });
}
