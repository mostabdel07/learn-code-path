import { useState, useEffect } from "react";
import { BsPeopleFill, BsTerminalFill } from "react-icons/bs";

import { FaUserPlus, FaUserCog, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

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

const data = [
  {
    name: "Contenido",
    items: [
      {
        title: "Mi panel",
        icon: MdDashboard,
        path: "/dashboard",
      },
      {
        title: "Cursos populares",
        icon: AiFillFire,
        path: "/courses",
      },
      {
        title: "Listado de usuarios",
        icon: FaUsers,
        path: "/users",
      },
    ],
  },
  {
    name: "Gestiones",
    items: [
      {
        title: "Gestionar usuarios",
        icon: FaUserCog,
        path: "#",
      },
      {
        title: "Gestionar cursos",
        icon: IoIosBookmarks,
        path: "#",
      },
    ],
  },
];

const datafooter = [
  {
    name: "",
    items: [
      {
        title: "Pagina de inicio",
        icon: AiFillHome,
        path: "/",
      },
    ],
  },
];

export default function SideBar({ children }: any) {
  const [active, setActive] = useState(false);
  const controls = useAnimation();
  const controlText = useAnimation();
  const controlTitleText = useAnimation();

  const showMore = () => {
    controls.start({
      width: "250px",
      transition: { duration: 0.001 },
    });
    controlText.start({
      opacity: 1,
      display: "block",
      transition: { delay: 0.3 },
    });
    controlTitleText.start({
      opacity: 1,
      transition: { delay: 0.3 },
    });

    setActive(true);
  };

  const showLess = () => {
    controls.start({
      width: "60px",
      transition: { duration: 0.001 },
    });

    controlText.start({
      opacity: 0,
      display: "none",
    });

    controlTitleText.start({
      opacity: 0,
    });

    setActive(false);
  };

  useEffect(() => {
    showMore();
  }, []);

  return (
    <>
      <div className="min-h-screen flex">
        <motion.div
          animate={controls}
          className=" max-w-[250px] animate duration-300 relative flex flex-col pt-5 pb-10 min-h-screen group bg-slate-200 dark:bg-slate-900"
        >
          {active && (
            <MdArrowBackIosNew
              onClick={showLess}
              className="absolute text-3xl text-black dark:text-white cursor-pointer -right-10 top-3 z-50"
            />
          )}
          {!active && (
            <MdArrowForwardIos
              onClick={showMore}
              className="absolute text-3xl text-black dark:text-white cursor-pointer -right-10 top-3 z-50"
            />
          )}

          {/* <div
            className={`${
              active && "px-4 text-black"
            }   max-w-[220px] h-[40px] flex justify-center mx-2  flex-col text-black `}
          >
            <div className="flex items-center justify-center w-full py-2 mb-2 font-bold text-black bg-green-400 rounded-lg border-green-400 shadow-green-400/60 shadow-lg">
              <MdDashboard className="text-xl" />
              <motion.p animate={controlText}>Learn Xtech</motion.p>
            </div>
          </div> */}

          <div className="grow">
            {data.map((group, index) => (
              <div key={index} className="mt-2 mb-6">
                <motion.p
                  animate={controlTitleText}
                  className="mb-1 ml-4 text-lg font-bold text-gray-900 dark:text-white"
                >
                  {group.name}
                </motion.p>

                {group.items.map((item, index2) => (
                  <Link key={index2} href={item.path}>
                    <div className="flex p-4 items-center cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-800">
                      <item.icon className="text-2xl text-gray-900 dark:text-white" />
                      <motion.p
                        animate={controlText}
                        className="ml-4 text-md font-bold text-gray-600 dark:text-white hover:text-white"
                      >
                        {" "}
                        {item.title}
                      </motion.p>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div>
            {datafooter.map((group, index) => (
              <div key={index} className="my-2">
                <motion.p
                  animate={controlTitleText}
                  className="mb-2 ml-4 text-sm font-bold text-gray-500"
                >
                  {group.name}
                </motion.p>

                {group.items.map((item, index2) => (
                  <Link key={index2} href={item.path}>
                    <div className="flex p-4 items-center cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-800">
                      <item.icon className="text-2xl text-gray-900 dark:text-white" />
                      <motion.p
                        animate={controlText}
                        className="ml-4 text-md font-bold text-gray-600 dark:text-white hover:text-white"
                      >
                        {" "}
                        {item.title}
                      </motion.p>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
        <div
          className={`${
            active && "min-h-screen w-[calc(100%-250px)] text-white "
          }   min-h-screen w-[calc(100%-60px)] text-white`}
        >
          {children}
        </div>
      </div>
    </>
  );
}
