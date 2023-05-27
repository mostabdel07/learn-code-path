import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext";
import Modal from "react-modal";
import { useEffect, useState } from "react";

Modal.setAppElement("#__next");

export default function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? (
    <AuthProvider>
      <ShoppingCartProvider>
        <Component {...pageProps} />{" "}
      </ShoppingCartProvider>
    </AuthProvider>
  ) : null;
}
