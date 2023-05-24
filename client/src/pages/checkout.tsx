import React, { useState } from "react";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import CartItem from "@/components/cart/CartItem";
import ProgressBar from "@/components/ProgressBar";
import useOnlineCourses from "@/hooks/useOnlineCourses";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "@/components/forms/PaymentForm";
import Modal from "@/components/utilities/Modal";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useShoppingCart();
  const { data, loading, error } = useOnlineCourses();

  const [openModalPayment, setOpenModalPayment] = useState(false);

  const handleOpenModalPayment = () => {
    setOpenModalPayment(true);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    if (!data || loading) {
      return total;
    }

    const itemData = data.find((d) => d.id === item.id);

    if (itemData) {
      const price = parseFloat(itemData.price);
      total += price;
    }
    return total;
  }, 0);

  const stripePromise = loadStripe(
    "pk_test_51NAsfLHl9Ohy28dNJrBgiZ1oD6451u2cEplB8076BjTq3CBfVOu6bVAUtX8dt9BdcoFOD3AVNHIBBQiyJEtPsr7200LaScvl3J"
  );

  const handlePaymentSuccess = () => {
    console.log("pago realizado correctamente");
    clearCart();
    // Aquí puedes realizar las acciones necesarias después de que el pago haya sido procesado con éxito
  };

  return (
    <div>
      <ProgressBar />
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <div className="mt-4 font-medium text-lg text-gray-900">
        Total: {totalPrice}
      </div>
      <button onClick={handleOpenModalPayment}>Pagar</button>
      <Modal
        title="Realizar pago"
        openModal={openModalPayment}
        onClose={() => setOpenModalPayment(false)}
      >
        <Elements stripe={stripePromise}>
          <PaymentForm onSuccess={handlePaymentSuccess} />
        </Elements>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
