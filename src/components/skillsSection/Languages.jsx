import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageProvider";

const Languages = () => {
  const { language, setLanguage, available } = useLanguage();

  const index = available.indexOf(language);

  const prev = () => setLanguage(available[(index - 1 + available.length) % available.length]);
  const next = () => setLanguage(available[(index + 1) % available.length]);

  return (
    <div className="mt-0 flex flex-col items-center sm:items-start gap-2">
      <div className="flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous language"
          className="px-2 py-1 bg-transparent border border-lightGrey rounded-full hover:bg-lightGrey/10 text-sm"
        >
          ‹
        </button>
        <motion.div
          key={language}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="px-3 py-1 bg-gradient-to-r from-orange to-cyan text-black rounded-full font-semibold text-sm"
        >
          {language}
        </motion.div>
        <button
          onClick={next}
          aria-label="Next language"
          className="px-2 py-1 bg-transparent border border-lightGrey rounded-full hover:bg-lightGrey/10 text-sm"
        >
          ›
        </button>
      </div>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="mt-1 p-2 rounded-md bg-dark/60 text-sm"
        aria-label="Select language"
      >
        {available.map((lng) => (
          <option key={lng} value={lng} className="text-black">
            {lng}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Languages;
