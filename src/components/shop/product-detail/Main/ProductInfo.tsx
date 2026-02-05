'use client';

import React from 'react';
import { Product } from '@/types/product.types';
import Rating from '@/components/ui/Rating';

const ProductInfo = ({ data }: { data: Product }) => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. BAŞLIK */}
      <h1 className="integral-text font-bold text-2xl md:text-[40px] leading-tight md:leading-none uppercase mb-3 md:mb-3.5 text-black">
        {data.title}
      </h1>

      {/* 2. RATING (YILDIZLAR) */}
      <div className="flex items-center gap-3 mb-3 md:mb-3.5">
        <Rating rating={data.rating} size={24} />
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
