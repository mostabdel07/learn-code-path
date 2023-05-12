import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useState } from "react";
import axios from "axios";
import SlideOver from "@/components/utilities/SlideOver";
import Modal from "@/components/utilities/Modal";
import { useAuth } from "@/contexts/auth";
import withAuth from "@/components/withAuth";

interface User {
  id: number;
  username: string;
  email: string;
  role_id: number;
  created_at: string;
  updated_at: string;
}

interface UserPageProps {
  user: User;
}

export const getServerSideProps: GetServerSideProps<UserPageProps> = async (
  context
) => {
  const { id } = context.params ?? {};
  console.log("id");
  console.log(id);
  const token = context.req.headers.cookie?.replace(
    /(?:(?:^|.*;\s*)authToken\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  const apiURL = process.env.API_ENDPOINT;

  if (!id) {
    return {
      notFound: true,
    };
  }

  try {
    const res = await axios.get(`${apiURL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 404) {
      return {
        notFound: true,
      };
    }

    const user = res.data;
    console.log(user);

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const UserPage = ({ user }: UserPageProps) => {
  const router = useRouter();
  const { token } = useAuth();
  const apiURL = process.env.API_ENDPOINT;

  const [editUser, setEditUser] = useState<Partial<User>>({
    username: user.username,
    email: user.email,
  });

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
    if (editUser.username !== user.username) {
      changedProperties.username = editUser.username;
    }
    if (editUser.email !== user.email) {
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

  const [openSlideOver, setOpenSlideOver] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

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

  if (!user || router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout title="Gestionar usuario">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
              alt="user"
              width="720"
              height="600"
              className="object-cover object-center rounded"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200">
              {user.username}
              <span className="ml-2 text-blue-500">#{user.id}</span>
            </h2>
            <p className="mb-4">
              <span className="font-bold">Email: </span>
              {user.email}
            </p>
            <p className="mb-4">
              <span className="font-bold">Rol: </span>
              {user.id}
            </p>
            <p className="mb-4">
              <span className="font-bold">Fecha de creación: </span>
              {user.created_at}
            </p>
            <p className="mb-4">
              <span className="font-bold">Fecha última modificación: </span>
              {user.updated_at}
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                onClick={handleOpenSlideOver}
              >
                Editar
              </button>
              <button
                className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                onClick={() => setOpenModalDelete(true)}
              >
                Eliminar
              </button>

              <SlideOver
                title="Editar usuario"
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
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default withAuth(UserPage);
