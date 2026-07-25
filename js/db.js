// Kullanıcı verisi için IndexedDB katmanı.
// Sabit plan verisi (data.js / PLAN_DATA) buraya karışmaz; burada yalnızca
// kullanıcının girdiği Durum/Not, belirti puanları ve haftalık cevaplar saklanır.

const DB_NAME = 'ibs-pwa-db';
const DB_VERSION = 1;

const STORE_DAY_ITEMS = 'dayItems';   // id: `${date}_${hour}`
const STORE_SYMPTOMS = 'symptoms';    // id: date
const STORE_WEEKLY = 'weekly';        // id: week (1-4)
const STORE_META = 'meta';            // id: key

let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_DAY_ITEMS)) {
        const s = db.createObjectStore(STORE_DAY_ITEMS, { keyPath: 'id' });
        s.createIndex('date', 'date', { unique: false });
      }
      if (!db.objectStoreNames.contains(STORE_SYMPTOMS)) {
        db.createObjectStore(STORE_SYMPTOMS, { keyPath: 'date' });
      }
      if (!db.objectStoreNames.contains(STORE_WEEKLY)) {
        db.createObjectStore(STORE_WEEKLY, { keyPath: 'week' });
      }
      if (!db.objectStoreNames.contains(STORE_META)) {
        db.createObjectStore(STORE_META, { keyPath: 'key' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

function tx(storeName, mode) {
  return openDB().then((db) => db.transaction(storeName, mode).objectStore(storeName));
}

function reqToPromise(req) {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function storeGet(storeName, key) {
  return tx(storeName, 'readonly').then((s) => reqToPromise(s.get(key)));
}
function storeGetAll(storeName) {
  return tx(storeName, 'readonly').then((s) => reqToPromise(s.getAll()));
}
function storePut(storeName, value) {
  return tx(storeName, 'readwrite').then((s) => reqToPromise(s.put(value)));
}
function storeClear(storeName) {
  return tx(storeName, 'readwrite').then((s) => reqToPromise(s.clear()));
}

const DB = {
  // ---- Günlük uygulama durumu (Bugün / Takvim ekranları) ----
  getDayItems(date) {
    return tx(STORE_DAY_ITEMS, 'readonly').then((s) => {
      const idx = s.index('date');
      return reqToPromise(idx.getAll(date));
    });
  },
  getAllDayItems() {
    return storeGetAll(STORE_DAY_ITEMS);
  },
  setDayItem(date, hour, patch) {
    const id = date + '_' + hour;
    return storeGet(STORE_DAY_ITEMS, id).then((existing) => {
      const value = Object.assign({ id, date, hour, status: null, note: '' }, existing || {}, patch);
      return storePut(STORE_DAY_ITEMS, value);
    });
  },

  // ---- Belirti takibi ----
  getSymptom(date) {
    return storeGet(STORE_SYMPTOMS, date);
  },
  getAllSymptoms() {
    return storeGetAll(STORE_SYMPTOMS);
  },
  setSymptom(date, patch) {
    return storeGet(STORE_SYMPTOMS, date).then((existing) => {
      const value = Object.assign({ date }, existing || {}, patch);
      return storePut(STORE_SYMPTOMS, value);
    });
  },

  // ---- Haftalık değerlendirme ----
  getWeekly(week) {
    return storeGet(STORE_WEEKLY, week);
  },
  getAllWeekly() {
    return storeGetAll(STORE_WEEKLY);
  },
  setWeekly(week, patch) {
    return storeGet(STORE_WEEKLY, week).then((existing) => {
      const value = Object.assign({ week }, existing || {}, patch);
      return storePut(STORE_WEEKLY, value);
    });
  },

  // ---- Ayarlar / meta ----
  getMeta(key) {
    return storeGet(STORE_META, key).then((r) => (r ? r.value : undefined));
  },
  setMeta(key, value) {
    return storePut(STORE_META, { key, value });
  },

  // ---- Dışa / içe aktarma ----
  exportAll() {
    return Promise.all([
      storeGetAll(STORE_DAY_ITEMS),
      storeGetAll(STORE_SYMPTOMS),
      storeGetAll(STORE_WEEKLY),
      storeGetAll(STORE_META)
    ]).then(([dayItems, symptoms, weekly, meta]) => ({
      exportedAt: new Date().toISOString(),
      appVersion: 1,
      dayItems, symptoms, weekly, meta
    }));
  },
  importAll(data) {
    const jobs = [];
    if (Array.isArray(data.dayItems)) {
      jobs.push(storeClear(STORE_DAY_ITEMS).then(() =>
        Promise.all(data.dayItems.map((v) => storePut(STORE_DAY_ITEMS, v)))));
    }
    if (Array.isArray(data.symptoms)) {
      jobs.push(storeClear(STORE_SYMPTOMS).then(() =>
        Promise.all(data.symptoms.map((v) => storePut(STORE_SYMPTOMS, v)))));
    }
    if (Array.isArray(data.weekly)) {
      jobs.push(storeClear(STORE_WEEKLY).then(() =>
        Promise.all(data.weekly.map((v) => storePut(STORE_WEEKLY, v)))));
    }
    if (Array.isArray(data.meta)) {
      jobs.push(storeClear(STORE_META).then(() =>
        Promise.all(data.meta.map((v) => storePut(STORE_META, v)))));
    }
    return Promise.all(jobs);
  }
};
