'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';

const ProductInfo = ({ data }: { data: Product }) => {
  // Yıldızları render etme mantığı
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => {
      // Tam yıldız kontrolü (Örn: 4.5 için ilk 4 döngüde tam yıldız basar)
      if (rating >= i + 1) {
        return (
          <Image
            key={i}
            src="/assets/icons/star.svg"
            alt="star"
            width={24}
            height={24}
            className="w-4.5 h-4.5 md:w-6 md:h-6"
          />
        );
      }
      // Yarım yıldız kontrolü (Örn: 4.5 için i=4 iken buraya girer)
      else if (rating > i && rating < i + 1) {
        return (
          <Image
            key={i}
            src="/assets/icons/half-star.svg"
            alt="half star"
            width={24}
            height={24}
            className="w-4.5 h-4.5 md:w-6 md:h-6" // Tasarımda yarım yıldız boyutu genelde tam ile aynıdır
          />
        );
      }
      // Boş yıldız göstermek istersen buraya else ekleyebilirsin,
      // şimdilik tasarımda sadece dolular istendiği için boş geçiyoruz.
      return null;
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. BAŞLIK */}
      <h1 className="integral-text font-bold text-2xl md:text-[40px] leading-tight md:leading-none uppercase mb-3 md:mb-3.5 text-black">
        {data.title}
      </h1>

      {/* 2. RATING (YILDIZLAR) */}
      <div className="flex items-center gap-3 mb-3 md:mb-3.5">
        <div className="flex gap-1.5">{renderStars(data.rating)}</div>
        <span className="font-satoshi font-normal text-xs md:text-sm text-black pt-1">
          {data.rating}
          <span className="text-black/60">/5</span>
        </span>
      </div>

      {/* 3. FİYAT ALANI */}
      <div className="flex items-center gap-3 mb-5 md:mb-5">
        {/* Güncel Fiyat */}
        <span className="font-satoshi font-bold text-2xl md:text-[32px] text-black">
          ${data.price}
        </span>

        {/* İndirim Kontrolü: Eğer originalPrice ve discountPercentage varsa göster */}
        {data.originalPrice && data.discountPercentage && (
          <>
            <span className="font-satoshi font-bold text-2xl md:text-[32px] text-black/40 line-through">
              ${data.originalPrice}
            </span>
            <span className="font-satoshi font-medium text-[10px] md:text-xs text-[#FF3333] bg-[#FF3333]/10 py-1.5 px-3.5 rounded-[20px]">
              -{data.discountPercentage}%
            </span>
          </>
        )}
      </div>

      {/* 4. AÇIKLAMA */}
      <p className="font-satoshi font-normal text-sm md:text-base text-black/60 leading-5 md:leading-5.5">
        {data.description || 'No description available.'}
      </p>
    </div>
  );
};

export default ProductInfo;
