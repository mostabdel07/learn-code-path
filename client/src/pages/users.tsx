import React, { useState } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import withAuth from "@/components/withAuth";
import useUsers from "@/hooks/useUsers";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/utilities/Loader";

const UsersPage = () => {
  const { data, loading, error } = useUsers();

  // Pagination
  const itemsPerPage = 5; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(1);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState<"all" | "admin" | "user">(
    "all"
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  if (loading || !data) {
    return <Loader />;
  }

  const totalUsers = data.length;

  /**
   * Filters and sorts an array of users based on search criteria.
   * @param data The array of users to filter and sort
   * @param searchTerm The search term to match against the usernames
   * @param selectedRole The selected role to filter by
   * @param sortOrder The sort order ('asc' for ascending, 'desc' for descending)
   * @returns The filtered and sorted array of users
   */
  const filteredUsers = data.filter((user) => {
    const usernameMatch = user.username
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const roleMatch = selectedRole === "all" || user.role_name === selectedRole;
    return usernameMatch && roleMatch;
  });

  const sortedUsers = filteredUsers.slice().sort((a, b) => {
    const compareResult = a.username.localeCompare(b.username);
    return sortOrder === "asc" ? compareResult : -compareResult;
  });

  // Pagination logic
  const pageCount = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = sortedUsers.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSorted = (): void => {
    if (sortOrder == "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder("asc");
    }
  };

  return (
    <DefaultLayout title="Users management">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <div className="p-4 mb-6">
          <h3 className="text-4xl text-center bold font-orbitron">
            Gestión de usuarios
          </h3>
        </div>
        {error && (
          <div>{`Ha ocurrido un problema al querer traer los datos ${error}`}</div>
        )}
        {data && (
          <div className="bg-white shadow-md p-5 rounded-lg mb-6">
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
            </div>

            <div className="mt-6 justify-center md:flex md:items-center md:justify-between">
              {/* Filters */}
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-l-lg hover:bg-gray-200 ${
                    selectedRole === "all" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedRole("all")}
                >
                  Todos
                </button>
                <button
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 border-t border-b border-gray-200 hover:bg-gray-200 ${
                    selectedRole === "admin" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedRole("admin")}
                >
                  Administradores
                </button>
                <button
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-200 ${
                    selectedRole === "user" ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setSelectedRole("user")}
                >
                  Usuarios
                </button>
              </div>

              {/* Search */}
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
                  className="block w-full py-1.5 pr-5 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>

            <div className="mt-6">
              <div className="overflow-hidden border border-gray-200 rounded-lg dark:border-gray-700 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr className="text-left">
                      <th scope="col" className="px-6 py-3 ">
                        <button
                          className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-x-2 hover:text-gray-900"
                          onClick={handleSorted}
                        >
                          Usuario
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
                              stroke-width="0.1"
                            />
                            <path
                              d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.1"
                            />
                            <path
                              d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="0.3"
                            />
                          </svg>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Id
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Correo electrónico
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Rol
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                    {paginatedUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <Image
                                src="/images/avatar-img.png"
                                alt="User Avatar"
                                width={40}
                                height={40}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-gray-300">
                                {user.username}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {user.id}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {user.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs text-white bg-gray-500 rounded-full">
                            {user.role_name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <Link
                            href={`/users/${user.id}`}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Ver
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <nav className="inline-flex bg-white border rounded-lg dark:border-gray-700">
                <button
                  className={`px-3 py-2 rounded-l-lg focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-700 ${
                    currentPage === 1 ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (currentPage > 1) {
                      handlePageChange(currentPage - 1);
                    }
                  }}
                  disabled={currentPage === 1}
                >
                  Anterior
                </button>
                {Array.from({ length: pageCount }).map((_, index) => (
                  <button
                    key={index}
                    className={`px-3 py-2 focus:outline-none ${
                      currentPage === index + 1
                        ? "bg-gray-300 dark:bg-gray-700"
                        : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className={`px-3 py-2 rounded-r-lg focus:outline-none focus:bg-gray-300 dark:focus:bg-gray-700 ${
                    currentPage === pageCount ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (currentPage < pageCount) {
                      handlePageChange(currentPage + 1);
                    }
                  }}
                  disabled={currentPage === pageCount}
                >
                  Siguiente
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default withAuth(UsersPage);
