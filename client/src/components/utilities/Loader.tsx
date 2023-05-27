import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p className="mb-4 text-xl">Cargando...</p>
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-14 h-14 border-4 border-blue-300 rounded-full animate-spin"
      ></div>
    </div>
  );
};

export default Loader;
