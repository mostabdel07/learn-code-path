import DefaultLayout from "@/layouts/DefaultLayout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import router from "next/router";
import { useAuth } from "@/contexts/AuthContext";
import Loader from "@/components/utilities/Loader";
import withAuth from "@/components/withAuth";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

type Bootcamp = {
  created_at: string;
  description: string;
  duration: string;
  endDatetime: string;
  id: number;
  image: string;
  location: string;
  startDatetime: string;
  title: string;
  updated_at: string;
};

type Subscription = {
  bootcamp: Bootcamp;
  subscriptionId: number;
};

const BootcampsPage = () => {
  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const userId = session?.user.id;
  const apiURL = process.env.API_ENDPOINT;

  const [bootcamps, setBootcamps] = useState<Bootcamp[] | null>(null);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiURL}/user/${userId}/bootcamps`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data: Subscription[] = res.data;

        if (res.status === 404) {
          return {
            notFound: true,
          }; // set the state to null if the request returns a 404
        } else {
          // setMyCourses({ data: res.data }); // update the state with the fetched data
          setSubscriptions(data);
        }
      } catch (error) {}
    };
    fetchData();
  }, [apiURL, token, userId]);

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

        const responseData: Bootcamp[] = res.data;

        setBootcamps(responseData);
        setError(null);
      } catch (error: any) {
        // Todo any
        setError(error.message);
        setBootcamps(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiURL, token]);

  function checkSubscription(id: number): boolean {
    return subscriptions.some(
      (subscription) => subscription.bootcamp.id === id
    );
  }

  /**
   * Handles the subscription process for a specific bootcamp identified by its ID.
   * If the bootcamp ID is not already included in the subscriptions list, it adds it.
   * Sends a POST request to subscribe the user to the bootcamp.
   * If the response indicates a successful subscription, it reloads the page.
   * If an error occurs, it logs the error to the console.
   * @param id The ID of the bootcamp to subscribe to
   */
  const handleSubscribe = async (id: number) => {
    // Handle the subscription logic heres
    try {
      const response = await axios.post(
        `${apiURL}/subscription_bootcamp`,
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
    } catch (error) {
      console.error(error);
    }
  };

  if (loading || !bootcamps) {
    return <Loader />;
  }

  return (
    <DefaultLayout title="Bootcamps">
      <div className=" px-6 py-8 md:px-10 md:py-14">
        <div className="p-4 mb-6">
          <h3 className="text-4xl text-center bold font-orbitron">Bootcamps</h3>
        </div>
        {error && (
          <div>{`Ha ocurrido un problema al querer traer los datos ${error}`}</div>
        )}
        <div className="container mx-auto">
          {bootcamps &&
            bootcamps.map(
              ({
                id,
                title,
                startDatetime,
                endDatetime,
                location,
                description,
                image,
                instructor,
              }: any) => (
                <div
                  key={id}
                  className="mt-8 lg:-mx-6 bg-white p-4 rounded-lg shadow-lg"
                >
                  <Image
                    alt="bootcamp"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full rounded-xl h-32 sm:h-44 md:h-64 lg:h-96"
                    src={`/images/${image}`}
                  />

                  <div className="mt-6 lg:mx-6">
                    <h3 className="block lg md:text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                      {title}
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm lg:text-base text-white-500">
                        <span className="font-medium text-blue-500">
                          Fecha inicio:{" "}
                        </span>
                        {startDatetime}
                      </p>
                      <p className="text-sm lg:text-base text-white-500">
                        <span className="font-medium text-blue-500">
                          Fecha finalización:{" "}
                        </span>
                        {endDatetime}
                      </p>
                      <p className="text-sm lg:text-base">
                        <span className="font-medium text-blue-500">
                          Localización:{" "}
                        </span>
                        {location}
                      </p>

                      <p className="mt-3 text-sm lg:text-base text-gray-500 dark:text-gray-300 md:text-sm">
                        <span className="font-medium text-blue-500">
                          Descripción:{" "}
                        </span>
                        {showMore
                          ? description
                          : `${description.substring(0, 120)}...`}
                      </p>
                      <button
                        className="text-sm lg:text-base font-normal hover:text-gray-700"
                        onClick={() => setShowMore(!showMore)}
                      >
                        {!showMore ? "Mostrar más" : "Mostrar menos"}
                      </button>
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
                      {checkSubscription(id) ? (
                        <button
                          disabled
                          className="inline-block text-md mt-4 font-semibold leading-6 bg-gray-500 text-white rounded-lg py-2 px-4"
                        >
                          Inscrito{" "}
                          <CheckIcon className="inline-block h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSubscribe(id)}
                          className="inline-block text-md mt-4 font-semibold leading-6 text-gray-700 bg-gray-100 rounded-lg py-2 px-4 hover:bg-gray-500 hover:text-white"
                        >
                          Inscribirse
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default withAuth(BootcampsPage);
