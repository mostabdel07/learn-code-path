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

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(parseFloat(event.target.value));
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(parseFloat(event.target.value));
  };

  if (!data || loading) {
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
    const ratingMatch =
      selectedRating === "" || course.rating === parseInt(selectedRating);
    return titleMatch && priceMatch && ratingMatch;
  });

  return (
    <div>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center">
            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">
              {totalCourses} Total cursos
            </span>
          </div>
        </div>

        {userRole === "admin" && (
          <div className="flex items-center mt-4 gap-x-3">
            <button
              onClick={handleOpenSlideOver}
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 hover:bg-blue-500 bg-blue-600"
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
          <div className="w-1/2">
            <label htmlFor="price" className="text-gray-700">
              Precio mínimo: {minPrice} &euro;
            </label>
            <input
              type="range"
              min="0"
              name="price"
              max="100"
              value={minPrice}
              className="w-full h-2 bg-blue-100 appearance-none"
              onChange={handleMinPriceChange}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="price" className="text-gray-700">
              Precio máximo: {maxPrice} &euro;
            </label>
            <input
              type="range"
              min="0"
              name="price"
              max="100"
              value={maxPrice}
              className="w-full h-2 bg-blue-100 appearance-none"
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
            <option value="">Cualquiera</option>
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
            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
