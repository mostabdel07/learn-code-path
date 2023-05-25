import React, { useContext } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { MdLocalGroceryStore } from "react-icons/md";
import Image from "next/image";
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  PresentationChartBarIcon,
  Squares2X2Icon,
  UserCircleIcon,
  AcademicCapIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { FaUsers } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { UserContext } from "@/contexts/UserContext";

const links = [
  {
    title: "Página principal",
    icon: AiFillHome,
    path: "/",
  },
  {
    title: "Mi panel",
    icon: Squares2X2Icon,
    path: "/dashboard",
  },
  {
    title: "Cursos en línea",
    icon: PresentationChartBarIcon,
    path: "/courses",
  },
  {
    title: "Bootcamps",
    icon: AcademicCapIcon,
    path: "/bootcamps",
  },
  {
    title: "Gestión de usuarios",
    icon: FaUsers,
    path: "/users",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function SideBar({ children }: any) {
  const { isAuthenticated, logout } = useAuth();
  const { openCart, cartItems } = useShoppingCart();
  const { user } = useContext(UserContext);
  const router = useRouter();

  // States
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }

    setUserRole(localStorage.getItem("userRole"));
  }, [user]);

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-ctm-dark shadow">
        <div className="px-6 py-2 lg:px-8">
          <div className="flex items-center">
            <div className="flex flex-grow items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-white rounded-lg hover:bg-gray-200 hover:text-gray-900"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <Squares2X2Icon className="w-7 h-7 animate-spin" />
                <p className="pl-2 font-orbitron text-md">Navegación</p>
              </button>
            </div>
            <div className="hidden md:flex-grow md:flex md:align-center md:justify-center ml-[62px]">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width="115"
                  height="30"
                  sizes="100vw"
                />
              </Link>
            </div>
            <div className="flex flex-grow items-center justify-end">
              <div className="flex items-center ml-3">
                <button
                  type="button"
                  className="p-1 mr-4 text-white  hover:text-gray-300"
                  onClick={openCart}
                >
                  <MdLocalGroceryStore className="h-6 w-6" aria-hidden="true" />
                  {cartItems.length > 0 && (
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 bottom-2 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 bottom-2"></span>
                    </span>
                  )}
                </button>
                {!isAuthenticated ? (
                  <Link
                    href="/login"
                    className="font-orbitron relative inline-flex items-center justify-start px-4 py-2 overflow-hidden rounded-lg group"
                  >
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                      Iniciar sesión
                    </span>
                    <span className="absolute inset-0 border-2 border-white rounded-lg"></span>
                  </Link>
                ) : (
                  <Menu as="div" className="relative mr-4">
                    <div>
                      <Menu.Button className="flex rounded-full text-white p-1.5 ring-gray-600 ring-2 text-sm focus:outline-none focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <span className="pl-1 pr-3 text-md font-bold m-0">
                          {username}
                        </span>
                        <Image
                          className="h-6 w-6 rounded-full"
                          src="/images/avatar-img.png"
                          alt=""
                          height="256"
                          width="256"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              <UserCircleIcon className="h-4 w-4 inline-block mr-2" />
                              Mi panel
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={handleLogout}
                            >
                              <PowerIcon className="h-4 w-4 inline-block mr-2" />
                              Cerrar sesión
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 md:left-auto w-64 h-screen lg:w-screen lg:h-28 pt-20 lg:pt-14  transition-transform shadow bg-ctm-dark   ${
          isOpen ? "" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col justify-between lg:py-8 lg:justify-center space-y-6 lg:space-y-0 h-full px-3 pb-4 overflow-y-auto lg:overflow-y-hidden bg-ctm-dark">
          <ul className="flex-grow lg:flex lg:justify-between pt-14 lg:pt-0 space-y-4 lg:space-y-0 font-orbitron">
            {links.map((item, index) => {
              if (
                item.title === "Gestión de usuarios" &&
                userRole !== "admin"
              ) {
                return null;
              }
              return (
                <li key={index} className="md:flex-grow">
                  <Link
                    href={item.path}
                    className="flex items-center lg:justify-center px-2 py-4 lg:py-2 text-white rounded-lg hover:hover:bg-gray-200 hover:text-gray-900 hover:animate-pulse"
                  >
                    <item.icon className="w-6 h-6 transition duration-75" />
                    <span className="ml-3">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pb-4 text-center lg:hidden">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                className="block mx-auto"
                alt="logo"
                width="115"
                height="30"
                sizes="100vw"
              />
            </Link>
            <span className="text-sm text-gray-400">
              © 2023
              <Link href="/" className="ml-1 hover:underline">
                LearnCodePath
              </Link>
              . Todos Los Derechos Reservados.
            </span>
          </div>
        </div>
      </aside>

      <div className="mt-14  text-black bg-ctm-light">
        <div className="min-h-screen min-w-screen">{children}</div>
      </div>
    </div>
  );
}

export default SideBar;
