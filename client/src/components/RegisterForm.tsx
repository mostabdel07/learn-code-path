import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function RegisterForm() {
  type FormValues = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const schema = yup.object().shape({
    username: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const { confirmPassword, ...formData } = data;
      console.log("formData" + formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        formData
      );
      console.log(response.data);
      //reset(); // Limpiar los campos del formulario después de una respuesta exitosa
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("username")} />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <button type="submit" disabled={!isValid}>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
