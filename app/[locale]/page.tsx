"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Banner from "@/components/banner/Banner";
import Services from "@/components/services/Services";
import Sidebar from "@/components/sidebar/Index";
import NavBar from "@/components/navbar/Navbar";
import Steps from "@/components/steps/Index";
import Whatsapp from "@/components/whatsapp/Index";
import Contact from "@/components/contact/Index";
import { CgMenuGridO } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import Footer from "@/components/footer/Index";
import { useTranslations } from "next-intl";
import { initSnowEffect } from "@/components/utils/snow";

export default function Home() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu(!menu);
  const t = useTranslations("home");

  useEffect(() => {
    initSnowEffect();
  }, []);

  return (
    <main className={`relative ${menu ? "overflow-hidden" : ""}`}> 
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full relative">
          {/* Menú lateral (Sidebar) */}
          <Sidebar menu={menu} setMenu={setMenu} />

          {/* Fondo oscuro cuando el menú está abierto */}
          {menu && (
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Menú móvil superior */}
          <nav className="flex justify-between fixed dark:bg-orange-100/80 bg-sky-900/80 lg:hidden w-full text-gray-400 py-2 px-4 z-50">
            <Link href="#home">
              <h1 className="text-2xl uppercase font-bold">{t("logo")}</h1>
            </Link>
            <button
              onClick={toggleMenu}
              className="text-2xl py-0.5 px-1.5 border border-cyan-500 rounded-xl text-cyan-500 transition-transform transform hover:scale-105"
            >
              {menu ? <ImCross /> : <CgMenuGridO />}
            </button>
          </nav>
          <NavBar />
          <Banner />
          <Services />
          <Steps />
          <Contact />
          <Footer />
          <Whatsapp />
        </div>
      </div>
    </main>
  );
}
