import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product.types';

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  // Yıldızları render etme mantığı
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Tam Yıldızlar
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image
          key={`star-${i}`}
          src="/assets/icons/star.svg"
          alt="star"
          width={18}
          height={18}
          className="mr-1" // Yıldızlar arası hafif boşluk
        />,
      );
    }

    // Yarım Yıldız
    if (hasHalfStar) {
      stars.push(
        <Image
          key="half-star"
          src="/assets/icons/half-star.svg"
          alt="half star"
          width={9} // Yarım yıldız genelde tamın yarısı genişlikte veya özel icon boyutunda olur
          height={18}
          className="mr-1"
        />,
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-col w-full max-w-73.75">
      {/* 1. Ürün Görseli (Tıklanabilir) */}
      <Link
        href={`/shop/product/${data.id}`}
        className="mb-4 w-full h-74.5 relative overflow-hidden rounded-[20px]"
      >
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
      </Link>

      {/* 2. Ürün Bilgileri */}
      <div>
        {/* Başlık: Satoshi Bold 20px */}
        <h3 className="font-satoshi font-bold text-[20px] leading-tight text-black mb-2 truncate">
          {data.title}
        </h3>

        {/* Rating Alanı */}
        <div className="flex items-center mb-2">
          <div className="flex items-center mr-3">
            {renderStars(data.rating)}
          </div>
          {/* Puan Yazısı: Satoshi Regular 14px */}
          <span className="font-satoshi font-normal text-sm text-black/60">
            {data.rating}/5
          </span>
        </div>

        {/* Fiyat Alanı */}
        <div className="flex items-center gap-3">
          {/* Güncel Fiyat: Satoshi Bold 24px */}
          <span className="font-satoshi font-bold text-2xl text-black">
            ${data.price}
          </span>

          {/* İndirimsiz Fiyat (Varsa) */}
          {data.originalPrice && (
            <span className="font-satoshi font-bold text-2xl text-black/40 line-through">
              ${data.originalPrice}
            </span>
          )}

          {/* İndirim Rozeti (Varsa) */}
          {data.discountPercentage && (
            <span className="bg-[#FF3333]/10 text-[#FF3333] font-satoshi font-medium text-xs px-3.5 py-1.5 rounded-[62px]">
              -{data.discountPercentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
