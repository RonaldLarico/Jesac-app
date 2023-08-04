import React, { useRef } from 'react'

import { BsTelephoneInboundFill, BsFillEnvelopeAtFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <section id='contact' className='bg-orange-50 dark:bg-sky-950'>
      <div className='grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl min-h-screen mx-auto h-auto'>
        <div className='mt-16 p-6 text-gray-700 dark:text-gray-300 tracking-wide'>
          <h1 className='font-bold text-4xl mb-4'>Contactanos</h1>
          <p className='font-semibold text-xl mb-4'>
            Deseamos ser parte de tu éxito y queremos llevar tu empresa a niveles nunca antes vistos.</p>
          <div className='mb-3'>
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src="https://lottie.host/feec4205-db47-4809-9e91-bfcfeb9b81fb/E2QbiKbRLK.json"
            //style={{ width: "650px", height: "600px" }}
            ></lottie-player>
          </div>
            <ul className='font-semibold text-xl'>
              <li className='flex justify-normal py-4'>
                <BsTelephoneInboundFill className='text-3xl'/>
                  <p className='pl-4'>+51 991 303 509</p>
              </li>
              <li className='flex justify-normal py-4'>
                <BsFillEnvelopeAtFill className='text-3xl'/>
                  <p className='pl-4'>jesac.digital@gmail.com</p>
              </li>
              <li className='flex justify-normal py-4'>
                <FaMapMarkerAlt className='text-3xl'/>
                  <p className='pl-4'>Juliaca - Perú</p>
              </li>
            </ul>

        </div>
        <div className='flex items-center justify-center p-5 '>
          <div className='relative w-[580px] h-[620px] bg-gray-800 dark:bg-gray-50 rounded-lg overflow-hidden'>
            <div className='absolute w-[580px] h-[620px] bg-gradient-to-r from-indigo-600 via-indigo-600 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right'>
            </div>
            <div className='absolute w-[580px] h-[620px] bg-gradient-to-r from-indigo-600 via-indigo-600 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right'>
            </div>
            <div className='absolute inset-1 bg-gray-800 dark:bg-gray-50 rounded-lg z-10 p-3'>
              <form>
                <h2 className='text-xl font-bold text-gray-300 dark:text-gray-600 text-center lg:mb-12 md:mb-12 mb-6 lg:mt-4 md:mt-4 uppercase'>Contacto</h2>
                <div className='relative grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-between'>
                  <div className='p-1 mb-6 lg:mb-10'>
                  <input
                    type='text'
                    id='name'
                    autoFocus
                    placeholder=''
                    className='relative z-10 border-2 rounded-lg border-gray-300 h-12 bg-transparent text-gray-100 outline-none w-full peer'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-300 dark:peer-focus:text-gray-600
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-10'>
                      Nombre
                  </label>
                  </div>

                  <div className='p-1 mb-6 lg:mb-10'>
                  <input
                    type='number'
                    id='number'
                    autoFocus
                    placeholder=''
                    className='relative z-10 border-2 rounded-lg border-gray-300 h-12 bg-transparent text-gray-100 outline-none w-full peer'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform lg:translate-x-[293px] md:translate-x-[290px] translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0]
                      peer-focus:left-0 peer-focus:text-gray-300 dark:peer-focus:text-gray-600 peer-placeholder-shown:scale-100 lg:peer-placeholder-shown:translate-y-0 md:peer-placeholder-shown:translate-y-0
                      peer-placeholder-shown:translate-y-[80px] peer-placeholder-shown:text-gray-500 peer-focus:scale-75 lg:peer-focus:-translate-y-10 md:peer-focus:-translate-y-10 peer-focus:-translate-y-[-40px]'>
                      Telefono
                  </label>
                  </div>

                  <div className='p-1 mb-6 lg:mb-0'>
                  <input
                    type='email'
                    id='email'
                    autoFocus
                    placeholder=''
                    className='relative z-10 border-2 rounded-lg border-gray-300 h-12 bg-transparent text-gray-100 outline-none w-full peer'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-300 dark:peer-focus:text-gray-600
                      peer-placeholder-shown:scale-100 lg:peer-placeholder-shown:translate-y-[96px] md:peer-placeholder-shown:translate-y-[80px] peer-placeholder-shown:translate-y-[160px]
                     peer-placeholder-shown:text-gray-500 peer-focus:scale-75 lg:peer-focus:-translate-y-[-54px] md:peer-focus:-translate-y-[-42px] peer-focus:-translate-y-[-120px]'>
                      Email
                  </label>
                  </div>

                  <div className='p-1 mb-6 lg:mb-0'>
                  <input
                    type='text'
                    id='title'
                    autoFocus
                    placeholder=''
                    className='relative z-10 border-2 rounded-lg border-gray-300 h-12 bg-transparent text-gray-100 outline-none w-full peer'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform lg:translate-x-[293px] md:translate-x-[290px] translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0
                      peer-focus:text-gray-300 dark:peer-focus:text-gray-600 peer-placeholder-shown:scale-100 lg:peer-placeholder-shown:translate-y-[96px] md:peer-placeholder-shown:translate-y-[80px] peer-placeholder-shown:translate-y-[240px]
                      peer-placeholder-shown:text-gray-500 peer-focus:scale-75 lg:peer-focus:-translate-y-[-54px] md:peer-focus:-translate-y-[-42px] peer-focus:-translate-y-[-200px]'>
                      Titulo
                  </label>
                  </div>
                </div>

                <div className='relative flex flex-col lg:mt-10'>
                  <div className='p-1'>
                  <textarea
                    id='name'
                    name='message'
                    placeholder=''
                    className='relative z-10 border-2 rounded-lg border-gray-300 lg:h-52 md:h-56 h-32 bg-transparent text-gray-100 outline-none w-full peer p-4'
                  ></textarea>
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-300 dark:peer-focus:text-gray-600
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-10'>
                      Mensaje
                  </label>
                  </div>
                </div>
                <button className='w-full bg-indigo-600 lg:mt-8 md:mt-8 mt-4 p-3 rounded-lg text-gray-300 hover:scale-105 duration-300 uppercase font-bold'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact