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
import Loader from "@/components/utilities/Loader";
import Link from "next/link";

const CheckoutPage = () => {
  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const userId = session?.user.id;
  const apiURL = process.env.API_ENDPOINT;
  // const stripePublicToken = process.env.STRIPE_PUBLIC_TOKEN;
  const stripePromise = loadStripe(
    "pk_test_51NAsfLHl9Ohy28dNJrBgiZ1oD6451u2cEplB8076BjTq3CBfVOu6bVAUtX8dt9BdcoFOD3AVNHIBBQiyJEtPsr7200LaScvl3J"
  );

  const { cartItems, clearCart } = useShoppingCart();
  const { data, loading, error } = useOnlineCourses();

  const [openModalPayment, setOpenModalPayment] = useState(false);

  if (loading || !data) {
    return <Loader />;
  }

  const totalPrice = cartItems.reduce((total: any, item) => {
    const itemData = data.find((d: { id: number }) => d.id === item.id);

    if (itemData) {
      const price = parseFloat(itemData.price);
      total += price;
    }
    return total;
  }, 0);

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
      } else {
        alert(
          "El pago no se ha realizado porque algunos cursos no están disponibles."
        );
        router.push("/courses");
        clearCart();
      }
    } catch (error) {}
  };

  function calcIVA(price: number) {
    let priceWithIVA = parseFloat(price.toString()) + price * 0.21;
    const formattedPrice = priceWithIVA.toFixed(2);
    return formattedPrice;
  }

  return (
    <DefaultLayout>
      <div className="px-6 py-8 md:px-10 md:py-14">
        <div className="p-4 mb-6">
          <h3 className="text-4xl text-center bold font-orbitron">
            Comprobación de compra
          </h3>
        </div>
        <ProgressBar />
        <div className="container mx-auto bg-white p-8 rounded-xl shadow-xl mt-12">
          {error && (
            <div>{`Ha ocurrido un problema al querer traer los datos ${error}`}</div>
          )}
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className="mt-4 text-lg text-gray-900">
                Total a pagar:{" "}
                <span className="font-medium">
                  {calcIVA(totalPrice)} &euro;
                </span>{" "}
                <span className="text-xs italic text-gray-500">
                  Con IVA y gastos incluido
                </span>
              </div>
              <div className="mt-6">
                <button
                  className="flex items-center justify-center mx-auto rounded-md border border-transparent bg-amber-500 px-12 py-3 text-base font-medium text-white shadow-sm duration-100 hover:bg-amber-600"
                  onClick={handleOpenModalPayment}
                >
                  Realizar pago
                </button>
                <Modal
                  title="Pasarela de pago"
                  openModal={openModalPayment}
                  onClose={() => setOpenModalPayment(false)}
                >
                  <Elements stripe={stripePromise}>
                    <PaymentForm onSuccess={handlePayment} />
                  </Elements>
                </Modal>
              </div>
            </>
          ) : (
            <p>No hay cursos añadidos.</p>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default withAuth(CheckoutPage);
