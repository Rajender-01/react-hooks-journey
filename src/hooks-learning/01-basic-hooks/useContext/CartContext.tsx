"use client"
import { createContext, useContext, useMemo, useReducer } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartState = {
  items: Product[];
};

type CartAction =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: number };

type CartContextType = {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);
const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => action.payload !== item.id),
      };
    default:
      return state;
  }
};
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD", payload: product });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const totalPrice = state.items.reduce((acc, item) => acc + item.price, 0);
  const value = useMemo(
    () => ({
      items: state.items,
      addToCart,
      removeFromCart,
      totalPrice,
    }),
    [state.items, totalPrice],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const cartContext = useContext(CartContext);
  if(!cartContext) {
    throw new Error("useCart must be used within CartProvider");
  }
  return cartContext;
}
