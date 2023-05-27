import React, { useState } from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import CartItem from "@/components/cart/CartItem";
import ProgressBar from "@/components/ProgressBar";
import useOnlineCourses from "@/hooks/useOnlineCourses";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import router from "next/router";
import Cookies from "js-cookie";
import DefaultLayout from "@/layouts/DefaultLayout";
import Modal from "@/components/utilities/Modal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "@/components/forms/PaymentForm";
import withAuth from "@/components/withAuth";

const CheckoutPage = () => {
  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const userId = session?.user.id;
  const apiURL = process.env.API_ENDPOINT;
  // const stripePublicToken = process.env.STRIPE_PUBLIC_TOKEN;

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

  const stripePromise = loadStripe(
    "pk_test_51NAsfLHl9Ohy28dNJrBgiZ1oD6451u2cEplB8076BjTq3CBfVOu6bVAUtX8dt9BdcoFOD3AVNHIBBQiyJEtPsr7200LaScvl3J"
  );

  const [openModalPayment, setOpenModalPayment] = useState(false);

  const handleOpenModalPayment = () => {
    setOpenModalPayment(true);
  };

  /**
   * Handles the payment process.
   * Retrieves the course IDs from the cart items and the user ID from local storage.
   * Sends a POST request to check the availability of the courses for the user.
   * If the response indicates successful payment, it redirects to the dashboard,
   * clears the cart, and removes the shopping cart cookie.
   * If some courses are unavailable, it displays an alert and redirects to the courses page,
   * clears the cart, and removes the shopping cart cookie.
   */
  const handlePayment = async () => {
    try {
      const courseIds = cartItems.map((item) => item.id);

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
        router.push("/dashboard");
        clearCart();
        Cookies.remove("shopping-cart");
      } else {
        alert(
          "El pago no se ha realizado porque algunos cursos no están disponibles."
        );
        router.push("/courses");
        clearCart();
        Cookies.remove("shopping-cart");
      }
    } catch (error) {}
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
              onClick={handleOpenModalPayment}
            >
              Checkout
            </button>
            <Modal
              title="Realizar pago"
              openModal={openModalPayment}
              onClose={() => setOpenModalPayment(false)}
            >
              <Elements stripe={stripePromise}>
                <PaymentForm onSuccess={handlePayment} />
              </Elements>
            </Modal>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default withAuth(CheckoutPage);
