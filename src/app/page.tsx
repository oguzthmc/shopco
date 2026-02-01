import Hero from '@/components/home/Hero';
import BrandBar from '@/components/home/BrandBar';
import NewArrivals from '@/components/home/NewArrivals';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandBar />
      <NewArrivals />
      {/* Sırada: Top Selling */}
    </main>
  );
}
