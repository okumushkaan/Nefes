"""Saati geldiğinde plandaki uygulamayı Telegram'dan hatırlatır.

GitHub Actions tarafından her saat başı çalıştırılır. Türkiye saatiyle (UTC+3,
yaz saati uygulaması yok) şu anki tarih + saate karşılık gelen bir plan maddesi
varsa Telegram Bot API ile mesaj gönderir; yoksa sessizce çıkar.

Gerekli ortam değişkenleri (GitHub Actions secrets üzerinden gelir):
  TELEGRAM_BOT_TOKEN
  TELEGRAM_CHAT_ID
"""
import json
import os
import sys
import urllib.request
from datetime import datetime, timedelta, timezone

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
SCHEDULE_PATH = os.path.join(SCRIPT_DIR, 'schedule.json')

CATEGORY_EMOJI = {
    'Nefes': '🌬️',
    'Beslenme': '🍽️',
    'Hareket': '🚶',
    'Farkındalık': '🧠',
    'Gevşeme': '🌙',
    'Uyku': '😴',
    'Vagus': '🎵'
}

TURKEY_TZ = timezone(timedelta(hours=3))


def find_current_item(schedule, now_local):
    date_str = now_local.strftime('%Y-%m-%d')
    hour = now_local.hour
    for item in schedule:
        if item['date'] == date_str and item['hour'] == hour:
            return item
    return None


def build_message(item):
    emoji = CATEGORY_EMOJI.get(item['category'], '⏰')
    header = "{} {:02d}:00 — {}".format(emoji, item['hour'], item['title'])
    meta = "{} · {} dk".format(item['category'], item['duration']) if item['duration'] else item['category']
    return header + "\n" + meta + "\n\n" + item['detail']


def send_telegram_message(token, chat_id, text):
    url = "https://api.telegram.org/bot{}/sendMessage".format(token)
    payload = json.dumps({"chat_id": chat_id, "text": text}).encode('utf-8')
    req = urllib.request.Request(
        url, data=payload, headers={"Content-Type": "application/json"}, method='POST'
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        body = resp.read().decode('utf-8')
        if resp.status != 200:
            raise RuntimeError("Telegram API hatasi ({}): {}".format(resp.status, body))
        return body


def main():
    token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    if not token or not chat_id:
        print('TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID tanimli degil, cikiliyor.')
        sys.exit(1)

    now_local = datetime.now(TURKEY_TZ)

    # Actions sekmesinden "Run workflow" ile elle tetiklenip test_mode=true
    # secildiginde, saat/tarih eslesmesi beklemeden sabit bir test mesaji atar.
    if os.environ.get('TEST_MODE', '').lower() == 'true':
        send_telegram_message(
            token, chat_id,
            "✅ Test mesajı — bot ve GitHub Actions bağlantısı çalışıyor.\n"
            "Şu an Türkiye saatiyle: " + now_local.strftime('%d.%m.%Y %H:%M')
        )
        print('Test mesaji gonderildi.')
        return

    with open(SCHEDULE_PATH, encoding='utf-8') as f:
        schedule = json.load(f)

    item = find_current_item(schedule, now_local)

    if not item:
        print('Su an ({}) icin planda bir madde yok.'.format(now_local.strftime('%Y-%m-%d %H:%M')))
        return

    text = build_message(item)
    send_telegram_message(token, chat_id, text)
    print('Mesaj gonderildi:', item['date'], item['hour'], '-', item['title'])


if __name__ == '__main__':
    main()
