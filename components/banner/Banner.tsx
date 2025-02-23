"use client";
import React, { useRef } from "react";
import Typed from "react-typed";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { LazyMotion, domMax, m } from "framer-motion";

const Banner = () => {
  const t = useTranslations("banner");
  const ref = useRef(null);

  const [text] = useTypewriter({
    words: [
      t("animatedText.text1"),
      t("animatedText.text2"),
      t("animatedText.text3"),
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.2, duration: 0.6, ease: "easeOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="flex items-center justify-center bg-orange-50 dark:bg-sky-950">
      <LazyMotion features={domMax} strict>
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid lg:grid-cols-2 grid-cols-1 lg:h-[800px] text-center justify-center items-center mx-auto mb-10 md:mt-0 mt-5"
        >
          <m.div
            variants={childVariants}
            className="lg:text-8xl text-7xl"
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Typed
              className="font-bold font-mono text-center dark:text-gray-300 text-black md:text-2xl text-xl lg:text-3xl mt-2"
              strings={[t("typedText.text1"), t("typedText.text2"), t("typedText.text3")]}
              typeSpeed={90}
              backSpeed={30}
              loop
            />
            <m.h1
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1.3, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="font-extrabold bg-gradient-to-r from-green-500 to-blue-700 text-transparent bg-clip-text"
            >
              JESAC
            </m.h1>
            <m.h2
              variants={childVariants}
              className="font-sans bg-gradient-to-r from-amber-400 via-rose-500 to-fuchsia-500 text-transparent bg-clip-text text-4xl lg:text-6xl font-bold"
            >
              {t("title")}
              <p className="font-mono text-center dark:text-gray-300 text-black md:text-2xl text-xl lg:text-3xl font-bold mt-2">
                {text}
                <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
              </p>
            </m.h2>
            <m.div
              className="flex items-center justify-between max-w-[330px] m-auto mt-8"
              variants={childVariants}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Link href="https://wa.me/+51957033871?text=Hola,%20deseo%20realizar%20una%20consulta%20" target="_blank" rel="noreferrer">
                <m.div
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-green-600 rounded-full shadow-xl shadow-gray-400 p-4 cursor-pointer text-4xl"
                >
                  <IoLogoWhatsapp />
                </m.div>
              </Link>
              <Link href="https://www.facebook.com/metalurgica.jesac" target="_blank" rel="noreferrer">
                <m.div
                  whileHover={{ scale: 1.3, rotate: -15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-blue-700 rounded-full shadow-xl shadow-gray-400 p-4 cursor-pointer text-4xl"
                >
                  <BsFacebook />
                </m.div>
              </Link>
              <Link href="https://www.tiktok.com/@juvefrank" target="_blank">
                <m.div
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-950 rounded-full shadow-xl shadow-gray-400 p-4 cursor-pointer text-4xl"
                >
                  <FaTiktok />
                </m.div>
              </Link>
            </m.div>
            <m.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="uppercase font-bold font-sans rounded-xl text-lg py-2 px-8 text-gray-300 bg-indigo-600 hover:scale-105 duration-300"
            >
              {t("contactButton")}
            </m.button>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="animate-trans-top mb-28 mx-auto lg:mt-auto md:mt-16 mt-10 lg:w-[650px] w-[350px] lg:h-[600px] h-[300]"
          >
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/0be35802-67ac-433c-8f57-bf2c9804c39c/lYZxWeL9uo.json"
            ></lottie-player>
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default Banner;
