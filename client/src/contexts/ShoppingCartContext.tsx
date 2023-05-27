import ShoppingCart from "@/components/cart/ShoppingCart";
import { useCart } from "@/hooks/useCart";
import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
};

type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartItem[];
  clearCart: () => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useCart<CartItem[]>("cart", []);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  /**
   * Adds an item to the cart.
   * @param id The ID of the item to add to the cart
   */
  function addToCart(id: number) {
    setCartItems((cartItems) => {
      const itemExists = cartItems.find((item) => item.id === id);
      if (itemExists) {
        return cartItems;
      } else {
        return [...cartItems, { id }];
      }
    });
  }

  function removeFromCart(id: number) {
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        openCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
