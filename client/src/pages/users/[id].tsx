import DefaultLayout from "@/layouts/DefaultLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import SlideOver from "@/components/utilities/SlideOver";
import Modal from "@/components/utilities/Modal";
import { useAuth } from "@/contexts/AuthContext";
import withAuth from "@/components/withAuth";
import Loader from "@/components/utilities/Loader";

interface User {
  id: number;
  username: string;
  email: string;
  role_name: string;
  created_at: string;
  updated_at: string;
}

const UserPage = () => {
  const router = useRouter();
  const id = router.query.id;

  // API fetch params
  const { session } = useAuth();
  const token = session?.token;
  const apiURL = process.env.API_ENDPOINT;

  const [user, setUser] = useState<User | null>(null);
  const [editUser, setEditUser] = useState<Partial<User>>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [openSlideOver, setOpenSlideOver] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (token && id) {
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
          setUser(user);
          setEditUser(user);
        } catch (error: any) {
          // Todo any
          setError(error.message);
          setUser(null);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [apiURL, id, token]);

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

  /**
   * Handles the input change event and updates the `editUser` state based on the input's name and value.
   * @param event The input change event
   */
  function handleInputChange(event: any) {
    const { name, value } = event.target;
    setEditUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  /**
   * Updates the user data identified by the given ID.
   * Closes the slide over and opens the edit modal.
   * Identifies the changed properties (username and email) between the editUser and user objects.
   * Sends a PUT request to update the user data with the changed properties.
   * If the response status is 204 (No Content), it reloads the page to reflect the updated user data.
   * If an error occurs, it is caught and ignored.
   * @param id The ID of the user to update
   */
  async function handleSave(id: number) {
    setOpenSlideOver(false);
    setOpenModalEdit(true);

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
    } catch (error) {}
  }

  async function handleDelete(id: number) {
    setOpenModalEdit(true);

    try {
      const response = await axios.delete(`${apiURL}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 204) router.push("/users");
    } catch (error) {}
  }

  if (loading || !user) {
    return <Loader />;
  }

  console.log(editUser.role_name);

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
              <span className="font-bold">ID: </span>
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
              {session?.user.role === "admin" && (
                <>
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
                </>
              )}

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
                    <label
                      htmlFor="role"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Rol
                    </label>
                    <select
                      id="role_name"
                      name="role_name"
                      value={editUser.role_name}
                      onChange={handleInputChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="user">Usuario</option>
                      <option value="admin">Administrador</option>
                    </select>
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
