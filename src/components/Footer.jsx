'use client';
export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
            PIXELVOW
            <span className="logo-sub">Fine Art Photography</span>
          </div>
          <p style={{ marginTop: '.8rem' }}>
            We photograph weddings, engagements, maternity & newborns with artistry and soul.
            Based in Ahmedabad, available across India.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollTo('portfolio'); }}>Portfolio</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services & Pricing</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About Arjun</a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>Client Stories</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Book a Shoot</a>
        </div>

        <div className="footer-social">
          <h4>Follow Our Work</h4>
          <div className="social-links">
            <a className="social-btn" href="https://instagram.com/pixelvow" target="_blank" rel="noopener noreferrer">
              📸 Instagram
            </a>
            <a className="social-btn" href="https://facebook.com/pixelvow" target="_blank" rel="noopener noreferrer">
              👍 Facebook
            </a>
            <a
              className="social-btn"
              href="https://wa.me/9171776810"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'rgba(37,211,102,.08)', borderColor: 'rgba(37,211,102,.3)', color: '#25D366' }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} PixelVow. All rights reserved. Fine Art Photography by Manish Khatri.</p>
        <p className="footer-gold">Ahmedabad, Gujarat, India</p>
      </div>
    </footer>
  );
}
