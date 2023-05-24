import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

interface PaymentFormProps {
  onSuccess: () => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  const [paymentError, setPaymentError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      if (!stripe || !elements) {
        throw new Error("Stripe.js no ha sido cargado correctamente.");
      }

      const cardElement = elements.getElement(CardElement);

      if (!cardElement) {
        throw new Error("No se pudo obtener el elemento CardElement.");
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        // Aquí puedes personalizar los mensajes de error
        let errorMessage = "";

        switch (error.code) {
          case "card_declined":
            errorMessage =
              "La tarjeta fue rechazada. Por favor, verifica los datos e intenta nuevamente.";
            break;
          case "incomplete_number":
            errorMessage =
              "El número de tarjeta es inválido. Por favor, verifica los datos e intenta nuevamente.";
            break;
          default:
            errorMessage =
              "Ocurrió un error al procesar el pago. Por favor, intenta nuevamente.";
        }

        throw new Error(errorMessage);
      }

      // Simular una respuesta exitosa sin realizar una llamada al backend
      const response = { data: { success: true } };

      if (response.data.success) {
        onSuccess(); // Llamar al manejador de éxito del pago
      } else {
        throw new Error(
          "Error al procesar el pago. Por favor, intenta nuevamente."
        );
      }
    } catch (error: any) {
      setPaymentError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium text-gray-700">
          Tarjeta de crédito
        </label>
        <div className="p-4 bg-white border border-gray-300 rounded-lg">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Procesando pago..." : "Pagar"}
      </button>
      {paymentError && <div>{paymentError}</div>}
    </form>
  );
};

export default PaymentForm;
