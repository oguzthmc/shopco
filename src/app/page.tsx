import Hero from '@/components/home/Hero';
import BrandBar from '@/components/home/BrandBar';
import NewArrivals from '@/components/home/NewArrivals';
import TopSelling from '@/components/home/TopSelling';
import DressStyle from '@/components/home/DressStyle';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandBar />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      {/* Sırada: Customer Reviews (Happy Customers) */}
    </main>
  );
}
