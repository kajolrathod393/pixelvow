# PixelVow — Fine Art Photography Portfolio

A full-stack photography portfolio website built with **Next.js 14**, **MongoDB**, and **Nodemailer**.

---

## ✨ Features

- 🎞️ Full-screen hero image slider (Wedding, Engagement, Maternity, Baby)
- 🖼️ Filterable portfolio gallery with lightbox preview
- 💰 Services & Pricing with tabs (4 shoot types × 3 tiers + 3 Combo Packages)
- 👤 About the Photographer section
- ⭐ 6 client testimonials
- 📋 Booking/Contact form → saves to MongoDB + sends email notifications
- 📱 Fully responsive (mobile-first)
- 💬 Floating WhatsApp button
- 🔐 Auto-reply email to client after booking

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in:

```env
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/pixelvow
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your@gmail.com
EMAIL_PASS=your_gmail_app_password
NOTIFY_EMAIL=hello@pixelvow.in
NEXT_PUBLIC_WHATSAPP_NUMBER=919171776810
```

> **Gmail tip**: Enable 2FA, then create an App Password at myaccount.google.com/apppasswords

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
pixelvow/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout + metadata + Google Fonts
│   │   ├── page.js            # Main page (assembles all sections)
│   │   ├── globals.css        # All styles (CSS variables, animations)
│   │   └── api/
│   │       └── contact/
│   │           └── route.js   # POST: save booking to MongoDB + send emails
│   │                          # GET:  list all bookings (admin use)
│   ├── components/
│   │   ├── Header.jsx         # Sticky header + mobile nav
│   │   ├── Hero.jsx           # Full-screen slider with CTA
│   │   ├── Portfolio.jsx      # Filterable gallery + lightbox
│   │   ├── Services.jsx       # Tabbed packages + combo deals
│   │   ├── About.jsx          # Photographer bio + stats
│   │   ├── Testimonials.jsx   # 6 client reviews
│   │   ├── Contact.jsx        # Booking form (validates + calls API)
│   │   ├── Footer.jsx         # Links + social media
│   │   └── WhatsAppButton.jsx # Floating WhatsApp CTA
│   ├── lib/
│   │   └── mongodb.js         # Mongoose connection with caching
│   └── models/
│       └── Booking.js         # Booking schema (name, email, phone, type, date, message)
├── next.config.js
├── package.json
├── .env.example
└── README.md
```

---

## 🗄️ MongoDB Schema

```js
Booking {
  name:          String  (required)
  email:         String  (required)
  phone:         String  (required)
  shootType:     String  (required)
  preferredDate: Date
  message:       String
  status:        'new' | 'contacted' | 'confirmed' | 'completed' | 'cancelled'
  createdAt:     Date
  updatedAt:     Date
}
```

---

## 🌐 Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Add environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### Other platforms (Render, Railway, DigitalOcean)

```bash
npm run build
npm start
```

---

## 🎨 Customization

| What to change | Where |
|---|---|
| Photographer name / bio | `src/components/About.jsx` |
| Pricing packages | `src/components/Services.jsx` → `svcData` object |
| Gallery images | `src/components/Portfolio.jsx` → `galleryData` array |
| Hero slides | `src/components/Hero.jsx` → `slides` array |
| Contact details | `src/components/Contact.jsx` + `src/components/Footer.jsx` |
| WhatsApp number | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| Color palette | `src/app/globals.css` → `:root` CSS variables |
| Company name / SEO | `src/app/layout.js` → `metadata` |

---

## 📜 License

© 2025 PixelVow. Built for Manish Khatri Fine Art Photography.
