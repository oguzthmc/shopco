import Image from 'next/image';

// Marka listesi ve görsel yolları
const brands = [
  {
    name: 'Versace',
    src: '/assets/brands/versace.svg',
    width: 166,
    height: 34,
  },
  { name: 'Zara', src: '/assets/brands/zara.svg', width: 91, height: 38 },
  { name: 'Gucci', src: '/assets/brands/gucci.svg', width: 156, height: 36 },
  { name: 'Prada', src: '/assets/brands/prada.svg', width: 194, height: 32 },
  {
    name: 'Calvin Klein',
    src: '/assets/brands/ck.svg',
    width: 206,
    height: 34,
  },
];

export default function BrandBar() {
  return (
    // Height: 122px, Background: Black (#000000)
    <div className="bg-black w-full py-6 md:py-0">
      <div className="frame flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center h-full gap-8 md:gap-0 min-h-[122px]">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex items-center justify-center shrink-0"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className="w-auto h-6 sm:h-8 md:h-auto object-contain opacity-100 hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
