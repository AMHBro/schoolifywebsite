import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/schoolify-logo.png'
import heroImage from './assets/hero-section-image.png'

const LOGIN_URL = 'https://schoolifyiq.school/school/login'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setNavOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  const closeNav = () => setNavOpen(false)

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar${navOpen ? ' navbar--open' : ''}`} aria-label="التنقل الرئيسي">
        <div className="container navbar-inner">
          <a href="#home" className="navbar-brand" onClick={closeNav}>
            <img src={logo} alt="" width={48} height={48} />
            <span>سكولفاي</span>
          </a>
          <div className="navbar-menu">
            <a href="#home">الرئيسية</a>
            <a href="#features">المميزات</a>
            <a href="#services">خدماتنا</a>
            <a href="#about">عن سكولفاي</a>
            <a href="#contact">تواصل معنا</a>
          </div>
          <div className="navbar-actions">
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">سجل دخول</a>
            <a href="/schoolify-form/" className="btn btn-outline btn-sm">منصة التسليم</a>
            <a href="https://wa.me/9647835062764" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">ابدأ الآن</a>
          </div>
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setNavOpen((o) => !o)}
            aria-expanded={navOpen}
            aria-controls="mobile-nav"
            aria-label={navOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            <span className="navbar-toggle-bar" aria-hidden="true" />
            <span className="navbar-toggle-bar" aria-hidden="true" />
            <span className="navbar-toggle-bar" aria-hidden="true" />
          </button>
        </div>
        <div className="navbar-backdrop" onClick={closeNav} aria-hidden="true" />
        <div id="mobile-nav" className="navbar-drawer">
          <div className="navbar-drawer-inner">
            <a href="#home" onClick={closeNav}>الرئيسية</a>
            <a href="#features" onClick={closeNav}>المميزات</a>
            <a href="#services" onClick={closeNav}>خدماتنا</a>
            <a href="#about" onClick={closeNav}>عن سكولفاي</a>
            <a href="#contact" onClick={closeNav}>تواصل معنا</a>
            <hr className="navbar-drawer-divider" />
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">سجل دخول</a>
            <a href="/schoolify-form/" className="btn btn-outline btn-block" onClick={closeNav}>منصة التسليم</a>
            <a href="https://wa.me/9647835062764" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">ابدأ الآن</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                خطوتك التعليمية
                <span> الذكية</span>
              </h1>
              <p>
                برنامج متكامل يهدف إلى تنظيم العملية التعليمية للطلاب والأهالي والمدارس
                في مكان واحد بطريقة سهلة وفعّالة
              </p>
              <div className="hero-buttons">
                <a href="https://wa.me/9647835062764" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-whatsapp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  جرّب مجاناً
                </a>
                <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">سجل دخول</a>
                <a href="#features" className="btn btn-outline">اكتشف المزيد</a>
                <a href="/schoolify-form/" className="btn btn-outline">منصة التسليم</a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">+500</div>
                  <div className="stat-label">مدرسة</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">+50K</div>
                  <div className="stat-label">طالب</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">+5K</div>
                  <div className="stat-label">معلم</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-bg"></div>
              <img src={heroImage} alt="سكولفاي - منصة تعليمية" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>لماذا سكولفاي؟</h2>
            <p>نقدم لك منصة تعليمية متكاملة تجمع بين السهولة والسرعة والحداثة</p>
          </div>
          <div className="features-grid">
            {/* Feature 1 - Easy */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>سهل الاستخدام</h3>
              <p>واجهة بسيطة وسهلة تمكّن الجميع من استخدام المنصة بدون أي تعقيدات أو صعوبات تقنية</p>
            </div>
            {/* Feature 2 - Fast */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>سريع وفعّال</h3>
              <p>أداء عالي وسرعة استجابة فائقة تضمن لك تجربة سلسة وبدون أي تأخير</p>
            </div>
            {/* Feature 3 - Modern */}
            <div className="feature-card">
              <div className="feature-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3>عصري ومتطور</h3>
              <p>تصميم حديث يواكب أحدث التقنيات ويوفر أفضل تجربة مستخدم ممكنة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>خدماتنا المتكاملة</h2>
            <p>نوفر حلولاً شاملة لجميع أطراف العملية التعليمية - جميع خدماتنا مجانية!</p>
          </div>
          <div className="free-badge-container">
            <span className="free-badge">مجاني 100%</span>
          </div>
          <div className="services-grid">
            {/* Service 1 - Data Entry */}
            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3>إدخال البيانات</h3>
              <p>نقوم بإدخال جميع بيانات المدرسة والطلاب والمعلمين بشكل دقيق ومنظم لضمان سير العملية التعليمية بسلاسة</p>
            </div>
            {/* Service 2 - Customer Follow-up */}
            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>متابعة العملاء</h3>
              <p>فريق دعم متخصص لمتابعة احتياجاتكم والرد على استفساراتكم على مدار الساعة لضمان رضاكم التام</p>
            </div>
            {/* Service 3 - Updates */}
            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3>تحديثات مستمرة</h3>
              <p>نوفر تحديثات دورية ومستمرة للنظام لإضافة ميزات جديدة وتحسين الأداء بناءً على ملاحظاتكم</p>
            </div>
            {/* Service 4 - School Dashboard */}
            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3>لوحة تحكم المدرسة</h3>
              <p>نظام إداري شامل يمكّن المدارس من إدارة الطلاب والمعلمين والجداول والتقارير بكل سهولة</p>
            </div>
            {/* Service 5 - Student App */}
            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3>تطبيق الطالب</h3>
              <p>تطبيق متكامل يتيح للطالب متابعة دروسه وواجباته ودرجاته والتواصل مع معلميه</p>
            </div>
            {/* Service 6 - Teacher App */}
            <div className="service-card">
              <div className="service-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3>تطبيق المعلم</h3>
              <p>أدوات متقدمة تساعد المعلم في إدارة فصوله ورصد الدرجات والتواصل مع الطلاب وأولياء الأمور</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>عن سكولفاي</h2>
              <p>
                سكولفاي هو نظام تعليمي متكامل يهدف إلى تحسين العملية التعليمية وتسهيلها لجميع الأطراف المعنية.
              </p>
              <p>
                نؤمن بأن التعليم يجب أن يكون سهلاً ومتاحاً للجميع. لذلك قمنا بتطوير منصة تجمع بين التكنولوجيا الحديثة وسهولة الاستخدام لتقديم تجربة تعليمية فريدة من نوعها.
              </p>
              <div className="about-stats">
                <div className="about-stat-card">
                  <div className="number">٢٠٢٣</div>
                  <div className="label">سنة التأسيس</div>
                </div>
                <div className="about-stat-card">
                  <div className="number">+١٠</div>
                  <div className="label">مدن مخدومة</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-image-circle-1"></div>
              <div className="about-image-circle-2"></div>
              <div className="about-logo-card">
                <img src={logo} alt="سكولفاي" />
                <h3>سكولفاي</h3>
                <p>خطوتك التعليمية الذكية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>جاهز للبدء؟</h2>
          <p>انضم إلى آلاف المدارس والطلاب والمعلمين الذين يستخدمون سكولفاي يومياً</p>
          <div className="cta-buttons">
            <a href="https://wa.me/9647835062764" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              ابدأ الآن عبر واتساب
            </a>
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">سجل دخول</a>
            <a href="#contact" className="btn btn-outline-dark">تواصل معنا</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>تواصل معنا</h2>
              <p>نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو طلب</p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <div className="label">البريد الإلكتروني</div>
                    <div className="value">support@schoolify.academy</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <div className="label">أرقام الهاتف</div>
                    <div className="value" dir="ltr">07835062764</div>
                    <div className="value" dir="ltr">07736602112</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="contact-item-text">
                    <div className="label">العنوان</div>
                    <div className="value">العراق، بغداد</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <h3>أرسل لنا رسالة</h3>
              <form>
                <div className="form-group">
                  <label>الاسم الكامل</label>
                  <input type="text" placeholder="أدخل اسمك" />
                </div>
                <div className="form-group">
                  <label>البريد الإلكتروني</label>
                  <input type="email" placeholder="أدخل بريدك الإلكتروني" />
                </div>
                <div className="form-group">
                  <label>الرسالة</label>
                  <textarea rows={4} placeholder="اكتب رسالتك هنا"></textarea>
                </div>
                <button type="submit" className="form-submit">إرسال الرسالة</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-brand">
                <img src={logo} alt="سكولفاي" />
                <span>سكولفاي</span>
              </div>
              <p>منصة تعليمية متكاملة تهدف إلى تنظيم العملية التعليمية وتسهيلها لجميع الأطراف المعنية</p>
            </div>
            <div className="footer-links">
              <h4>روابط سريعة</h4>
              <ul>
                <li><a href="#home">الرئيسية</a></li>
                <li><a href="#features">المميزات</a></li>
                <li><a href="#services">خدماتنا</a></li>
                <li><a href="#about">عن سكولفاي</a></li>
                <li><a href={LOGIN_URL} target="_blank" rel="noopener noreferrer">سجل دخول</a></li>
                <li><a href="/schoolify-form/">منصة التسليم</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>تابعنا</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© ٢٠٢٦ سكولفاي. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
