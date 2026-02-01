import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import { newArrivalsData } from '@/data/mockData';

export default function NewArrivals() {
  return (
    <section className="py-16 md:py-20 border-b border-black/10">
      <div className="frame">
        {/* Bölüm Başlığı: Integral CF Bold 48px */}
        <h2 className="integral-text font-bold text-[32px] md:text-[48px] text-center mb-8 md:mb-14 leading-none">
          NEW ARRIVALS
        </h2>

        {/* Ürün Listesi (Grid) */}
        {/* Mobilde yatay scroll (snap), Desktopta grid yapı */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-8 pb-4 md:pb-0 px-4 md:px-0 scrollbar-hide">
          {newArrivalsData.map((product) => (
            <div key={product.id} className="min-w-49.5 md:min-w-0">
              <ProductCard data={product} />
            </div>
          ))}
        </div>

        {/* View All Butonu */}
        <div className="block md:flex justify-center mt-8 md:mt-12">
          <Link href="/shop">
            <Button
              variant="outline"
              className="w-full md:w-54.5 h-13 border-black/10 text-black cursor-pointer hover:bg-black hover:text-white"
            >
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
