import React from 'react';
import ProductGallery from './ProductGallery';
import { Product } from '@/types/product';

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

        {/* SAĞ KOLON: Ürün Bilgileri (Şimdilik Placeholder) */}
        <div className="flex flex-col gap-6">
          {/* Buraya ProductInfo component'i gelecek */}
          <div className="p-4 border border-dashed border-gray-300 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Details Placeholder</h2>
            <p>Title: {data.title}</p>
            <p>Price: ${data.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailMainContent;
