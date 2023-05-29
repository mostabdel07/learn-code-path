import React, { useState } from "react";
import useInstructors from "@/hooks/useInstructors";

interface Props {
  editCourse: {
    id?: number;
    title?: string;
    headline?: string;
    instructor_id?: any;
    price?: number;
  };
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSave: (id: number) => void;
  errorList?: any;
}

const EditCourseForm: React.FC<Props> = ({
  editCourse,
  handleInputChange,
  handleSave,
  errorList,
}) => {
  const { data } = useInstructors();

  const sortedInstructors = data
    ? data.sort((a, b) =>
        a.name.localeCompare(b.name, "es", { sensitivity: "base" })
      )
    : [];

  return (
    <form className="mb-6">
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Titulo
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={editCourse.title}
          required
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="headline"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Descripcion
        </label>
        <input
          type="text"
          id="headline"
          name="headline"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={editCourse.headline}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="instructor"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Instructor
        </label>
        <select
          id="instructor_id"
          name="instructor_id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={editCourse.instructor_id}
          onChange={handleInputChange}
        >
          {sortedInstructors.map((instructor) => (
            <option key={instructor.id} value={instructor.id}>
              {instructor.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="file_input" className="block font-medium text-gray-700">
          Imagen
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
            id="file_input"
            type="file"
            name="img"
            className="hidden"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="mb-6">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={editCourse.price}
          onChange={handleInputChange}
        />
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
      <div className="flex justify-end">
        <button
          className="text-white bg-green-700 hover:bg-green-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 block"
          type="button"
          onClick={() => handleSave(editCourse.id ?? 0)}
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default EditCourseForm;
