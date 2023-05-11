import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import React from "react";
import CartItem from "./CartItem";
import useOnlineCourses from "@/hooks/useOnlineCourses";
import { GetServerSideProps } from "next";
import axios from "axios";

interface Course {
  id: number;
  title: string;
  headline: string;
  instructor: string;
  price: string;
  img: string;
  created_at: string;
  updated_at: string;
}

type ShoppingCartProps = {
  isOpen: boolean;
  course: Course;
};

export const getServerSideProps: GetServerSideProps<ShoppingCartProps> = async (
  context
) => {
  const token = context.req.headers.cookie?.replace(
    /(?:(?:^|.*;\s*)authToken\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const apiURL = process.env.API_ENDPOINT;

  try {
    const res = await axios.get(`${apiURL}/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 404) {
      return {
        notFound: true,
      };
    }

    const course = res.data;

    return {
      props: {
        course,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
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
    <div
      id="drawer-right-example"
      className={`fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-white w-80 dark:bg-gray-500`}
      tabIndex={-1}
      aria-labelledby="drawer-right-label"
    >
      <button
        type="button"
        className="absolute top-2 right-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        onClick={closeCart}
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold dark:text-white"
      >
        <svg
          className="w-5 h-5 mr-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0020 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
            clipRule="evenodd"
          ></path>
        </svg>
        Carrito de compra
      </h5>
      <div className="mt-2 space-y-3">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="mt-4 font-medium text-lg text-gray-900">
        Total: {totalPrice}
      </div>
      <button
        type="button"
        className="w-full mt-5 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
        onClick={() => console.log("Pagar")}
      >
        Pagar
      </button>
    </div>
  );
};

export default ShoppingCart;
