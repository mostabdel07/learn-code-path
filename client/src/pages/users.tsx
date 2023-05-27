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

  return (
    <DefaultLayout title="Users management">
      <div className="px-6 py-8 md:px-10 md:py-14">
        <section className="mx-auto">
          {error && (
            <div>{`Ha ocurrido un problema al querer traer los datos ${error}`}</div>
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
              </div>

              <div className="mt-6 justify-center md:flex md:items-center md:justify-between">
                {/* Filters */}
                <div className="flex-col inline-flex overflow-hidden bg-white border divide-y sm:flex-row rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                  <button
                    className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${
                      selectedRole === "all"
                        ? "bg-gray-200 dark:bg-gray-800"
                        : ""
                    }`}
                    onClick={() => setSelectedRole("all")}
                  >
                    Todos
                  </button>
                  <button
                    className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${
                      selectedRole === "admin"
                        ? "bg-gray-200 dark:bg-gray-800"
                        : ""
                    }`}
                    onClick={() => setSelectedRole("admin")}
                  >
                    Admin
                  </button>
                  <button
                    className={`px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 ${
                      selectedRole === "user"
                        ? "bg-gray-200 dark:bg-gray-800"
                        : ""
                    }`}
                    onClick={() => setSelectedRole("user")}
                  >
                    User
                  </button>
                </div>

                <div>
                  <p>Ordenar por:</p>
                  <button
                    className="px-2 py-1 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    onClick={() => setSortOrder("asc")}
                  >
                    Asc
                  </button>
                  <button
                    className="px-2 py-1 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                    onClick={() => setSortOrder("desc")}
                  >
                    Desc
                  </button>
                </div>

                {/* Search */}
                <div className="mt-6 sm:mt-0">
                  <div className="relative text-gray-400 focus-within:text-gray-600 dark:focus-within:text-gray-300">
                    <input
                      type="text"
                      className="w-64 py-2 pl-10 pr-4 text-sm text-white bg-white bg-opacity-25 rounded-md dark:bg-gray-800 dark:bg-opacity-50 dark:text-gray-300 focus:outline-none focus:bg-white focus:bg-opacity-50 focus:text-gray-900 focus:ring-0"
                      placeholder="Buscar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.5 17.5l6 6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="overflow-hidden border border-gray-200 rounded-lg dark:border-gray-700 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Role
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
                              {user.email}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs text-white bg-blue-600 rounded-full">
                              {user.role_name}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <Link
                              href={`/users/${user.id}`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
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
                    Prev
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
                    Next
                  </button>
                </nav>
              </div>
            </div>
          )}
        </section>
      </div>
    </DefaultLayout>
  );
};

export default withAuth(UsersPage);
