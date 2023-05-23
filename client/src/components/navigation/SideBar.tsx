import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MdDashboard, MdLocalGroceryStore } from "react-icons/md";
import Image from "next/image";
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsPeopleFill, BsTerminalFill } from "react-icons/bs";
import {
  PresentationChartBarIcon,
  Squares2X2Icon,
  UserCircleIcon,
  AcademicCapIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

import { FaUserPlus, FaUserCog, FaUsers } from "react-icons/fa";

import { AiFillFire, AiFillHome } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import {
  MdFeedback,
  MdArrowBackIosNew,
  MdArrowForwardIos,
} from "react-icons/md";
import { IoIosBookmarks } from "react-icons/io";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import DarkModeSwitch from "../utilities/DarkModeSwitch";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import axios from "axios";

interface User {
  id: number;
  username: string;
  email: string;
  personal_data: any;
  created_at: string;
  updated_at: string;
}

const links = [
  {
    title: "Home Page",
    icon: AiFillHome,
    path: "/",
  },
  {
    title: "Dashboard",
    icon: Squares2X2Icon,
    path: "/dashboard",
  },
  {
    title: "Online Courses",
    icon: PresentationChartBarIcon,
    path: "/courses",
  },
  {
    title: "Bootcamps",
    icon: AcademicCapIcon,
    path: "/bootcamps",
  },
  {
    title: "Users Management",
    icon: FaUsers,
    path: "/users",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function SideBar({ children, title }: any) {
  const { isAuthenticated, logout, token, userId } = useAuth();
  const router = useRouter();

  const [userRole, setUserRole] = useState<string | null>(null);

  const apiURL = process.env.API_ENDPOINT;
  console.log(userId);

  // States
  const [user, setUser] = useState<User | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
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

  const { openCart, cartItems } = useShoppingCart();

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
                className="inline-flex items-center p-2 text-sm text-white brightness-125 rounded-lg hover:bg-gray-600 hover:text-ctm-accent focus:text-ctm-accent"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <Squares2X2Icon className="w-6 h-6 animate-spin" />
                <p className="pl-2 font-medium text-md">Navigation</p>
              </button>
            </div>
            <div className="hidden md:flex-grow md:flex md:align-center md:justify-center ">
              <a
                href="/"
                className="inline-block text-xl font-semibold sm:text-2xl whitespace-nowrap text-white"
              >
                Learn Code Path
              </a>
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
                    className="px-4 py-1 relative rounded-full group text-white font-medium inline-block mr-6"
                  >
                    <span className="absolute top-0 left-0 w-full h-full rounded-full opacity-50 filter blur-sm bg-gradient-to-br from-[#005555] to-ctm-accent"></span>
                    <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded-full opacity-50 from-[#005555] to-ctm-accent"></span>
                    <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded-full shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-[#005555] to-ctm-accent"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded-full bg-gradient-to-br from-[#005555] to-ctm-accent"></span>
                    <span className="relative">Log in</span>
                  </Link>
                ) : (
                  <Menu as="div" className="relative mr-4">
                    <div>
                      <Menu.Button className="flex rounded-full text-gray-200 p-1.5 ring-gray-600 ring-2 text-sm focus:outline-none hover:text-ctm-accent focus:text-ctm-accent focus:ring-ctm-accent">
                        <span className="sr-only">Open user menu</span>
                        <span className="pl-1 pr-3 text-md font-bold m-0">
                          {user?.username}
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
                              Profile
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
                              Log out
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
          <ul className="flex-grow lg:flex lg:justify-between pt-14 lg:pt-0 space-y-4 lg:space-y-0 font-medium">
            {links.map((item, index) => {
              if (item.title === "Usuarios" && userRole !== "admin") {
                return null;
              }
              return (
                <li key={index} className="md:flex-grow">
                  <Link
                    href={item.path}
                    className="flex items-center lg:justify-center px-2 py-4 lg:py-2 text-white rounded-lg hover:hover:bg-gray-600 hover:animate-pulse"
                  >
                    <item.icon className="w-6 h-6 text-ctm-accent brightness-125 transition duration-75 group-hover:text-white" />
                    <span className="ml-3">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="pb-4 text-center lg:hidden">
            <span className="text-sm text-gray-400">
              © 2023
              <a href="#" className="ml-1 hover:underline">
                LearnCodePath
              </a>
              . Todos Los Derechos Reservados.
            </span>
          </div>
        </div>
      </aside>

      <div className="mt-14 pt-2 lg:pt-0 text-black bg-ctm-light">
        <div className="min-h-screen min-w-screen">{children}</div>
      </div>
    </div>
  );
}

export default SideBar;
