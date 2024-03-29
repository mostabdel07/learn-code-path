import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import React from "react";
import CartItem from "./CartItem";
import useOnlineCourses from "@/hooks/useOnlineCourses";
import SlideOver from "../utilities/SlideOver";
import Link from "next/link";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { cartItems, closeCart } = useShoppingCart();
  const { data, loading, error } = useOnlineCourses();

  const totalPrice = cartItems.reduce((total: any, item) => {
    //Todo Any
    if (!data || loading) {
      return <div>Loading...</div>;
    }

    const itemData = data.find((d: { id: number }) => d.id === item.id);

    if (itemData) {
      const price = parseFloat(itemData.price);
      total += price;
    }
    return total;
  }, 0);

  return (
    <SlideOver
      title="Carrito de compra"
      openSlideOver={isOpen}
      onClose={closeCart}
    >
      {cartItems.length > 0 ? (
        <>
          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 mt-8 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{totalPrice} &euro;</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Gastos de envío e impuestos calculados en el momento de la compra.
            </p>
            <div className="mt-6">
              <Link
                href="/checkout"
                className="flex items-center justify-center rounded-md border border-transparent bg-amber-500 px-6 py-3 text-base duration-100 font-medium text-white shadow-sm hover:bg-amber-600"
                onClick={() => closeCart()}
              >
                Confirmar compra
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                <button
                  type="button"
                  className="font-medium text-amber-600 hover:text-amber-700 duration-100"
                  onClick={() => closeCart()}
                >
                  Seguir comprando
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="px-4 py-4 mt-8 sm:px-6">
          <div className="border-b border-gray-200">
            <p className=" mb-2 text-sm text-gray-500">
              No hay cursos en el carrito
            </p>
          </div>

          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              <button
                type="button"
                className="font-medium text-amber-600 hover:text-amber-700 duration-100"
                onClick={() => closeCart()}
              >
                Seguir comprando
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      )}
    </SlideOver>
  );
};

export default ShoppingCart;
