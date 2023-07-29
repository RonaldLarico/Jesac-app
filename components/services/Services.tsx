import Link from 'next/link';
import React, { useRef, useState } from 'react';
import DesignWebModal from '../modals/DesignWebModal';
import StoreModal from '../modals/StoreModal';

const Services = () => {

  const [designModal, setDesignModal] =useState(false)
  const [storeModal, setStoreModal] =useState(false)

  const handleOnCloseWeb = () => setDesignModal(false)
  const handleOnCloseStore = () => setStoreModal(false)

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section id="services" className="bg-cyan-50 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="30"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Designed for business teams like yours
          </h2>
          <p
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="40"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="space-y-8 md:space-y-0 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-6 xl:gap-10 sm:mt-6"
        >
          <div className="flex flex-col items-center justify-center max-w-lg p-6 mx-auto text-center hover:scale-105 duration-300 text-gray-900 bg-gray-50 shadow-2xl rounded-3xl dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/2dbfa366-3a9a-400a-814a-4798841e4e65/9A736dlnR4.json"
          style={{ width: "180px", height: "180px" }}
          ></lottie-player>

          <div className="relative text-gray-500 dark:text-gray-300">
            <h3 className="mb-6 text-2xl font-bold">Diseño de paginas web</h3>
            <p className="font-bold mb-6 text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p>
            <div role="list" className="mb-8 space-y-2">
              <div className="flex flex-col items-center justify-center space-x-3">
                <p className="py-2 border-b w-full">Diseño web moderno y atractivo</p>
                <p className="py-2 border-b w-full">Paginas web super rapidas</p>
                <p className="py-2 border-b w-full">Soporte web permanente</p>
                <p className="py-2 border-b w-full">Seguridad web</p>
                <p className="py-2 border-b w-full">Puntualidad y profesionalismo garantizado</p>
              </div>
            </div>
            <button
              onClick={() => setDesignModal(true)}
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Ver mas
            </button>
          </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-lg p-6 mx-auto text-center hover:scale-105 duration-300 text-gray-900 bg-gray-50 shadow-2xl rounded-3xl dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/6f34b08d-de64-41c5-be3c-91bd2570a53c/JYm2npElST.json"
          style={{ width: "180px", height: "180px" }}
          ></lottie-player>
          <div className="relative text-gray-500 dark:text-gray-300">
            <h3 className="mb-6 text-2xl font-bold">Tiendas virtuales (Ecommerce)</h3>
            <p className="font-bold mb-6 text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p>
            <div role="list" className="mb-8 space-y-2">
              <div className="flex flex-col items-center justify-center space-x-3">
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tienda virtual administrable</p>
                <p className="py-2 border-b w-full">Catalogo de productos</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
              </div>
            </div>
            <button
              onClick={() => setStoreModal(true)}
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Ver mas
            </button>
          </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-lg p-6 mx-auto text-center hover:scale-105 duration-300 text-gray-900 bg-gray-50 shadow-2xl rounded-3xl dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/bc1995c9-cada-46a8-b22e-9a9a32f806ee/axb3bpv8Wi.json"
          style={{ width: "180px", height: "180px" }}
          ></lottie-player>

          <div className="relative text-gray-500 dark:text-gray-300">
            <h3 className="mb-6 text-2xl font-bold">ChatBots inteligentes IA</h3>
            <p className="font-bold mb-6 text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p>
            <div role="list" className="mb-8 space-y-2">
              <div className="flex flex-col items-center justify-center space-x-3">
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tienda virtual administrable</p>
                <p className="py-2 border-b w-full">Catalogo de productos</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
              </div>
            </div>
            <button
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Ver mas
            </button>
          </div>
          </div>
          <div className="flex flex-col items-center justify-center max-w-lg p-6 mx-auto text-center hover:scale-105 duration-300 text-gray-900 bg-gray-50 shadow-2xl rounded-3xl dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/c6bf9ec8-6b66-4cd4-946b-9aa66b580f51/2HTZVjVwBI.json"
          style={{ width: "180px", height: "180px" }}
          ></lottie-player>

          <div className="relative text-gray-500 dark:text-gray-300">
            <h3 className="mb-6 text-2xl font-bold">Desarrollo de aplicaciones moviles</h3>
            <p className="font-bold mb-6 text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p>
            <div role="list" className="mb-8 space-y-2">
              <div className="flex flex-col items-center justify-center space-x-3">
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tienda virtual administrable</p>
                <p className="py-2 border-b w-full">Catalogo de productos</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
              </div>
            </div>
            <button
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Ver mas
            </button>
          </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-lg p-6 mx-auto text-center hover:scale-105 duration-300 text-gray-900 bg-gray-50 shadow-2xl rounded-3xl dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/bf0afe68-5ad4-4fc1-91e1-44270163d284/b8F57gUDTT.json"
          style={{ width: "180px", height: "180px" }}
          ></lottie-player>

          <div className="relative text-gray-500 dark:text-gray-300">
            <h3 className="mb-6 text-2xl font-bold">Desarrollo de software a medida</h3>
            <p className="font-bold mb-6 text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p>
            <div role="list" className="mb-8 space-y-2">
              <div className="flex flex-col items-center justify-center space-x-3">
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tienda virtual administrable</p>
                <p className="py-2 border-b w-full">Catalogo de productos</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
              </div>
            </div>
            <button
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Ver mas
            </button>
          </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-lg p-6 mx-auto text-center hover:scale-105 duration-300 text-gray-900 bg-gray-50 shadow-2xl rounded-3xl dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="https://lottie.host/e31f16e6-eab4-41bd-a6ea-6cebbaadd152/H54j2VnoVF.json"
          style={{ width: "180px", height: "180px" }}
          ></lottie-player>

          <div className="relative text-gray-500 dark:text-gray-300">
            <h3 className="mb-6 text-2xl font-bold">Facturacion electronica</h3>
            <p className="font-bold mb-6 text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p>
            <div role="list" className="mb-8 space-y-2">
              <div className="flex flex-col items-center justify-center space-x-3">
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tienda virtual administrable</p>
                <p className="py-2 border-b w-full">Catalogo de productos</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
                <p className="py-2 border-b w-full">Tiendas online adaptable a moviles</p>
              </div>
            </div>
            <button
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Ver mas
            </button>
          </div>
          </div>
        </div>
      </div>
      <DesignWebModal
        onClose={handleOnCloseWeb}
        open={designModal} />

      <StoreModal
        onClose={handleOnCloseStore}
        open={storeModal}/>
    </section>
  );
};

export default Services;
