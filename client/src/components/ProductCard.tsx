import Image from "next/image";
import React from "react";
import axios from "axios";
import { useAuth } from "@/contexts/auth";
import Link from "next/link";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import Modal from "react-modal";
import { useState } from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

interface Course {
  id: number;
  title: string;
  headline: string;
  price: string;
  img: string;
  rating: number;
}

const ProductCard = (props: Course) => {
  const { id, title, img, headline, price, rating } = props;

  const { token } = useAuth();

  const { addToCart } = useShoppingCart();

  const [showModal, setShowModal] = useState(false);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          key={i}
          aria-hidden="true"
          className="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  async function handleDelete(id: number) {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/onlineCourse/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full h-full max-w-sm bg-white rounded-lg shadow-xl transition-all duration-300 hover:drop-shadow-lg">
      <Image
        src={img}
        alt="course"
        width="0"
        height="0"
        sizes="100vw"
        className="rounded-t-lg w-full drop-shadow-sm"
      />

      <div className="flex flex-col justify-around px-5 py-5">
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {title}
          </h5>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          {" "}
          <p className="text-gray-600 mr-2">Valoración:</p>
          {renderStars()}
        </div>
        <Link
          href={`/courses/${id}`}
          className="text-ctm-action font-medium hover:text-gray-600"
        >
          Ver más <ArrowLongRightIcon className="inline-block h-4 w-4" />
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-600 ">
            {parseInt(price) === 0.0 ? "Gratuito" : price + " €"}
          </span>
          {/* <button onClick={() => handleDelete(id)}>Delete</button> */}
          <button
            type="button"
            className="my-2 px-4 py-2 text-white bg-ctm-action hover:bg-gray-600 font-medium rounded text-sm text-center transition duration-150 ease-in-out"
            onClick={() => addToCart(id)}
          >
            Añadir
            <MdLocalGroceryStore
              className="h-5 w-5 inline-block ml-2"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
