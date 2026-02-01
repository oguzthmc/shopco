import Hero from '@/components/home/Hero';
import BrandBar from '@/components/home/BrandBar';
import NewArrivals from '@/components/home/NewArrivals';
import TopSelling from '@/components/home/TopSelling';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandBar />
      <NewArrivals />
      <TopSelling />
      {/* Sırada: Browse by Dress Style */}
    </main>
  );
}
