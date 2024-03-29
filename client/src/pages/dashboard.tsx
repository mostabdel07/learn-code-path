import React, { useEffect, useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import withAuth from "@/components/withAuth";
import Image from "next/image";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import Modal from "@/components/utilities/Modal";
import SlideOver from "@/components/utilities/SlideOver";
import { useRouter } from "next/router";
import MyCourses from "@/components/MyCourses";
import Calendar from "@/components/Calendar";
import Loader from "@/components/utilities/Loader";

interface User {
  id: number;
  username: string;
  email: string;
  role_name: string;
  role_id: number;
  personal_data?: any;
  role: any;
  created_at: string;
  updated_at: string;
}

const DashboardPage = () => {
  const router = useRouter();

  // API fetch params
  const { session, logout } = useAuth();
  const token = session?.token;
  const userId = session?.user.id;
  const apiURL = process.env.API_ENDPOINT;

  // States
  const [user, setUser] = useState<User | null>(null);
  const [editUser, setEditUser] = useState<Partial<User>>({});
  const [openSlideOver, setOpenSlideOver] = useState(false);
  const [openSlideOverData, setOpenSlideOverData] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [errorList, setErrorList] = useState<any>([]);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    birthday: "",
    location: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
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

          if (user) {
            setUser(user);
            setEditUser(user);
          }
        } catch (error) {}
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

  function handleOpenSlideOverData() {
    setOpenSlideOverData(true);
  }

  function handleCloseSlideOverData() {
    setOpenSlideOverData(false);
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

  /**
   * Handles saving changes to a user with the specified ID.
   * It sets the open slide over flag to false and the open modal edit flag to true.
   * Identifies the changed properties and sends a PUT request to update the user.
   * If the user is successfully updated, it reloads the page using the router.
   * @param {number} id - The ID of the user to be updated.
   */
  async function handleSave(id: number) {
    // Identify the changed properties
    let changedProperties: Partial<User> = {};
    if (editUser.username !== user?.username) {
      changedProperties.username = editUser.username;
    }
    if (editUser.email !== user?.email) {
      changedProperties.email = editUser.email;
    }
    if (editUser.role_name !== user?.role_name) {
      changedProperties.role_name = editUser.role_name;
    }

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

      if (response.status === 204) router.reload();
    } catch (error: any) {
      if (error.response.status === 422) {
        const errors = error.response.data.errors;
        setErrorList(Object.values(errors).flat());
      }
    }
  }

  async function handleSavePersonal(id: number) {
    setOpenSlideOverData(false);

    try {
      const response = await axios.put(
        `${apiURL}/personal_data/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) router.reload();
    } catch (error) {}
  }

  const handleInputChangeData = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  /**
   * Handles the deletion of a user with the specified ID.
   * It sets the open modal edit flag to true, indicating that the delete modal is open.
   * If the user is successfully deleted, it redirects to the '/users' page.
   * @param {number} id - The ID of the user to be deleted.
   */
  async function handleDelete(id: number) {
    // setOpenModalEdit(true);

    try {
      const response = await axios.delete(`${apiURL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 204) {
        logout();
        router.push("/login");
      }
    } catch (error) {}
  }

  if (!user) {
    return <Loader />;
  }

  return (
    <DefaultLayout title="Dashboard">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[250px]">
            <Image
              src="/images/bg-profile.jpg"
              alt="bg-header"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <Image
              src="/images/avatar-img.png"
              alt="user"
              width="0"
              height="0"
              sizes="100vw"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl text-black">{user.username}</p>
              <p className="text-sm text-blue-400 capitalize font-medium rounded-full py-1 px-2 bg-gray-100">
                {user.role_name}
              </p>
            </div>
            <p className="text-gray-700">{user.email}</p>
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
                <li className="flex border-b py-2">
                  <span className="font-bold">Nombre:</span>
                  <span className="ml-2 text-gray-700">
                    {user.personal_data?.name}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold">Apellidos:</span>
                  <span className="ml-2 text-gray-700">
                    {user.personal_data?.surname}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold">Fecha nacimiento:</span>
                  {user.personal_data?.birthday && (
                    <span className="ml-2 text-gray-700">
                      {new Date(user.personal_data.birthday).toLocaleDateString(
                        "es-ES"
                      )}
                    </span>
                  )}
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold">Localización:</span>
                  <span className="ml-2 text-gray-700">
                    {user.personal_data?.location}
                  </span>
                </li>
                <li className="flex border-b py-2">
                  <span className="font-bold">Miembro desde:</span>
                  <span className="ml-2 text-gray-700">
                    {new Date(user.created_at).toLocaleDateString("es-ES")}
                  </span>
                </li>
              </ul>
              <button
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-4 rounded text-sm space-x-2 transition duration-100"
                onClick={handleOpenSlideOverData}
              >
                <span>Editar</span>
              </button>
            </div>

            {/* <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 className="text-xl text-gray-900 font-bold">Estadísticas</h4>
              <div className="grid gap-8 mt-4">
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
            </div> */}
          </div>
          <div className="flex flex-col w-full 2xl:w-2/3">
            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
              <div className="text-black">
                <h4 className="text-xl text-gray-900 font-bold">Mis cursos</h4>
                <MyCourses />
              </div>
              <div className="mt-8 text-black">
                <h4 className="text-xl text-gray-900 font-bold">
                  Calendario de formaciones
                </h4>
                <Calendar />
              </div>
            </div>
          </div>
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
              Usuario
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
              Correo electrónico
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
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 w-full focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 block"
            onClick={() => handleSave(user.id)}
          >
            Guardar
          </button>
          {errorList.length > 0 && (
            <div className="text-red-600">
              <ul>
                {errorList.map((error: any) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
            </div>
          )}
        </form>
      </SlideOver>
      <SlideOver
        title="Editar información personal"
        openSlideOver={openSlideOverData}
        onClose={handleCloseSlideOverData}
      >
        <form className="mb-6">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChangeData}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Apellidos
            </label>
            <input
              type="text"
              name="surname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChangeData}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              name="birthday"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChangeData}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Localizacion
            </label>
            <input
              type="text"
              name="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleInputChangeData}
            />
          </div>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 w-full font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 block"
            onClick={() => handleSavePersonal(user.id)}
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
