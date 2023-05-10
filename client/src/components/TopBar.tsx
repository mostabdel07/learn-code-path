import React from "react";
import { useAuth } from "@/contexts/auth";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MdDashboard } from "react-icons/md";
import { MdLocalGroceryStore } from "react-icons/md";
import DarkModeSwitch from "./DarkModeSwitch";
import Link from "next/link";
import Image from "next/image";
import { useShoppingCart } from "@/contexts/ShoppingCartContext";
import { useRouter } from "next/router";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TopBar({ title }: any) {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const { openCart, cartItems } = useShoppingCart();

  return (
    <div className="sticky top-0 z-10">
      <Disclosure as="nav" className="bg-slate-200 dark:bg-slate-900">
        <>
          <div className="mx-auto max-w-80 px-2 sm:px-14 lg:px-12">
            <div className="relative flex h-14 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="sm:flex sm:flex-shrink-0 items-center hidden">
                  <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                      <li className="inline-flex items-center">
                        <Link
                          href="#"
                          className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          {title}
                        </Link>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-4 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DarkModeSwitch />
                <button
                  type="button"
                  className="p-1 mr-4 text-gray-400 hover:text-white"
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
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      </Disclosure>
    </div>
  );
}
