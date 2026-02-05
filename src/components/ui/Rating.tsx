'use client';

import Image from 'next/image';

interface RatingProps {
  rating: number; // Örn: 3.5, 4, 5
  maxStars?: number; // Varsayılan 5
  size?: number; // Varsayılan 18 (px)
  className?: string; // Ekstra stil gerekirse
}

const Rating = ({
  rating,
  maxStars = 5,
  size = 18,
  className,
}: RatingProps) => {
  const renderStars = () => {
    return Array.from({ length: maxStars }).map((_, i) => {
      // 1. Tam Yıldız
      if (i < Math.floor(rating)) {
        return (
          <Image
            key={i}
            src="/assets/icons/star.svg"
            alt="star"
            width={size}
            height={size}
            className="object-contain" // Resmi orantılı tut
          />
        );
      }
      // 2. Yarım Yıldız (Ondalık varsa ve sıra o indekse geldiyse)
      else if (rating % 1 !== 0 && i === Math.floor(rating)) {
        return (
          <Image
            key={i}
            src="/assets/icons/half-star.svg"
            alt="half star"
            width={size}
            height={size}
            style={{ width: `${size}px`, height: `${size}px` }}
            className="object-contain"
          />
        );
      }
      // 3. Boş Yıldız (Opsiyonel - İleride empty-star ikonu eklenirse burası açılır)
      // Şimdilik boş dönüyoruz (render etmiyoruz)
      return null;
    });
  };

  return (
    <div className={`flex items-center gap-1 ${className || ''}`}>
      {renderStars()}
    </div>
  );
};

export default Rating;
