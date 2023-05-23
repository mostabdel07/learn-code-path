import RegisterForm from "@/components/forms/RegisterForm";
import TopBar from "@/components/navigation/TopBar";
import DefaultLayout from "@/layouts/DefaultLayout";
import Link from "next/link";
import React from "react";

const register = () => {
  return (
    <DefaultLayout>
      <RegisterForm />;
    </DefaultLayout>
  );
};

export default register;
