'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { handleImgError } from '@/lib/imgFallback';

const slides = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=85&fit=crop', alt: 'Wedding', cat: 'wedding' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1600&q=85&fit=crop', alt: 'Engagement', cat: 'engagement' },
  { src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=85&fit=crop', alt: 'Maternity', cat: 'maternity' },
  { src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&q=85&fit=crop', alt: 'Baby', cat: 'baby' },
];

const cats = [
  { label: 'Wedding', cat: 'wedding' },
  { label: 'Engagement', cat: 'engagement' },
  { label: 'Maternity', cat: 'maternity' },
  { label: 'Newborn', cat: 'baby' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {slides.map((s, i) => (
        <div key={i} className={`hero-slide${current === i ? ' active' : ''}`}>
          <img src={s.src} alt={s.alt} loading={i === 0 ? 'eager' : 'lazy'} onError={handleImgError} />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="hero-content">
        <p className="hero-tag">PixelVow — Fine Art Photography</p>
        <h1 className="hero-title">
          Capturing Moments<br />That Last Forever
        </h1>
        <p className="hero-sub">Weddings · Engagements · Maternity · Newborn</p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>
            Book a Shoot
          </button>
          <button className="btn-outline" onClick={() => scrollToSection('portfolio')}>
            View Portfolio
          </button>
        </div>
      </div>

      {/* Side category labels */}
      <div className="hero-cats">
        {cats.map((c) => (
          <button
            key={c.cat}
            className="hero-cat"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('filterGallery', { detail: c.cat }));
              scrollToSection('portfolio');
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Slide dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${current === i ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
