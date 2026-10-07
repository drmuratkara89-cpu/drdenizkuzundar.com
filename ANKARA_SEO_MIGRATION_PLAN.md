# Ankara SEO & Dijital Varlık Geçiş Planı (Migration Roadmap)
**Doktor:** Op. Dr. Deniz KUZUNDAR  
**Mevcut Durum:** Bolu İzzet Baysal Devlet Hastanesi (Aktif & Doğrulanmış Konum)  
**Hedef:** Ankara'da resmi klinik faaliyet başladığı andan itibaren kesintisiz, mevzuata uygun ve yüksek sıralama performanslı Local SEO geçişi sağlamak.

---

## 1. Yönetici Özeti ve Temel İlke
Bu strateji belgesi, Op. Dr. Deniz KUZUNDAR'ın gelecekte Ankara'da özel klinik faaliyeti veya hasta kabulü başladığı gün devreye alınacak teknik ve içerik yol haritasını tanımlar.

> [!IMPORTANT]
> **Etik ve Yasal Kural:**
> Şu an canlı web sitesinde (`drdenizkuzundar.com`), schema işaretlemelerinde veya Google Business Profile'da kesinlikle **sahte Ankara adresi, doorway page veya yanıltıcı lokasyon beyanı KULLANILMAMALIDIR.**
> Gerçek fiziksel muayenehane adresi ve ruhsatlandırma tamamlanana kadar Bolu konumu korunur; bu doküman gelecekteki geçişin hazırlık rehberidir.

---

## 2. Ankara Hedef Anahtar Kelime Kümeleri (Topical Keyword Clusters)

Ankara geçişi aktif olduğunda doğal ve arama niyetine (search intent) uygun olarak hedeflenecek sorgu grupları:

### A. Vajinismus ve Cinsel Sağlık Kümesi (Öncelikli Odak)
- `Ankara vajinismus`
- `Ankara vajinismus doktoru`
- `Ankara vajinismus tedavisi`
- `Ankara vajinismus jinekolog`
- `Ankara vajinismus ilk muayene`
- `Ankara disparoni / ağrılı cinsel ilişki doktoru`

### B. Kadın Estetiği & Genital Cerrahi Kümesi
- `Ankara genital estetik`
- `Ankara jinekolojik estetik`
- `Ankara labioplasti`
- `Ankara labioplasti ameliyatı`
- `Ankara iç dudak estetiği`
- `Ankara vajinal daraltma`
- `Ankara vajinoplasti`
- `Ankara perineoplasti`
- `Ankara labia majora dolgusu`
- `Ankara dış dudak dolgusu`
- `Ankara genital dolgu`
- `Ankara himenoplasti`
- `Ankara kızlık zarı onarımı`
- `Ankara genital beyazlatma / renk açma`

### C. Menopoz & Healthy Aging Kümesi
- `Ankara menopoz doktoru`
- `Ankara perimenopoz yönetimi`
- `Ankara kadınlarda healthy aging`
- `Ankara genital sağlık ve vajinal kuruluk tedavisi`

---

## 3. Adım Adım Geçiş Yol Haritası (Migration Roadmap)

### Adım 1: NAP (Name, Address, Phone) Kurulumu
1. **Fiziksel Lokasyon Tespiti:** Ankara'daki resmi klinik adresi (Örn: Çankaya / Çukurambar / Kavaklıdere / Maidan vb.) kesinleştiğinde sabit hat ve kurumsal iletişim hattı tahsis edilir.
2. **NAP Standardı:**
   - **İsim:** Op. Dr. Deniz KUZUNDAR - Kadın Hastalıkları ve Doğum Uzmanı
   - **Adres:** [Ankara Resmi Klinik Adresi, İlçe, Ankara]
   - **Telefon:** 0 (312) [Resmi Hat]
   - **Web Sitesi:** `https://drdenizkuzundar.com`

### Adım 2: Google İşletme Profili (Google Business Profile - GBP)
1. Yeni klinik konumu için GBP kaydı açılır veya mevcut profil yeni adrese taşınır (Google video/posta doğrulaması ile).
2. **Kategoriler:**
   - *Birincil Kategori:* Kadın Hastalıkları ve Doğum Uzmanı (Gynecologist)
   - *İkincil Kategoriler:* Tıp Kliniği (Medical Clinic), Sağlık Danışmanı (Health Consultant)
3. **Hizmet Listesi:**
   - Vajinismus Tedavisi
   - Labioplasti (İç Dudak Estetiği)
   - Vajinal Daraltma (Vajinoplasti)
   - Genital Dolgu Uygulamaları
   - Menopoz ve Perimenopoz Değerlendirmesi
   - Koruyucu Jinekolojik Muayene
4. **Çalışma Saatleri, Profesyonel Klinik Fotoğrafları ve Hekim Portreleri** yüklenir.

### Adım 3: Yapılandırılmış Veri (JSON-LD Schemas) Güncellemesi
Tüm sayfalardaki `Physician` ve `MedicalWebPage` schema bloklarında:
```json
{
  "@type": "Physician",
  "name": "Op. Dr. Deniz KUZUNDAR",
  "telephone": "+90 312 [ANKARA_NO]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Cadde / Sokak / No]",
    "addressLocality": "Çankaya",
    "addressRegion": "Ankara",
    "postalCode": "06XXX",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[Enlem]",
    "longitude": "[Boylam]"
  }
}
```

### Adım 4: Web Sitesi İletişim & Lokasyon Sayfası (`/iletisim`)
1. Bolu İzzet Baysal Devlet Hastanesi referansı, yeni Ankara muayenehane adresi ve krokisi ile güncellenir.
2. Google Maps interaktif harita embed kodu sayfaya eklenir.
3. Toplu taşıma, otopark ve ulaşım yönlendirmeleri yazılır.

### Adım 5: Doğal İçerik Entegrasyonu (Doorway Sayfası Açmadan)
- Kesinlikle `ankara-vajinismus.html`, `ankara-labioplasti.html` gibi yapay doorway sayfalar ÜRETİLMEYECEKTİR.
- Bunun yerine mevcut pillar sayfalara (`/vajinismus`, `/labioplasti`, `/vajinal-daraltma` vb.) hekimin Ankara kliniğinde hasta kabul ettiği bilgisi, randevu süreci ve ulaşım rehberi doğal bir bölüm olarak entegre edilecektir.

### Adım 6: Dış Dizin ve Otorite Sinyalleri (Local Citations)
Ankara NAP bilgisi doğrulanmış güvenilir sağlık platformlarında güncellenmelidir:
- DoktorTakvimi hekim profili
- Doktorsitesi hekim profili
- Türk Jinekoloji ve Obstetrik Derneği (TJOD) üye rehberi
- Ankara Tabip Odası kaydı
- Instagram bio: `"Ankara Klinik: [İlçe] | Kadın Sağlığı & Kadın Estetiği"`

---

## 4. Google Search Console & İndeksleme Denetimi
1. Lokasyon değişikliği yapıldıktan sonra Google Search Console'da `/`, `/iletisim`, `/vajinismus`, `/labioplasti` URL'leri için `URL Inspection` çalıştırılıp dizine ekleme talep edilir.
2. GMB panelinden arama terimleri (Search Queries) düzenli izlenir: "Dr Deniz Kuzundar Ankara", "Deniz Kuzundar vajinismus Ankara" sorgularındaki gösterim artışları takip edilir.
