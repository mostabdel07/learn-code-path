import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Modal from "react-modal";
import AddCourseModal from "./utilities/AddCourseModal";
import SlideOver from "./utilities/SlideOver";
import AddCourseForm from "./forms/AddCourseForm";

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

interface Props {
  data: Course[] | null;
  loading: boolean;
  error: string | null;
}

export default function Panel(props: Props) {
  const { data, loading, error } = props;
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  // Filters
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);

  const [openSlideOver, setOpenSlideOver] = useState(false);

  function handleOpenSlideOver() {
    setOpenSlideOver(true);
  }

  function handleCloseSlideOver() {
    setOpenSlideOver(false);
  }

  if (!data || loading) {
    console.log("data" + data);
    console.log(loading);
    return <div>Loading...</div>;
  }

  const totalCourses = data.length;

  const filteredCourses = data.filter((course) => {
    const titleMatch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const priceMatch =
      parseFloat(course.price) >= minPrice &&
      parseFloat(course.price) <= maxPrice;
    return titleMatch && priceMatch;
  });

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center">
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              {totalCourses} courses
            </span>
          </div>
        </div>

        {userRole === "admin" && (
          <div className="flex items-center mt-4 gap-x-3">
            <button
              onClick={handleOpenSlideOver}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
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
                <span>Add course</span>
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
          <label>Precio mínimo:</label>
          <input
            type="number"
            placeholder="Min price"
            value={minPrice !== 0 ? minPrice : ""}
            onChange={(event) =>
              setMinPrice(
                event.target.value !== "" ? parseFloat(event.target.value) : 0
              )
            }
          />
          <label>Precio máximo:</label>
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice !== 100 ? maxPrice : ""}
            onChange={(event) =>
              setMaxPrice(
                event.target.value !== "" ? parseFloat(event.target.value) : 100
              )
            }
          />
        </div>

        <div className="relative flex items-center mt-4 md:mt-0">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
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
            placeholder="Search course"
            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-4xl text-center bold">Cursos populares</h3>
      </div>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <div className="grid gap-4 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
      </div>
    </div>
  );
}
