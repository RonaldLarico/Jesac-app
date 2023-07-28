"use client";
import { useState } from "react"

import Banner from "@/components/banner/Banner";
import Navbar from "@/components/navbar/Navbar";
import Services from "@/components/services/Services";
import Sidebar from "@/components/sidebar/Index";

import { CgMenuGridO, CgCloseO } from "react-icons/cg"
import Head from "next/head";

export default function Home() {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (

    <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full">
        <Sidebar menu={menu}/>
          {/* Menu movil */}
          <nav className='bg-gray-800/80 lg:hidden w-full text-gray-400 py-2 px-4 z-10 block text-right rounded-tl-xl rounded-tr-xl'>
            <button onClick={toggleMenu} className="p-2 text-4xl top-0 right-0 border-2 border-cyan-600 rounded-xl text-cyan-600">
              { menu ? <CgCloseO /> : <CgMenuGridO /> }
            </button>
          </nav>
              <Banner />
              <Services />
        </div>
      </div>
    </main>
  );
}
