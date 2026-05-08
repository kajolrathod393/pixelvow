'use client';
import { useState, useEffect, useRef } from 'react';

const shootTypes = [
  { group: 'Wedding',              options: ['Wedding Photography — Essentials', 'Wedding Photography — Storybook', 'Wedding Photography — Heirloom'] },
  { group: 'Engagement',           options: ['Engagement / Pre-Wedding — Spark', 'Engagement / Pre-Wedding — Story', 'Engagement / Pre-Wedding — Cinematic'] },
  { group: 'Baby / Newborn',       options: ['Newborn / Baby Shoot — Petal', 'Newborn / Baby Shoot — Blossom', 'Newborn / Baby Shoot — Legacy'] },
  { group: 'Maternity',            options: ['Maternity Shoot — Bloom', 'Maternity Shoot — Glow', 'Maternity Shoot — Radiance'] },
  { group: 'Family',               options: ['Family Photography — Bond', 'Family Photography — Roots', 'Family Photography — Heritage'] },
  { group: 'Events',               options: ['Event Photography — Capture', 'Event Photography — Chronicle', 'Event Photography — Spectacle'] },
  { group: 'Fashion',              options: ['Fashion Photography — Look', 'Fashion Photography — Editorial', 'Fashion Photography — Campaign'] },
  { group: 'Product',              options: ['Product Photography — Shelf', 'Product Photography — Brand', 'Product Photography — Catalogue'] },
  { group: 'Portfolio / Headshots',options: ['Portfolio / Headshots — Profile', 'Portfolio / Headshots — Portfolio', 'Portfolio / Headshots — Showcase'] },
  { group: 'Videography',          options: ['Cinematic Videography — Reel', 'Cinematic Videography — Cinematic', 'Cinematic Videography — Blockbuster'] },
  { group: 'Combo Packages',       options: ['Combo — Engagement + Wedding', 'Combo — Maternity + Newborn', 'Combo — Full Wedding Journey'] },
  { group: 'Add-Ons',              options: ['Drone Photography', 'Photo Editing & Retouching', 'Album Design', 'Live Streaming', 'Same Day Edit Video'] },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', shootType: '', preferredDate: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  const sectionRef = useRef(null);

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

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.shootType) e.shootType = 'Please select a shoot type';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setSubmitted(true);
      else setServerError(data.error || 'Something went wrong. Please try again.');
    } catch {
      setServerError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-bg" id="contact" ref={sectionRef}>
      <div className="section-inner">
        <div className="contact-grid">

          {/* ── LEFT: Info ── */}
          <div className="reveal">
            <p className="section-eyebrow">Get in Touch</p>
            <h2 className="section-title">Book Your Shoot</h2>
            <p className="contact-intro">
              Every great photograph begins with a conversation. Tell us about your dream shoot and let us create something extraordinary together.
            </p>

            <div className="contact-detail">
              <div className="c-det">
                <span className="c-det-icon">📍</span>
                <div>
                  <p className="c-det-label">Studio</p>
                  <p className="c-det-text">Prahlad Nagar, Ahmedabad, Gujarat — 380015</p>
                </div>
              </div>
              <div className="c-det">
                <span className="c-det-icon">📞</span>
                <div>
                  <p className="c-det-label">Phone</p>
                  <p className="c-det-text">+91 98765 43210</p>
                </div>
              </div>
              <div className="c-det">
                <span className="c-det-icon">📧</span>
                <div>
                  <p className="c-det-label">Email</p>
                  <p className="c-det-text">hello@pixelvow.in</p>
                </div>
              </div>
              <div className="c-det">
                <span className="c-det-icon">🕒</span>
                <div>
                  <p className="c-det-label">Hours</p>
                  <p className="c-det-text">Mon – Sat, 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-response-box">
              <p className="contact-response-title">RESPONSE TIME</p>
              <p className="contact-response-text">
                We typically respond within 4 hours. For urgent bookings, WhatsApp us directly for the fastest response.
              </p>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="reveal">
            <div className="contact-form">
              {submitted ? (
                <div className="success-msg">
                  <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>✦</div>
                  <p>Thank you, {form.name.split(' ')[0]}!</p>
                  <p style={{ fontSize: '1rem', color: 'var(--text2)', marginTop: '.5rem', fontFamily: 'var(--ff-body)', fontWeight: 300 }}>
                    We have received your enquiry and will reach out within 4 hours to confirm your booking.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="form-title">Book Your Shoot Now</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                      {errors.name && <p className="error-msg">{errors.name}</p>}
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                      {errors.email && <p className="error-msg">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                      {errors.phone && <p className="error-msg">{errors.phone}</p>}
                    </div>
                    <div className="form-group">
                      <label>Preferred Date</label>
                      <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Shoot Type *</label>
                    <select name="shootType" value={form.shootType} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      {shootTypes.map((group) => (
                        <optgroup key={group.group} label={group.group}>
                          {group.options.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {errors.shootType && <p className="error-msg">{errors.shootType}</p>}
                  </div>

                  <div className="form-group">
                    <label>Tell us about your vision</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share details about your shoot, location preference, or any special requests…"
                    />
                  </div>

                  {serverError && <p className="error-msg" style={{ marginBottom: '1rem' }}>{serverError}</p>}

                  <button type="submit" className="submit-btn" disabled={loading}>
                    {loading ? 'Sending…' : '✦  Book Your Shoot Now  ✦'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}