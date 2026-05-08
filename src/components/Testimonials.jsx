'use client';
import { useEffect, useRef } from 'react';

const testimonials = [
  { name: 'Priya & Rohan Sharma', type: 'WEDDING · AHMEDABAD', text: 'Arjun captured our wedding day with such grace. Every photo tells a story — the laughter, the tears, the pure joy. Our album is an absolute treasure we will pass down for generations.' },
  { name: 'Sneha Patel', type: 'MATERNITY SHOOT · SURAT', text: 'Our maternity shoot was so relaxed and beautiful. Arjun made me feel confident and radiant at 8 months pregnant! The photos are breathtaking — soft, golden, and deeply emotional.' },
  { name: 'Kavita & Nikhil Joshi', type: 'NEWBORN SESSION · VADODARA', text: 'The newborn photos of our daughter are the most precious things we own. Arjun was patient, gentle, and incredibly professional. The studio was warm and our baby was comfortable the whole time.' },
  { name: 'Meera & Aryan Desai', type: 'ENGAGEMENT + WEDDING COMBO', text: 'We booked the Engagement + Wedding combo and it was the best decision. The engagement shoot prepared us to feel natural on camera. Our wedding album is magazine-worthy. Highly recommend PixelVow!' },
  { name: 'Ananya Kapoor', type: 'BABY SHOOT · AHMEDABAD', text: 'I was nervous about my baby shoot but Arjun put us all at ease immediately. He spent 3 hours with us and the results were magical — dreamy, soft images of my little one that I will cherish forever.' },
  { name: 'Divya & Rahul Mehta', type: 'FULL JOURNEY PACKAGE', text: 'PixelVow documented our Full Journey — engagement to wedding to our son\'s first month. Having it all with one artist gave a beautiful continuity to our family story. Worth every penny and so much more.' },
];

export default function Testimonials() {
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
    <section className="section testimonials-bg" id="testimonials" ref={sectionRef}>
      <div className="section-inner">
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <p className="section-eyebrow" style={{ justifyContent: 'center' }}>Kind Words</p>
          <h2 className="section-title">Client Stories</h2>
        </div>
        <div className="testi-grid reveal">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-quote">"</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-stars">★★★★★</div>
              <p className="testi-name">{t.name}</p>
              <p className="testi-type">{t.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
