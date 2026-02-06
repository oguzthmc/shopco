'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ReviewCard from '@/components/product/ReviewCard';
import Button from '@/components/ui/Button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { reviewsData } from '@/data/mockData';

const RatingReviews = () => {
  // Başlangıçta 6 yorum göster
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    // 2'şer 2'şer artır veya kalanların hepsini yükle
    setVisibleCount((prev) => Math.min(prev + 2, reviewsData.length));
  };

  return (
    <section className="w-full">
      {/* HEADER: Başlık ve Filtreler */}
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6 gap-4 sm:gap-0">
        {/* Sol: Başlık */}
        <div className="flex items-center self-start sm:self-auto">
          <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-black mr-2">
            All Reviews
          </h3>
          <span className="font-satoshi font-normal text-sm sm:text-base text-black/60">
            ({reviewsData.length})
          </span>
        </div>

        {/* Sağ: Aksiyonlar */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {/* Filter Icon Button (Sadece görsel/mock işlev) */}
          <button
            type="button"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer shrink-0"
          >
            <Image
              src="/assets/icons/filter.svg"
              alt="filter"
              width={20}
              height={20}
            />
          </button>

          {/* Select (Latest, etc.) - Mobilde gizleyebilir veya küçültebiliriz */}
          <div className="hidden sm:block">
            <Select defaultValue="latest">
              <SelectTrigger className="min-w-30 w-auto h-12 rounded-full bg-[#F0F0F0] border-none font-satoshi font-medium text-black px-5 cursor-pointer hover:bg-black/10 transition-colors">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="most-relevant">Most Relevant</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Write Review Button */}
          <Button
            variant="primary"
            className="h-10 sm:h-12 px-4 sm:px-6 rounded-full text-xs sm:text-base whitespace-nowrap ml-auto sm:ml-0"
          >
            Write a Review
          </Button>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 sm:mb-9">
        {reviewsData.slice(0, visibleCount).map((review) => (
          <ReviewCard
            key={review.id}
            data={review}
            isAction={true}
            isDate={true}
          />
        ))}
      </div>

      {/* LOAD MORE BUTTON */}
      {visibleCount < reviewsData.length && (
        <div className="w-full flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-9 py-3 sm:px-11 sm:py-4 border border-black/10 rounded-[62px] font-satoshi font-medium text-sm sm:text-base text-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default RatingReviews;
