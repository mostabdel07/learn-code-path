import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  role_name: string;
}

interface Props {
  data: User[] | null;
  loading: boolean;
  error: string | null;
}

export default function Table(props: Props) {
  const { data, loading, error } = props;

  // Filters
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<"all" | "admin" | "user">(
    "all"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  if (!data || loading) {
    return <div>Loading...</div>;
  }

  const totalUsers = data.length;
  console.log(data);

  const filteredUsers = data.filter((user) => {
    const usernameMatch = user.username
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const roleMatch =
      selectedRole === "all" ||
      data.some((user) => user.role_name === selectedRole);
    return usernameMatch && roleMatch;
  });

  const sortedUsers = filteredUsers.slice().sort((a, b) => {
    const compareResult = a.username.localeCompare(b.username);
    return sortOrder === "asc" ? compareResult : -compareResult;
  });

  return (
    <>
      <section className="mx-auto">
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {data && (
          <div>
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-x-3">
                  <h2 className="text-lg font-medium text-gray-800 dark:text-gray-700">
                    Cantidad total
                  </h2>

                  <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                    {totalUsers} usuarios
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                  Cuentas registradas en la base de datos.
                </p>
              </div>

              <div className="flex items-center mt-4">
                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
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

                  <span>Añadir usuario</span>
                </button>
              </div>
            </div>

            <div className="mt-6 justify-center md:flex md:items-center md:justify-between">
              <div className="flex-col inline-flex overflow-hidden bg-white border divide-y sm:flex-row rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                <button
                  className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${
                    selectedRole == "all"
                      ? "active bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                      : ""
                  }`}
                  onClick={() => setSelectedRole("all")}
                >
                  Ver todos
                </button>

                <button
                  className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${
                    selectedRole == "admin"
                      ? "active bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                      : ""
                  }`}
                  onClick={() => setSelectedRole("admin")}
                >
                  Administradores
                </button>

                <button
                  className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${
                    selectedRole == "user"
                      ? "active bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
                      : ""
                  }`}
                  onClick={() => setSelectedRole("user")}
                >
                  Usuarios
                </button>
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
                  placeholder="Buscar usuario"
                  className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col mt-6">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            <button
                              className="flex items-center gap-x-3 focus:outline-none"
                              onClick={() =>
                                setSortOrder(
                                  sortOrder === "asc" ? "desc" : "asc"
                                )
                              }
                            >
                              <span>Usuario</span>

                              <svg
                                className="h-3"
                                viewBox="0 0 10 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="0.1"
                                />
                                <path
                                  d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="0.1"
                                />
                                <path
                                  d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                  fill="currentColor"
                                  stroke="currentColor"
                                  strokeWidth="0.3"
                                />
                              </svg>
                            </button>
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Contraseña
                          </th>

                          <th
                            scope="col"
                            className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Rol
                          </th>

                          <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                        {sortedUsers.map(
                          ({ id, username, email, role_name }: User) => {
                            return (
                              <tr key={id}>
                                <td className="flex items-center px-4 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  <Image
                                    className="w-10 h-10 rounded-full"
                                    src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
                                    alt="Jese image"
                                    height="256"
                                    width="256"
                                  />
                                  <div className="pl-3">
                                    <div className="text-base">{username}</div>
                                  </div>
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                  <div>
                                    <p className="text-center text-gray-500 dark:text-gray-400">
                                      {email}
                                    </p>
                                  </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                  <div>
                                    <p className="text-center px-3 py-1 text-sm font-normal rounded-full text-gray-500 dark:text-gray-400">
                                      {role_name}
                                    </p>
                                  </div>
                                </td>

                                <td className="text-center px-4 py-4 text-sm whitespace-nowrap">
                                  <Link
                                    className="text-gray-900 dark:text-white hover:text-emerald-500"
                                    href={`/users/${id}`}
                                  >
                                    Ver
                                  </Link>
                                </td>
                              </tr>
                            );
                          }
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Página{" "}
                <span className="font-medium text-gray-700 dark:text-gray-400">
                  1 de 10
                </span>
              </div>

              <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
                <a
                  href="#"
                  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:-scale-x-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>

                  <span>anterior</span>
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  <span>siguiente</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 rtl:-scale-x-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
