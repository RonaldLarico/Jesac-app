import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='bg-cyan-50 dark:bg-sky-950'>
      <div className='grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl min-h-screen mx-auto h-auto'>
        <div>
          contacto
        </div>
        <div className='flex items-center justify-center p-4 '>
          <div className='relative w-[580px] h-[620px] bg-gray-800 rounded-lg overflow-hidden'>
            <div className='absolute w-[580px] h-[620px] bg-gradient-to-r from-lime-500 via-lime-500 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right'>
            </div>
            <div className='absolute w-[580px] h-[620px] bg-gradient-to-r from-lime-500 via-lime-500 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right'>
            </div>
            <div className='absolute inset-1 bg-gray-800 rounded-lg z-10 p-3'>
              <form>
                <h2 className='text-2xl font-semibold text-lime-500 text-center lg:mb-12 md:mb-12 mb-6 lg:mt-4 md:mt-4'>Contacto</h2>
                <div className='relative grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-between'>
                  <div className='p-1 mb-6 lg:mb-10'>
                  <input
                    type='text'
                    id='name'
                    autoFocus
                    placeholder=''
                    className='relative z-10 border-2 rounded-lg border-lime-500 h-12 bg-transparent text-gray-100 outline-none w-full peer'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500
                    text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-10'>
                      Nombre
                  </label>
                  </div>

                  <div className='p-1 mb-6 lg:mb-10'>
                  <input
                    type='number'
                    id='number'
                    autoFocus
                    placeholder=''
                    className='relative z-10 border-2 rounded-lg border-lime-500 h-12 bg-transparent text-gray-100 outline-none w-full peer'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform lg:translate-x-[293px] md:translate-x-[290px] translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0]
                      peer-focus:left-0 peer-focus:text-lime-500 text-lime-500 peer-placeholder-shown:scale-100 lg:peer-placeholder-shown:translate-y-0 md:peer-placeholder-shown:translate-y-0
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
                    className='relative z-10 border-2 rounded-lg border-lime-500 h-12 bg-transparent text-gray-100 outline-none w-full peer'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500
                     text-lime-500 peer-placeholder-shown:scale-100 lg:peer-placeholder-shown:translate-y-[96px] md:peer-placeholder-shown:translate-y-[80px] peer-placeholder-shown:translate-y-[160px]
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
                    className='relative z-10 border-2 rounded-lg border-lime-500 h-12 bg-transparent text-gray-100 outline-none w-full peer'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform lg:translate-x-[293px] md:translate-x-[290px] translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0
                      peer-focus:text-lime-500 text-lime-500 peer-placeholder-shown:scale-100 lg:peer-placeholder-shown:translate-y-[96px] md:peer-placeholder-shown:translate-y-[80px] peer-placeholder-shown:translate-y-[240px]
                      peer-placeholder-shown:text-gray-500 peer-focus:scale-75 lg:peer-focus:-translate-y-[-54px] md:peer-focus:-translate-y-[-42px] peer-focus:-translate-y-[-200px]'>
                      Titulo
                  </label>
                  </div>
                </div>

                <div className='relative flex flex-col lg:mt-10'>
                  <div className='p-1'>
                  <input
                    type='text'
                    id='name'
                    autoFocus
                    placeholder=''
                    className='relative z-10 border-2 rounded-lg border-lime-500 lg:h-52 md:h-56 h-32 bg-transparent text-gray-100 outline-none w-full peer p-4'
                    />
                  <label
                    className='peer-focus:font-bold absolute text-lg duration-500 transform translate-x-3 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lime-500
                    text-lime-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-gray-500 peer-focus:scale-75 peer-focus:-translate-y-10'>
                      Mensaje
                  </label>
                  </div>
                </div>
                <button className='w-full bg-lime-500 lg:mt-8 md:mt-8 mt-4 p-3 rounded-lg'>
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