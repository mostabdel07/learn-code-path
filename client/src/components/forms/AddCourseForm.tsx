import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import useInstructors from "@/hooks/useInstructors";
import router from "next/router";

function AddCourseForm() {
  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const apiURL = process.env.API_ENDPOINT;

  const { data } = useInstructors();

  const [errorList, setErrorList] = useState<any>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  type FormValues = {
    title: string;
    price: number;
    img: string;
    headline: string;
    instructor_id: any;
  };

  const schema = yup.object().shape({
    title: yup
      .string()
      .required("El título es obligatorio")
      .max(100, "El título debe tener como máximo 100 caracteres"),
    price: yup
      .number()
      .typeError("El precio debe ser un número")
      .required("El precio es obligatorio")
      .min(0, "El precio debe ser mayor o igual a cero")
      .max(1000, "El precio debe ser menor o igual a 1000"),
    img: yup.string().required("La imagen es obligatoria"),
    headline: yup
      .string()
      .required("El titular es obligatorio")
      .max(150, "El titular debe tener como máximo 150 caracteres"),
    instructor_id: yup.number().required("El instructor es obligatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const sortedInstructors = data
    ? data.sort((a, b) =>
        a.name.localeCompare(b.name, "es", { sensitivity: "base" })
      )
    : [];

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("img", selectedFile);
      }

      formData.append("title", data.title);
      formData.append("price", data.price.toString());
      formData.append("headline", data.headline);
      formData.append("instructor_id", data.instructor_id);

      await axios.post(`${apiURL}/courses`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      reset();
      router.reload();
    } catch (error: any) {
      if (error.response.status === 422) {
        const errors = error.response.data.errors;

        setErrorList(Object.values(errors).flat());
      } else {
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto"
      encType="multipart/form-data"
    >
      <div className="mb-6">
        <label className="block font-medium text-gray-700">Título</label>
        <input
          {...register("title")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.title && (
          <span className="text-red-600">{errors.title.message}</span>
        )}
      </div>
      <div className="mb-6">
        <label className="block font-medium text-gray-700">Descripción</label>
        <input
          {...register("headline")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.headline && (
          <span className="text-red-600">{errors.headline.message}</span>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="file_input" className="block font-medium text-gray-700">
          Imagen
          {/* <input
          {...register("img")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          onChange={onFileChange}
        />
        {errors.img && (
          <span className="text-red-600">{errors.img.message}</span>
        )} */}
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Clica para subir</span> o arrastra
              y suelta
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 600x400px)
            </p>
          </div>
          <input
            {...register("img")}
            id="file_input"
            type="file"
            className="hidden"
            onChange={onFileChange}
          />
          {errors.img && (
            <span className="text-red-600">{errors.img.message}</span>
          )}
        </label>
      </div>
      <div className="mb-6">
        <label className="block font-medium text-gray-700">Precio</label>
        <input
          {...register("price")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.price && (
          <span className="text-red-600">{errors.price.message}</span>
        )}
      </div>
      <div className="mb-6">
        <label className="block font-medium text-gray-700">Instructor</label>
        <select
          {...register("instructor_id")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        >
          {sortedInstructors &&
            sortedInstructors.map((instructor) => (
              <option key={instructor.id} value={instructor.id}>
                {instructor.name}
              </option>
            ))}
        </select>
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
        className="text-white bg-green-700 hover:bg-green-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 block"
      >
        Añadir curso
      </button>
    </form>
  );
}

export default AddCourseForm;
