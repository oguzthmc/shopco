'use client';

import { useState } from 'react';
import { Product } from '@/types/product.types';
import QuantitySelector from '@/components/ui/QuantitySelector';
import AddToCartBtn from './AddToCartBtn';

const AddToCartSection = ({ data }: { data: Product }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center w-full">
      {/* UI Bileşeni Kullanımı */}
      <QuantitySelector
        quantity={quantity}
        onDecrease={handleDecrease}
        onIncrease={handleIncrease}
      />

      {/* Sepete Ekle Butonu */}
      <AddToCartBtn data={{ ...data, quantity }} />
    </div>
  );
};

export default AddToCartSection;
