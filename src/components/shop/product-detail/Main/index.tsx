import ProductGallery from './ProductGallery';
import { Product } from '@/types/product';
import ProductInfo from './ProductInfo';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import AddToCartSection from './AddToCartSection';

interface ProductMainProps {
  data: Product;
}

const ProductMain = ({ data }: ProductMainProps) => {
  return (
    <section className="mb-10 md:mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* SOL: Galeri */}
        <div className="w-full">
          <ProductGallery product={data} />
        </div>

        {/* SAĞ: Bilgiler + Seçimler */}
        <div className="w-full">
          <ProductInfo data={data} />

          {/* Gelecek bileşenler için ayırıcılar ve placeholderlar */}
          <hr className="h-px border-t-black/10 my-4 md:my-6" />

          {/* Renk Seçimi Bileşeni */}
          <ColorSelector />

          <hr className="h-px border-t-black/10 my-4 md:my-6" />

          <SizeSelector />

          <hr className="h-px border-t-black/10 my-4 md:my-6" />

          <AddToCartSection data={data} />
        </div>
      </div>
    </section>
  );
};

export default ProductMain;
