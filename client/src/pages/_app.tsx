import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import { ShoppingCartProvider } from "@/contexts/ShoppingCartContext";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import Loader from "@/components/utilities/Loader";

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
