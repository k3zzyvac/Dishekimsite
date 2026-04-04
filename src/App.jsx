import React, { useEffect } from 'react';
import { Phone, CheckCircle2, MessageCircle, Instagram, Shield, Award, Stethoscope, Sparkles, Smile } from 'lucide-react';

const clinicImages = [
  "https://lh3.googleusercontent.com/p/AF1QipMy60MMTTyaA9koLbwwAy79Cy-MLDpmE6V0GDKu=s2048",
  "/Foto1.png",
  "/Foto2.png",
  "https://lh3.googleusercontent.com/p/AF1QipODFGF4sN1BfwYLgA18Tm0qhwjNGZYkGU-0isjO=s2048",
  "https://lh3.googleusercontent.com/p/AF1QipMBbPN9VcywhQHEq7OzA_eYbdxNBBhZAEVVqfNF=s2048",
  "https://lh3.googleusercontent.com/p/AF1QipNxRZUG2YB2SdxCPK7-jaXKyMHeo_GuSUyLcgaB=s2048",
  "https://lh3.googleusercontent.com/p/AF1QipNPrzD5O9MrnHnV88FZ2fb0dvVIT5_BHwHHGvO-=s2048"
];

// Yerel öncesi-sonrası görseli
const beforeAfterImg = "/BeforeAfter.png";



