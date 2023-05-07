import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/auth";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Component {...pageProps} />{" "}
      </ShoppingCartProvider>
    </AuthProvider>
  );
}
