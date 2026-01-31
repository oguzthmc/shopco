import Hero from '@/components/home/Hero';
import BrandBar from '@/components/home/BrandBar';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandBar />
      {/* Sırada: New Arrivals / Top Selling */}
    </main>
  );
}
