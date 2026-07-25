// Bu dosya IBS_Sinir_Sistemi_4_Haftalik_Plan.xlsx dosyasindan otomatik uretilmistir.
// Sabit plan verisi; kullanici verisiyle karistirilmamalidir (kullanici verisi IndexedDB'de tutulur).
// breathingExercises: nefes egzersizi oynaticisi icin elle curate edilmis segment/faz verisi.
const PLAN_DATA = {
  "meta": {
    "title": "4 Haftalık IBS ve Sinir Sistemi Düzenleme Programı — Saatlik Uygulama Planı",
    "subtitle": "Başlangıç: 26.07.2026 Pazar | Varsayılan düzen: 07:00 uyanış, 23:00 uyku. Saatleri kendi yaşamına göre aynı sırayı koruyarak kaydırabilirsin.",
    "startDate": "2026-07-26",
    "endDate": "2026-08-22"
  },
  "days": [
    {
      "week": 1,
      "day": 1,
      "date": "2026-07-26",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 1,
      "day": 2,
      "date": "2026-07-27",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 1,
      "day": 3,
      "date": "2026-07-28",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 1,
      "day": 4,
      "date": "2026-07-29",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 1,
      "day": 5,
      "date": "2026-07-30",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 1,
      "day": 6,
      "date": "2026-07-31",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 1,
      "day": 7,
      "date": "2026-08-01",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 2,
      "day": 8,
      "date": "2026-08-02",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 2,
      "day": 9,
      "date": "2026-08-03",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 2,
      "day": 10,
      "date": "2026-08-04",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 2,
      "day": 11,
      "date": "2026-08-05",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 2,
      "day": 12,
      "date": "2026-08-06",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 2,
      "day": 13,
      "date": "2026-08-07",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 2,
      "day": 14,
      "date": "2026-08-08",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah sinir sistemi rutini",
          "duration": 20,
          "detail": "• 5 dk nefesi değiştirmeden gözlemle; 10 dk burundan 4 sn al / 6 sn ver; 5 dk ev içinde yavaş, yalnızca burundan nefesle yürü. Omuzları kaldırma, nefesi zorla derinleştirme.",
          "breathingId": "sabah-sinir-sistemi-rutini"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Nefes",
          "title": "Stres boşaltma — fizyolojik iç çekiş",
          "duration": 3,
          "detail": "• Toplam 3–5 tekrar: burundan normal bir nefes al, üstüne kısa ikinci bir nefes ekle, ardından uzun ve rahatça ver. Baş dönmesi olursa bırak. 5 dakika boyunca sürekli tekrarlama.",
          "breathingId": "stres-bosaltma-fizyolojik-ic-cekis"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Nefes rahat, sessiz ve burundan olsun. Hava açlığı oluşursa süreyi 10 dk’ya indir.",
          "breathingId": "aksam-koherent-nefes"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 3,
      "day": 15,
      "date": "2026-08-09",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah diyafram + koherent nefes",
          "duration": 20,
          "detail": "• 10 dk 4 sn al / 6 sn ver; ardından 10 dk 5 sn al / 5 sn ver. Nefes sessiz, yumuşak ve burundan olsun.",
          "breathingId": "sabah-diyafram-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Farkındalık",
          "title": "Beden kontrolü + 1 dk yavaş nefes",
          "duration": 2,
          "detail": "• Çene, omuz ve karnı gevşet; ardından 1 dk boyunca yaklaşık 4 sn al / 6 sn ver."
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam 4–6 nefesi",
          "duration": 10,
          "detail": "• 10 dk boyunca 4 sn al / 6 sn ver. Veriş uzun fakat zorlamasız olsun.",
          "breathingId": "aksam-4-6-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 3,
      "day": 16,
      "date": "2026-08-10",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah diyafram + koherent nefes",
          "duration": 20,
          "detail": "• 10 dk 4 sn al / 6 sn ver; ardından 10 dk 5 sn al / 5 sn ver. Nefes sessiz, yumuşak ve burundan olsun.",
          "breathingId": "sabah-diyafram-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Farkındalık",
          "title": "Beden kontrolü + 1 dk yavaş nefes",
          "duration": 2,
          "detail": "• Çene, omuz ve karnı gevşet; ardından 1 dk boyunca yaklaşık 4 sn al / 6 sn ver."
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam 4–6 nefesi",
          "duration": 10,
          "detail": "• 10 dk boyunca 4 sn al / 6 sn ver. Veriş uzun fakat zorlamasız olsun.",
          "breathingId": "aksam-4-6-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 3,
      "day": 17,
      "date": "2026-08-11",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah diyafram + koherent nefes",
          "duration": 20,
          "detail": "• 10 dk 4 sn al / 6 sn ver; ardından 10 dk 5 sn al / 5 sn ver. Nefes sessiz, yumuşak ve burundan olsun.",
          "breathingId": "sabah-diyafram-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Farkındalık",
          "title": "Beden kontrolü + 1 dk yavaş nefes",
          "duration": 2,
          "detail": "• Çene, omuz ve karnı gevşet; ardından 1 dk boyunca yaklaşık 4 sn al / 6 sn ver."
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam 4–6 nefesi",
          "duration": 10,
          "detail": "• 10 dk boyunca 4 sn al / 6 sn ver. Veriş uzun fakat zorlamasız olsun.",
          "breathingId": "aksam-4-6-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 3,
      "day": 18,
      "date": "2026-08-12",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah diyafram + koherent nefes",
          "duration": 20,
          "detail": "• 10 dk 4 sn al / 6 sn ver; ardından 10 dk 5 sn al / 5 sn ver. Nefes sessiz, yumuşak ve burundan olsun.",
          "breathingId": "sabah-diyafram-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Farkındalık",
          "title": "Beden kontrolü + 1 dk yavaş nefes",
          "duration": 2,
          "detail": "• Çene, omuz ve karnı gevşet; ardından 1 dk boyunca yaklaşık 4 sn al / 6 sn ver."
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam 4–6 nefesi",
          "duration": 10,
          "detail": "• 10 dk boyunca 4 sn al / 6 sn ver. Veriş uzun fakat zorlamasız olsun.",
          "breathingId": "aksam-4-6-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 3,
      "day": 19,
      "date": "2026-08-13",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah diyafram + koherent nefes",
          "duration": 20,
          "detail": "• 10 dk 4 sn al / 6 sn ver; ardından 10 dk 5 sn al / 5 sn ver. Nefes sessiz, yumuşak ve burundan olsun.",
          "breathingId": "sabah-diyafram-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Farkındalık",
          "title": "Beden kontrolü + 1 dk yavaş nefes",
          "duration": 2,
          "detail": "• Çene, omuz ve karnı gevşet; ardından 1 dk boyunca yaklaşık 4 sn al / 6 sn ver."
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam 4–6 nefesi",
          "duration": 10,
          "detail": "• 10 dk boyunca 4 sn al / 6 sn ver. Veriş uzun fakat zorlamasız olsun.",
          "breathingId": "aksam-4-6-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 3,
      "day": 20,
      "date": "2026-08-14",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah diyafram + koherent nefes",
          "duration": 20,
          "detail": "• 10 dk 4 sn al / 6 sn ver; ardından 10 dk 5 sn al / 5 sn ver. Nefes sessiz, yumuşak ve burundan olsun.",
          "breathingId": "sabah-diyafram-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Farkındalık",
          "title": "Beden kontrolü + 1 dk yavaş nefes",
          "duration": 2,
          "detail": "• Çene, omuz ve karnı gevşet; ardından 1 dk boyunca yaklaşık 4 sn al / 6 sn ver."
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam 4–6 nefesi",
          "duration": 10,
          "detail": "• 10 dk boyunca 4 sn al / 6 sn ver. Veriş uzun fakat zorlamasız olsun.",
          "breathingId": "aksam-4-6-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 3,
      "day": 21,
      "date": "2026-08-15",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah diyafram + koherent nefes",
          "duration": 20,
          "detail": "• 10 dk 4 sn al / 6 sn ver; ardından 10 dk 5 sn al / 5 sn ver. Nefes sessiz, yumuşak ve burundan olsun.",
          "breathingId": "sabah-diyafram-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Farkındalık",
          "title": "Beden kontrolü + 1 dk yavaş nefes",
          "duration": 2,
          "detail": "• Çene, omuz ve karnı gevşet; ardından 1 dk boyunca yaklaşık 4 sn al / 6 sn ver."
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam 4–6 nefesi",
          "duration": 10,
          "detail": "• 10 dk boyunca 4 sn al / 6 sn ver. Veriş uzun fakat zorlamasız olsun.",
          "breathingId": "aksam-4-6-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 4,
      "day": 22,
      "date": "2026-08-16",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Karnı şişirmeye çalışma; alt kaburga ve karında doğal, küçük hareket yeterli.",
          "breathingId": "sabah-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Vagus",
          "title": "Mırıldanma (humming)",
          "duration": 5,
          "detail": "• Burundan rahat nefes al; verirken yumuşak “mmmm” sesi çıkar. Boğazı zorlamadan 5 dk uygula.",
          "breathingId": "mirildanma-humming"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam diyafram nefesi",
          "duration": 10,
          "detail": "• Sırtüstü veya rahat oturuşta 10 dk. Alt kaburgaların ve karnın doğal genişlemesine izin ver; göğüs hareketini zorla bastırma.",
          "breathingId": "aksam-diyafram-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 4,
      "day": 23,
      "date": "2026-08-17",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Karnı şişirmeye çalışma; alt kaburga ve karında doğal, küçük hareket yeterli.",
          "breathingId": "sabah-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Vagus",
          "title": "Mırıldanma (humming)",
          "duration": 5,
          "detail": "• Burundan rahat nefes al; verirken yumuşak “mmmm” sesi çıkar. Boğazı zorlamadan 5 dk uygula.",
          "breathingId": "mirildanma-humming"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam diyafram nefesi",
          "duration": 10,
          "detail": "• Sırtüstü veya rahat oturuşta 10 dk. Alt kaburgaların ve karnın doğal genişlemesine izin ver; göğüs hareketini zorla bastırma.",
          "breathingId": "aksam-diyafram-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 4,
      "day": 24,
      "date": "2026-08-18",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Karnı şişirmeye çalışma; alt kaburga ve karında doğal, küçük hareket yeterli.",
          "breathingId": "sabah-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Vagus",
          "title": "Mırıldanma (humming)",
          "duration": 5,
          "detail": "• Burundan rahat nefes al; verirken yumuşak “mmmm” sesi çıkar. Boğazı zorlamadan 5 dk uygula.",
          "breathingId": "mirildanma-humming"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam diyafram nefesi",
          "duration": 10,
          "detail": "• Sırtüstü veya rahat oturuşta 10 dk. Alt kaburgaların ve karnın doğal genişlemesine izin ver; göğüs hareketini zorla bastırma.",
          "breathingId": "aksam-diyafram-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 4,
      "day": 25,
      "date": "2026-08-19",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Karnı şişirmeye çalışma; alt kaburga ve karında doğal, küçük hareket yeterli.",
          "breathingId": "sabah-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Vagus",
          "title": "Mırıldanma (humming)",
          "duration": 5,
          "detail": "• Burundan rahat nefes al; verirken yumuşak “mmmm” sesi çıkar. Boğazı zorlamadan 5 dk uygula.",
          "breathingId": "mirildanma-humming"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam diyafram nefesi",
          "duration": 10,
          "detail": "• Sırtüstü veya rahat oturuşta 10 dk. Alt kaburgaların ve karnın doğal genişlemesine izin ver; göğüs hareketini zorla bastırma.",
          "breathingId": "aksam-diyafram-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 4,
      "day": 26,
      "date": "2026-08-20",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Karnı şişirmeye çalışma; alt kaburga ve karında doğal, küçük hareket yeterli.",
          "breathingId": "sabah-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Vagus",
          "title": "Mırıldanma (humming)",
          "duration": 5,
          "detail": "• Burundan rahat nefes al; verirken yumuşak “mmmm” sesi çıkar. Boğazı zorlamadan 5 dk uygula.",
          "breathingId": "mirildanma-humming"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam diyafram nefesi",
          "duration": 10,
          "detail": "• Sırtüstü veya rahat oturuşta 10 dk. Alt kaburgaların ve karnın doğal genişlemesine izin ver; göğüs hareketini zorla bastırma.",
          "breathingId": "aksam-diyafram-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Hafif kuvvet / mobilite",
          "duration": 20,
          "detail": "• Ağrı oluşturmayan hafif program: sandalyeye otur-kalk, duvar şınavı, direnç bandı çekişi ve nazik esneme. Nefesi tutma. Şikâyet artarsa yalnızca 10 dk yürüyüş yap."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 4,
      "day": 27,
      "date": "2026-08-21",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Karnı şişirmeye çalışma; alt kaburga ve karında doğal, küçük hareket yeterli.",
          "breathingId": "sabah-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Vagus",
          "title": "Mırıldanma (humming)",
          "duration": 5,
          "detail": "• Burundan rahat nefes al; verirken yumuşak “mmmm” sesi çıkar. Boğazı zorlamadan 5 dk uygula.",
          "breathingId": "mirildanma-humming"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam diyafram nefesi",
          "duration": 10,
          "detail": "• Sırtüstü veya rahat oturuşta 10 dk. Alt kaburgaların ve karnın doğal genişlemesine izin ver; göğüs hareketini zorla bastırma.",
          "breathingId": "aksam-diyafram-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    },
    {
      "week": 4,
      "day": 28,
      "date": "2026-08-22",
      "items": [
        {
          "hour": 7,
          "category": "Nefes",
          "title": "Sabah koherent nefes",
          "duration": 15,
          "detail": "• 15 dk boyunca 5 sn al / 5 sn ver. Karnı şişirmeye çalışma; alt kaburga ve karında doğal, küçük hareket yeterli.",
          "breathingId": "sabah-koherent-nefes"
        },
        {
          "hour": 8,
          "category": "Beslenme",
          "title": "Kahvaltıyı sakin yeme",
          "duration": 20,
          "detail": "• Telefon ve televizyon olmadan ye. Küçük lokmalar al, her lokmayı yaklaşık 15–20 kez çiğne. Yemek boyunca omuz, çene ve karnı gevşek tut."
        },
        {
          "hour": 10,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Çene sıkılı mı, omuzlar kalkık mı, karın içeri çekilmiş mi? Üçünü de yumuşat. Nefesi değiştirmeden devam et."
        },
        {
          "hour": 12,
          "category": "Beslenme",
          "title": "Öğle yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Hızlı yeme, gazlı içecek, pipet ve sakız kullanma. Aşırı büyük porsiyon yerine orta porsiyon tercih et."
        },
        {
          "hour": 13,
          "category": "Hareket",
          "title": "Öğle sonrası hafif yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra 10 dk rahat tempoda yürü. Konuşabilecek tempoda kal; mümkünse burundan nefes al."
        },
        {
          "hour": 15,
          "category": "Vagus",
          "title": "Mırıldanma (humming)",
          "duration": 5,
          "detail": "• Burundan rahat nefes al; verirken yumuşak “mmmm” sesi çıkar. Boğazı zorlamadan 5 dk uygula.",
          "breathingId": "mirildanma-humming"
        },
        {
          "hour": 16,
          "category": "Farkındalık",
          "title": "30 saniyelik beden kontrolü",
          "duration": 1,
          "detail": "• Karın kasılıysa bilinçli şekilde bırak. Nefesi büyütmeye çalışma."
        },
        {
          "hour": 18,
          "category": "Beslenme",
          "title": "Akşam yemeğini sakin yeme",
          "duration": 25,
          "detail": "• Orta porsiyon ye; çok yağlı, çok baharatlı ve kişisel olarak tetiklediğini bildiğin yiyecekleri sınırlı tut."
        },
        {
          "hour": 19,
          "category": "Hareket",
          "title": "Akşam yemeği sonrası yürüyüş",
          "duration": 10,
          "detail": "• Yemekten sonra en az 20 dk uzanma. 10 dk hafif yürüyüş yap."
        },
        {
          "hour": 20,
          "category": "Nefes",
          "title": "Akşam diyafram nefesi",
          "duration": 10,
          "detail": "• Sırtüstü veya rahat oturuşta 10 dk. Alt kaburgaların ve karnın doğal genişlemesine izin ver; göğüs hareketini zorla bastırma.",
          "breathingId": "aksam-diyafram-nefesi"
        },
        {
          "hour": 21,
          "category": "Hareket",
          "title": "Rahatlatıcı mobilite",
          "duration": 10,
          "detail": "• Bel, kalça ve göğüs kafesine yönelik nazik hareketler yap. Keskin ağrıya girme, nefesi tutma."
        },
        {
          "hour": 22,
          "category": "Gevşeme",
          "title": "Karın gevşetme + günlük kayıt",
          "duration": 7,
          "detail": "• 5 dk karın kaslarını tamamen serbest bırak; ardından 2 dk günlük belirti puanlarını kaydet. Karnı zorla dışarı itme."
        },
        {
          "hour": 23,
          "category": "Uyku",
          "title": "Uykuya geçiş",
          "duration": 0,
          "detail": "• Hedef: benzer saatte uyumak. Son 30 dk parlak ekranı azalt. Gece nefes egzersizini zorlayarak uzatma."
        }
      ]
    }
  ],
  "protocols": [
    {
      "durum": "IBS atağı / ani karın hareketliliği",
      "hemenYap": "Otur veya güvenli bir yerde dur. Burundan 3 sn al, 6 sn ver. Nefes küçük ve rahat olsun.",
      "sure": "3–5 dk",
      "kacin": "Derin ve hızlı nefes; nefesi tutma; yoğun egzersiz",
      "devamKarari": "5 dk sonunda daha sakinsen normal programa dön. Kötüleşiyorsa bırak ve dinlen.",
      "tibbiUyari": "Kanlı dışkı, siyah dışkı, yüksek ateş, bayılma, şiddetli/sürekli ağrı veya susuzluk bulgularında acil tıbbi yardım al."
    },
    {
      "durum": "Kaygı dalgası",
      "hemenYap": "1–3 fizyolojik iç çekiş yap; sonra 2 dk normal, yavaş burun nefesine dön.",
      "sure": "2–3 dk",
      "kacin": "Arka arkaya uzun süre çift nefes; aşırı derin soluma",
      "devamKarari": "Baş dönmesi yoksa güne devam et. Tekniği sakinleşme aracı olarak kısa tut.",
      "tibbiUyari": "Göğüs ağrısı, bayılma, yeni başlayan belirgin nefes darlığı veya eforla kötüleşme varsa tıbbi değerlendirme gerekir."
    },
    {
      "durum": "Belirgin şişkinlik",
      "hemenYap": "Dik otur veya sol yana rahatça uzan; 4 sn al / 6 sn ver ve karnı serbest bırak.",
      "sure": "5–10 dk",
      "kacin": "Karnı zorla şişirme, sıkı kıyafet, hemen yatma",
      "devamKarari": "Rahatlama varsa 10 dk yavaş yürüyüş ekle.",
      "tibbiUyari": "Şişkinliğe kusma, gaz/dışkı çıkaramama veya giderek artan şiddetli ağrı eşlik ederse acil değerlendirme gerekir."
    },
    {
      "durum": "Nefes yetmiyor hissi",
      "hemenYap": "Nefesi büyütme. Dudakları ve çeneyi gevşet; burundan küçük, sessiz nefesler al. Verişi biraz uzat.",
      "sure": "2–5 dk",
      "kacin": "Peş peşe çok derin nefes; uzun nefes tutma",
      "devamKarari": "Baş dönmesi veya karıncalanma olursa dur, normal nefese dön.",
      "tibbiUyari": "Yeni veya şiddetli nefes darlığı, morarma, göğüs ağrısı, bayılma ya da oksijen düşüklüğünde acil yardım al."
    },
    {
      "durum": "Egzersiz sonrası belirti artışı",
      "hemenYap": "Otur, 2–3 dk normal nefese dön. Sonraki seansı %30–50 kısalt.",
      "sure": "3 dk",
      "kacin": "Aynı gün telafi için daha uzun çalışma",
      "devamKarari": "24 saat içinde normale dönüyorsa azaltılmış programla sürdür.",
      "tibbiUyari": "Belirtiler tekrarlıyorsa veya her egzersizde kötüleşiyorsa hekim/fizyoterapist değerlendirmesi al."
    }
  ],
  "guide": {
    "title": "Kullanım, Ayarlama ve Güvenlik Rehberi",
    "sections": [
      {
        "heading": "Dosya nasıl kullanılır?",
        "bullets": [
          "28 Günlük Saatlik Plan sayfasında her saat için satır vardır. Planlı uygulamalarda Durum alanını ✓, Kısmi veya Atlandı olarak seç.",
          "Günlük Belirti Takibi sayfasını her gece 22:00 civarında doldur. Nefes rahatlığı, enerji ve uyku puanında yüksek değer daha iyidir; diğer belirtilerde yüksek değer daha kötüdür.",
          "Haftalık Değerlendirme sayfasını her pazar incele. Tamamlama oranı düşükse süreyi artırmak yerine programı kolaylaştır."
        ]
      },
      {
        "heading": "Programı ne zaman azaltmalısın?",
        "bullets": [
          "Nefes sırasında baş dönmesi, karıncalanma, artan hava açlığı veya panik oluşursa tekniği bırak ve normal nefese dön.",
          "Ertesi güne taşan yorgunluk veya belirgin belirti artışı varsa nefes seanslarını 5 dakika kısalt ve kuvvet çalışmasını yürüyüşe çevir.",
          "Bir tekniği doğru yapmaya çalışırken zorlanıyorsan süreyi yarıya indir; hedef mükemmellik değil düzenliliktir."
        ]
      },
      {
        "heading": "Temel ilkeler",
        "bullets": [
          "Amaç çok ve derin hava almak değil; yavaş, sessiz, zorlamasız ve çoğunlukla burundan nefes almaktır.",
          "Karın hareketi küçük olabilir. Karnı zorla dışarı itme, göğsü zorla sabitleme ve nefesi uzun süre tutma.",
          "Gazlı içecek, sakız, pipet, çok büyük porsiyon ve yemekten hemen sonra uzanma alışkanlığını 4 hafta boyunca mümkün olduğunca azalt.",
          "Su ihtiyacı kişiye göre değişir. Kalp/böbrek hastalığın veya sıvı kısıtlaman varsa genel 2–2,5 litre önerisini uygulamadan önce doktoruna danış."
        ]
      },
      {
        "heading": "Tıbbi sınır",
        "bullets": [
          "Bu çalışma IBS tedavisinin yerine geçmez. Sürekli yorgunluk, tekrarlayan ishal ve nefes darlığı için aile hekimi/gastroenteroloji değerlendirmesi; gerekirse kan sayımı, demir/B12, tiroid ve çölyak gibi olasılıkların hekim tarafından değerlendirilmesi uygundur.",
          "Kanlı veya siyah dışkı, açıklanamayan kilo kaybı, gece uyandıran ishal/ağrı, ateş, sürekli kusma, bayılma, yeni ve ciddi nefes darlığı ya da göğüs ağrısı varsa programı bırakıp tıbbi yardım al."
        ]
      }
    ]
  },
  "weekMeta": [
    {
      "week": 1,
      "dateRange": "26.07.2026 – 01.08.2026"
    },
    {
      "week": 2,
      "dateRange": "02.08.2026 – 08.08.2026"
    },
    {
      "week": 3,
      "dateRange": "09.08.2026 – 15.08.2026"
    },
    {
      "week": 4,
      "dateRange": "16.08.2026 – 22.08.2026"
    }
  ],
  "sundayQuestions": [
    "Bu hafta kaç ishal/aciliyet atağı oldu?",
    "Şişkinlik ortalama kaç saat sürdü?",
    "En güçlü üç tetikleyici neydi?",
    "Hangi teknik en hızlı rahatlama sağladı?",
    "Nefes egzersizi sırasında baş dönmesi/hava açlığı oldu mu?",
    "Gelecek hafta hangi tek davranışı kolaylaştırmalıyım?"
  ],
  "breathingExercises": [
    {
      "id": "sabah-sinir-sistemi-rutini",
      "title": "Sabah sinir sistemi rutini",
      "segments": [
        {
          "type": "free",
          "label": "Nefesini değiştirmeden gözlemle",
          "durationSec": 300
        },
        {
          "type": "breathing",
          "durationSec": 600,
          "phases": [
            {
              "name": "Nefes Al",
              "seconds": 4
            },
            {
              "name": "Nefes Ver",
              "seconds": 6
            }
          ]
        },
        {
          "type": "free",
          "label": "Yavaşça, yalnızca burundan nefesle yürü",
          "durationSec": 300
        }
      ],
      "category": "Nefes"
    },
    {
      "id": "stres-bosaltma-fizyolojik-ic-cekis",
      "title": "Stres boşaltma — fizyolojik iç çekiş",
      "segments": [
        {
          "type": "breathing",
          "durationSec": 180,
          "phases": [
            {
              "name": "Nefes Al",
              "seconds": 2
            },
            {
              "name": "Küçük Ek Nefes",
              "seconds": 1
            },
            {
              "name": "Uzun Nefes Ver",
              "seconds": 4
            }
          ]
        }
      ],
      "category": "Nefes"
    },
    {
      "id": "aksam-koherent-nefes",
      "title": "Akşam koherent nefes",
      "segments": [
        {
          "type": "breathing",
          "durationSec": 900,
          "phases": [
            {
              "name": "Nefes Al",
              "seconds": 5
            },
            {
              "name": "Nefes Ver",
              "seconds": 5
            }
          ]
        }
      ],
      "category": "Nefes"
    },
    {
      "id": "sabah-diyafram-koherent-nefes",
      "title": "Sabah diyafram + koherent nefes",
      "segments": [
        {
          "type": "breathing",
          "durationSec": 600,
          "phases": [
            {
              "name": "Nefes Al",
              "seconds": 4
            },
            {
              "name": "Nefes Ver",
              "seconds": 6
            }
          ]
        },
        {
          "type": "breathing",
          "durationSec": 600,
          "phases": [
            {
              "name": "Nefes Al",
              "seconds": 5
            },
            {
              "name": "Nefes Ver",
              "seconds": 5
            }
          ]
        }
      ],
      "category": "Nefes"
    },
    {
      "id": "aksam-4-6-nefesi",
      "title": "Akşam 4–6 nefesi",
      "segments": [
        {
          "type": "breathing",
          "durationSec": 600,
          "phases": [
            {
              "name": "Nefes Al",
              "seconds": 4
            },
            {
              "name": "Nefes Ver",
              "seconds": 6
            }
          ]
        }
      ],
      "category": "Nefes"
    },
    {
      "id": "sabah-koherent-nefes",
      "title": "Sabah koherent nefes",
      "segments": [
        {
          "type": "breathing",
          "durationSec": 900,
          "phases": [
            {
              "name": "Nefes Al",
              "seconds": 5
            },
            {
              "name": "Nefes Ver",
              "seconds": 5
            }
          ]
        }
      ],
      "category": "Nefes"
    },
    {
      "id": "mirildanma-humming",
      "title": "Mırıldanma (humming)",
      "segments": [
        {
          "type": "breathing",
          "durationSec": 300,
          "phases": [
            {
              "name": "Nefes Al",
              "seconds": 4
            },
            {
              "name": "Mırıldanarak Ver (mmmm)",
              "seconds": 6
            }
          ]
        }
      ],
      "category": "Vagus"
    },
    {
      "id": "aksam-diyafram-nefesi",
      "title": "Akşam diyafram nefesi",
      "segments": [
        {
          "type": "free",
          "label": "Alt kaburgaların ve karnın doğal genişlemesine izin ver, doğal nefes al",
          "durationSec": 600
        }
      ],
      "category": "Nefes"
    }
  ]
};
