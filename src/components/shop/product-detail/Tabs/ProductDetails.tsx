'use client';

import { specificationsData } from '@/data/mockData';
import { useIsMounted } from '@/hooks/useIsMounted';

const ProductDetails = () => {
  const isMounted = useIsMounted();

  // 1. Hydration ve Linter Çözümü:
  // Sunucu tarafında ve ilk client render'ında (isMounted: false) hiçbir şey gösterme veya Loading göster.
  // Böylece "Random Data" yüzünden oluşan çakışma engellenir.
  if (!isMounted) {
    return null; // veya <div className="p-4">Loading specs...</div>
  }

  return (
    <div className="w-full">
      <h3 className="font-satoshi font-bold text-base sm:text-2xl text-black mb-4 sm:mb-5">
        Product Specifications
      </h3>

      <div className="flex flex-col">
        {specificationsData.map((item, i) => (
          <div
            className="grid grid-cols-3 gap-4 border-b border-black/5 last:border-none"
            key={i}
          >
            <div className="py-2.5 lg:py-4">
              <p className="font-satoshi font-normal text-sm md:text-base text-black/60">
                {item.label}
              </p>
            </div>

            <div className="col-span-2 py-2.5 lg:py-4">
              <p className="font-satoshi font-medium text-sm md:text-base text-black">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
