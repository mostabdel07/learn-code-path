import RegisterForm from "@/components/forms/RegisterForm";
import TopBar from "@/components/navigation/TopBar";
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
