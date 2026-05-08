import './globals.css';

export const metadata = {
  title: 'PixelVow — Fine Art Photography | Weddings, Engagements, Maternity & Newborn',
  description:
    'PixelVow captures your most precious milestones — weddings, engagements, maternity, and newborn sessions — with cinematic artistry. Based in Ahmedabad, Gujarat.',
  keywords: 'wedding photography ahmedabad, maternity photographer gujarat, newborn baby shoot, engagement photographer india, pixelvow',
  openGraph: {
    title: 'PixelVow Fine Art Photography',
    description: 'Capturing Moments That Last Forever',
    url: 'https://pixelvow.in',
    siteName: 'PixelVow',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
