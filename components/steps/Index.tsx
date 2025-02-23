"use client";
import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import { LazyMotion, domMax, m } from "framer-motion";

const Steps = () => {
  const t = useTranslations("steps");
  const ref = useRef(null);

  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <section id="about" className="bg-orange-50 dark:bg-sky-950">
      <LazyMotion features={domMax} strict>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto h-auto"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center justify-center p-6"
          >
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/cbed5599-a04b-4558-a208-f44762da226b/xxvJeq5lAH.json"
            ></lottie-player>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            variants={{ hidden: { opacity: 0, x: 300 }, visible: { opacity: 1, x: 0 } }}
            className="p-6 mt-24 text-gray-600 dark:text-gray-300 tracking-wide"
          >
            <h2 className="uppercase mb-4 font-sans font-extrabold text-xl">{t("aboutUs")}</h2>
            <h1 className="font-extrabold text-5xl mb-4 text-sky-900 dark:text-gray-100">
              {t("boostBusiness")}
            </h1>
            <p className="font-semibold text-2xl mb-4">{t("brandFocus")}</p>
            <p className="font-semibold text-2xl mb-4">{t("mission")}</p>
            <m.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-indigo-600 text-gray-300 mt-10 px-10 py-2 text-xl font-bold font-mono hover:scale-105 duration-300 rounded-lg uppercase"
            >
              {t("contact")}
            </m.button>
          </m.div>

          <m.div
            className="lg:p-0 p-4 mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            {["analysisPlanning", "developmentDesign", "resultsDelivery"].map((step, idx) => (
              <m.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{ hidden: { opacity: 0, x: -300 }, visible: { opacity: 1, x: 0 } }}
                className={`flex flex-row border shadow-lg rounded-3xl p-4 mb-20 ${
                  idx === 0
                    ? "border-amber-400 shadow-amber-300"
                    : idx === 1
                    ? "border-fuchsia-600 shadow-fuchsia-500"
                    : "border-green-500 shadow-green-400"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-24 h-24 my-auto bg-indigo-100 rounded-full inline-flex items-center justify-center ${
                    idx === 0
                      ? "text-amber-400"
                      : idx === 1
                      ? "text-fuchsia-600"
                      : "text-green-500"
                  }`}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-12 h-12"
                    viewBox="0 0 24 24"
                  >
                    {idx === 0 && <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>}
                    {idx === 1 && (
                      <>
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </>
                    )}
                  </svg>
                </div>
                <div className="flex-grow pl-4 text-gray-700 dark:text-gray-300">
                  <h2 className="font-bold font-mono mb-1 lg:text-2xl text-xl uppercase">
                    {t(`${step}.title`)}
                  </h2>
                  <p className="leading-relaxed lg:text-lg text-md font-sans font-semibold tracking-wide">
                    {t(`${step}.description`)}
                  </p>
                </div>
              </m.div>
            ))}
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center justify-center p-6"
          >
            <lottie-player
              id="firstLottie"
              ref={ref}
              autoplay
              loop
              mode="normal"
              src="https://lottie.host/b514232a-2260-47f5-ae1b-43b53e894c41/Jw6Kcz9qEL.json"
            ></lottie-player>
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default Steps;
