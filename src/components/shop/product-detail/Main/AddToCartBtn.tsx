'use client';

import { Product } from '@/types/product.types';
import { useCartStore } from '@/store/useCartStore';
import { useProductStore } from '@/store/useProductStore';
import Button from '@/components/ui/Button';

interface AddToCartBtnProps {
  data: Product & { quantity: number }; // quantity prop olarak gelecek
}

const AddToCartBtn = ({ data }: AddToCartBtnProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  // Seçili renk ve bedeni store'dan alıyoruz
  const { selectedColor, selectedSize } = useProductStore();

  const handleAddToCart = () => {
    // Sepete Ekleme İşlemi
    addToCart({
      id: data.id,
      name: data.title,
      image: data.image,
      price: data.price,
      originalPrice: data.originalPrice,
      discountPercentage: data.discountPercentage,
      quantity: data.quantity,
      attributes: [selectedSize, selectedColor.name], // Örn: ["Large", "Green"]
    });

    // Kullanıcıya Geri Bildirim (Geçici) - İleride Toast eklenecek
    console.log(
      `Added to cart: ${data.title} - ${selectedSize} - ${selectedColor.name}`,
    );
    alert('Product added to cart!');
  };

  return (
    <Button
      variant="primary"
      fullWidth
      onClick={handleAddToCart}
      className="ml-3 sm:ml-5 h-11 md:h-13" // Height override
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
