import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product.types';
import Rating from '../ui/Rating';

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
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
            <Rating rating={data.rating} size={18} />
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
