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
    <div>
      <TopBar title="Carrito de compra" path="/courses" />
      <ProgressBar />
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="mt-4 font-medium text-lg text-gray-900">
        Total: {totalPrice}
      </div>
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
};

export default CheckoutPage;
