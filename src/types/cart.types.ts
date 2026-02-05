export interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  attributes: string[]; // [Size, Color]
  quantity: number;
}

export interface CartState {
  cart: {
    items: CartItem[];
    totalQuantities: number;
    totalPrice: number;
  };
  addToCart: (
    item: Omit<CartItem, 'price'> & {
      price: number;
      originalPrice?: number;
      discountPercentage?: number;
    },
  ) => void;
  removeFromCart: (id: number, attributes: string[]) => void;
  updateQuantity: (
    id: number,
    attributes: string[],
    type: 'increase' | 'decrease',
  ) => void;
}
