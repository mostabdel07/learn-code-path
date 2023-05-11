import Footer from "@/components/navigation/Footer";
import React from "react";
import Navbar from "@/components/navigation/Navbar";

export default function LoggedHomeLayout({ children, isAuthenticated }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
