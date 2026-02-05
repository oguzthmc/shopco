'use client';

import Image from 'next/image';
import { colorsData } from '@/data/mockData';
import { useProductStore } from '@/store/useProductStore';
import { cn } from '@/lib/utils';
import { useIsMounted } from '@/hooks/useIsMounted';

const ColorSelector = () => {
  // Zustand store'dan state ve fonksiyonu çekiyoruz
  const { selectedColor, setSelectedColor } = useProductStore();

  const isMounted = useIsMounted();

  // Henüz mount olmadıysa (Sunucu tarafı veya ilk render),
  // layout kaymasını önlemek için iskeleti göster ama seçimi gösterme.
  if (!isMounted) {
    return (
      <div className="flex flex-col w-full">
        <span className="font-satoshi font-normal text-sm md:text-base text-black/60 mb-4">
          Select Colors
        </span>
        <div className="flex items-center flex-wrap gap-3 md:gap-4">
          {colorsData.map((color, index) => (
            <div
              key={index}
              className={cn(
                'relative rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center cursor-pointer',
                color.code,
              )}
            />
          ))}
        </div>
      </div>
    );
  }

  // Mount olduktan sonra (LocalStorage verisi gelmiş olur):
  return (
    <div className="flex flex-col w-full">
      <span className="font-satoshi font-normal text-sm md:text-base text-black/60 mb-4">
        Select Colors
      </span>

      <div className="flex items-center flex-wrap gap-3 md:gap-4">
        {colorsData.map((color, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedColor(color)}
            className={cn(
              'relative rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer',
              color.code,
            )}
            aria-label={`Select ${color.name}`}
          >
            {selectedColor.name === color.name && (
              <Image
                src="/assets/icons/checkmark.svg"
                alt="Selected"
                width={16}
                height={16}
                className="w-4 h-4 opacity-100" // Görünürlük ayarı
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
