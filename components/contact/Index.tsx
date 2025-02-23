"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { BsTelephoneInboundFill, BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LazyMotion, domMax, m } from "framer-motion";


type InputFields = {
  name: string;
  number: string;
  email: string;
  title: string;
  message: string;
};

const Contact = () => {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const [inputValues, setInputValues] = useState<InputFields>({
    name: "",
    number: "",
    email: "",
    title: "",
    message: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setInputValues((prev) => ({ ...prev, [id as keyof InputFields]: value }));
  };

  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <section id="contact" className="bg-orange-50 dark:bg-sky-950">
      <LazyMotion features={domMax} strict>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="grid lg:grid-cols-2 grid-cols-1 max-w-screen-xl min-h-screen mx-auto h-auto"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mt-16 p-6 text-gray-700 dark:text-gray-300 tracking-wide"
          >
            <h1 className="font-bold text-4xl mb-4">{t("title")}</h1>
            <p className="font-semibold text-xl mb-4">{t("description")}</p>
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="mb-3"
            >
              <lottie-player
                id="firstLottie"
                ref={ref}
                autoplay
                loop
                mode="normal"
                src="https://lottie.host/feec4205-db47-4809-9e91-bfcfeb9b81fb/E2QbiKbRLK.json"
              ></lottie-player>
            </m.div>
            <m.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ staggerChildren: 0.2, duration: 0.5, ease: "easeOut" }}
              className="font-semibold text-xl"
            >
              {[
                { icon: <BsTelephoneInboundFill className="text-3xl" />, text: "+51 991 303 509" },
                { icon: <BsFillEnvelopeAtFill className="text-3xl" />, text: "jesac.digital@gmail.com" },
                { icon: <FaMapMarkerAlt className="text-3xl" />, text: "Juliaca - Perú" },
              ].map((item, index) => (
                <m.li
                  key={index}
                  className="flex justify-normal py-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                >
                  {item.icon}
                  <p className="pl-4">{item.text}</p>
                </m.li>
              ))}
            </m.ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="flex items-center justify-center p-5"
          >
            <div className="relative w-[580px] h-[620px] bg-gray-800 dark:bg-gray-50 rounded-lg overflow-hidden">
              <div className="absolute w-[580px] h-[620px] bg-gradient-to-r from-indigo-600 via-indigo-600 to-transparent -top-[50%] -left-[50%] animate-spin-slow origin-bottom-right"></div>
              <div className="absolute w-[580px] h-[620px] bg-gradient-to-r from-indigo-600 via-indigo-600 to-transparent -top-[50%] -left-[50%] animate-spin-delay origin-bottom-right"></div>
              <div className="absolute inset-1 bg-sky-900 dark:bg-orange-50 rounded-lg z-10 p-3">
                <form>
                  <h2 className="text-xl font-bold text-gray-300 dark:text-gray-600 text-center lg:mb-12 mb-6 uppercase">
                    {t("form.contact")}
                  </h2>
                  <div className="grid lg:grid-cols-2 gap-10">
                    {["name", "phone", "email", "title"].map((field, idx) => (
                      <m.div
                        key={field}
                        className="relative group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                      >
                        <input
                          id={field}
                          type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                          value={inputValues[field as keyof typeof inputValues]}
                          onChange={handleChange}
                          placeholder=" "
                          className="peer w-full h-12 rounded-lg border-2 border-gray-300 bg-transparent text-gray-100 dark:text-gray-800 outline-none px-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-300"
                          required
                        />
                        <label
                          htmlFor={field}
                          className={`absolute text-lg text-gray-500 left-4 transition-all duration-300 transform origin-[0] ${
                            inputValues[field as keyof typeof inputValues]
                              ? "-top-6 text-sm dark:text-sky-800 text-orange-50 font-bold"
                              : "top-2 text-lg dark:text-gray-500 text-slate-400 font-semibold"
                          }`}
                        >
                          {t(`form.${field}`)}
                        </label>
                      </m.div>
                    ))}
                  </div>
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="relative mt-10"
                  >
                    <textarea
                      id="message"
                      rows={5}
                      value={inputValues.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full rounded-lg border-2 border-gray-300 bg-transparent text-gray-100 dark:text-gray-800 outline-none p-4 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-300"
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className={`absolute text-lg text-gray-500 left-4 transition-all duration-300 transform origin-[0] ${
                        inputValues.message
                          ? "-top-6 text-sm dark:text-sky-800 text-orange-50 font-bold"
                          : "top-3 text-lg dark:text-gray-500 text-slate-400 font-semibold"
                      }`}
                    >
                      {t("form.message")}
                    </label>
                  </m.div>
                  <m.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full bg-indigo-600 mt-8 p-3 rounded-lg text-gray-300 hover:scale-105 hover:bg-indigo-700 transition duration-300 uppercase font-bold"
                  >
                    {t("form.submit")}
                  </m.button>
                </form>
              </div>
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default Contact;
