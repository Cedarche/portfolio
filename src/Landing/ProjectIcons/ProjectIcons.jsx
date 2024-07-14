import { motion } from "framer-motion";

const hoverVariants = {
  initial: { scale: 1, filter: "drop-shadow(0 0 10px rgba(0, 255, 234, 0.347))" },
  hover: {
    scale: 1.05,
    filter: "drop-shadow(0 0 10px rgba(0, 255, 0, 0.8))",
    transition: {
      duration: 0.3,
    },
  },
};

export default function ProjectIcons() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-white font-roboto font-bold text-4xl pb-8">
        Some other things I've made
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {[
            {
              src: "https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg",
              alt: "Transistor",
            },
            {
              src: "https://tailwindui.com/img/logos/158x48/reform-logo-white.svg",
              alt: "Reform",
            },
            {
              src: "https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg",
              alt: "Tuple",
            },
            {
              src: "https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg",
              alt: "Laravel",
            },
            {
              src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg",
              alt: "SavvyCal",
            },
            {
              src: "https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg",
              alt: "Statamic",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white/5 p-6 sm:p-10 cursor-pointer">
              <motion.img
                variants={hoverVariants}
                initial="initial"
                animate="initial"
                whileHover="hover"
                className="max-h-12 w-full object-contain"
                src={item.src}
                alt={item.alt}
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
