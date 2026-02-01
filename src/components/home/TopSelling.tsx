import ProductCard from '@/components/product/ProductCard';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { topSellingData } from '@/data/mockData';

export default function TopSelling() {
  return (
    <section>
      <div className="frame">
        {/* BÖLÜM AYIRICI ÇİZGİ */}
        {/* 1240px container içinde, 1px yükseklik, %10 siyah */}
        <div className="w-full h-px bg-black/10 mb-12 md:mb-16"></div>

        {/* Başlık */}
        <h2 className="integral-text font-bold text-[32px] md:text-[48px] text-center my-8 md:mb-14 leading-none">
          TOP SELLING
        </h2>

        {/* Ürün Listesi (Grid) */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-8 pb-4 md:pb-0 px-4 md:px-0 scrollbar-hide">
          {topSellingData.map((product) => (
            <div key={product.id} className="min-w-49.5 md:min-w-0">
              <ProductCard data={product} />
            </div>
          ))}
        </div>

        {/* View All Butonu */}
        <div className="flex justify-center mt-8 md:mt-12 px-4 md:px-0">
          <Link href="/shop" className="w-full md:w-auto">
            <Button
              variant="outline"
              className="w-full md:w-54.5 h-13 border-black/10 text-black hover:bg-black hover:text-white"
            >
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
