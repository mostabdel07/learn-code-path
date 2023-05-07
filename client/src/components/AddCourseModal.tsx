import React from "react";
import AddCourseForm from "./AddCourseForm";

interface Props {
  closeModal: () => void;
}

const AddCourseModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <div>
      <AddCourseForm />
      <button
        onClick={closeModal}
        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
      >
        Cerrar modal
      </button>
    </div>
  );
};

export default AddCourseModal;
