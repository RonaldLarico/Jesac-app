"use client";
import Image from 'next/image';
import Link from 'next/link';

const NavBar: React.FC = () => {

  return (
    <div className="lg:pl-[128px]">
      <nav className='flex invisible lg:visible lg:pr-[500px] justify-between border-b w-full bg-purple-700/50 fixed rounded-bl-2xl rounded-br-2xl'>
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
    </div>
  );
}

export default NavBar;
