'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { tabsData } from '@/data/mockData';

// İçerik Bileşenleri
import ProductDetails from './ProductDetails';
import RatingReviews from './RatingReviews';
import Faq from './Faq';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className="w-full mt-5 md:mt-8 mb-6 md:mb-10">
      {/* --- Tab Başlıkları (Navigation) --- */}
      <div className="grid grid-cols-3 items-center mb-6 sm:mb-8 border-b border-black/10 relative">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              // Layout & Spacing
              'pb-3 sm:pb-5 relative block w-full cursor-pointer',
              // Typography (Mobilde sığması için text boyutu ayarlandı)
              'font-satoshi text-center transition-all duration-300',
              'text-[14px] sm:text-xl md:text-xl', // Mobile: 13px, Tablet: Base, Desktop: XL

              // Active State Logic
              activeTab === tab.id
                ? 'font-medium text-black'
                : 'font-normal text-black/60 hover:text-black/80',
            )}
          >
            {tab.label}

            {/* Border Hack: 
              Border-bottom'ı butonun kendisine vermek yerine, 
              aktif olduğunda butonun en altına absolute bir div (çizgi) koyuyoruz.
              Bu sayede çizgi container'ın border'ının tam üzerine biner.
            */}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black translate-y-px" />
            )}
          </button>
        ))}
      </div>

      {/* --- Tab İçerikleri --- */}
      <div className="w-full">
        {activeTab === 1 && <ProductDetails />}
        {activeTab === 2 && <RatingReviews />}
        {activeTab === 3 && <Faq />}
      </div>
    </div>
  );
};

export default ProductTabs;
