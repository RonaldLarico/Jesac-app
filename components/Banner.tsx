"use client";
import React from "react";

import Image from 'next/image';

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [title] = useTypewriter({
    words: [
      "METALÚRGICA",
      "INDUSTRIAS",
      "SOFTWARE",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  const [text] = useTypewriter({
    words: [
      "Diseño web de alto nivel.",
      "Diseños de chatbots inteligentes.",
      "Desarrollo de software a medida.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <section id="home" className="lg:w-[1280px] mx-auto md:w-auto">
      <img src='/wave.png' className='absolute animate-ping lg:top-[30%] top-[50%] left-[24%] lg:left-[20%] lg:w-52 w-44'></img>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-[45%] top-56'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-96 top-3/4'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-1/2 top-[60%]'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-[70%] top-[75%]'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-3/4 top-60'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-60 top-1/2'/>
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[800px] h-96 text-center justify-center items-center mx-auto">
      <div className="lg:text-8xl text-7xl mt-10">
        <h2 className="font-bold bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
      <p className="font-mono font-bold text-center dark:text-white text-black md:text-2xl text-xl lg:text-3xl">
        {title}
      </p>
          JESAC
          </h2>
      <h2 className="font-sans bg-gradient-to-r from-amber-400 via-rose-500 to-fuchsia-500 text-transparent bg-clip-text text-4xl lg:text-6xl font-bold mt-10">
        DESARROLLO DE SOFTWARE
      <p className="font-mono text-center dark:text-white text-black md:text-2xl text-xl lg:text-3xl font-bold mt-2">
        {text}<Cursor cursorBlinking cursorStyle="|"cursorColor="#ffaa17" />
      </p>
      </h2>
      </div>
      <div>
        <Image
        src='/icon-jesac.png'
        width={500}
        height={500}
        alt='icon'
        className='animate-trans-top mt-20 mx-auto lg:mt-auto'/>
      </div>
    </div>
    </section>
  );
};

export default Banner;