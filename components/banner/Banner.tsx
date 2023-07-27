"use client";
import React, { useRef }from "react";

import Image from 'next/image';

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  const [title] = useTypewriter({
    words: [
      "METALÚRGICA",
      "INDUSTRIAS",
      "SOFTWARE",
    ],
    loop: true,
    typeSpeed: 10,
    deleteSpeed: 10,
    delaySpeed: 2000,
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
      <div className="max-w-screen-xl px-4 py-8 lg:px-6 mx-auto md:w-auto">
      <img src='/wave.png' className='absolute animate-ping lg:top-[30%] top-[50%] left-[10%] lg:left-[20%] lg:w-52 w-20'></img>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-[45%] top-56'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-96 top-3/4'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-1/2 top-[60%]'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-[70%] top-[75%]'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-3/4 top-60'/>
      <img src='/Ellipse.png' className='animate-ping z-20 w-6 absolute left-60 top-1/2'/>
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[800px]  text-center justify-center items-center mx-auto">
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
      <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/4d7fee5b-5039-43dd-9605-d996fdd61e8d/fltqmnueuc.json"
          //style={{ width: "650px", height: "600px" }}
          class='animate-trans-top mt-10 mx-auto lg:mt-auto lg:w-[650px] w-[350px] lg:h-[600px] h-[300]'
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