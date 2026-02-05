'use client';

import { useProductStore } from '@/store/useProductStore';
import { cn } from '@/lib/utils';
import { useIsMounted } from '@/hooks/useIsMounted';
import { sizesData } from '@/data/mockData';

const SizeSelector = () => {
  const { selectedSize, setSelectedSize } = useProductStore();
  const isMounted = useIsMounted();

  // Hydration Kontrolü:
  // Sayfa yüklenmeden önce varsayılan (seçimsiz) hali göster
  if (!isMounted) {
    return (
      <div className="flex flex-col w-full">
        <span className="font-satoshi font-normal text-sm md:text-base text-black/60 mb-4">
          Choose Size
        </span>
        <div className="flex items-center flex-wrap gap-3">
          {sizesData.map((size, index) => (
            <div
              key={index}
              className="bg-[#F0F0F0] px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-[62px] text-black/60"
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <span className="font-satoshi font-normal text-sm md:text-base text-black/60 mb-4">
        Choose Size
      </span>
      <div className="flex items-center flex-wrap gap-2 md:gap-3">
        {sizesData.map((size, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedSize(size)}
            className={cn(
              'px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base rounded-[62px] transition-all duration-300 font-satoshi',
              // Seçiliyse Siyah, Değilse Gri
              selectedSize === size
                ? 'bg-black text-white font-medium'
                : 'bg-[#F0F0F0] text-black/60 hover:bg-[#E0E0E0]',
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
