'use client';
import { useState, useEffect, useRef } from 'react';

const galleryData = [
  // Wedding
  { cat: 'wedding',     title: 'Rooftop Vows',          img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop' },
  { cat: 'wedding',     title: 'Golden Hour Kiss',       img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&fit=crop' },
  { cat: 'wedding',     title: 'Mandap Moment',          img: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&fit=crop' },
  { cat: 'wedding',     title: 'First Dance',            img: 'https://images.unsplash.com/photo-1470117843367-01fdc98e3f81?w=800&q=80&fit=crop' },
  // Engagement
  { cat: 'engagement',  title: 'Monsoon Love',           img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80&fit=crop' },
  { cat: 'engagement',  title: 'Lakeside Proposal',      img: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80&fit=crop' },
  { cat: 'engagement',  title: 'Old City Love',          img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80&fit=crop' },
  // Maternity
  { cat: 'maternity',   title: 'Expecting Grace',        img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80&fit=crop' },
  { cat: 'maternity',   title: 'Golden Bloom',           img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&fit=crop' },
  // Baby / Newborn
  { cat: 'newborn',     title: 'Hello World',            img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80&fit=crop' },
  { cat: 'newborn',     title: 'Tiny Perfection',        img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80&fit=crop' },
  { cat: 'newborn',     title: 'Dreaming',               img: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=800&q=80&fit=crop' },
  // Family
  { cat: 'family',      title: 'Sunday Afternoon',       img: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80&fit=crop' },
  { cat: 'family',      title: 'Three Generations',      img: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=800&q=80&fit=crop' },
  { cat: 'family',      title: 'Festival Morning',       img: 'https://images.unsplash.com/photo-1543342384-1f1350e27861?w=800&q=80&fit=crop' },
  // Events
  { cat: 'event',       title: 'Birthday Celebration',   img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop' },
  { cat: 'event',       title: 'Corporate Summit',       img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop' },
  { cat: 'event',       title: 'Baby Shower',            img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80&fit=crop' },
  // Fashion
  { cat: 'fashion',     title: 'Studio Editorial',       img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80&fit=crop' },
  { cat: 'fashion',     title: 'Golden Light Series',    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&fit=crop' },
  { cat: 'fashion',     title: 'Brand Lookbook',         img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80&fit=crop' },
  // Product
  { cat: 'product',     title: 'Jewellery Collection',   img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80&fit=crop' },
  { cat: 'product',     title: 'Food & Beverage',        img: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80&fit=crop' },
  { cat: 'product',     title: 'E-commerce Flats',       img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fit=crop' },
  // Portfolio / Headshots
  { cat: 'portfolio',   title: 'Actor Portfolio',        img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop' },
  { cat: 'portfolio',   title: 'LinkedIn Headshot',      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&fit=crop' },
  { cat: 'portfolio',   title: 'Model Comp Card',        img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&fit=crop' },
  // Videography
  { cat: 'videography', title: 'Wedding Cinematic',      img: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=800&q=80&fit=crop' },
  { cat: 'videography', title: 'Drone Aerial',           img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&fit=crop' },
  { cat: 'videography', title: 'Reel Production',        img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80&fit=crop' },
];

const filters = [
  { label: 'All',           value: 'all'        },
  { label: 'Wedding',       value: 'wedding'    },
  { label: 'Engagement',    value: 'engagement' },
  { label: 'Maternity',     value: 'maternity'  },
  { label: 'Baby / Newborn',value: 'newborn'    },
  { label: 'Family',        value: 'family'     },
  { label: 'Events',        value: 'event'      },
  { label: 'Fashion',       value: 'fashion'    },
  { label: 'Product',       value: 'product'    },
  { label: 'Portfolio',     value: 'portfolio'  },
  { label: 'Videography',   value: 'videography'},
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const sectionRef = useRef(null);

  const filtered = activeFilter === 'all'
    ? galleryData
    : galleryData.filter((x) => x.cat === activeFilter);

  useEffect(() => {
    const handler = (e) => setActiveFilter(e.detail);
    window.addEventListener('filterGallery', handler);
    return () => window.removeEventListener('filterGallery', handler);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible')); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % filtered.length);
      if (e.key === 'ArrowLeft')  setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
      if (e.key === 'Escape')     setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, filtered.length]);

  const catLabel = (cat) => filters.find((f) => f.value === cat)?.label || cat;

  return (
    <>
      <section className="section portfolio-bg" id="portfolio" ref={sectionRef}>
        <div className="section-inner">
          <div className="reveal">
            <p className="section-eyebrow">Our Work</p>
            <h2 className="section-title">The Portfolio</h2>
            <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
              Every frame is a story, every moment a treasure. Explore our full collection across all services.
            </p>
          </div>

          {/* Filter bar — scrollable */}
          <div className="scroll-bar-wrap reveal" style={{ marginBottom: '0' }}>
            <div className="filter-bar" style={{ marginBottom: '0' }}>
              {filters.map((f) => (
                <button
                  key={f.value}
                  className={`filter-btn${activeFilter === f.value ? ' active' : ''}`}
                  onClick={() => setActiveFilter(f.value)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '1.5rem' }} />

          {/* Count */}
          <p style={{ fontFamily: 'var(--ff-ui)', fontSize: '.65rem', letterSpacing: '.2em', color: 'var(--muted)', marginBottom: '1.5rem' }}>
            SHOWING {filtered.length} {filtered.length === 1 ? 'IMAGE' : 'IMAGES'}
            {activeFilter !== 'all' ? ` — ${catLabel(activeFilter).toUpperCase()}` : ''}
          </p>

          <div className="gallery reveal">
            {filtered.map((item, i) => (
              <div
                key={`${item.cat}-${i}`}
                className="gallery-item"
                onClick={() => setLightbox(i)}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <p className="gallery-cat">{catLabel(item.cat).toUpperCase()}</p>
                    <p className="gallery-title">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox open"
          onClick={(e) => { if (e.target.classList.contains('lightbox')) setLightbox(null); }}
        >
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button className="lb-nav lb-prev" onClick={() => setLightbox((i) => (i - 1 + filtered.length) % filtered.length)}>‹</button>
          <img className="lightbox-img" src={filtered[lightbox].img} alt={filtered[lightbox].title} />
          <button className="lb-nav lb-next" onClick={() => setLightbox((i) => (i + 1) % filtered.length)}>›</button>
          <div className="lb-meta">
            <p>{catLabel(filtered[lightbox].cat).toUpperCase()} — {filtered[lightbox].title}</p>
          </div>
        </div>
      )}
    </>
  );
}