import Hero from '@/components/home/Hero';
import BrandBar from '@/components/home/BrandBar';
import NewArrivals from '@/components/home/NewArrivals';
import TopSelling from '@/components/home/TopSelling';
import DressStyle from '@/components/home/DressStyle';
import HappyCustomers from '@/components/home/HappyCustomers';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandBar />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
    </main>
  );
}
