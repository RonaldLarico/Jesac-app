
import React, { useRef } from 'react'

const Steps = () => {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section id='about' className=''>
      <div className='grid grid-cols-2 max-w-screen-xl mx-auto h-auto'>
        <div className='p-6 mt-24 text-gray-500'>
          <h2 className='uppercase mb-4 font-sans font-extrabold text-xl text-gray-600'>Sobre nosotros</h2>
          <h1 className='font-extrabold text-5xl mb-4 text-gray-700'>Impulsamos tu negocio</h1>
          <p className='font-semibold text-2xl mb-4'>Centramos esfuerzos en conocer la marca de nuestros clientes y llevar al siguiente nivel.</p>
          <p className='font-semibold text-2xl mb-4'>Digital Marketing nace con la misión principal de ofrecer resultados inmediatos a sus clientes usando las mejores herramientas disponibles.</p>
          <button className='bg-indigo-600 text-gray-300 mt-10 px-10 py-2 text-xl font-bold font-mono rounded-lg uppercase'>
            Contacto
          </button>
        </div>
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
      </div>
    </section>
  )
}

export default Steps