'use client';
import { useState, useEffect, useRef } from 'react';

const SvcIcon = ({ type, size = 22 }) => {
  const s = { width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    wedding: (
      <svg viewBox="0 0 24 24" style={s}><path d="M12 21.7C5.8 17.4 2 13.3 2 9a5 5 0 0 1 10 0 5 5 0 0 1 10 0c0 4.3-3.8 8.4-10 12.7z"/></svg>
    ),
    engagement: (
      <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/></svg>
    ),
    newborn: (
      <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="8" r="4"/><path d="M9 12c0 0-5 1.5-5 6h16c0-4.5-5-6-5-6"/><path d="M10 16v4M14 16v4"/></svg>
    ),
    maternity: (
      <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="5" r="2.5"/><path d="M12 8c-2 0-4 1.5-4 4 0 3 1 5 2 6.5h4c1-1.5 2-3.5 2-6.5 0-2.5-2-4-4-4z"/><ellipse cx="12" cy="15" rx="2" ry="2.5"/></svg>
    ),
    family: (
      <svg viewBox="0 0 24 24" style={s}><circle cx="9" cy="6" r="2"/><circle cx="16" cy="7" r="1.8"/><circle cx="6" cy="17" r="1.5"/><path d="M9 9c-3 0-5 2-5 5h10c0-3-2-5-5-5z"/><path d="M16 10c2 0 4 1.5 4 4h-5"/></svg>
    ),
    event: (
      <svg viewBox="0 0 24 24" style={s}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>
    ),
    fashion: (
      <svg viewBox="0 0 24 24" style={s}><path d="M12 3 8 7H5l-2 4h3v10h12V11h3l-2-4h-3l-4-4z"/><path d="M9 11v6M15 11v6"/></svg>
    ),
    product: (
      <svg viewBox="0 0 24 24" style={s}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    ),
    portfolio: (
      <svg viewBox="0 0 24 24" style={s}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><circle cx="12" cy="14" r="2.5"/><path d="M9.5 19c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5"/></svg>
    ),
    videography: (
      <svg viewBox="0 0 24 24" style={s}><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
    ),
    drone: (
      <svg viewBox="0 0 24 24" style={s}><circle cx="12" cy="12" r="2"/><path d="M6 6l3.5 3.5M14.5 14.5 18 18M18 6l-3.5 3.5M9.5 14.5 6 18"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/></svg>
    ),
    retouch: (
      <svg viewBox="0 0 24 24" style={s}><circle cx="13.5" cy="6.5" r="4"/><path d="m9.5 10.5-6 6a2 2 0 0 0 3 3l6-6"/><path d="m16 7 1-1"/></svg>
    ),
    album: (
      <svg viewBox="0 0 24 24" style={s}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 10h8M8 14h5"/></svg>
    ),
    stream: (
      <svg viewBox="0 0 24 24" style={s}><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>
    ),
    sde: (
      <svg viewBox="0 0 24 24" style={s}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  };
  return icons[type] || null;
};

const svcData = {
  wedding: {
    iconKey: 'wedding',
    name: 'Wedding Photography',
    tagline: 'Full coverage with traditional, candid & cinematic storytelling',
    includes: ['Full Wedding Coverage', 'Traditional + Candid', 'Bridal Portraits', 'Couple Moments', 'Getting Ready Shots', 'Ceremony & Reception'],
    pkgs: [
      { tier: 'BASIC', name: 'Essentials', price: '₹25,000', featured: false, features: ['6 Hours Coverage', '200 Edited Photos', '1 Photographer', 'Online Gallery', 'No Video', 'No Album'] },
      { tier: 'STANDARD', name: 'Storybook', price: '₹45,000', featured: true, features: ['10 Hours Coverage', '500 Edited Photos', '2 Photographers', 'Highlights Reel (3 min)', 'Premium Album (20 spreads)', 'Online Gallery'] },
      { tier: 'PREMIUM', name: 'Heirloom', price: '₹80,000', featured: false, features: ['Full Day Coverage', '1000+ Edited Photos', '2 Photographers + Videographer', 'Full Cinematic Film', 'Drone Shots Included', 'Luxury Album + Box', 'Engagement Session Free', 'Same Day Edit Teaser'] },
    ],
  },
  engagement: {
    iconKey: 'engagement',
    name: 'Engagement / Pre-Wedding',
    tagline: 'Outdoor couple shoots, cinematic poses & save-the-date photos',
    includes: ['Outdoor Couple Shoot', 'Cinematic Poses', 'Save-the-Date Photos', 'Candid & Styled', 'Outfit Changes', 'Location Scouting'],
    pkgs: [
      { tier: 'BASIC', name: 'Spark', price: '₹6,000', featured: false, features: ['1.5 Hours Session', '50 Edited Photos', '1 Location', 'Online Gallery', 'No Video', 'No Album'] },
      { tier: 'STANDARD', name: 'Story', price: '₹12,000', featured: true, features: ['3 Hours Session', '100 Edited Photos', '2 Locations', 'Short Reel (60 sec)', 'Outfit Change', 'Premium Prints ×5'] },
      { tier: 'PREMIUM', name: 'Cinematic', price: '₹20,000', featured: false, features: ['Full Day Session', '200+ Photos', '3 Locations', 'Cinematic Video (3 min)', 'Drone Shots', 'Premium Photo Book'] },
    ],
  },
  newborn: {
    iconKey: 'newborn',
    name: 'Newborn / Baby Shoot',
    tagline: 'Newborn portraits, monthly milestones, cake smash & family sessions',
    includes: ['Newborn Photography', 'Monthly Milestones', 'Cake Smash Shoot', 'Family with Baby', 'Prop & Wrap Styling', 'Sibling Portraits'],
    pkgs: [
      { tier: 'BASIC', name: 'Petal', price: '₹5,000', featured: false, features: ['1.5 Hours Session', '40 Edited Photos', 'Studio Props Included', 'Online Gallery', 'No Video', 'No Album'] },
      { tier: 'STANDARD', name: 'Blossom', price: '₹10,000', featured: true, features: ['2.5 Hours Session', '80 Edited Photos', 'Full Prop Setup', 'Family Portraits Included', 'Short Reel (30 sec)', 'Framed Print'] },
      { tier: 'PREMIUM', name: 'Legacy', price: '₹17,000', featured: false, features: ['3 Hours Session', '120+ Photos', 'Premium Props & Wraps', 'Cake Smash Session', 'Cinematic Baby Film', 'Photo Book + Canvas Print', 'Milestone Follow-up Session'] },
    ],
  },
  maternity: {
    iconKey: 'maternity',
    name: 'Maternity Shoot',
    tagline: 'Indoor/outdoor sessions, couple maternity & theme-based shoots',
    includes: ['Indoor / Outdoor Sessions', 'Couple Maternity', 'Theme-Based Shoot', 'Wardrobe Styling', 'Partner & Siblings Welcome', 'Golden Hour Outdoor'],
    pkgs: [
      { tier: 'BASIC', name: 'Bloom', price: '₹6,000', featured: false, features: ['1 Hour Session', '40 Edited Photos', 'Studio or Outdoor', 'Online Gallery', 'No Video', 'No Album'] },
      { tier: 'STANDARD', name: 'Glow', price: '₹11,000', featured: true, features: ['2 Hours Session', '80 Edited Photos', 'Studio + Outdoor', 'Wardrobe Styling', 'Short Reel (30 sec)', 'Framed Print Included'] },
      { tier: 'PREMIUM', name: 'Radiance', price: '₹18,000', featured: false, features: ['3 Hours Session', '150+ Photos', '2 Locations', 'Cinematic Maternity Film', 'Partner + Siblings', 'Photo Book', 'Wall Art Print'] },
    ],
  },
  family: {
    iconKey: 'family',
    name: 'Family Photography',
    tagline: 'Family portraits, festival shoots & natural lifestyle sessions',
    includes: ['Family Portraits', 'Festival / Occasion Shoots', 'Lifestyle Sessions', 'Multi-Generation Photos', 'Outdoor & Studio', 'Candid Moments'],
    pkgs: [
      { tier: 'BASIC', name: 'Bond', price: '₹4,000', featured: false, features: ['1 Hour Session', '30 Edited Photos', '1 Location', 'Online Gallery', 'No Video'] },
      { tier: 'STANDARD', name: 'Roots', price: '₹8,000', featured: true, features: ['2 Hours Session', '60 Edited Photos', '2 Locations', 'Candid + Posed Mix', 'Short Reel (30 sec)', 'Framed Group Print'] },
      { tier: 'PREMIUM', name: 'Heritage', price: '₹14,000', featured: false, features: ['3 Hours Session', '100+ Photos', 'Multiple Locations', 'Short Family Film', 'Photo Book', 'Canvas Wall Art'] },
    ],
  },
  event: {
    iconKey: 'event',
    name: 'Event Photography',
    tagline: 'Birthdays, corporate events, school functions & baby showers',
    includes: ['Birthday Parties', 'Corporate Events', 'School Functions', 'Baby Showers', 'Award Ceremonies', 'Product Launches'],
    pkgs: [
      { tier: 'BASIC', name: 'Capture', price: '₹5,000', featured: false, features: ['2 Hours Coverage', '80 Edited Photos', '1 Photographer', 'Online Gallery', 'No Video'] },
      { tier: 'STANDARD', name: 'Chronicle', price: '₹10,000', featured: true, features: ['4 Hours Coverage', '200 Edited Photos', '1 Photographer', 'Short Highlights Reel', 'Same Day Previews ×10'] },
      { tier: 'PREMIUM', name: 'Spectacle', price: '₹18,000', featured: false, features: ['Full Event Coverage', '400+ Photos', '2 Photographers', 'Full Event Video', 'Drone Available', 'Same Day Edit'] },
    ],
  },
  fashion: {
    iconKey: 'fashion',
    name: 'Fashion Photography',
    tagline: 'Model portfolios, clothing brand lookbooks & makeup artist shoots',
    includes: ['Model Portfolio Shoot', 'Clothing Brand Lookbooks', 'Makeup Artist Shoots', 'Styled Editorials', 'Studio + Location', 'Retouching Included'],
    pkgs: [
      { tier: 'BASIC', name: 'Look', price: '₹5,000', featured: false, features: ['1.5 Hours Session', '20 Edited Photos', '1 Look / Outfit', 'Studio Setup', 'Online Gallery'] },
      { tier: 'STANDARD', name: 'Editorial', price: '₹12,000', featured: true, features: ['3 Hours Session', '50 Edited Photos', '3 Looks / Outfits', 'Studio + Outdoor', 'Premium Retouching', 'Short Reel'] },
      { tier: 'PREMIUM', name: 'Campaign', price: '₹22,000', featured: false, features: ['Full Day Session', '100+ Photos', 'Unlimited Looks', 'Multi-Location', 'Full Retouching', 'Campaign Video', 'Drone Shots'] },
    ],
  },
  product: {
    iconKey: 'product',
    name: 'Product Photography',
    tagline: 'E-commerce, jewelry, food & Instagram product shoots',
    includes: ['E-commerce Products', 'Jewelry Photography', 'Food Photography', 'Instagram Shoots', 'White BG Studio', 'Lifestyle Shots'],
    pkgs: [
      { tier: 'BASIC', name: 'Shelf', price: '₹3,000', featured: false, features: ['Up to 10 Products', '20 Edited Images', 'White BG Studio', 'Online Delivery', 'No Video'] },
      { tier: 'STANDARD', name: 'Brand', price: '₹7,000', featured: true, features: ['Up to 25 Products', '60 Edited Images', 'Studio + Lifestyle', '2 Backgrounds', '48hr Turnaround'] },
      { tier: 'PREMIUM', name: 'Catalogue', price: '₹15,000', featured: false, features: ['Up to 60 Products', '150+ Images', 'Multi-Background', 'Lifestyle + Flat Lay', 'Short Product Reel', '24hr Priority Delivery'] },
    ],
  },
  portfolio: {
    iconKey: 'portfolio',
    name: 'Portfolio / Headshots',
    tagline: 'Actor & model portfolios, professional profiles & LinkedIn headshots',
    includes: ['Actor / Model Portfolio', 'Professional Profiles', 'LinkedIn Headshots', 'Comp Card Photos', 'Multiple Looks', 'Expression Coaching'],
    pkgs: [
      { tier: 'BASIC', name: 'Profile', price: '₹3,500', featured: false, features: ['1 Hour Session', '15 Edited Photos', '1 Look', 'Studio Backdrop', 'Online Gallery'] },
      { tier: 'STANDARD', name: 'Portfolio', price: '₹8,000', featured: true, features: ['2.5 Hours Session', '40 Edited Photos', '3 Looks', 'Studio + Outdoor', 'Premium Retouching', 'Comp Card Layout'] },
      { tier: 'PREMIUM', name: 'Showcase', price: '₹15,000', featured: false, features: ['Full Day Session', '80+ Photos', 'Unlimited Looks', 'Multi-Location', 'Full Retouching', 'Showreel Video (60 sec)', 'Print-Ready Files'] },
    ],
  },
  videography: {
    iconKey: 'videography',
    name: 'Cinematic Videography',
    tagline: 'Wedding films, reels, drone shots, teasers & cinematic videos',
    includes: ['Wedding Films', 'Instagram Reels', 'Drone Aerial Shots', 'Cinematic Videos', 'Teaser Videos', 'Same Day Edit'],
    pkgs: [
      { tier: 'BASIC', name: 'Reel', price: '₹10,000', featured: false, features: ['4 Hours Coverage', '3-Min Highlights Film', '1 Videographer', 'Instagram Reel (60 sec)', 'No Drone', 'Online Delivery'] },
      { tier: 'STANDARD', name: 'Cinematic', price: '₹25,000', featured: true, features: ['8 Hours Coverage', '8-Min Cinematic Film', '2 Videographers', 'Drone Shots Included', 'Teaser Video (90 sec)', 'Same Day Edit Reel'] },
      { tier: 'PREMIUM', name: 'Blockbuster', price: '₹50,000', featured: false, features: ['Full Day Coverage', '20-Min Feature Film', '2 Videographers + Drone Pilot', '4K Resolution', 'Aerial Drone Coverage', 'SDE Video', 'Highlight + Full Film + Reels', 'Dolby Audio Mix'] },
    ],
  },
};

const extraServices = [
  { iconKey: 'drone',   name: 'Drone Photography',        desc: 'Aerial shots for weddings, events & real estate' },
  { iconKey: 'retouch', name: 'Editing & Retouching',     desc: 'Professional colour grading & skin retouching' },
  { iconKey: 'album',   name: 'Album Design',             desc: 'Custom luxury flush-mount album layouts' },
  { iconKey: 'stream',  name: 'Live Streaming',           desc: "HD live stream for guests who can't attend" },
  { iconKey: 'sde',     name: 'Same Day Edit Videos',     desc: 'Highlights reel delivered same day at the event' },
];

const combos = [
  { title: 'Engagement + Wedding',  desc: 'Complete love story from proposal to the big day.',                                                       price: '₹65,000', save: 'Save ₹10,000',  best: false },
  { title: 'Maternity + Newborn',   desc: 'The glow of expecting & the wonder of your baby\'s first days.',                                          price: '₹22,000', save: 'Save ₹5,000',   best: false },
  { title: 'Full Wedding Journey',  desc: 'Engagement → Haldi → Cocktail → Sangeet → Wedding → Home Entry — every celebration fully documented.',   price: '₹90,000', save: 'Save ₹20,000+', best: true  },
];

const tabs = [
  { key: 'wedding',     label: 'Wedding',     iconKey: 'wedding'     },
  { key: 'engagement',  label: 'Engagement',  iconKey: 'engagement'  },
  { key: 'newborn',     label: 'Baby/Newborn', iconKey: 'newborn'    },
  { key: 'maternity',   label: 'Maternity',   iconKey: 'maternity'   },
  { key: 'family',      label: 'Family',      iconKey: 'family'      },
  { key: 'event',       label: 'Events',      iconKey: 'event'       },
  { key: 'fashion',     label: 'Fashion',     iconKey: 'fashion'     },
  { key: 'product',     label: 'Product',     iconKey: 'product'     },
  { key: 'portfolio',   label: 'Portfolio',   iconKey: 'portfolio'   },
  { key: 'videography', label: 'Videography', iconKey: 'videography' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('wedding');
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          el.querySelectorAll('.reveal').forEach((r) => r.classList.add('visible'));
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const data = svcData[activeTab];

  return (
    <section className="section" id="services" ref={sectionRef}>
      <div className="section-inner">

        {/* Heading */}
        <div className="reveal">
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">Services & Pricing</h2>
          <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
            Every package includes hand-edited photos, a private online gallery, and a personal consultation.
            Choose your service and pick the package that fits your vision.
          </p>
        </div>

        {/* Scrollable tab bar */}
        <div className="scroll-bar-wrap reveal" style={{ marginBottom: '0' }}>
          <div className="services-tabs" style={{ marginBottom: '0' }}>
            {tabs.map((t) => (
              <button
                key={t.key}
                className={`svc-tab${activeTab === t.key ? ' active' : ''}`}
                onClick={() => setActiveTab(t.key)}
              >
                <span style={{ color: activeTab === t.key ? 'var(--gold)' : 'var(--muted)', display: 'flex', transition: '.3s' }}>
                  <SvcIcon type={t.iconKey} size={14} />
                </span>
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ marginBottom: '3rem' }} />

        {/* Active service header */}
        <div
          className="reveal"
          style={{ marginBottom: '2rem', padding: '1.5rem 2rem', background: 'var(--dark3)', border: '1px solid rgba(201,169,110,.12)', display: 'flex', gap: '1.4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}
        >
          <div style={{ color: 'var(--gold)', marginTop: '.15rem', flexShrink: 0 }}>
            <SvcIcon type={data.iconKey} size={28} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', marginBottom: '.25rem' }}>{data.name}</div>
            <div style={{ fontFamily: 'var(--ff-body)', fontSize: '.95rem', color: 'var(--text2)', marginBottom: '.85rem', fontStyle: 'italic' }}>{data.tagline}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
              {data.includes.map((item, i) => (
                <span key={i} style={{ fontFamily: 'var(--ff-ui)', fontSize: '.63rem', letterSpacing: '.1em', color: 'var(--gold)', border: '1px solid rgba(201,169,110,.25)', padding: '.2rem .75rem' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="pkg-grid reveal">
          {data.pkgs.map((p, i) => (
            <div key={i} className={`pkg-card${p.featured ? ' featured' : ''}`}>
              {p.featured && <div className="pkg-badge">MOST POPULAR</div>}
              <p className="pkg-tier">{p.tier}</p>
              <h3 className="pkg-name">{p.name}</h3>
              <div className="pkg-price">{p.price}<span> /session</span></div>
              <ul className="pkg-features">
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <button className="btn-book" onClick={scrollToContact}>Book Now</button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="reveal" style={{ marginTop: '4rem' }}>
          <p style={{ fontFamily: 'var(--ff-ui)', fontSize: '.63rem', letterSpacing: '.4em', color: 'var(--gold)', marginBottom: '.6rem' }}>ADD-ONS</p>
          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Extra Premium Services</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {extraServices.map((s, i) => (
              <div
                key={i}
                style={{ background: 'var(--dark3)', border: '1px solid rgba(255,255,255,.07)', padding: '1.4rem', transition: '.3s', cursor: 'default' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,169,110,.35)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)')}
              >
                <div style={{ color: 'var(--gold)', marginBottom: '.75rem' }}>
                  <SvcIcon type={s.iconKey} size={22} />
                </div>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1rem', marginBottom: '.3rem' }}>{s.name}</div>
                <div style={{ fontFamily: 'var(--ff-body)', fontSize: '.88rem', color: 'var(--text2)', lineHeight: '1.6' }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Combo Packages */}
        <div className="combo-section reveal">
          <p className="combo-sub">SAVE MORE WITH</p>
          <h3 className="combo-title">Combo Packages</h3>
          <div className="combo-grid">
            {combos.map((c, i) => (
              <div key={i} className={`combo-card${c.best ? ' best' : ''}`}>
                {c.best && <p className="combo-best-badge">— BEST VALUE —</p>}
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <div className="combo-price">{c.price}</div>
                <small style={{ color: 'var(--muted)', fontFamily: 'var(--ff-ui)', fontSize: '.65rem', letterSpacing: '.1em' }}>{c.save}</small>
                <br /><br />
                <button
                  className="btn-book"
                  style={c.best ? { background: 'var(--gold)', color: 'var(--dark)' } : {}}
                  onClick={scrollToContact}
                >
                  {c.best ? 'Book Full Wedding Journey' : 'Book Combo'}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}