"use client";
import React, { useRef, useState } from "react";
import DesignWebModal from "../modals/DesignWebModal";
import StoreModal from "../modals/StoreModal";
import { useTranslations } from "next-intl";
import { LazyMotion, domMax, m, useInView } from "framer-motion";

type Card = {
  title: string;
  description: string;
  features: string[];
  animationUrl: string;
  button: string;
};

const Services = () => {
  const [designModal, setDesignModal] = useState(false);
  const [storeModal, setStoreModal] = useState(false);
  const t = useTranslations("services");

  const handleOnCloseWeb = () => setDesignModal(false);
  const handleOnCloseStore = () => setStoreModal(false);

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  const cards: Card[] = t.raw("cards");

  const handleButtonClick = (index: number) => {
    if (index === 0) setDesignModal(true);
    if (index === 1) setStoreModal(true);
  };

  return (
    <section id="services" className="bg-orange-50 dark:bg-sky-950">
      <LazyMotion features={domMax} strict>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6"
        >
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1, margin: "-10%" }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
            }}
            className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12"
          >
            <h2 className="mb-4 mt-16 lg:mt-0 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {t("title")}
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              {t("description")}
            </p>
          </m.div>

          <m.div
            className="space-y-8 md:space-y-0 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 md:gap-6 xl:gap-10 sm:mt-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1, margin: "-10%" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {cards.map((card, index) => (
              <m.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1, margin: "-10%" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, delay: 0.1 },
                  },
                }}
                className="relative flex flex-col items-center justify-center max-w-lg p-6 mx-auto text-center shadow-2xl rounded-3xl xl:p-8 
                            dark:bg-orange-50 bg-sky-900 overflow-hidden"
              >
                {/* <m.div
                  className="
    absolute inset-0 rounded-3xl
    bg-[linear-gradient(135deg,_#2973B2,_#48A6A7,_#F05A7E,_#9ACBD0)]
    dark:bg-[linear-gradient(135deg,_#FFBE98,_#F05A7E,_#FFBE98,_#F05A7E)]
  "
                  style={{ backgroundSize: "300% 300%" }}
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{
                    backgroundPosition: [
                      "0% 50%",
                      "50% 25%",
                      "100% 50%",
                      "50% 75%",
                      "0% 50%",
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                /> */}

                <m.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1, margin: "-10%" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.2 },
                    },
                  }}
                >
                  <lottie-player
                    id={`lottie-${index}`}
                    ref={ref}
                    autoplay
                    loop
                    mode="normal"
                    src={card.animationUrl}
                    style={{ width: "180px", height: "180px" }}
                  ></lottie-player>
                </m.div>

                <m.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.1, margin: "-10%" }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.3 },
                    },
                  }}
                  className="relative dark:text-sky-900/80 text-orange-50"
                >
                  <h3 className="mb-6 text-2xl font-bold">{card.title}</h3>
                  <p className="font-bold mb-6 dark:text-sky-900/80 sm:text-lg text-orange-50">
                    {card.description}
                  </p>
                  <div role="list" className="mb-8 space-y-2">
                    {card.features.map((feature: string, idx: number) => (
                      <m.p
                        key={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1, margin: "-10%" }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.5, delay: idx * 0.1 },
                          },
                        }}
                        className="py-2 border-b w-full"
                      >
                        {feature}
                      </m.p>
                    ))}
                  </div>
                  <m.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => handleButtonClick(index)}
                    className="relative w-full text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 font-semibold rounded-lg text-md px-5 py-2.5 text-center"
                  >
                    {card.button}
                  </m.button>
                </m.div>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </LazyMotion>
      <DesignWebModal onClose={handleOnCloseWeb} open={designModal} />
      <StoreModal onClose={handleOnCloseStore} open={storeModal} />
    </section>
  );
};

export default Services;
