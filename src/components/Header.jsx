'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          PIXELVOW
          <span className="logo-sub">Fine Art Photography</span>
        </div>
        <nav className="nav">
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); scrollTo('portfolio'); }}>Portfolio</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services'); }}>Services</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollTo('testimonials'); }}>Stories</a>
          <a href="#contact" className="nav-book" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            Book a Shoot
          </a>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          ☰
        </button>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        {['portfolio', 'services', 'about', 'testimonials', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
          >
            {id === 'testimonials' ? 'Stories' : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
}
