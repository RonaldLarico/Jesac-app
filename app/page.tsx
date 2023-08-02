"use client";
import { useState } from "react"

import Link from 'next/link';

import Banner from "@/components/banner/Banner";
import Services from "@/components/services/Services";
import Sidebar from "@/components/sidebar/Index";
import NavBar from "@/components/navbar/Navbar";
import Steps from "@/components/steps/Index";

import { CgMenuGridO, CgCloseO } from "react-icons/cg"
import { ImCross } from "react-icons/im";

export default function Home() {

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (

    <main>
      <div className="w-full bg-banner-bg bg-center">
        <div className="w-full">
        <Sidebar menu={menu} setMenu={setMenu}/>
          {/* Menu movil */}
          <nav className='flex justify-between fixed bg-gray-800/80 lg:hidden w-full text-gray-400 py-4 px-4 z-10 rounded-bl-xl rounded-br-xl'>
            <Link href="#home">
              <h1 className="text-2xl p-2 uppercase font-bold">Logo</h1>
            </Link>
            <button onClick={toggleMenu} className="p-2 text-3xl top-0 right-0 border border-cyan-600 rounded-xl text-cyan-600">
              { menu ? <ImCross /> : <CgMenuGridO /> }
            </button>
          </nav>
            <NavBar />
            <Banner />
            <Services />
            <Steps />
        </div>
      </div>
    </main>
  );
}
