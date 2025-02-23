"use client";
import { m, LazyMotion, domMax } from "framer-motion";
import Link from "next/link";

type LinkItem = {
  label: string;
  href?: string;
};

export default function Footer() {
  const sections: { title: string; links: LinkItem[] }[] = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "#home" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#home" },
        { label: "App Development" },
        { label: "UI/UX Design" },
      ],
    },
    {
      title: "Resources",
      links: [{ label: "Blog" }, { label: "FAQs" }, { label: "Support" }],
    },
    {
      title: "Languages",
      links: [
        { label: "English" },
        { label: "Español" },
        { label: "Français" },
        { label: "Deutsch" },
        { label: "Português" },
        { label: "Italiano" },
        { label: "日本語" },
        { label: "中文" },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-sky-950">
      <LazyMotion features={domMax}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1800px] h-[1800px] z-0">
          <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-500 w-full h-full rounded-full" />
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto text-center px-4 pt-40 pb-10">
          <m.h2
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 90, damping: 12 }}
            className="text-5xl font-extrabold text-white mb-4"
          >
            Schedule a call to see how we can help
          </m.h2>

          <m.p
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 12,
              delay: 0.1,
            }}
            className="text-lg text-white mb-8 max-w-xl mx-auto"
          >
            Book a short call and we can chat through your project to see if we
            are a good fit.
          </m.p>

          <m.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.1 }}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book a Call
          </m.button>
        </div>

        <div className="relative w-full -mt-1">
          <svg
            className="w-full h-[150px]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#0a2540"
              d="M0,280 C500,0 940,0 1440,280 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

        <div className="bg-[#0a2540] pb-10 px-4 lg:px-0 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-screen-xl mx-auto text-gray-300 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {sections.map((sec, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              >
                <h3 className="font-bold text-lg mb-4">{sec.title}</h3>
                <ul className="space-y-2">
                  {sec.links.map((item, idx) => (
                    <m.li
                      key={idx}
                      whileHover={{ scale: 1.1, color: "#fff" }}
                      transition={{ duration: 0.2 }}
                      className="hover:text-white cursor-pointer transition-colors"
                    >
                      {item.href ? (
                        <Link href={item.href}>{item.label}</Link>
                      ) : (
                        item.label
                      )}
                    </m.li>
                  ))}
                </ul>
              </m.div>
            ))}
          </m.div>
          <div className="text-center text-gray-400 mt-8 text-sm">
            <p>&copy; {new Date().getFullYear()} JESAC. Reservados todos los derechos.</p>
          </div>
        </div>
      </LazyMotion>
    </section>
  );
}
