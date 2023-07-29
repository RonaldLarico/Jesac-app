"use client";
import React, { useRef }from "react";
import Typed from 'react-typed';

import Link from 'next/link';

import { useTypewriter, Cursor } from "react-simple-typewriter";

import { BsFacebook, BsTiktok } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Banner = () => {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const [text] = useTypewriter({
    words: [
      "Diseño web de alto nivel.",
      "Diseños de chatbots inteligentes.",
      "Desarrollo de software a medida.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  //container flex items-center justify-center dark:bg-gray-900 max-w-screen-xl px-4 py-8 lg:px-6 mx-auto md:w-auto
  return (
    <section id="home" className="flex items-center justify-center bg-cyan-50 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 lg:px-6 mx-auto md:w-auto">
      {/* <img src='/wave.png' className='absolute animate-ping lg:top-[30%] top-[50%] left-[10%] lg:left-[20%] lg:w-52 w-20'></img>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-[45%] top-56'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-96 top-3/4'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-1/2 top-[60%]'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-[70%] top-[75%]'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-3/4 top-60'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-60 top-1/2'/> */}
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[800px]  text-center justify-center items-center mx-auto mb-10">
      <div className="lg:text-8xl text-7xl">
      <Typed
        className="font-bold font-mono text-center dark:text-gray-300 text-black md:text-2xl text-xl lg:text-3xl mt-2"
        strings={['METALÚRGICA', 'SOFTWARE', 'INDUSTRIAS']}
        typeSpeed={100}
        backSpeed={40}
        loop
          />
        <h1 className="font-extrabold bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text">
          JESAC
        </h1>
      <h2 className="font-sans bg-gradient-to-r from-amber-400 via-rose-500 to-fuchsia-500 text-transparent bg-clip-text text-4xl lg:text-6xl font-bold">
        DESARROLLO DE SOFTWARE
      <p className="font-mono text-center dark:text-gray-300 text-black md:text-2xl text-xl lg:text-3xl font-bold mt-2">
        {text}<Cursor cursorBlinking cursorStyle="|"cursorColor="#ffaa17" />
      </p>
      </h2>
      {/* icons banner page */}
      <div className='flex items-center justify-between max-w-[330px] m-auto mt-8'>
            <Link
              href='https://wa.me/+51957033871?text=Hola,%20deseo%20realizar%20una%20consulta%20'
              target='_blank'
              rel='noreferrer'>
              <div className='text-cyan-600 rounded-full shadow-xl shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl'>
                <IoLogoWhatsapp />
              </div>
            </Link>
            <Link
              href='https://www.facebook.com/metalurgica.jesac'
              target='_blank'
              rel='noreferrer'>
              <div className='text-cyan-600 rounded-full shadow-xl shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl'>
                <BsFacebook />
              </div>
            </Link>
            <Link
              href='https://www.tiktok.com/@juvefrank'
              target='_blank'>
              <div className='text-cyan-600 rounded-full shadow-xl shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl'>
              <BsTiktok />
              </div>
            </Link>
          </div>
          <button className='uppercase font-bold font-sans rounded-xl lg:text-xl md:text-2xl text-lg py-1 px-5 text-gray-800 dark:text-gray-300 bg-cyan-600 hover:bg-cyan-500'>
            Contacto
          </button>
      </div>

      <div className="animate-trans-top mb-28 mx-auto lg:mt-auto md:mt-16 mt-10 lg:w-[650px] w-[350px] lg:h-[600px] h-[300]">
      <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/4d7fee5b-5039-43dd-9605-d996fdd61e8d/fltqmnueuc.json"
          //style={{ width: "650px", height: "600px" }}
          ></lottie-player>
        {/* <Image
        src='/icon-jesac.png'
        width={500}
        height={500}
        alt='icon'
        className='animate-trans-top mt-10 mx-auto lg:mt-auto lg:w-auto w-[300px]'/> */}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Banner;