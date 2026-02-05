import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState } from '@/types/cart.types';
import { calculateItemPrice, compareAttributes } from '@/lib/utils';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: {
        items: [],
        totalQuantities: 0,
        totalPrice: 0,
      },

      addToCart: (newItemInput) => {
        const { cart } = get();

        // 1. Fiyatı Hesapla (Logic Düzeltmesi)
        // Eğer indirim varsa, price alanına indirimli fiyatı, originalPrice'a liste fiyatını yazarız.
        // Ancak newItemInput bize zaten ürünün ham verilerini getiriyor.
        // Burada store'a kaydederken 'price' alanının her zaman HESAPLANMIŞ SON FİYAT olduğundan emin oluyoruz.
        const finalPrice = calculateItemPrice(
          newItemInput.price,
          newItemInput.discountPercentage,
        );

        const newItem: CartItem = {
          ...newItemInput,
          price: finalPrice, // Artık sepetteki fiyat her zaman işlem görecek fiyattır.
        };

        const existingItem = cart.items.find(
          (item) =>
            item.id === newItem.id &&
            compareAttributes(item.attributes, newItem.attributes),
        );

        let updatedItems;

        if (existingItem) {
          updatedItems = cart.items.map((item) =>
            item.id === newItem.id &&
            compareAttributes(item.attributes, newItem.attributes)
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item,
          );
        } else {
          updatedItems = [...cart.items, newItem];
        }

        const totalQuantities = updatedItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const totalPrice = updatedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );

        set({
          cart: { items: updatedItems, totalQuantities, totalPrice },
        });

        // Debug için
        console.log('Cart Updated:', {
          items: updatedItems,
          totalQuantities,
          totalPrice,
        });
      },

      removeFromCart: (id, attributes) => {
        const { cart } = get();
        const updatedItems = cart.items.filter(
          (item) =>
            !(item.id === id && compareAttributes(item.attributes, attributes)),
        );

        const totalQuantities = updatedItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const totalPrice = updatedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );

        set({ cart: { items: updatedItems, totalQuantities, totalPrice } });
      },

      updateQuantity: (id, attributes, type) => {
        const { cart } = get();
        const updatedItems = cart.items.map((item) => {
          if (
            item.id === id &&
            compareAttributes(item.attributes, attributes)
          ) {
            const newQuantity =
              type === 'increase' ? item.quantity + 1 : item.quantity - 1;
            return { ...item, quantity: Math.max(1, newQuantity) };
          }
          return item;
        });

        const totalQuantities = updatedItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const totalPrice = updatedItems.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );

        set({ cart: { items: updatedItems, totalQuantities, totalPrice } });
      },
    }),
    {
      name: 'cart-storage',
    },
  ),
);
