// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";
// import { PiHexagonThin } from "react-icons/pi";


// const HeroPic = () => {
//   return (
//     <motion.div
//       variants={fadeIn("left", 0.2)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: false, amount: 0 }}
//       className=" h-full flex items-center justify-center "
//     >
//       <img
//   src="../../assets/AHMED-removebg-preview.png"
//   alt="AHMED"
//   className="max-h-[450px] w-auto"
// />

//       <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
//         <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite] " />
//       </div>
//     </motion.div>
//   );
// };

// export default HeroPic;



import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
import AhmedImage from "../../assets/AHMED-removebg-preview.png";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      <img
        src={AhmedImage}
        alt="AHMED"
        className="max-h-[450px] w-auto object-contain"
      />

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan-400 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;