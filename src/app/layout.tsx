import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import TopBanner from '@/components/layout/TopBanner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Integral CF Font Tanımı (Başlıklar)
const integralCF = localFont({
  src: [
    {
      path: './fonts/Fontspring-DEMO-integralcf-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Fontspring-DEMO-integralcf-regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-integral-cf', // CSS değişken adı
});

// Satoshi Font Tanımı (Genel Metin)
const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi', // CSS değişken adı
});

export const metadata: Metadata = {
  title: 'Shop.co | E-Commerce',
  description: 'Best clothing for you',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${integralCF.variable} ${satoshi.variable} antialiased`}
      >
        <TopBanner />
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
