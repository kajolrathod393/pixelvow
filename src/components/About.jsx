'use client';
import { useEffect, useRef } from 'react';
import { handleImgError } from '@/lib/imgFallback';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible')); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section" id="about" style={{ background: 'var(--dark2)' }} ref={sectionRef}>
      <div className="section-inner">
        <div className="about-grid">
          {/* Images */}
          <div className="about-imgs reveal">
            <div className="about-img1">
              <img
                src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=700&q=80&fit=crop"
                alt="Manish Khatri — Photographer"
                loading="lazy"
                onError={handleImgError}
              />
            </div>
            <div className="about-img2">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80&fit=crop"
                alt="Camera"
                loading="lazy"
                onError={handleImgError}
              />
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <p className="about-tag">THE ARTIST BEHIND THE LENS</p>
            <h2 className="about-name">Manish Khatri</h2>
            <p className="about-text">
              Photography is not just a profession for me — it is a sacred language. A way of whispering to the future:{' '}
              <em>this moment was real, this love was true, this joy was boundless.</em>
            </p>
            <p className="about-text">
              With over 8 years behind the lens, I specialize in candid, cinematic imagery — pictures that feel lived-in
              and alive. From the quiet glance between newlyweds to the first yawn of a newborn, I am drawn to the
              fleeting, the tender, the unforgettable.
            </p>
            <p className="about-text">
              Based in Ahmedabad, I travel across India to document weddings, families, and new beginnings with warmth
              and artistry. My style blends emotional storytelling with a cinematic eye, ensuring every photograph is as
              beautiful to hold in your hands as the memory it preserves.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <strong>500+</strong>
                <span>Sessions Shot</span>
              </div>
              <div className="about-stat">
                <strong>8+</strong>
                <span>Years Experience</span>
              </div>
              <div className="about-stat">
                <strong>200+</strong>
                <span>Happy Families</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
