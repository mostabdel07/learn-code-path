import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MdDashboard, MdLocalGroceryStore } from "react-icons/md";
import Image from "next/image";
import { useAuth } from "@/contexts/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsPeopleFill, BsTerminalFill } from "react-icons/bs";

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
import DarkModeSwitch from "./DarkModeSwitch";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";

const links = [
  {
    title: "Mi panel",
    icon: MdDashboard,
    path: "/dashboard",
  },
  {
    title: "Cursos online",
    icon: IoIosBookmarks,
    path: "/courses",
  },
  {
    title: "Usuarios",
    icon: FaUsers,
    path: "/users",
  },
  {
    title: "Bootcamps",
    icon: AiFillFire,
    path: "#",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function SidebarLayout({ children, title }: any) {
  const { logout } = useAuth();
  const router = useRouter();

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

  const { openCart, cartItems } = useShoppingCart();

  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-gray-200 dark:bg-ctm-dark shadow">
        <div className="px-6 py-4 lg:px-8 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:text-white dark:focus:text-white dark:text-gray-400 dark:hover:bg-gray-700"
                onClick={toggleSidebar}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="#" className="flex ml-2 md:mr-24">
                {/* <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                /> */}
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-black dark:text-white">
                  LearnCodePath
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <button
                  type="button"
                  className="p-1 mr-4 text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={openCart}
                >
                  <MdLocalGroceryStore className="h-6 w-6" aria-hidden="true" />
                  {cartItems.length > 0 && (
                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 bottom-2 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500 bottom-2"></span>
                    </span>
                  )}
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative mr-4">
                  <div>
                    <Menu.Button className="flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
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
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Perfil
                          </a>
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
                          >
                            Ajustes
                          </a>
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
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <DarkModeSwitch />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform shadow bg-gray-200 dark:bg-ctm-dark lg:translate-x-0   ${
          isOpen ? "" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        <div className=" flex flex-col justify-between h-full px-3 pb-4 overflow-y-auto bg-gray-200 dark:bg-ctm-dark">
          <ul className="space-y-2 font-medium">
            {links.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="flex items-center p-2 text-black dark:text-white rounded-lg hover:text-teal-700 hover:bg-teal-200 dark:hover:text-black  dark:hover:bg-gray-200"
                >
                  <item.icon className="w-6 h-6 text-teal-500 transition duration-75 dark:text-teal-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ml-3">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href={"/"}
                className="flex items-center p-2 text-black dark:text-white rounded-lg hover:text-teal-700 hover:bg-teal-200 dark:hover:text-black  dark:hover:bg-gray-200"
              >
                <AiFillHome className="w-6 h-6 text-teal-500 transition duration-75 dark:text-teal-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ml-3">Páguina inicio</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="mt-14 lg:ml-64 text-gray-900 dark:text-white bg-white dark:bg-gray-900">
        <header className="shadow bg-teal-300 dark:bg-ctm-black">
          <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 sm:py-4 lg:py-6">
            <h1 className="text-center text-3xl font-bold tracking-tight ">
              {title}
            </h1>
          </div>
        </header>
        <div className="min-h-screen p-8 ">{children}</div>
      </div>
    </div>
  );
}

export default SidebarLayout;
