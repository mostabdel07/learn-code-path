import Footer from "@/components/Footer";
import React from "react";

export default function GuestHomeLayout({ children }: any) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
