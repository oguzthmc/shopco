'use client';

import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
  useCallback,
} from 'react';

// --- TİP TANIMLAMALARI ---

// Responsive (Mobil/Tablet) kırılım noktaları için ayarlar
interface ResponsiveSetting {
  breakpoint: number; // Örn: 1024px altı
  settings: {
    slidesToShow: number; // Kaç slayt görünecek
    slidesToScroll?: number;
  };
}

// Slider genel ayarları
interface SliderSettings {
  slidesToShow: number;
  slidesToScroll?: number;
  infinite?: boolean; // Sonsuz döngü olsun mu?
  responsive?: ResponsiveSetting[];
  autoplay?: boolean;
  autoplaySpeed?: number;
}

// Component Props
interface SliderProps {
  children: React.ReactNode;
  settings: SliderSettings;
  className?: string; // Dışarıdan ekstra stil (padding vb.) geçmek için
}

// Parent component'in erişebileceği fonksiyonlar (Ref ile)
export interface SliderRef {
  slickNext: () => void;
  slickPrev: () => void;
}

const Slider = forwardRef<SliderRef, SliderProps>(
  ({ children, settings, className = '' }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(settings.slidesToShow);

    // Dokunmatik kaydırma (Touch Swipe) için referanslar
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const totalSlides = React.Children.count(children);

    // --- RESPONSIVE AYARLARI DİNLEME ---
    // Ekran boyutu değiştiğinde kaç slayt gösterileceğini günceller.
    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        let newSlidesToShow = settings.slidesToShow;

        if (settings.responsive) {
          // Breakpointlere göre büyükten küçüğe sıralayıp uygun olanı buluyoruz
          const matched = settings.responsive
            .sort((a, b) => a.breakpoint - b.breakpoint)
            .find((r) => width < r.breakpoint);

          if (matched) {
            newSlidesToShow = matched.settings.slidesToShow;
          }
        }
        setSlidesToShow(newSlidesToShow);
      };

      handleResize(); // İlk yüklemede çalıştır
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [settings]);

    // --- NAVİGASYON FONKSİYONLARI ---
    const next = useCallback(() => {
      setCurrentIndex((prev) => {
        if (prev >= totalSlides - slidesToShow)
          return settings.infinite ? 0 : prev;
        return prev + 1;
      });
    }, [slidesToShow, totalSlides, settings.infinite]);

    const prev = useCallback(() => {
      setCurrentIndex((prev) => {
        if (prev === 0)
          return settings.infinite ? totalSlides - slidesToShow : 0;
        return prev - 1;
      });
    }, [slidesToShow, totalSlides, settings.infinite]);

    // 2. useEffect ile Autoplay Mantığı
    useEffect(() => {
      if (!settings.autoplay) return;

      const interval = setInterval(() => {
        next();
      }, settings.autoplaySpeed || 3000); // Varsayılan 3 saniye

      return () => clearInterval(interval);
    }, [currentIndex, next, settings.autoplay, settings.autoplaySpeed]); // currentIndex değişince timer sıfırlanır

    // Parent bileşenin bu fonksiyonları tetikleyebilmesi için (useRef ile)
    useImperativeHandle(ref, () => ({
      slickNext: next,
      slickPrev: prev,
    }));

    // --- TOUCH (DOKUNMATİK) OLAYLARI ---
    const handleTouchStart = (e: React.TouchEvent) => {
      touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStartX.current || !touchEndX.current) return;
      const distance = touchStartX.current - touchEndX.current;

      // 50px'den fazla kaydırıldıysa aksiyon al
      if (distance > 50) next(); // Sola kaydır (İleri)
      if (distance < -50) prev(); // Sağa kaydır (Geri)

      // Reset
      touchStartX.current = null;
      touchEndX.current = null;
    };

    return (
      // Ana Konteyner: Taşmaları gizler
      <div
        className={`w-full overflow-hidden relative ${className}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Kızak (Track): İçindeki elemanları yan yana dizer ve transform ile kaydırır.
         NOT: 'transform' ve 'width' değerleri dinamik hesaplandığı için inline style kullanıldı.
         Burada Tailwind ile dinamik değer vermek (w-[${value}%]) doğru olmayabilirdi.
      */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {React.Children.map(children, (child) => (
            // Her bir slayt öğesi
            <div
              className="shrink-0 px-1" // px-1: Kartlar arası boşluk efekti yaratır (Gap yerine padding kullanmak hesaplamayı kolaylaştırır)
              style={{ width: `${100 / slidesToShow}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  },
);

Slider.displayName = 'Slider';
export default Slider;
