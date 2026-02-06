'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Review } from '@/types/review.types';
import Button from '../ui/Button';
import Rating from '../ui/Rating';

interface ReviewCardProps {
  data: Review;
  isAction?: boolean;
  isDate?: boolean;
  className?: string;
}

const ReviewCard = ({
  data,
  isAction = false,
  isDate = false,
  className,
}: ReviewCardProps) => {
  return (
    <div
      className={cn(
        'relative bg-white flex flex-col items-start border border-black/10 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden h-full',
        className,
      )}
    >
      <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
        {/* Yıldızlar */}
        <Rating rating={data.rating} size={22} />

        {/* Opsiyonel Action Butonu (Üç Nokta) */}
        {isAction && (
          <Button
            type="button"
            className="bg-white opacity-50 hover:opacity-100 transition-opacity p-1"
          >
            <Image
              src="/assets/icons/dots.svg"
              alt="options"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </Button>
        )}
      </div>

      {/* İsim ve Onay */}
      <div className="flex items-center gap-1 mb-2 sm:mb-3">
        <h4 className="font-satoshi font-bold text-base sm:text-xl text-black">
          {data.name}
        </h4>
        <Image
          src="/assets/icons/check.svg"
          alt="Verified"
          width={20}
          height={20}
          className="w-4 h-4 sm:w-5 sm:h-5"
        />
      </div>

      {/* Yorum */}
      <p className="font-satoshi font-normal text-sm sm:text-base text-black/60 grow">
        &quot;{data.comment}&quot;
      </p>

      {/* Opsiyonel Tarih */}
      {isDate && (
        <p className="font-satoshi font-medium text-sm sm:text-base text-black/60 mt-4 sm:mt-6">
          Posted on {data.date}
        </p>
      )}
    </div>
  );
};

export default ReviewCard;
