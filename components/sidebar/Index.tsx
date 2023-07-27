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

const Sidebar: React.FC<{ menu: boolean, close: boolean }> = (props) => {

  const { menu } = props;
  const { close } = props;
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className={`bg-gray-800/90 fixed lg:left-0 top-0 lg:w-28 w-[90px] h-full flex flex-col lg:justify-between lg:py-[30px] py-24 rounded-tr-2xl rounded-br-2xl z-50 transition-all
      ${menu ? 'left-0' : '-left-full'}`}>
      <div>
      <ul className='lg:pl-4 pl-1'>
        {/*<li>
          <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>
            LOGO
          </h1>
        </li> */}
        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='#home'
            onClick={() => setSidebar(!sidebar)}
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <IoHomeOutline className='lg:text-3xl text-xl' />
          </Link>
          {/* <h2 className='flex justify-center text-white'>Inicio</h2> */}
        </li>

        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='#services'
            onClick={() => setSidebar(!sidebar)}
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <FiDatabase className='lg:text-3xl text-xl' />
          </Link>
          {/* <h2 className='flex justify-center text-white'>Servicios</h2> */}
        </li>

        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='#'
            onClick={() => setSidebar(!sidebar)}
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <RiContactsLine className='lg:text-3xl text-xl' />
          </Link>
          {/* <h2 className='flex justify-center text-white'>Nosotros</h2> */}
        </li>

        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='#'
            onClick={() => setSidebar(!sidebar)}
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <MdOutlineContactPhone className='lg:text-3xl text-xl' />
          </Link>
          {/* <h2 className='flex justify-center text-white'>Contacto</h2> */}
        </li>

        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href=''
            onClick={() => setSidebar(!sidebar)}
            className='group-hover:bg-cyan-600 p-2 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <DarkMode />
          </Link>
          {/* <h2 className='flex justify-center text-white'>Servicios</h2> */}
        </li>

        <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
          <Link
            href='https://jesac.onrender.com/'
            target='_blank'
            onClick={() => setSidebar(!sidebar)}
            className='group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors'>
            <BsMeta className='lg:text-3xl text-xl' />
          </Link>
          {/* <h2 className='flex justify-center text-white'>Metalurgica</h2> */}
        </li>
      </ul>
      </div>

      <div>
        <ul className='lg:pl-4 pl-1 mt-36'>
          <li className='hover:bg-gray-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <Link
              href=''
              onClick={() => setSidebar(!sidebar)}
              className={`group-hover:bg-cyan-600 p-4 rounded-xl flex justify-center text-cyan-600 group-hover:text-white transition-colors
              ${ close ? 'left-0' : '-left-full' }`}>
              <BiLogOut className='lg:text-3xl text-xl' />
            </Link>
            {/* <h2 className='text-center text-white'>Salir</h2> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;