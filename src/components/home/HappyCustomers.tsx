'use client';

import { useMemo, useRef } from 'react';
import Image from 'next/image';
import { reviewsData } from '@/data/mockData';
import Slider, { SliderRef } from '@/components/ui/Slider'; // İsmi güncelledik

export default function HappyCustomers() {
  // Slider'ı dışarıdan kontrol etmek için referans (Next/Prev butonları için)
  const sliderRef = useRef<SliderRef>(null);

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  // --- SLIDER KONFİGÜRASYONU ---
  // Bağımlılık dizisi [] boş olduğu için bu obje sadece ilk render'da oluşturulur ve bir daha referansı değişmez.
  const settings = useMemo(
    () => ({
      slidesToShow: 3, // Masaüstünde 3 kart
      infinite: true,
      autoplay: true,
      autoplaySpeed: 40000,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 640, // Mobil: Tek kart tam ekran
          settings: { slidesToShow: 1 },
        },
      ],
    }),
    [],
  );

  // Yıldız oluşturma yardımcı fonksiyonu
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Image
        key={i}
        src="/assets/icons/star.svg"
        alt="star"
        width={19}
        height={19}
        className="mr-1.5"
      />
    ));
  };

  return (
    <section className="pb-10 md:pb-20 relative">
      <div className="frame relative">
        {/* --- ÜST KISIM: BAŞLIK VE BUTONLAR --- */}
        <div className="flex justify-between items-end mb-6 md:mb-10 px-4 md:px-2">
          <h2 className="integral-text font-bold text-[32px] md:text-[48px] leading-none uppercase max-w-70 md:max-w-none">
            our happy customers
          </h2>

          <div className="flex gap-4">
            <button
              onClick={previous}
              className="cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Önceki Yorum"
            >
              <Image
                src="/assets/icons/left-arrow.svg"
                alt="Previous"
                width={20}
                height={20}
              />
            </button>
            <button
              onClick={next}
              className="cursor-pointer hover:opacity-70 transition-opacity"
              aria-label="Sonraki Yorum"
            >
              <Image
                src="/assets/icons/right-arrow.svg"
                alt="Next"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* --- SLIDER ALANI --- */}
        <div className="relative mt-10 px-4 md:px-0 -mx-4 md:mx-0">
          <Slider ref={sliderRef} settings={settings}>
            {reviewsData.map((review) => (
              <div key={review.id} className="py-2 px-2">
                {' '}
                {/* Kartın shadow'u kesilmesin diye dikey padding */}
                {/* --- TEKİL YORUM KARTI --- */}
                <div className="w-full h-60 border border-black/10 rounded-[20px] px-8 py-7 flex flex-col gap-3 bg-white relative hover:shadow-lg transition-shadow duration-300">
                  {/* Üst: Yıldızlar ve Kullanıcı Bilgisi */}
                  <div className="flex flex-col gap-3">
                    {/* Yıldızlar */}
                    <div className="flex">{renderStars(review.rating)}</div>

                    {/* İsim ve Onay İkonu */}
                    <div className="flex items-center gap-1 h-6">
                      <span className="font-satoshi font-bold text-[20px] leading-5.5 text-black">
                        {review.name}
                      </span>
                      <Image
                        src="/assets/icons/check.svg"
                        alt="Verified"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                  </div>

                  {/* Alt: Yorum Metni */}
                  <p
                    className="font-satoshi font-normal text-base text-black/60 tracking-normal line-clamp-5"
                    style={{ lineHeight: '22px' }}
                  >
                    &quot;{review.comment}&quot;
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
