/**
 * Dr. Deniz Kuzundar - Kadın Sağlığı • Rejüvenasyon • Longevity • Genital Estetik
 * Core UX, Navigation, Life Stages, Interactive Concern Guide & Contact
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordions();
  initConcernSelector();
  initLifeStagesTabs();
  initContactForm();
  initHeaderScroll();
  initCategoryFilter();
});

/* ---------------------------------------------------------
 * 1. Mobile Menu Drawer & Mobile Submenus
 * --------------------------------------------------------- */
function initMobileMenu() {
  const openBtn = document.getElementById('mobileMenuOpenBtn');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');
  const backdrop = document.getElementById('mobileDrawerBackdrop');
  const panel = document.getElementById('mobileDrawerPanel');

  if (!openBtn || !panel) return;

  function openMenu() {
    backdrop?.classList.add('open');
    panel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    backdrop?.classList.remove('open');
    panel.classList.remove('open');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      closeMenu();
    }
  });

  // Mobile submenu accordions inside drawer
  const subTriggers = panel.querySelectorAll('.mobile-sub-trigger');
  subTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = btn.closest('.mobile-sub-group');
      if (!parent) return;
      parent.classList.toggle('open');
    });
  });
}

/* ---------------------------------------------------------
 * 2. FAQ Accordion Toggle
 * --------------------------------------------------------- */
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordions for a serene reading experience
      faqItems.forEach((other) => {
        if (other !== item) {
          other.classList.remove('active');
          const btn = other.querySelector('.faq-trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------------------------------------------------------
 * 3. Life Stages Stepper & Tabs ("Kadının Yaşam Dönemleri")
 * --------------------------------------------------------- */
function initLifeStagesTabs() {
  const tabs = document.querySelectorAll('.stage-tab');
  const panels = document.querySelectorAll('.stage-panel');

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.stage;

      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ---------------------------------------------------------
 * 4. "Sizi Buraya Getiren Ne?" - İhtiyaç Odaklı Rehber
 * --------------------------------------------------------- */
const concernData = {
  cilt_degisim: {
    title: "Cildimde Yaşla Birlikte Değişiklikler Fark Ediyorum",
    badge: "Yüz & Cilt Rejüvenasyonu",
    description: "Yıllar içinde azalan kolajen üretimi, cilt altı yağ dokularındaki yer değişimi ve güneş maruziyeti elastikiyet kaybına ve matlaşmaya yol açabilir. Amaç yüzün ifadesini değiştirmek değil; dinlenmiş, canlı ve dengeli doku kalitesini desteklemektir.",
    approach: "Yüz, boyun ve dekolte bir bütün olarak değerlendirilir. Kişinin anatomisine saygılı, aşırıya kaçmayan ve doku biyolojisini canlandıran hekim kontrolündeki yöntemler planlanır.",
    topics: ["Bütüncül yüz ve cilt kalitesi analizi", "Kolajen ve bağ dokusu uyarımı", "Doğal mimikleri koruyan kişisel planlama"],
    linkUrl: "yuz-cilt-rejuvenasyonu.html",
    linkText: "Yüz & Cilt Rejüvenasyonunu İnceleyin"
  },
  healthy_aging: {
    title: "Daha Sağlıklı Yaş Alma Konusunda Profesyonel Değerlendirme İstiyorum",
    badge: "Healthy Aging & Longevity",
    description: "Yaş almak kaçınılmazdır; ancak nasıl yaş aldığımız, hücresel canlılığımızı, hormonal ritmimizi ve yaşam enerjimizi nasıl koruduğumuzla doğrudan ilişkilidir.",
    approach: "Kadın sağlığının biyolojik evreleri; uyku düzeni, kemik ve kas yoğunluğu, doku sağlığı ve koruyucu hekimlik ekseninde geniş bir perspektifle ele alınır.",
    topics: ["Hücresel sağlık ve yaşam kalitesi analizi", "Kemik, kas ve vasküler koruyucu stratejiler", "Hormonal geçiş dönemlerinin hekim gözetiminde yönetimi"],
    linkUrl: "healthy-aging.html",
    linkText: "Healthy Aging & Longevity Yaklaşımını Keşfedin"
  },
  menopoz_kalite: {
    title: "Menopoz Döneminde Yaşam Kalitem Değişti",
    badge: "Menopoz & Perimenopoz",
    description: "Menopoz, kadın yaşamının doğal ve özen gerektiren yeni bir dönemidir. Sıcak basmaları, uyku dalgalanmaları, doku incelmesi ve ruh hali değişimleri kadınların sıklıkla yalnız hissettiği ancak güvenle yönetilebilen süreçlerdir.",
    approach: "Süreç hormonal, metabolik ve doku sağlığı açısından ele alınır. Güncel bilimsel kılavuzlar ışığında yaşam konforunu yükseltecek adımlar belirlenir.",
    topics: ["Perimenopoz ve menopoz semptom haritalaması", "Genitoüriner sendrom ve doku koruma", "Kişiselleştirilmiş konfor ve takip protokolü"],
    linkUrl: "menopoz.html",
    linkText: "Menopoz Dönemi Yönetimini İnceleyin"
  },
  genital_degisiklik: {
    title: "Genital Bölgemde Değişiklik Hissediyorum",
    badge: "Genital Estetik",
    description: "Doğumlar, genetik yapı, hormonal dalgalanmalar veya yaş alma nedeniyle genital dokularda elastikiyet kaybı, labial asimetri veya form değişiklikleri ortaya çıkabilir. Bu durum hem fiziksel konforu hem de kadının bedeniyle barışıklığını etkiler.",
    approach: "Öncelikle anatomik ve fizyolojik durum titizlikle muayene edilir. Gereksiz işlemlerden kesinlikle kaçınılarak; estetik ve fonksiyonu dengeleyen dokuya saygılı çözümler sunulur.",
    topics: ["Estetik ve fonksiyonel bütünlük değerlendirmesi", "Vulvar anatomi ve konfor analizi", "Dokuya saygılı cerrahi ve non-invaziv yaklaşımlar"],
    linkUrl: "jinekolojik-estetik.html",
    linkText: "Genital Estetik Yaklaşımını İnceleyin"
  },
  vajinal_kuruluk: {
    title: "Vajinal Kuruluk ve Hassasiyet Yaşıyorum",
    badge: "Genital Sağlık & Fonksiyon",
    description: "Menopoz, emzirme dönemi veya hormonal dengesizlikler sonucu östrojen etkisinin azalması, vajinal mukozada incelme, kuruluk, yanma ve ilişkide acıya neden olabilir.",
    approach: "Doku hidrasyonunu, kan dolaşımını ve hücresel rejenerasyonu destekleyen modern bilimsel yöntemler kişiye özel olarak değerlendirilir.",
    topics: ["Mukoza kalınlığı ve doku hidrasyon analizi", "Rejeneratif ve destekleyici lokal protokoller", "Günlük yaşam konforu ve intim sağlık takibi"],
    linkUrl: "genital-saglik.html",
    linkText: "Genital Sağlık & Doku Yenilenmesini İnceleyin"
  },
  agri_iliski: {
    title: "Cinsel İlişkide Ağrı (Disparoni) Yaşıyorum",
    badge: "Kadın Cinsel Sağlığı",
    description: "Cinsel birliktelikte hissedilen ağrı; enfeksiyonlar, pelvik taban gerginliği, doku kuruluğu veya doğum dikiş izleri gibi pek çok organik nedene bağlı olabilir. Bu durum kader değildir.",
    approach: "Tamamen yargılamadan uzak, mutlak hasta mahremiyeti gözetilerek detaylı jinekolojik muayene yapılır; ağrının kaynağı tespit edilir.",
    topics: ["Pelvik taban ve mukoza hassasiyet haritalaması", "Organik ve fonksiyonel nedenlerin ayrımı", "Kademeli, sakin ve güvenli tedavi adımları"],
    linkUrl: "kadin-cinsel-sagligi.html",
    linkText: "Kadın Cinsel Sağlığı Rehberini Keşfedin"
  },
  vajinismus_destek: {
    title: "Vajinismus Konusunda Destek Arıyorum",
    badge: "Özel Çalışma Alanı • Vajinismus",
    description: "Vajinismus; kadının istemsiz pelvik kas kasılması nedeniyle birleşmenin gerçekleşememesi veya ağrılı olması durumudur. Bu durum kadının veya partnerinin suçu değildir; bilimsel olarak çözümü olan bir süreçtir.",
    approach: "Dr. Deniz Kuzundar'ın vajinismus alanındaki özel klinik eğitimi ve deneyimi ile tamamen kişiye özel, güvenli, aşamalı ve asla zorlayıcı olmayan bir yol haritası izlenir.",
    topics: ["Kişiye özel, şefkatli ve mahrem ilk görüşme", "Pelvik taban farkındalığı ve gevşeme aşamaları", "Gerektiğinde multidisipliner konsültasyon desteği"],
    linkUrl: "vajinismus.html",
    linkText: "Vajinismus Süreci ve Tedavi Yaklaşımını Okuyun"
  },
  cilt_kalitesi: {
    title: "Cilt Kalitemi ve Biyolojik Canlılığımı Artırmak İstiyorum",
    badge: "Rejeneratif Estetik",
    description: "Cildin derin katmanlarındaki hücresel aktiviteyi ve fibroblastları uyarmak, yapay bir hacim yaratmaktan çok daha kalıcı ve doğal bir gençlik etkisi sağlar.",
    approach: "Polinükleotidler (PN), Somon DNA ve yeni nesil biyostimülan yaklaşımlar; dokunun kendi kendini yenileme kapasitesini tetiklemek üzere tıbbi kılavuzlara uygun şekilde uygulanır.",
    topics: ["Polinükleotid (PN) ve Somon DNA doku stimülasyonu", "Fibroblast uyarımı ve biyolojik yenilenme", "Doğal cilt mimarisinin korunması"],
    linkUrl: "rejeneratif-estetik.html",
    linkText: "Rejeneratif Estetik Protokollerini İnceleyin"
  },
  dogal_rejuvenasyon: {
    title: "Doğal Görünen Bir Rejüvenasyon Yaklaşımı Arıyorum",
    badge: "Bütüncül Rejüvenasyon",
    description: "Kalıplaşmış, yapay ve abartılı estetik müdahaleler yerine; kadının kendi yüz kemik yapısına, mimiklerine ve yaşına yakışan, 'dinlenmiş' bir ifade esastır.",
    approach: "Ön muayenede cilt kalitesi, ışık kırılma alanları ve doku elastikiyeti incelenir; kademeli ve minimal invaziv adımlarla doğallık korunur.",
    topics: ["Yüze özel anatomik oran değerlendirmesi", "Minimal dokunuşlarla maksimum doğallık", "Gereksiz ve aşırı işlemlerden kaçınma ilkesi"],
    linkUrl: "yuz-cilt-rejuvenasyonu.html",
    linkText: "Doğal Rejüvenasyon Yaklaşımını Görün"
  },
  sac_dokulmesi: {
    title: "Saç Dökülmem Arttı, Saç Sağlığımı Desteklemek İstiyorum",
    badge: "Saç & Saçlı Deri",
    description: "Kadınlarda saç dökülmesi ve cansızlaşması; hormonal değişimler, doğum sonrası dönem, menopoz, vitamin-mineral eksiklikleri veya stres ile yakından ilişkilidir.",
    approach: "Saçlı deri mikrodolaşımı, folikül beslenmesi ve hormonal altyapı tıbbi hekim gözüyle incelenir; rejeneratif destek protokolleri planlanır.",
    topics: ["Kadın tipi saç dökülmesi ve hormonal etkenler", "Saçlı deri biyostimülasyonu ve folikül beslenmesi", "Kişiselleştirilmiş destekleyici kılavuz"],
    linkUrl: "sac-sacli-deri.html",
    linkText: "Saç & Saçlı Deri Sağlığı Sayfasını Ziyaret Edin"
  },
  butuncul_kadin: {
    title: "Kadın Sağlığımı Daha Bütüncül Değerlendirmek İstiyorum",
    badge: "Bütüncül Kadın Sağlığı",
    description: "Yalnızca şikayet anında değil; periyodik jinekolojik kontroller, pelvik taban değerlendirmesi ve hormonal dengenin bir yaşam kültürü olarak takip edilmesi esastır.",
    approach: "Koruyucu hekimlik vizyonuyla; kadının yaşına, ailesel risklerine ve yaşam temposuna uygun yıllık kadın sağlığı yol haritası oluşturulur.",
    topics: ["Yıllık koruyucu jinekolojik check-up ve ultrason", "Pelvik taban sağlığı ve koruyucu öneriler", "Yaşam kalitesini önceleyen hekim danışmanlığı"],
    linkUrl: "kadin-sagligi.html",
    linkText: "Bütüncül Kadın Sağlığı Sayfasını Keşfedin"
  }
};

function initConcernSelector() {
  const buttons = document.querySelectorAll('.concern-pill');
  const titleEl = document.getElementById('concernResultTitle');
  const badgeEl = document.getElementById('concernResultBadge');
  const descEl = document.getElementById('concernResultDesc');
  const approachEl = document.getElementById('concernResultApproach');
  const topicsEl = document.getElementById('concernResultTopics');
  const linkEl = document.getElementById('concernResultLink');

  if (!buttons.length || !titleEl) return;

  function selectConcern(key) {
    const data = concernData[key];
    if (!data) return;

    buttons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.concern === key);
    });

    // Soft cross-fade transition
    const container = document.getElementById('concernDisplayCard');
    if (container) {
      container.style.opacity = '0.4';
      container.style.transform = 'translateY(4px)';
      container.style.transition = 'all 0.25s ease';

      setTimeout(() => {
        titleEl.textContent = data.title;
        if (badgeEl) badgeEl.textContent = data.badge;
        if (descEl) descEl.textContent = data.description;
        if (approachEl) approachEl.textContent = data.approach;

        if (topicsEl) {
          topicsEl.innerHTML = '';
          data.topics.forEach((topic) => {
            const li = document.createElement('li');
            li.className = 'flex items-center gap-2 text-sm text-[#585C63]';
            li.innerHTML = `
              <svg class="w-4 h-4 text-[#C69288] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>${topic}</span>
            `;
            topicsEl.appendChild(li);
          });
        }

        if (linkEl) {
          linkEl.href = data.linkUrl;
          linkEl.textContent = data.linkText;
        }

        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
      }, 180);
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      selectConcern(btn.dataset.concern);
    });
  });
}

/* ---------------------------------------------------------
 * 5. Header Dynamic Blur on Scroll
 * --------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-sm');
    } else {
      header.classList.remove('shadow-sm');
    }
  }, { passive: true });
}

/* ---------------------------------------------------------
 * 6. Contact & WhatsApp Form
 * --------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('inquiryForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Güvenli başvuru sistemi hazırlanıyor. Bu form şu anda gönderim yapmıyor.');
  });
}

/* ---------------------------------------------------------
 * 7. Bilgi Merkezi Category Filter
 * --------------------------------------------------------- */
function initCategoryFilter() {
  const buttons = document.querySelectorAll('.category-btn');
  const cards = document.querySelectorAll('.article-card');

  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      buttons.forEach((b) => {
        b.classList.remove('active', 'bg-[#C69288]', 'text-white', 'border-[#C69288]');
        b.classList.add('bg-white', 'text-[#585C63]', 'border-[#EAE3DA]');
      });

      btn.classList.add('active', 'bg-[#C69288]', 'text-white', 'border-[#C69288]');
      btn.classList.remove('bg-white', 'text-[#585C63]', 'border-[#EAE3DA]');

      cards.forEach((card) => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

