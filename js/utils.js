// Yardımcı fonksiyonlar: tarih/saat biçimlendirme, hesaplamalar, küçük UI yardımcıları.

const TR_DOW_SHORT = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
const TR_DOW_LONG = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
const TR_MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

function pad2(n) { return String(n).padStart(2, '0'); }

// Yerel tarihi YYYY-MM-DD olarak döner (UTC kaymasını önler).
function toISODate(d) {
  return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate());
}

function todayISO() {
  return toISODate(new Date());
}

function parseISODate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function addDaysISO(iso, delta) {
  const d = parseISODate(iso);
  d.setDate(d.getDate() + delta);
  return toISODate(d);
}

function formatHour(h) {
  return pad2(h) + ':00';
}

function formatDateTr(iso, opts) {
  const d = parseISODate(iso);
  const dow = TR_DOW_LONG[d.getDay()];
  const base = d.getDate() + ' ' + TR_MONTHS[d.getMonth()];
  if (opts && opts.short) return base;
  return base + ' ' + dow;
}

function formatDateShort(iso) {
  const d = parseISODate(iso);
  return pad2(d.getDate()) + '.' + pad2(d.getMonth() + 1) + '.' + d.getFullYear();
}

function findDayByDate(iso) {
  return PLAN_DATA.days.find((d) => d.date === iso);
}

function isDateInPlanRange(iso) {
  return iso >= PLAN_DATA.meta.startDate && iso <= PLAN_DATA.meta.endDate;
}

function clampDateToPlan(iso) {
  if (iso < PLAN_DATA.meta.startDate) return PLAN_DATA.meta.startDate;
  if (iso > PLAN_DATA.meta.endDate) return PLAN_DATA.meta.endDate;
  return iso;
}

// Durum -> ağırlık: tamamlanma yüzdesi hesaplarken kullanılır.
const STATUS_WEIGHT = { tamamlandi: 1, kismi: 0.5, atlandi: 0 };

function computeDayCompletionPct(planDay, dayItemRecords) {
  if (!planDay || !planDay.items.length) return 0;
  const byHour = {};
  (dayItemRecords || []).forEach((r) => { byHour[r.hour] = r; });
  let sum = 0;
  planDay.items.forEach((it) => {
    const rec = byHour[it.hour];
    sum += (rec && rec.status) ? (STATUS_WEIGHT[rec.status] || 0) : 0;
  });
  return Math.round((sum / planDay.items.length) * 100);
}

function pctClass(pct) {
  if (pct >= 75) return 'pct-high';
  if (pct >= 35) return 'pct-mid';
  if (pct > 0) return 'pct-low';
  return 'pct-none';
}

const CATEGORY_LIST = Array.from(new Set(
  PLAN_DATA.days.flatMap((d) => d.items.map((it) => it.category))
));

const CATEGORY_ICON = {
  'Nefes': '🌬️',
  'Beslenme': '🍽️',
  'Hareket': '🚶',
  'Farkındalık': '🧠',
  'Gevşeme': '🌙',
  'Uyku': '😴',
  'Vagus': '🎵'
};

// Belirti Takibi sliderları: Excel "Gunluk Belirti Takibi" sayfasıyla birebir.
// higherIsBetter: nefes rahatlığı / enerji / uyku için 10 en iyi; diğerlerinde 10 en şiddetli.
const SYMPTOM_FIELDS = [
  { key: 'siskinlik', label: 'Şişkinlik', higherIsBetter: false },
  { key: 'karinAgrisi', label: 'Karın ağrısı', higherIsBetter: false },
  { key: 'gaz', label: 'Gaz', higherIsBetter: false },
  { key: 'ishalAciliyet', label: 'İshal / aciliyet', higherIsBetter: false },
  { key: 'kaygi', label: 'Kaygı', higherIsBetter: false },
  { key: 'nefesRahatligi', label: 'Nefes rahatlığı', higherIsBetter: true },
  { key: 'enerji', label: 'Enerji', higherIsBetter: true },
  { key: 'uykuKalitesi', label: 'Uyku kalitesi', higherIsBetter: true }
];

// Haftalık ortalama sütun eşlemesi (Excel "Haftalik Degerlendirme" sayfasıyla birebir).
const WEEKLY_AVG_FIELDS = [
  { key: 'siskinlik', label: 'Ort. Şişkinlik' },
  { key: 'karinAgrisi', label: 'Ort. Ağrı' },
  { key: 'ishalAciliyet', label: 'Ort. İshal/Aciliyet' },
  { key: 'kaygi', label: 'Ort. Kaygı' },
  { key: 'nefesRahatligi', label: 'Ort. Nefes Rahatlığı' },
  { key: 'enerji', label: 'Ort. Enerji' },
  { key: 'uykuKalitesi', label: 'Ort. Uyku' }
];

function average(nums) {
  const filtered = nums.filter((n) => typeof n === 'number' && !Number.isNaN(n));
  if (!filtered.length) return null;
  return filtered.reduce((a, b) => a + b, 0) / filtered.length;
}

function fmt1(n) {
  return n === null || n === undefined ? '—' : n.toFixed(1);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function debounce(fn, wait) {
  let t = null;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

function getWeekDays(week) {
  return PLAN_DATA.days.filter((d) => d.week === week);
}

function currentWeekGuess() {
  const iso = clampDateToPlan(todayISO());
  const pd = findDayByDate(iso);
  return pd ? pd.week : 1;
}
