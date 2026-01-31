import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

// Statik veri: İstatistikler
const stats = [
  { value: '200+', label: 'International Brands' },
  { value: '2,000+', label: 'High-Quality Products' },
  { value: '30,000+', label: 'Happy Customers' },
];

export default function Hero() {
  return (
    // Height 663px (Desktop), BG #F2F0F1
    <section className="bg-[#F2F0F1] lg:h-165.75 relative overflow-hidden">
      {/* Container (1240px max-width) */}
      <div className="frame h-full flex flex-col lg:flex-row items-center relative">
        {/* SOL KOLON: Metin ve Buton */}
        <div className="flex-1 w-full pt-10 lg:pt-0 z-10">
          {/* Başlık: Integral CF Bold, 577px max-width */}
          <h1 className="integral-text font-bold text-4xl uppercase sm:text-5xl lg:text-[64px] leading-none lg:leading-16 mb-6 lg:max-w-144.25">
            find clothes that matches your style
          </h1>

          {/* Alt Metin: Satoshi Regular, Opacity %60 */}
          <p className="font-satoshi text-black/60 text-sm lg:text-base mb-8 leading-5.5 lg:max-w-136.25">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>

          {/* Shop Now Butonu: 210x52px */}
          <Link href="/shop" className="block md:max-w-fit">
            <Button className="w-full sm:w-52.5 h-13">Shop Now</Button>
          </Link>

          {/* İstatistikler */}
          <div className="flex flex-wrap max-w-149 items-center gap-6 sm:gap-8 mt-10 lg:mt-12 justify-center lg:justify-start">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col">
                  <span className="font-satoshi font-bold text-2xl lg:text-[40px] text-black">
                    {stat.value}
                  </span>
                  <span className="font-satoshi text-black/60 text-xs lg:text-sm whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>

                {/* Ayırıcı Çizgi (Son eleman hariç) */}
                {/* 74px yükseklik (görsel denge için mobile göre ayarlandı), border 1px, %10 opacity */}
                {index !== stats.length - 1 && (
                  <div
                    className={`
                      h-12.5 lg:h-18.5 w-px bg-black/10 ml-6 sm:ml-8 
                      ${index === 0 ? 'block' : 'hidden min-[428px]:block'}
                    `}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SAĞ KOLON: Görseller */}
        <div className="relative lg:h-full flex items-end justify-center lg:justify-end mt-0 min-h-100 lg:min-h-0">
          {/* Büyük Yıldız (104x104) - Konum: Sağ Üst (Absolute) */}
          <div className="absolute top-[10%] right-[5%] lg:top-20 lg:-right-3 animate-pulse z-20">
            <Image
              src="/assets/images/hero-sparkle.svg"
              alt="Sparkle"
              width={104}
              height={104}
              className="w-17.5 h-17.5 lg:w-26 lg:h-26"
            />
          </div>

          {/* Küçük Yıldız (56x56) - Konum: Sol Orta (Absolute) */}
          <div className="absolute top-[40%] left-[5%] lg:top-78 lg:-left-3 animate-pulse delay-700 z-20">
            <Image
              src="/assets/images/hero-sparkle.svg"
              alt="Sparkle"
              width={56}
              height={56}
              className="w-10 h-10 lg:w-14 lg:h-14"
            />
          </div>

          {/* Ana Görsel (Couple) */}
          <div className="relative w-full max-w-125 lg:max-w-none lg:w-150 h-auto lg:h-full">
            {/* object-contain/cover yerine görseli direk yerleştiriyoruz ki taşmaları kontrol edelim */}
            <Image
              src="/assets/images/hero-couple.jpg"
              alt="Stylish Couple"
              width={600}
              height={663}
              priority
              className="w-full h-full object-contain object-bottom overflow-visible"
              style={{ objectViewBox: 'inset(5% 5% 29% 6%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
