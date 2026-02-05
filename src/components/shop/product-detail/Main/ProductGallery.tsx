'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/product.types';

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery = ({ product }: ProductGalleryProps) => {
  // Başlangıçta ana resmi seçili yapıyoruz
  const [selectedImage, setSelectedImage] = useState<string>(product.image);

  // Ürün değişirse (örneğin alttan başka ürüne tıklandı) state'i güncelle
  useEffect(() => {
    setSelectedImage(product.image);
  }, [product]);

  // Eğer galeri yoksa sadece ana resmi kullanıp array yapıyoruz
  const images =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image];

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3.5 w-full">
      {/* --- KÜÇÜK RESİMLER (THUMBNAILS) --- */}
      <div className="flex md:flex-col gap-3.5 w-full md:w-auto overflow-x-auto md:overflow-visible">
        {images.map((photo, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(photo)}
            className={`
              relative w-27.75 h-26.5 md:w-38 md:h-41.75 shrink-0
              rounded-[20px] overflow-hidden border bg-[#F0EEED]
              transition-all duration-300 cursor-pointer
              ${selectedImage === photo ? 'border-black border-2' : 'border-transparent'}
            `}
          >
            <Image
              src={photo}
              alt={`${product.title} view ${index + 1}`}
              fill
              className="object-cover" // Ürünlerin kesilmemesi için contain ve padding
            />
          </button>
        ))}
      </div>

      {/* --- BÜYÜK RESİM (MAIN IMAGE) --- */}
      <div className="relative w-full md:flex-1 h-75 md:h-132.5 bg-[#F0EEED] rounded-[20px] overflow-hidden">
        <Image
          src={selectedImage}
          alt={product.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
          priority // Ana resim olduğu için LCP (Largest Contentful Paint) için önemli
        />
      </div>
    </div>
  );
};

export default ProductGallery;
