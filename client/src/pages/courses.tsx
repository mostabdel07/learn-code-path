import React, { useState } from "react";

import DefaultLayout from "@/layouts/DefaultLayout";
import withAuth from "@/components/withAuth";
import useOnlineCourses from "@/hooks/useOnlineCourses";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";
import ProductCard from "@/components/ProductCard";
import SlideOver from "@/components/utilities/SlideOver";
import AddCourseForm from "@/components/forms/AddCourseForm";
import { useAuth } from "@/contexts/AuthContext";
import Loader from "@/components/utilities/Loader";

interface Course {
  id: number;
  title: string;
  headline: string;
  instructor: string;
  price: string;
  img: string;
  rating: number;
  created_at: string;
  updated_at: string;
}

const CoursesPage = () => {
  const { data, loading, error } = useOnlineCourses();
  console.log(data);
  const { session } = useAuth();

  // Filters
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRating, setSelectedRating] = useState("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);

  const [openSlideOver, setOpenSlideOver] = useState(false);

  function handleOpenSlideOver() {
    setOpenSlideOver(true);
  }

  function handleCloseSlideOver() {
    setOpenSlideOver(false);
  }

  const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRating(event.target.value);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(parseFloat(event.target.value));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(parseFloat(event.target.value));
  };

  if (loading || !data) {
    return <Loader />;
  }

  const totalCourses = data.length;

  const filteredCourses = data.filter((course) => {
    const titleMatch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const priceMatch =
      parseFloat(course.price) >= minPrice &&
      parseFloat(course.price) <= maxPrice;
    const ratingMatch =
      selectedRating === "" || course.rating === parseInt(selectedRating);
    return titleMatch && priceMatch && ratingMatch;
  });

  return (
    <DefaultLayout title="Online courses">
      <div id="top" className="px-6 py-8 md:px-10 md:py-14">
        <div className="bg-white p-5 rounded-lg mb-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-700">
                  Cantidad total
                </h2>

                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                  {totalCourses} cursos
                </span>
              </div>
            </div>

            {session?.user.role === "admin" && (
              <div className="flex items-center mt-4 gap-x-3">
                <button
                  onClick={handleOpenSlideOver}
                  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <div>
                    <span>Añadir curso</span>
                  </div>
                </button>
                <SlideOver
                  title="Añadir curso"
                  openSlideOver={openSlideOver}
                  onClose={handleCloseSlideOver}
                >
                  <AddCourseForm />
                </SlideOver>
              </div>
            )}
          </div>

          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-center gap-3">
              <div className="w-1/2">
                <label htmlFor="min-price" className="text-gray-700">
                  Precio mínimo: {minPrice} &euro;
                </label>
                <input
                  type="range"
                  min="0"
                  name="min-price"
                  max="49"
                  value={minPrice}
                  className="w-full h-2 bg-blue-100 appearance-none cursor-grabbing rounded-lg"
                  onChange={handleMinPriceChange}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="max-price" className="text-gray-700">
                  Precio máximo: {maxPrice} &euro;
                </label>
                <input
                  type="range"
                  min="50"
                  name="max-price"
                  max="100"
                  value={maxPrice}
                  className="w-full h-2 bg-blue-100 appearance-none cursor-grabbing rounded-lg"
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>

            <div className="flex">
              <label
                htmlFor="rating-filter"
                className="inline-block mr-2 text-sm text-gray-900"
              >
                Filtrar por valoración:
              </label>
              <select
                id="rating-filter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 inline-block w-full p-2.5  placeholder-gray-400"
                value={selectedRating}
                onChange={handleRatingChange}
              >
                <option value="">Todas</option>
                <option value="1">1 estrella(s)</option>
                <option value="2">2 estrella(s)</option>
                <option value="3">3 estrella(s)</option>
                <option value="4">4 estrella(s)</option>
                <option value="5">5 estrella(s)</option>
              </select>
            </div>

            <div className="relative flex items-center mt-4 md:mt-0">
              <span className="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mx-3 text-gray-400 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </span>

              <input
                type="text"
                placeholder="Buscar curso"
                className="block w-full py-1.5 pr-5 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-4xl text-center bold font-orbitron">
            Cursos populares
          </h3>
        </div>
        {error && (
          <div>{`Ha ocurrido un problema al querer traer los datos ${error}`}</div>
        )}
        <div className="grid gap-4 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data &&
            filteredCourses.map(
              ({ id, title, img, headline, price, rating }: Course) => (
                <div key={id}>
                  <ProductCard
                    id={id}
                    title={title}
                    img={img}
                    headline={headline}
                    price={price}
                    rating={rating}
                  />
                </div>
              )
            )}
          <div id="bottom"></div>
        </div>

        <div className="flex flex-col items-center justify-center gap-20 fixed bottom-48 right-2 md: animate-bounce">
          <a href="#top">
            <ChevronDoubleUpIcon className="h-8 w-8 md:h-10 md:w-10 text-ctm-dark hover:text-gray-500" />
          </a>

          <a href="#bottom">
            <ChevronDoubleDownIcon className="h-8 w-8 md:h-10 md:w-10 text-ctm-dark hover:text-gray-500" />
          </a>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default withAuth(CoursesPage);
