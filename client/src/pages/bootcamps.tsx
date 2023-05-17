import DefaultLayout from "@/layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import router from "next/router";
import { useAuth } from "@/contexts/auth";

// Data for bootcamps
const bootcampsData = [
  {
    id: 1,
    title: "Iniciación en la programación con Java y MySQL",
    date: "22/05/2023",
    duration: "2 semana(s)",
    location: "Barcelona",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image:
      "https://ts-production.imgix.net/images/088e397f-8949-42ad-a09c-631d611fd773.jpg?auto=compress,format&w=800&h=450",
    instructor: {
      name: "Amelia Anderson",
      role: "Instructor, Lead Developer",
      profileImage:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  },
  {
    id: 2,
    title: "Laravel 9 y Next.js Full-stack",
    date: "08/06/2023",
    duration: "4 semana(s)",
    location: "Barcelona",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde tempore aliquid voluptate natus. Odio iste perspiciatis vitae harum! Atque itaque officiis consequatur doloremque, fugit odio est minus voluptates magni beatae! odio est minus voluptates magni beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    image:
      "https://reffect.co.jp/wp-content/uploads/2022/03/Laravel9_-next_js-1024x585.png",
    instructor: {
      name: "Amelia Anderson",
      role: "Instructor, Lead Developer",
      profileImage:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    },
  },
];

const BootcampsPage = () => {
  const { token } = useAuth();
  const apiURL = process.env.API_ENDPOINT;
  const [bootcamps, setBootcamps] = useState<object[]>([]);
  const [subscriptions, setSubscriptios] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiURL}/bootcamps`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 404) {
          return {
            notFound: true,
          };
        }

        const data: any = res.data;
        console.log(data);
        if (data) {
          setBootcamps(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [apiURL, token]);

  const handleSubscribe = async (id: number) => {
    // Handle the subscription logic here
    // For example, you can show a success message or redirect to a subscription page
    console.log("Subscribed!");
    if (!subscriptions.includes(id)) {
      setSubscriptios([...subscriptions, id]);
    }

    try {
      const userId = localStorage.getItem("session_id");
      console.log("session" + userId);

      const response = await axios.post(
        `${apiURL}/check_courses`,
        {
          bootcamp_id: id,
          user_id: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data) {
        router.reload();
      }

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DefaultLayout title="Bootcamps">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          {bootcamps &&
            bootcamps.map(
              ({
                id,
                title,
                date,
                duration,
                location,
                description,
                image,
                instructor,
              }: any) => (
                <div key={id} className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                  <div className="relative w-full overflow-hidden bg-cover bg-no-repeat rounded-xl lg:mx-6 lg:w-1/2">
                    <Image
                      alt="bootcamp"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="transition duration-300 ease-in-out hover:scale-110 w-full  rounded-xl h-48 md:h-72 lg:h-96"
                      // className="w-full lg:mx-6  rounded-xl h-72 lg:h-96"
                      src={image}
                    />
                  </div>

                  <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <h3 className="block text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                      {title}
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm text-white-500">
                        <span className="font-medium text-blue-500">
                          Fecha inicio:{" "}
                        </span>
                        {date}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium text-blue-500">
                          Duración:{" "}
                        </span>
                        {duration}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium text-blue-500">
                          Localización:{" "}
                        </span>
                        {location}
                      </p>

                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        <span className="font-medium text-blue-500">
                          Descripción:{" "}
                        </span>
                        {description}
                      </p>
                    </div>

                    <div className=" mt-6">
                      <div className="flex items-center">
                        <img
                          className="object-cover object-center w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          alt="profile-image"
                        />

                        <div className="mx-4">
                          <h1 className="text-sm text-gray-700 dark:text-gray-200">
                            Amelia Anderson
                          </h1>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Instructor, Lead Developer
                          </p>
                        </div>
                      </div>
                      {!subscriptions.includes(id) ? (
                        <button
                          onClick={() => handleSubscribe(id)}
                          className="inline-block text-md mt-4 font-semibold leading-6 text-gray-700 bg-gray-100 rounded-lg py-2 px-4 hover:bg-gray-500 hover:text-white"
                        >
                          Inscribirse
                        </button>
                      ) : (
                        <button
                          disabled
                          className="inline-block text-md mt-4 font-semibold leading-6 bg-gray-500 text-white rounded-lg py-2 px-4"
                        >
                          Inscrito{" "}
                          <CheckIcon className="inline-block h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default BootcampsPage;