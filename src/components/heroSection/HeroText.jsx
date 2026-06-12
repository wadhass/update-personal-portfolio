import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useLanguage } from "../../context/LanguageProvider";

const HeroText = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left text-center px-4 sm:px-0">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
      >
        {t("hero.title")}
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-6xl text-orange font-bold uppercase leading-tight"
      >
        <motion.span
          className="inline-block"
          animate={{ x: [0, -28, 0] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          Ahmed
          <br className="sm:hidden md:block" />
          Hassan Suliman
        </motion.span>
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base sm:text-lg mt-4 max-w-lg mx-auto md:mx-0"
      >
        {t("hero.description")}
      </motion.p>
    </div>
  );
};

export default HeroText;
