import React, { MouseEvent } from 'react'

import { FaWindowClose } from 'react-icons/fa'

interface DesignWebModalProps {
  open: boolean;
  onClose: () => void;
}

const DesignWebModal: React.FC<DesignWebModalProps> = ({open, onClose}) => {

  const handleOnClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === 'container') onClose();
  };

  if(!open) return null;

  const icon = (
    <svg
      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clip-rule="evenodd">
        </path>
    </svg>
  )

  return (
    <section
      id='container'
      onClick={handleOnClose}
      className='fixed inset-0 md:overflow-y-scroll overflow-y-scroll bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='absolute lg:top-32 md:top-0 top-0'>
      <button
        className='p-2 text-5xl text-cyan-600 hover:text-cyan-700'
        onClick={onClose}>
        <FaWindowClose />
      </button>
      </div>

      <div className='space-y-6 md:space-y-0 lg:max-w-screen-xl md:max-w-[450px] max-w-[400px] mx-auto md:max-h-[95vh] max-h-[95vh] p-10 gap-10 rounded-3xl lg:grid lg:grid-cols-3 md:grid md:grid-cols-1'>
      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-gray-800 dark:bg-gray-300 rounded-3xl xl:p-8">
          <div className="text-gray-300 dark:text-gray-900">
            <h3 className="mb-4 text-2xl font-bold">PLAN ECONOMICO - Diseño de paginas web</h3>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">S/ 599</span>
              <span className="text-gray-500 dark:text-gray-800">/pago unico</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left font-semibold">
              <li className="flex items-center space-x-3">
                {icon}
                <span>Diseño web adaptable a moviles</span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>Hosting GRATIS por 1 año</span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Dominio {' '}
                  <span className="font-bold">.com</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Certificado de seguridad SSL
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Posicionamiento SEO basico
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Enlazes a redes sociales
                </span>
              </li>
            </ul>
            <button
              //onClick={() => setDesignModal(true)}
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Solicitar
            </button>
          </div>
          </div>

      <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-gray-800 dark:bg-gray-300 rounded-3xl xl:p-8">
          <div className="text-gray-300 dark:text-gray-900">
            <h3 className="mb-4 text-2xl font-bold">PLAN EMPRESARIAL - Diseño de paginas web</h3>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">S/ 999</span>
              <span className="text-gray-500 dark:text-gray-800">/pago unico</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left font-semibold">
              <li className="flex items-center space-x-3">
                {icon}
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Team size:{' '}
                  <span className="font-bold">10 developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Premium support:{' '}
                  <span className="font-bold">24 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Free updates: <span className="font-bold">24 months</span>
                </span>
              </li>
            </ul>
            <button
              //onClick={() => setDesignModal(true)}
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Solicitar
            </button>
          </div>
          </div>

      <div className="relative flex flex-col md:mb-20 max-w-lg p-6 mx-auto text-center text-gray-900 bg-gray-800 dark:bg-gray-300 rounded-3xl xl:p-8">

          <div className="text-gray-300 dark:text-gray-900">
            <h3 className="mb-4 text-2xl font-bold">PLAN CORPORATIVO - Diseño de paginas web</h3>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">S/ 1499</span>
              <span className="text-gray-500 dark:text-gray-800">/pago unico</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left font-semibold">
              <li className="flex items-center space-x-3">
                {icon}
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Team size:{' '}
                  <span className="font-bold">10 developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Premium support:{' '}
                  <span className="font-bold">24 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {icon}
                <span>
                  Free updates: <span className="font-bold">24 months</span>
                </span>
              </li>
            </ul>
            <button
              //onClick={() => setDesignModal(true)}
              className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center">
              Solicitar
            </button>
          </div>
          </div>

        </div>
    </section>
  )
}

export default DesignWebModal