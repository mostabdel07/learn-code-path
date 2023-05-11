import React, { useEffect, useState } from "react";
import SliderScroll from "@/components/SliderScroll";
import DefaultLayout from "@/layouts/DefaultLayout";
import withAuth from "@/components/withAuth";
import useOnlineCourses from "@/hooks/useOnlineCourses";
import Image from "next/image";
import axios from "axios";
import { useAuth } from "@/contexts/auth";
import Modal from "@/components/utilities/Modal";
import SlideOver from "@/components/utilities/SlideOver";
import { useRouter } from "next/router";

interface User {
  id: number;
  username: string;
  email: string;
  role_id: number;
  created_at: string;
  updated_at: string;
}

const stats = [
  { id: 1, name: "Cursos dispobibles", value: "+ 1.000" },
  { id: 2, name: "Usuarios registrados", value: "3.400" },
  { id: 3, name: "Usuarios activos", value: "1.275" },
];

const DashboardPage = () => {
  // const { data, loading, error } = useOnlineCourses();
  const router = useRouter();
  const { token, userId } = useAuth();
  const apiURL = process.env.API_ENDPOINT;
  console.log(userId);

  // States
  const [user, setUser] = useState<User | null>(null);
  const [editUser, setEditUser] = useState<Partial<User>>({
    username: user?.username,
    email: user?.email,
  });
  const [openSlideOver, setOpenSlideOver] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiURL}/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 404) {
          return {
            notFound: true,
          };
        }

        const user: User = res.data;
        console.log(user);
        if (user) {
          setUser(user);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [apiURL, token, userId]);

  // Handlers

  function handleOpenSlideOver() {
    setOpenSlideOver(true);
  }

  function handleCloseSlideOver() {
    setOpenSlideOver(false);
  }

  function handleCloseModalEdit() {
    setOpenModalEdit(false);
  }

  function handleCloseModalDelete() {
    setOpenModalDelete(false);
  }
  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  async function handleSave(id: number) {
    setOpenSlideOver(false);
    setOpenModalEdit(true);
    // TODO: Fetch
    console.log(token);

    // Identify the changed properties
    let changedProperties: Partial<User> = {};
    if (editUser.username !== user?.username) {
      changedProperties.username = editUser.username;
    }
    if (editUser.email !== user?.email) {
      changedProperties.email = editUser.email;
    }
    console.log(changedProperties);

    try {
      const response = await axios.put(
        `${apiURL}/users/${id}`,
        changedProperties,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 204) router.reload();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id: number) {
    setOpenModalEdit(true);
    console.log(id);
    console.log(token);
    try {
      const response = await axios.delete(`${apiURL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.status === 204) router.push("/users");
    } catch (error) {
      console.log(error);
    }
  }

  if (!user) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
        <p className="block text-black mb-8">Loading...</p>
        <div
          className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <DefaultLayout title="Mi panel">
      <div className="bg-white rounded-lg shadow-xl pb-8">
        <div className="w-full h-[250px]">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            className="w-full h-full rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="flex flex-col items-center -mt-20">
          {/* <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            /> */}
          <Image
            src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
            alt="user"
            width="0"
            height="0"
            sizes="100vw"
            className="w-40 border-4 border-white rounded-full"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl text-black">{user.username}</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </span>
          </div>
          <p className="text-gray-700">{user.email}</p>
          <p className="text-sm text-gray-500">Rol {user.role_id}</p>
        </div>
        <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
          <div className="flex items-center space-x-4 mt-2">
            <button
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
              onClick={handleOpenSlideOver}
            >
              <span>Editar perfil</span>
            </button>
            <button
              className="flex items-center bg-red-600 hover:bg-red-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100"
              onClick={() => setOpenModalDelete(true)}
            >
              <span>Eliminar cuenta</span>
            </button>
          </div>
        </div>
      </div>

      <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col 2xl:w-1/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">
              Información Personal
            </h4>
            <ul className="mt-2 text-gray-700">
              <li className="flex border-y py-2">
                <span className="font-bold w-24">Nombre:</span>
                <span className="text-gray-700">{user.username}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Birthday:</span>
                <span className="text-gray-700">24 Jul, 1991</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Registro:</span>
                <span className="text-gray-700">{user.created_at}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Modificación:</span>
                <span className="text-gray-700">{user.updated_at}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Mobile:</span>
                <span className="text-gray-700">(123) 123-1234</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Email:</span>
                <span className="text-gray-700">{user.email}</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Localización:</span>
                <span className="text-gray-700">Barcelona, ESP</span>
              </li>
              <li className="flex border-b py-2">
                <span className="font-bold w-24">Languages:</span>
                <span className="text-gray-700">English, Spanish</span>
              </li>
              <li className="flex items-center border-b py-2 space-x-2">
                <span className="font-bold w-24">Elsewhere:</span>
                <a href="#" title="Facebook">
                  <svg
                    className="w-5 h-5"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 506.86 506.86"
                  >
                    <defs></defs>
                    <path
                      className="cls-1"
                      d="M506.86,253.43C506.86,113.46,393.39,0,253.43,0S0,113.46,0,253.43C0,379.92,92.68,484.77,213.83,503.78V326.69H149.48V253.43h64.35V197.6c0-63.52,37.84-98.6,95.72-98.6,27.73,0,56.73,5,56.73,5v62.36H334.33c-31.49,0-41.3,19.54-41.3,39.58v47.54h70.28l-11.23,73.26H293V503.78C414.18,484.77,506.86,379.92,506.86,253.43Z"
                    ></path>
                    <path
                      className="cls-2"
                      d="M352.08,326.69l11.23-73.26H293V205.89c0-20,9.81-39.58,41.3-39.58h31.95V104s-29-5-56.73-5c-57.88,0-95.72,35.08-95.72,98.6v55.83H149.48v73.26h64.35V503.78a256.11,256.11,0,0,0,79.2,0V326.69Z"
                    ></path>
                  </svg>
                </a>
                <a href="#" title="Twitter">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 333333 333333"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z"
                      fill="#1da1f2"
                    ></path>
                  </svg>
                </a>
                <a href="#" title="LinkedIn">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 333333 333333"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path
                      d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                      fill="#0077b5"
                    ></path>
                  </svg>
                </a>
                <a href="#" title="Github">
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="0"
                    height="0"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 640 640"
                  >
                    <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
            <div className="relative px-4">
              <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

              {/* <!-- start::Timeline item --> */}
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">Profile informations changed.</p>
                  <p className="text-xs text-gray-500">3 min ago</p>
                </div>
              </div>
              {/* <!-- end::Timeline item --> */}

              {/* <!-- start::Timeline item --> */}
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    Connected with{" "}
                    <a href="#" className="text-blue-600 font-bold">
                      Colby Covington
                    </a>
                    .
                  </p>
                  <p className="text-xs text-gray-500">15 min ago</p>
                </div>
              </div>
              {/* <!-- end::Timeline item --> */}
              {/* 
                        <!-- start::Timeline item --> */}
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    Invoice{" "}
                    <a href="#" className="text-blue-600 font-bold">
                      #4563
                    </a>{" "}
                    was created.
                  </p>
                  <p className="text-xs text-gray-500">57 min ago</p>
                </div>
              </div>
              {/* <!-- end::Timeline item --> */}

              {/* <!-- start::Timeline item --> */}
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    Message received from{" "}
                    <a href="#" className="text-blue-600 font-bold">
                      Cecilia Hendric
                    </a>
                    .
                  </p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
              </div>
              {/* <!-- end::Timeline item --> */}

              {/* <!-- start::Timeline item --> */}
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    New order received{" "}
                    <a href="#" className="text-blue-600 font-bold">
                      #OR9653
                    </a>
                    .
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              {/* <!-- end::Timeline item --> */}

              {/* <!-- start::Timeline item --> */}
              <div className="flex items-center w-full my-6 -ml-1.5">
                <div className="w-1/12 z-10">
                  <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-11/12">
                  <p className="text-sm">
                    Message received from{" "}
                    <a href="#" className="text-blue-600 font-bold">
                      Jane Stillman
                    </a>
                    .
                  </p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              {/* <!-- end::Timeline item --> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full 2xl:w-2/3">
          <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
            <h4 className="text-xl text-gray-900 font-bold">Descripción</h4>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              voluptates obcaecati numquam error et ut fugiat asperiores. Sunt
              nulla ad incidunt laboriosam, laudantium est unde natus cum
              numquam, neque facere. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum!
              Voluptas eveniet aperiam at maxime, iste id dicta autem odio
              laudantium eligendi commodi distinctio!
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
            <h4 className="text-xl text-gray-900 font-bold">Estadísticas</h4>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
              <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-indigo-600">
                    Total Revenue
                  </span>
                  <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                    7 days
                  </span>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <svg
                      className="w-12 h-12 p-2.5 bg-indigo-400 bg-opacity-20 rounded-full text-indigo-600 border border-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-2xl 2xl:text-3xl font-bold">
                        $8,141
                      </span>
                      <div className="flex items-center ml-2 mb-1">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          ></path>
                        </svg>
                        <span className="font-bold text-sm text-gray-500 ml-0.5">
                          3%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-green-600">
                    New Orders
                  </span>
                  <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                    7 days
                  </span>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <svg
                      className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-2xl 2xl:text-3xl font-bold">
                        217
                      </span>
                      <div className="flex items-center ml-2 mb-1">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          ></path>
                        </svg>
                        <span className="font-bold text-sm text-gray-500 ml-0.5">
                          5%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-blue-600">
                    New Connections
                  </span>
                  <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                    7 days
                  </span>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div>
                    <svg
                      className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-end">
                      <span className="text-2xl 2xl:text-3xl font-bold">
                        54
                      </span>
                      <div className="flex items-center ml-2 mb-1">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          ></path>
                        </svg>
                        <span className="font-bold text-sm text-gray-500 ml-0.5">
                          7%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <canvas
                id="verticalBarChart"
                // style="display: block; box-sizing: border-box; height: 414px; width: 828px;"
                width="1656"
                height="828"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-between">
          <h4 className="text-xl text-gray-900 font-bold">Connections (532)</h4>
          <a href="#" title="View All">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Diane Aguilar</p>
            <p className="text-xs text-gray-500 text-center">
              UI/UX Design at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection2.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Frances Mather</p>
            <p className="text-xs text-gray-500 text-center">
              Software Engineer at Facebook
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection3.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">
              Carlos Friedrich
            </p>
            <p className="text-xs text-gray-500 text-center">
              Front-End Developer at Tailwind CSS
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection4.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Donna Serrano</p>
            <p className="text-xs text-gray-500 text-center">
              System Engineer at Tesla
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection5.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Randall Tabron</p>
            <p className="text-xs text-gray-500 text-center">
              Software Developer at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection6.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">John McCleary</p>
            <p className="text-xs text-gray-500 text-center">
              Software Engineer at Laravel
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection7.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Amanda Noble</p>
            <p className="text-xs text-gray-500 text-center">
              Graphic Designer at Tailwind CSS
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection8.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Christine Drew</p>
            <p className="text-xs text-gray-500 text-center">
              Senior Android Developer at Google
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection9.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Lucas Bell</p>
            <p className="text-xs text-gray-500 text-center">
              Creative Writer at Upwork
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection10.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Debra Herring</p>
            <p className="text-xs text-gray-500 text-center">
              Co-Founder at Alpine.js
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection11.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">
              Benjamin Farrior
            </p>
            <p className="text-xs text-gray-500 text-center">
              Software Engineer Lead at Microsoft
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection12.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Maria Heal</p>
            <p className="text-xs text-gray-500 text-center">
              Linux System Administrator at Twitter
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection13.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Edward Ice</p>
            <p className="text-xs text-gray-500 text-center">
              Customer Support at Instagram
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection14.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Jeffery Silver</p>
            <p className="text-xs text-gray-500 text-center">
              Software Engineer at Twitter
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection15.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">
              Jennifer Schultz
            </p>
            <p className="text-xs text-gray-500 text-center">
              Project Manager at Google
            </p>
          </a>
          <a
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection16.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Joseph Marlatt</p>
            <p className="text-xs text-gray-500 text-center">
              Team Lead at Facebook
            </p>
          </a>
        </div>
      </div>
      <SlideOver
        title="Editar perfil"
        openSlideOver={openSlideOver}
        onClose={handleCloseSlideOver}
      >
        <form className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              id="subject"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={editUser.username}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={editUser.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-6">
            {/* Traer el nombre del role no el ID */}
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rol
            </label>
            <input
              type="text"
              id="subject"
              className="disabled:text-gray-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={user.role_id}
              disabled
            />
          </div>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 w-full focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 block"
            onClick={() => handleSave(user.id)}
          >
            Guardar
          </button>
        </form>
      </SlideOver>
      {/* Modal aviso guardar */}
      <Modal
        title="Aviso"
        openModal={openModalEdit}
        onClose={handleCloseModalEdit}
      >
        <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-8 sm:mt-0">
          <p className="text-center sm:text-left">
            ¡Se han guardado los cambios correctamente!
          </p>
        </div>
      </Modal>
      {/* Modal aviso eliminar */}
      <Modal
        title="Eliminar usuario"
        openModal={openModalDelete}
        onClose={handleCloseModalDelete}
      >
        <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4 sm:mt-0">
          <p className="text-center sm:text-left">
            Estas seguro de eliminar el usuario &quot;
            <span className="font-bold italic">{user.username}</span>
            &quot; definitivamente.
          </p>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={() => handleDelete(user.id)}
          >
            Aceptar
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={handleCloseModalDelete}
          >
            Cancelar
          </button>
        </div>
      </Modal>
    </DefaultLayout>
  );
};

export default withAuth(DashboardPage);
