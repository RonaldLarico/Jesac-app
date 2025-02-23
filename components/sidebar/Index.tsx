"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi";
import { BiLogOut, BiMenuAltRight } from "react-icons/bi";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import { BsMeta } from "react-icons/bs";
import DarkMode from "../darkMode/Index";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

interface SidebarPros {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarPros> = ({ menu, setMenu }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations("sidebar");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnClose = () => {
    setMenu(!menu);
  };

  const handleOnModo = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleToggleSidebar = () => setMenu((prev) => !prev)

  if (!mounted) return null;

  return (
    <>
    {!menu && (
      <button
        onClick={handleToggleSidebar}
        className="hidden lg:flex fixed top-1/2 transform -translate-y-1/2 left-2 z-50 bg-cyan-600 hover:bg-cyan-700 text-white p-2 rounded-full transition-all"
      >
        <BiMenuAltRight className="text-3xl" />
      </button>
    )}
    {menu && (
    <div
      className={`dark:bg-orange-50 bg-sky-950 fixed top-1/2 transform -translate-y-1/2
      flex flex-col justify-between rounded-tr-2xl rounded-br-2xl z-50
      transition-all duration-300 ease-in-out
      ${menu ? "left-0" : "-left-full"} lg:left-0`}
    >
      <div className="mt-3 mb-3">
        <ul className="pl-2 space-y-2">
          {[
            { href: "#home", icon: <IoHomeOutline />, label: t("home") },
            { href: "#services", icon: <FiDatabase />, label: t("services") },
            { href: "#about", icon: <RiContactsLine />, label: t("about") },
            { href: "#contact", icon: <MdOutlineContactPhone />, label: t("contact") },
            {
              href: "https://jesac.onrender.com/",
              icon: <BsMeta />,
              label: t("metal"),
              target: "_blank",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="hover:bg-orange-50 dark:hover:bg-sky-950 p-2 rounded-tl-2xl rounded-bl-2xl group transition-colors"
            >
              <Link
                href={item.href}
                target={item.target || "_self"}
                onClick={handleToggleSidebar}
                className="group-hover:bg-sky-700 p-2 rounded-xl flex justify-center text-cyan-500 group-hover:text-orange-50 transition-colors"
              >
                {React.cloneElement(item.icon, { className: "text-2xl" })}
              </Link>
              <h2 className="flex justify-center text-orange-50 dark:text-sky-950 group-hover:text-sky-900 group-hover:dark:text-orange-50 text-xs font-bold font-mono uppercase">
                {item.label}
              </h2>
            </li>
          ))}

          <li className="text-center hover:bg-orange-50 dark:hover:bg-sky-950 p-2 rounded-tl-2xl rounded-bl-2xl group transition-colors">
            <button
              onClick={() => {
                handleOnModo();
                handleToggleSidebar();
              }}
              className="group-hover:bg-sky-700 p-2 rounded-xl transition-colors flex flex-col items-center"
            >
              <DarkMode />
              <h2 className="flex justify-center mt-3 text-orange-50 dark:text-sky-900 group-hover:text-orange-50 text-xs font-bold font-mono uppercase">
                {theme === "dark" ? t("lightMode") : t("darkMode")}
              </h2>
            </button>
          </li>

          <li className="text-center hover:bg-orange-50 dark:hover:bg-sky-950 p-2 rounded-tl-2xl rounded-bl-2xl group transition-colors">
            <Link
              href=""
              onClick={() => {
                handleOnClose();
                handleToggleSidebar();
              }}
              className="group-hover:bg-sky-700 p-2 rounded-xl flex justify-center text-cyan-500 group-hover:text-white transition-colors"
            >
              <BiLogOut className="text-2xl" />
            </Link>
            <h2 className="text-center text-orange-50 dark:text-sky-950 group-hover:text-sky-900 group-hover:dark:text-orange-50 text-xs font-bold font-mono uppercase">
              {t("logout")}
            </h2>
          </li>
        </ul>
      </div>
    </div>
    )}
    </>
  );
};

export default Sidebar;
