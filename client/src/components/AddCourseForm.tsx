import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useAuth } from "@/contexts/auth";

function AddCourseForm() {
  const { token } = useAuth();

  const [errorList, setErrorList] = useState<any>([]);

  type FormValues = {
    title: string;
    price: number;
    img: string;
    headline: string;
    instructor: string;
  };

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("El título es obligatorio")
      .max(30, "El título debe tener como máximo 30 caracteres"),
    price: yup
      .number()
      .typeError("El precio debe ser un número")
      .required("El precio es obligatorio")
      .min(0, "El precio debe ser mayor o igual a cero")
      .max(1000, "El precio debe ser menor o igual a 1000"),
    img: yup
      .string()
      .required("La imagen es obligatoria")
      .matches(/^(\/)+/, "La URL de la imagen debe empezar con una barra /"),
    headline: yup
      .string()
      .required("El titular es obligatorio")
      .max(150, "El titular debe tener como máximo 150 caracteres"),
    instructor: yup
      .string()
      .required("El instructor es obligatorio")
      .max(30, "El instructor debe tener como máximo 30 caracteres"),
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
      console.log(data);
      console.log(token);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/onlineCourse",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      //reset(); // Limpiar los campos del formulario después de una respuesta exitosa
    } catch (error: any) {
      if (error.response.status === 422) {
        const errors = error.response.data.errors;
        console.log(errors);
        setErrorList(Object.values(errors).flat());
        console.log(errorList);
        // Manejar el error de validación de la forma que desees
        // Por ejemplo, mostrar los mensajes de error en el formulario
      } else {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Title</label>
        <input
          {...register("title")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.title && (
          <span className="text-red-600">{errors.title.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Price</label>
        <input
          {...register("price")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.price && (
          <span className="text-red-600">{errors.price.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Image</label>
        <input
          {...register("img")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.img && (
          <span className="text-red-600">{errors.img.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Headline</label>
        <input
          {...register("headline")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.headline && (
          <span className="text-red-600">{errors.headline.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Instructor</label>
        <input
          {...register("instructor")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.instructor && (
          <span className="text-red-600">{errors.instructor.message}</span>
        )}
      </div>
      {errorList.length > 0 && (
        <div className="text-red-600">
          <ul>
            {errorList.map((error: any) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        type="submit"
        disabled={!isValid}
        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add course
      </button>
    </form>
  );
}

export default AddCourseForm;
