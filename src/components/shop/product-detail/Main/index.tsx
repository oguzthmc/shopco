import React from 'react';
import ProductGallery from './ProductGallery';
import { Product } from '@/types/product';
import ProductInfo from './ProductInfo';

interface ProductDetailMainContentProps {
  data: Product;
}

const ProductDetailMainContent = ({ data }: ProductDetailMainContentProps) => {
  return (
    <section className="mb-10 md:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* SOL KOLON: Galeri */}
        <div className="w-full">
          <ProductGallery product={data} />
        </div>

        {/* SAĞ: Bilgiler + Seçimler */}
        <div className="w-full">
          <ProductInfo data={data} />

          {/* Gelecek bileşenler için ayırıcılar ve placeholderlar */}
          <hr className="h-px border-t-black/10 my-6" />

          {/* <ColorSelector /> Gelecek */}
          <hr className="h-px border-t-black/10 my-6" />

          {/* <SizeSelector /> Gelecek */}
          <hr className="hidden md:block h-px border-t-black/10 my-6" />

          {/* <AddToCartSection /> Gelecek */}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailMainContent;
