import React, { MouseEvent } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useTranslations } from 'next-intl';

interface DesignWebModalProps {
  open: boolean;
  onClose: () => void;
}

const DesignWebModal: React.FC<DesignWebModalProps> = ({open, onClose}) => {

  const t = useTranslations('plans');

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
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd">
        </path>
    </svg>
  )

  return (
    <section
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="relative">
        <div className="flex justify-end">
          <button
            className="p-2 text-5xl text-cyan-600 hover:text-cyan-700 hover:scale-105 duration-300"
            onClick={onClose}
          >
            <FaWindowClose />
          </button>
        </div>

        {/* Planes */}
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-1 space-y-6 md:space-y-0 p-10 rounded-3xl">
          {[
            { title: t('economic'), price: 'S/ 599' },
            { title: t('business'), price: 'S/ 999' },
            { title: t('corporate'), price: 'S/ 1499' },
          ].map((plan, index) => (
            <div
              key={index}
              className="flex flex-col max-w-lg p-6 mx-auto text-center hover:scale-105 duration-300 bg-gray-800 dark:bg-gray-300 rounded-3xl"
            >
              <h3 className="mb-4 text-2xl font-bold">{plan.title}</h3>
              <div className="flex items-baseline justify-center my-8">
                <span className="mr-2 text-5xl font-extrabold">{plan.price}</span>
                <span className="text-gray-500 dark:text-gray-800">{t('price')}</span>
              </div>
              <ul className="mb-8 space-y-4 text-left font-semibold">
                <li className="flex items-center space-x-3">
                  {icon}
                  <span>{t('features.responsiveDesign')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  {icon}
                  <span>{t('features.freeHosting')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  {icon}
                  <span>{t('features.domain')} <span className="font-bold">.com</span></span>
                </li>
                <li className="flex items-center space-x-3">
                  {icon}
                  <span>{t('features.ssl')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  {icon}
                  <span>{t('features.seo')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  {icon}
                  <span>{t('features.socialMedia')}</span>
                </li>
              </ul>
              <button className="w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5">
                {t('button')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DesignWebModal