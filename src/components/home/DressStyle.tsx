import Image from 'next/image';
import Link from 'next/link';
import { dressStyleData } from '@/data/mockData';

export default function DressStyle() {
  return (
    <section className="py-10 md:py-20">
      <div className="frame">
        {/* Gri Arka Planlı Kapsayıcı */}
        <div className="w-full bg-brand-gray rounded-[20px] md:rounded-[40px] px-6 md:px-16 py-10 md:py-16">
          {/* Bölüm Başlığı */}
          <h2 className="integral-text font-bold text-[32px] md:text-[48px] text-center mb-8 md:mb-16 leading-none uppercase">
            browse by dress style
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-5">
            {dressStyleData.map((item) => (
              <Link
                href={`/shop?category=${item.title.toLowerCase()}`}
                key={item.id}
                className={`relative h-47.5 md:h-72.25 w-full rounded-[20px] overflow-hidden group cursor-pointer ${item.className}`}
              >
                {/* Başlık (Sol Üst) */}
                <span className="absolute top-4 left-6 md:top-6 md:left-9 z-10 font-satoshi font-bold text-2xl md:text-4xl text-black">
                  {item.title}
                </span>

                <Image
                  src={item.image}
                  alt={item.title} // SEO ve Erişilebilirlik için title burada kalmalı
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority={item.id <= 2}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
