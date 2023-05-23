import React from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import CartItem from "@/components/cart/CartItem";
import ProgressBar from "@/components/ProgressBar";
import useOnlineCourses from "@/hooks/useOnlineCourses";
import axios from "axios";
import { useAuth } from "@/contexts/auth";
import TopBar from "@/components/navigation/TopBar";
import router from "next/router";
import Cookies from "js-cookie";
import DefaultLayout from "@/layouts/DefaultLayout";

const CheckoutPage = () => {
  const { token } = useAuth();
  const { cartItems, clearCart } = useShoppingCart();
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

  const apiURL = process.env.API_ENDPOINT;

  const handlePayment = async () => {
    try {
      console.log(cartItems);
      const courseIds = cartItems.map((item) => item.id);
      console.log(courseIds);
      const userId = localStorage.getItem("session_id");
      console.log("session" + userId);

      const response = await axios.post(
        `${apiURL}/check_courses`,
        {
          course_ids: courseIds,
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        clearCart();
        Cookies.remove("shopping-cart");
        router.push("/dashboard");
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DefaultLayout>
      <div className="px-6 py-8 md:px-10 md:py-14">
        <ProgressBar />
        <div className="container mx-auto bg-gray-200 p-8 rounded-xl shadow-xl mt-12">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="mt-4 font-medium text-lg text-gray-900">
            Total: {totalPrice} &euro;
          </div>
          <div className="mt-6">
            <button
              className="flex items-center justify-center mx-auto rounded-md border border-transparent bg-ctm-action px-12 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
              onClick={handlePayment}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CheckoutPage;
