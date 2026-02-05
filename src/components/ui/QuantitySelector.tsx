'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
}

const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  className,
}: QuantitySelectorProps) => {
  return (
    <div
      className={cn(
        'bg-[#F0F0F0] w-27.5 sm:w-42.5 h-11 sm:h-13 px-4 sm:px-5 rounded-[62px] flex items-center justify-between',
        className,
      )}
    >
      <button
        type="button"
        onClick={onDecrease}
        className="w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
        aria-label="Decrease quantity"
      >
        <Image
          src="/assets/icons/minus.svg"
          alt="decrease"
          width={20}
          height={20}
        />
      </button>

      <span className="font-satoshi font-medium text-sm sm:text-base text-black">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className="w-5 h-5 flex items-center justify-center hover:opacity-70 transition-opacity"
        aria-label="Increase quantity"
      >
        <Image
          src="/assets/icons/plus.svg"
          alt="increase"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default QuantitySelector;
