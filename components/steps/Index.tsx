
import React, { useRef } from 'react'

const Steps = () => {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section id='about' className='bg-cyan-50 dark:bg-sky-950'>
      <div className='grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto h-auto'>
        <div className='flex items-center justify-center p-6'>
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/cbed5599-a04b-4558-a208-f44762da226b/xxvJeq5lAH.json"
            //style={{ width: "650px", height: "600px" }}
            ></lottie-player>
        </div>
        <div className='p-6 mt-24 text-gray-600 dark:text-gray-300 tracking-wide'>
          <h2 className='uppercase mb-4 font-sans font-extrabold text-xl'>Sobre nosotros</h2>
          <h1 className='font-extrabold text-5xl mb-4 text-sky-900 dark:text-gray-100'>Impulsamos tu negocio</h1>
          <p className='font-semibold text-2xl mb-4'>Centramos esfuerzos en conocer la marca de nuestros clientes y llevar al siguiente nivel.</p>
          <p className='font-semibold text-2xl mb-4'>JESAC digital nace con la misión principal de ofrecer resultados inmediatos a sus clientes usando las mejores herramientas disponibles.</p>
          <button className='bg-indigo-600 text-gray-300 mt-10 px-10 py-2 text-xl font-bold font-mono hover:scale-105 duration-300 rounded-lg uppercase'>
            Contacto
          </button>
        </div>
        <div className='lg:p-0 p-4 mt-20'>
          <div className='lg:pr-20 mb-8'>
            <div className='flex flex-row border border-amber-400 shadow-lg shadow-amber-300 hover:scale-105 duration-300 rounded-3xl p-4'>
              <div className="flex-shrink-0 w-24 h-24 my-auto bg-indigo-100 text-amber-400 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4 text-gray-700 dark:text-gray-300">
              <h2 className="font-bold font-mono mb-1 lg:text-2xl text-xl uppercase">
                Diseño y Planeación
              </h2>
              <p className="leading-relaxed lg:text-lg text-md font-sans font-semibold tracking-wide">
                A partir de la info que obtuvimos, hay que planear y diseñar la
                solución para que sea acorde a lo que tu necesitas.
              </p>
              </div>
            </div>
          </div>
          <div className='lg:pl-20 mb-8'>
            <div className='flex flex-row border border-fuchsia-600 shadow-lg shadow-fuchsia-500 hover:scale-105 duration-300 rounded-3xl p-4'>
              <div className="flex-shrink-0 w-24 h-24 my-auto bg-indigo-100 text-fuchsia-600 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4 text-gray-700 dark:text-gray-300">
              <h2 className="font-bold font-mono mb-1 lg:text-2xl text-xl uppercase">
                Desarrollo
              </h2>
              <p className="leading-relaxed lg:text-lg text-md font-sans font-semibold tracking-wide">
                En esta parte nos ponemos a implementar todo y a construir la
                solución con la tecnología más adecuada a tu proyecto.
              </p>
              </div>
            </div>
          </div>
          <div className='lg:pr-20 mb-8'>
            <div  className='flex flex-row border border-green-500 shadow-lg shadow-green-400 hover:scale-105 duration-300 rounded-3xl p-4'>
              <div className="flex-shrink-0 w-24 h-24 my-auto bg-indigo-100 text-green-500 rounded-full inline-flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4 text-gray-700 dark:text-gray-300">
              <h2 className="font-extrabold font-mono mb-1 lg:text-2xl text-xl uppercase">
                Pruebas y Entrega
              </h2>
              <p className="leading-relaxed lg:text-lg text-md font-sans font-semibold tracking-wide">
                Finalmente, la solución se prueba (con estandares de calidad) y
                si estas pasan el producto llega a tus manos.
              </p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center p-6 '>
        <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/b514232a-2260-47f5-ae1b-43b53e894c41/Jw6Kcz9qEL.json"
            //style={{ width: "650px", height: "600px" }}
            ></lottie-player>
        </div>
      </div>
    </section>
  )
}

export default Steps