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
          className="text-white bg-green-700 hover:bg-green-800 w-full focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2"
          type="button"
          onClick={() => handleSave(editCourse.id ?? 0)}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default EditCourseForm;
