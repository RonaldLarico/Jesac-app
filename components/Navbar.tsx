"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";

import DarkMode from './darkMode/Index'

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full border-b-[1px] lg:bg-purple-700/50 bg-purple-700/95 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">

              <Link href="#home">
              <h1 className="text-2xl uppercase font-bold">Software</h1>
              </Link>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <ImCross className="text-white text-3xl" />
                  ) : (
                    <TiThMenu
                      className="focus:border-none active:border-none text-3xl text-white"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">

                <li className="font-bold uppercase text-lg text-white py-6 px-2 lg:pr-10 border-b-2 md:border-b-0 text-center cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>

                <li className="font-bold uppercase text-lg text-white py-6 px-2 lg:pr-10 border-b-2 md:border-b-0 text-center cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#services" onClick={() => setNavbar(!navbar)}>
                    Servicios
                  </Link>
                </li>

                <li className="font-bold uppercase text-lg text-white py-6 px-2 lg:pr-10 border-b-2 md:border-b-0 text-center cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Nosotros
                  </Link>
                </li>

                <li className="font-bold uppercase text-lg text-white py-6 px-2 lg:pr-10 border-b-2 md:border-b-0 text-center cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-cyan-600  border-cyan-600  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contacto
                  </Link>
                </li>
                <li className='py-6 px-2 border-b-2 md:border-b-0 text-center cursor-pointer hover:scale-125 ease-in duration-300 border-cyan-600'>
                  <Link href="#home" onClick={() => setNavbar(!navbar)}>
                  <DarkMode />
                  </Link>
                </li>
                <li className="text-white hover:text-green-700 py-6 pl-35 lg:pl-6 text-center hover:bg-cyan-600  border-cyan-600  md:hover:text-green-600 md:hover:bg-transparent">
                  <button className="bg-green-700 hover:bg-white py-1 px-6 rounded-xl text-base uppercase font-bold">
                    SOFTWARE
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

