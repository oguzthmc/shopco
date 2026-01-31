import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 py-6 sticky top-0 z-40">
      <div className="frame flex items-center justify-between gap-8">
        {/* 1. Logo ve Mobil Menü */}
        <div className="flex items-center gap-4">
          {/* Mobil Menü İkonu (Varsa lokal, yoksa geçici buton) */}
          <button className="lg:hidden">
            <Image
              src="/assets/icons/hamburger-menu.svg"
              alt="Menu"
              width={24}
              height={24}
            />
          </button>

          <Link
            href="/"
            className="text-2xl lg:text-[32px] integral-text font-bold uppercase mb-1"
          >
            shop.co
          </Link>
        </div>

        {/* 2. Linkler (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-satoshi text-base text-black">
          <Link
            href="/shop"
            className="hover:text-gray-600 flex items-center gap-1"
          >
            Shop
            <Image
              src="/assets/icons/dropdown.svg"
              alt="dropdown"
              width={12}
              height={12}
              className="mt-1"
            />
          </Link>
          <Link href="/on-sale" className="hover:text-gray-600">
            On Sale
          </Link>
          <Link href="/new-arrivals" className="hover:text-gray-600">
            New Arrivals
          </Link>
          <Link href="/brands" className="hover:text-gray-600">
            Brands
          </Link>
        </div>

        {/* 3. Arama ve İkonlar */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          {/* Arama Çubuğu (Desktop) */}
          <div className="hidden lg:flex items-center bg-[#F0F0F0] rounded-full px-4 py-3 flex-1 max-w-144.25">
            <Image
              src="/assets/icons/search.svg"
              alt="Search"
              width={20}
              height={20}
              className="opacity-40 mr-3"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent border-none outline-none text-base w-full font-satoshi placeholder:text-gray-400 text-black"
            />
          </div>

          {/* Sağ İkonlar */}
          <div className="flex items-center gap-4">
            {/* Mobilde Arama İkonu */}
            <button className="lg:hidden">
              <Image
                src="/assets/icons/search.svg"
                alt="Search"
                width={20}
                height={20}
                className="text-black"
              />
            </button>

            <Link href="/cart" className="hover:opacity-70 transition-opacity">
              <Image
                src="/assets/icons/shopping-cart.svg"
                alt="Cart"
                width={22}
                height={20}
              />
            </Link>

            <Link
              href="/profile"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/assets/icons/circle-user.svg"
                alt="Profile"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
