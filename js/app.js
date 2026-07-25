// Uygulama başlatma, hash tabanlı router, bildirim zamanlayıcı.

const ROUTE_TITLES = {
  today: 'Bugün',
  calendar: 'Takvim',
  symptoms: 'Belirti Takibi',
  weekly: 'Haftalık Değerlendirme',
  protocols: 'Atak Protokolleri',
  guide: 'Rehber',
  more: 'Diğer',
  settings: 'Ayarlar',
  breathing: 'Nefes Egzersizleri',
  breathe: 'Nefes Egzersizi'
};

function navigate(path) {
  const newHash = '#/' + path;
  if (location.hash === newHash) {
    route();
  } else {
    location.hash = newHash;
  }
}

function updateHeaderTitle(top) {
  document.getElementById('header-title').textContent = ROUTE_TITLES[top] || 'IBS Program';
}

function updateNav(top) {
  const navGroupMap = { protocols: 'more', guide: 'more', settings: 'more', breathing: 'more', breathe: 'more' };
  const active = navGroupMap[top] || top;
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.route === active);
  });
}

function route() {
  teardownBreathing();

  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);
  const top = parts[0] || 'today';
  const view = document.getElementById('view');

  updateNav(top);
  updateHeaderTitle(top);

  if (top === 'today') renderToday(view, parts[1]);
  else if (top === 'calendar') renderCalendar(view, { week: parts[1] });
  else if (top === 'symptoms') renderSymptoms(view, parts[1]);
  else if (top === 'weekly') renderWeekly(view, parts[1]);
  else if (top === 'protocols') renderProtocols(view);
  else if (top === 'guide') renderGuide(view);
  else if (top === 'more') renderMore(view);
  else if (top === 'settings') renderSettings(view);
  else if (top === 'breathing') renderBreathingList(view);
  else if (top === 'breathe') renderBreathe(view, parts[1], parts[2], parts[3]);
  else renderToday(view);

  view.scrollTop = 0;
}

window.addEventListener('hashchange', route);

document.querySelectorAll('.nav-btn').forEach((btn) => {
  btn.addEventListener('click', () => navigate(btn.dataset.route));
});
document.getElementById('btn-settings').addEventListener('click', () => navigate('settings'));

// ================= Bildirimler (yalnızca ön planda) =================
async function requestNotificationPermission() {
  if (!('Notification' in window)) return 'unsupported';
  if (Notification.permission !== 'default') return Notification.permission;
  try {
    return await Notification.requestPermission();
  } catch (e) {
    return 'denied';
  }
}

function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = 660;
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    o.connect(g).connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.65);
  } catch (e) { /* ses desteklenmiyorsa sessizce geç */ }
}

const notifiedToday = new Set();

function checkForegroundReminder() {
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const iso = todayISO();
  const planDay = findDayByDate(iso);
  if (!planDay) return;
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  if (minute > 3) return; // saatin ilk birkaç dakikasında tetikle

  const item = planDay.items.find((it) => it.hour === hour);
  if (!item) return;
  const id = iso + '_' + hour;
  if (notifiedToday.has(id)) return;
  notifiedToday.add(id);

  try {
    new Notification(item.title, {
      body: formatHour(item.hour) + ' · ' + item.category,
      tag: id
    });
  } catch (e) { /* bildirim oluşturulamazsa yok say */ }
  playChime();
}

// ================= Başlatma =================
async function initApp() {
  route();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist().catch(() => {});
  }

  try {
    const asked = await DB.getMeta('notifAsked');
    if (!asked) {
      if ('Notification' in window && Notification.permission === 'default') {
        await requestNotificationPermission();
      }
      await DB.setMeta('notifAsked', true);
    }
  } catch (e) { /* IndexedDB kullanılamıyorsa sessizce geç */ }

  setInterval(checkForegroundReminder, 30000);
  checkForegroundReminder();
}

initApp();
