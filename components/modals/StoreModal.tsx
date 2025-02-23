import React, { MouseEvent } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface DesignWebModalProps {
  open: boolean;
  onClose: () => void;
}

const StoreModal: React.FC<DesignWebModalProps> = ({ open, onClose }) => {
  const t = useTranslations("storeModal");

  const handleOnClose = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.id === "container") onClose();
  };

  if (!open) return null;

  const icon = (
    <svg
      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <section
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-30 mt-20 sm:mt-10 overflow-auto bg-black bg-opacity-30 backdrop-blur-lg flex justify-center items-center"
    >
      <div className="relative bg-orange-50 dark:bg-sky-950 rounded-3xl p-4 overflow-auto">
        <div className="flex justify-between mt-36 sm:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-sky-950 dark:text-white">
            {t("title")}
          </h1>
          <button
            className="p-2 text-3xl text-cyan-600 hover:text-cyan-700 hover:scale-105 duration-300"
            onClick={onClose}
          >
            <FaWindowClose />
          </button>
        </div>

        <div className="grid gap-10 p-5 lg:max-w-screen-xl md:max-w-[450px] max-w-[400px] mx-auto md:max-h-[100vh] max-h-[100vh] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {(["economic", "business", "corporate"] as const).map((plan) => {
            const features = t.raw(`plans.${plan}.features`) as unknown;

            if (!Array.isArray(features)) {
              console.error(`❌ Error: Las características del plan ${plan} no son un array.`);
              return null;
            }

            return (
              <div
                key={plan}
                className="flex flex-col max-w-md justify-between p-4 text-center hover:scale-105 bg-sky-950 dark:bg-orange-50 rounded-2xl transition-transform duration-300"
              >
                <div className="text-orange-50 dark:text-sky-900 max-w-md flex-grow flex flex-col justify-between">
                  <h3 className="mb- text-2xl font-bold min-h-[3rem]">{t(`plans.${plan}.name`)}</h3>
                  <div className="flex items-baseline justify-center my-4">
                    <span className="mr-2 text-5xl font-extrabold">$99</span>
                    <span className="text-orange-50 dark:text-sky-900">{t("plans.price")}</span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left font-semibold flex-grow">
                    {features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center space-x-3">
                        {icon}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="relative w-full text-white bg-cyan-600 hover:bg-cyan-700 font-semibold rounded-lg text-md px-5 py-2.5">
                    {t("plans.button")}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StoreModal;
