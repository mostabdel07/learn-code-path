import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useAuth } from "@/contexts/auth";
import useInstructors from "@/hooks/useInstructors";
import SelectMenu from "../SelectMenu";
import router from "next/router";

function AddCourseForm() {
  const { token } = useAuth();
  const { data } = useInstructors();
  const apiURL = process.env.API_ENDPOINT;

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

  const defaultImageUrl = "https://example.com/default-image.jpg";

  const {
    register,
    watch,
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

      console.log(data);
      console.log(token);

      const response = await axios.post(`${apiURL}/courses`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
      console.log("AÑADIDO");
      reset();
      router.reload();
    } catch (error: any) {
      console.log("NO AÑADIDO");
      if (error.response.status === 422) {
        const errors = error.response.data.errors;
        console.log(errors);
        setErrorList(Object.values(errors).flat());
        console.log(errorList);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto"
      encType="multipart/form-data"
    >
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Título</label>
        <input
          {...register("title")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.title && (
          <span className="text-red-600">{errors.title.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Descripción</label>
        <input
          {...register("headline")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.headline && (
          <span className="text-red-600">{errors.headline.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Imagen</label>
        <input
          {...register("img")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          onChange={onFileChange}
        />
        {errors.img && (
          <span className="text-red-600">{errors.img.message}</span>
        )}
      </div>
      <div className="mb-4">
        <label className="block font-medium text-gray-700">Precio</label>
        <input
          {...register("price")}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.price && (
          <span className="text-red-600">{errors.price.message}</span>
        )}
      </div>
      <div className="mb-4">
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
        className="inline-flex items-center justify-center w-full px-4 py-2 mt-4 font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Añadir curso
      </button>
    </form>
  );
}

export default AddCourseForm;
