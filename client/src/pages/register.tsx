import RegisterForm from "@/components/RegisterForm";
import TopBar from "@/components/TopBar";
import Link from "next/link";
import React from "react";

const register = () => {
  return (
    <>
      <TopBar title="Registro" path="/" />
      <RegisterForm />;
    </>
  );
};

export default register;
