import React from 'react';
import { useState } from 'react';

import Link from 'next/link';

import { IoHomeOutline } from "react-icons/io5";
import { FiDatabase } from "react-icons/fi"
import { BiLogOut } from "react-icons/bi"
import { RiContactsLine } from 'react-icons/ri'
import { MdOutlineContactPhone } from 'react-icons/md'
import { BsMeta } from 'react-icons/bs'
import DarkMode from '../darkMode/Index';

interface SidebarPros {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarPros> = ({ menu, setMenu }) => {

  const [modo, setModo] = useState('modo Ligth')

  const handleOnClose = () => {
    setMenu(!menu);
  }

  const handleOnModo = () => {
    setModo('modo Dark')
  }

  return (
    <div className={`bg-gray-800/90 fixed lg:left-0 top-0 lg:w-32 w-[116px] h-full flex flex-col lg:justify-between rounded-tr-2xl rounded-br-2xl z-50 transition-all
      ${menu ? 'left-0' : '-left-full'}`}>
      <div>
      <ul className='pl-2 lg:mt-20 md:mt-16 mt-0'>
        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='#home'
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <IoHomeOutline className='lg:text-3xl text-2xl' />
          </Link>
          <h2 className='flex justify-center text-gray-200 text-xs font-bold font-mono uppercase'>Inicio</h2>
        </li>

        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='#services'
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <FiDatabase className='lg:text-3xl text-2xl' />
          </Link>
          <h2 className='flex justify-center text-gray-200 text-xs font-bold font-mono uppercase'>Servicios</h2>
        </li>

        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='#'
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <RiContactsLine className='lg:text-3xl text-2xl' />
          </Link>
          <h2 className='flex justify-center text-gray-200 text-xs font-bold font-mono uppercase'>Nosotros</h2>
        </li>

        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='#'
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <MdOutlineContactPhone className='lg:text-3xl text-2xl' />
          </Link>
          <h2 className='flex justify-center text-gray-200 text-xs font-bold font-mono uppercase'>Contacto</h2>
        </li>


        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='https://jesac.onrender.com/'
            target='_blank'
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <BsMeta className='lg:text-3xl text-2xl' />
          </Link>
          <h2 className='flex justify-center text-gray-200 text-xs font-bold font-mono uppercase'>Metalurgica</h2>
        </li>

        <li className='text-center hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <button
            className='group-hover:bg-cyan-600 p-2 rounded-xl text-cyan-600 group-hover:text-white transition-colors'>
            <DarkMode />
          <h2 onClick={handleOnModo} className='flex justify-center mt-3 text-gray-200 text-xs font-bold font-mono uppercase'>{modo}
          </h2>
          </button>
        </li>
      </ul>
      </div>

      <div>
        <ul className='lg:pl-4 pl-1 lg:mt-32 md:mt-52 mt-9 '>
          <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <Link
              href=''
              onClick={handleOnClose}
              className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
              <BiLogOut className='lg:text-3xl text-2xl' />
            </Link>
            <h2 className='text-center text-gray-200 text-xs font-bold font-mono uppercase'>Salir</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;