export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-up');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const handleScroll = () => {
      const container = document.querySelector('.vertical-reveal-container');
      if (!container) return;
      const scrollPos = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      let progress = (scrollPos - containerTop + windowHeight/2) / (containerHeight - windowHeight/2);
      progress = Math.max(0, Math.min(100, progress * 100));
      
      container.style.setProperty('--reveal-pos', (100 - progress) + '%');
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappLink = "https://wa.me/905441040123";
  const phoneLink = "tel:+905441040123";

  return (
    <>
      <header className="sticky-header">
        <a href="#home" className="logo">DR. KÜBRA YAŞAR ORAL</a>
        <nav className="nav-links">
          <a href="#home" className="nav-link">Anasayfa</a>
          <a href="#services" className="nav-link">Hizmetlerimiz</a>
          <a href="#before-after" className="nav-link">Değişim</a>
          <a href="#gallery" className="nav-link">Klinik</a>
          <a href="#contact" className="nav-link">İletişim</a>
        </nav>
      </header>
      <main>
        <section id="home" className="hero container">
          <div className="hero-grid">
            <div className="hero-content reveal">
              <div className="rating-badge">
                <div className="rating-stars">★★★★★</div>
                <span>5.0 Google Puanı</span>
              </div>
              <h1 className="text-massive title-clamp">Malatya'nın Kalbinde Estetik Bir Gülüş</h1>
              <p style={{ fontSize: '1.2rem', marginTop: '1.5rem', maxWidth: '600px' }}>
                Malatya Park Ofis'in prestijli ortamında, modern teknoloji ve uzman dokunuşlarla gülüşünüzü yeniden tasarlıyoruz. Detaylara adanmış kusursuz hekimlik.
              </p>
              <div className="hero-actions">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={20} /> WhatsApp'tan Ulaşın
                </a>
                <a href={phoneLink} className="btn btn-outline">
                  <Phone size={20} /> Hemen Ara: 0544 104 01 23
                </a>
              </div>
            </div>
            <div className="hero-visual reveal delay-2">
              <div className="hero-image-wrapper">
                <img src={clinicImages[0]} alt="Klinik İç Mekan" className="hero-image" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-gray">
          <div className="container">
            <h2 className="text-massive reveal" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Uzmanlık Alanlarımız</h2>
            <p className="reveal delay-1" style={{ maxWidth: '600px' }}>Medikal estetik ve profesyonel ağız sağlığında üst düzey çözümler.</p>
            <div className="services-grid">
              <div className="service-card sc-1 reveal delay-1">
                <Sparkles className="service-icon" size={32} color="#1A1A1A" />
                <h3 className="service-title">Gülüş Tasarımı</h3>
                <p className="service-desc">Kişiye özel estetik analiz ve detaylı dokunuşlarla özgüvenli gülüşler.</p>
              </div>
              <div className="service-card sc-2 reveal delay-2">
                <Stethoscope className="service-icon" size={32} color="#1A1A1A" />
                <h3 className="service-title">İmplant Tedavisi</h3>
                <p className="service-desc">Kayıp dişlerin yerine doğal, kalıcı çözüm sunan modern cerrahi teknoloji.</p>
              </div>
              <div className="service-card sc-3 reveal delay-3">
                <Smile className="service-icon" size={32} color="#1A1A1A" />
                <h3 className="service-title">Diş Beyazlatma</h3>
                <p className="service-desc">Kusursuz, daha parlak ve beyaz bir gülüş için profesyonel beyazlatma işlemleri.</p>
              </div>
              <div className="service-card sc-4 reveal delay-1">
                <Shield className="service-icon" size={32} color="#1A1A1A" />
                <h3 className="service-title">Şeffaf Plak</h3>
                <p className="service-desc">Telsiz ortodonti yaklaşımıyla görünmeyen ve son derece konforlu diş düzeltme.</p>
              </div>
              <div className="service-card sc-5 reveal delay-2">
                <Award className="service-icon" size={32} color="#1A1A1A" />
                <h3 className="service-title">Estetik Dolgu</h3>
                <p className="service-desc">Mevcut doğal diş yapısını koruyan yüksek kaliteli restorasyonlar.</p>
              </div>
              <div className="service-card sc-6 reveal delay-3">
                <CheckCircle2 className="service-icon" size={32} color="#1A1A1A" />
                <h3 className="service-title">Çocuk Diş Hekimliği</h3>
                <p className="service-desc">Minik hastalarımız için korkusuz ve keyifli diş hekimliği deneyimi.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="before-after" className="container" style={{ padding: '8rem 5vw' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="text-massive" style={{ fontSize: '3rem' }}>Değişimin Tanığı Olun</h2>
            <p>Hayat değiştiren mükemmel sonuçlar. Sayfayı kaydırdıkça değişimi keşfedin.</p>
          </div>
          
          {/* Dikey Karşılaştırma Bölümü */}
          <div className="reveal delay-1 vertical-reveal-container" style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', overflow: 'hidden', height: '120vh', borderRadius: '4px' }}>
             <div className="sticky-reveal-wrapper" style={{ position: 'sticky', top: '10vh', height: '80vh', border: '1px solid #1A1A1A' }}>
                {/* After Image (Full Color) */}
                <img src={beforeAfterImg} alt="Sonrası" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                
                {/* Before Image Overlay (Grayscale / Masked) */}
                <div className="before-mask" style={{ 
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden',
                  background: 'white',
                  clipPath: 'inset(0 0 var(--reveal-pos, 50%) 0)' 
                }}>
                   <img src={beforeAfterImg} alt="Öncesi" style={{ 
                     width: '100%', height: '100%', objectFit: 'cover',
                     filter: 'grayscale(1) contrast(1.2) brightness(0.8)' 
                   }} />
                </div>

                {/* Slider Handle (Line) */}
                <div style={{ 
                  position: 'absolute', left: 0, right: 0, 
                  top: 'calc(100% - var(--reveal-pos, 50%))',
                  height: '2px', background: 'white', zIndex: 10,
                  boxShadow: '0 0 15px rgba(0,0,0,0.5)'
                }}>
                   <div style={{ 
                     position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
                     background: 'white', color: 'black', padding: '4px 12px', fontSize: '0.7rem',
                     fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px'
                   }}>DEĞİŞİM</div>
                </div>
             </div>
          </div>
        </section>



        <section id="gallery" className="gallery-section bg-trans">
          <div className="container">
            <h2 className="text-massive reveal" style={{ fontSize: '3rem' }}>Klinik Atmosferi</h2>
          </div>
          <div className="gallery-track mt-8">
            {[...clinicImages, ...clinicImages].map((img, i) => (
              <div key={i} className="gallery-item"><img src={img} alt={`Klinik Görseli ${i}`} /></div>
            ))}
          </div>
        </section>

        <section id="about" className="container" style={{ padding: '8rem 5vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="reveal">
              <h2 className="text-massive" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Klinik Mükemmeliyet</h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                Diş Hekimi Kübra Yaşar Oral liderliğinde, "her hastamız özeldir" misyonuyla yola çıktık.
              </p>
              <p style={{ fontSize: '1.1rem' }}>
                Malatya Park Ofis'te son teknoloji ekipmanlar ve premium medikal ortamımızda, stres algısını ortadan kaldıran tamamen kişiye özel butik bir yaklaşımla sizleri ağırlıyoruz.
              </p>
            </div>
            <div className="reveal delay-2" style={{ border: '1px solid #1A1A1A', padding: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Award size={36} color="#1A1A1A" />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: '600' }}>Uluslararası Standartlar</h4>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>Sterilizasyon ve hasta takibinde tavizsiz protokoller.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Smile size={36} color="#1A1A1A" />
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: '600' }}>Ağrısız Konfor</h4>
                    <p style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>Modern anestezi teknikleriyle kaygısız deneyim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-dark" style={{ paddingBottom: '3rem' }}>
          <div className="container">
            <div className="footer-grid">
              <div>
                <h2 className="text-massive reveal" style={{ fontSize: '3rem', color: 'white', marginBottom: '3rem' }}>Bize Ulaşın</h2>
                <div className="footer-info reveal delay-1">
                  <div className="info-block">
                    <h4>Adres</h4>
                    <p>Malatya Park Ofis, Kat: 5, No: 28<br/>Yeşilyurt / Malatya</p>
                  </div>
                  <div className="info-block">
                    <h4>Çalışma Saatleri</h4>
                    <p>Pazartesi - Cumartesi: 09:00 - 19:00</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>Pazar: Kapalı</p>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }} className="reveal delay-2">
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Mükemmel gülüşünüze ilk adımı atın.</p>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp" style={{ padding: '1.5rem', fontSize: '1.1rem' }}>
                  <MessageCircle size={24} /> WhatsApp'tan Ulaşın
                </a>
                <a href={phoneLink} className="btn" style={{ background: 'white', color: '#1A1A1A', padding: '1.5rem', fontSize: '1.1rem' }}>
                  <Phone size={24} /> Kliniki Ara
                </a>
                <a href="https://instagram.com/dt.kubrayasaroral" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', marginTop: '1rem' }}>
                  <Instagram size={20} /> @dt.kubrayasaroral
                </a>
              </div>
            </div>
            <div style={{ marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>
              <p>&copy; {new Date().getFullYear()} Dt. Kübra Yaşar Oral. Tüm Hakları Saklıdır.</p>
              <p>Premium Medical Editorial</p>
            </div>
          </div>
        </section>
      </main>
      <a href={whatsappLink} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="WhatsApp İletişim">
        <MessageCircle size={32} />
      </a>
    </>
  );
}