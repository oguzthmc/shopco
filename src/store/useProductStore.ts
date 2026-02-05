import { create } from 'zustand';
import { Color, colorsData } from '@/data/mockData';
import { persist } from 'zustand/middleware';

interface ProductState {
  selectedColor: Color;
  selectedSize: string;
  quantity: number;

  // Actions
  setSelectedColor: (color: Color) => void;
  setSelectedSize: (size: string) => void;
  setQuantity: (quantity: number) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      // Başlangıç değerleri
      selectedColor: colorsData[0],
      selectedSize: 'Large',
      quantity: 1,

      // State güncelleyiciler
      setSelectedColor: (color) => set({ selectedColor: color }),
      setSelectedSize: (size) => set({ selectedSize: size }),
      setQuantity: (quantity) => set({ quantity }),
    }),
    {
      name: 'product-storage', // <-- 3. localStorage'daki anahtar ismi (Unique olmalı)
      // Varsayılan olarak 'localStorage' kullanılır, o yüzden extra ayara gerek yok.
    },
  ),
);
