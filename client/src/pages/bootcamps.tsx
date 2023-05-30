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
  instructor: {
    name: string;
    charge: string;
  };
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

  function formatDate(date: any) {
    const originalDate = new Date(date);

    const day = originalDate.getDate().toString().padStart(2, "0");
    const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
    const year = originalDate.getFullYear().toString();

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
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
      <div className=" px-6 py-8 md:px-8 md:py-10">
        <div className="p-4 mb-2">
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
                        {formatDate(startDatetime)}
                      </p>
                      <p className="text-sm lg:text-base text-white-500">
                        <span className="font-medium text-blue-500">
                          Fecha finalización:{" "}
                        </span>
                        {formatDate(endDatetime)}
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
                      {checkSubscription(id) ? (
                        <button
                          disabled
                          className="inline-block text-lg mt-4 font-semibold leading-6 bg-gray-500 text-white rounded-lg py-2 px-4"
                        >
                          Inscrito{" "}
                          <CheckIcon className="inline-block h-4 w-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleSubscribe(id)}
                          className="inline-block text-lg mt-4 font-semibold leading-6 text-white bg-amber-500 duration-100 rounded-lg py-2 px-4 hover:bg-amber-600"
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
