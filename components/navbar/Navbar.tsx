"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";

interface NavBarPros {
  navbar: boolean;
}

const NavBar: React.FC<NavBarPros> = ({ navbar }) => {

  return (
      <nav className={`flex justify-between lg:pl-[128px] lg:pr-[500px] border-b w-full bg-purple-700/50 fixed rounded-bl-2xl rounded-br-2xl
      ${navbar ? 'lg:top-0' : 'lg:top-full'}`}>
        <div className="">
          <Link href="#home">
            <h1 className="text-2xl p-6 uppercase font-bold">Logo</h1>
          </Link>
        </div>
        <div className='flex items-center'>
          <button className="bg-green-700 px-6 py-1 hover:bg-white rounded-xl uppercase font-bold">
            SOFTWARE
          </button>
        </div>
      </nav>
  );
}

export default NavBar;
