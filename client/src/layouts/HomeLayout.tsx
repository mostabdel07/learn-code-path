import Footer from "@/components/Footer";
import React from "react";
import Navbar from "@/components/Navbar";

export default function LoggedHomeLayout({ children, isAuthenticated }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
