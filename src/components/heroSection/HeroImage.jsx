import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className=" h-full w-full">
          <img
            src="/images/me.png"
            alt="Abdelrahman Qassem"
            className="w-auto h-auto text-center text-sm lg:text-base absolute bottom-0 z-20 right-[6%] sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:max-w-[220px] md:sm:max-w-none sm:translate-x-0 sm:bottom-0 sm:top-auto sm:relative sm:static sm:mx-auto sm:block sm:transform-none sm:max-w-[220px] md:max-w-[380px] lg:max-w-[570px]"
          />

          {/* Soft gradient blob behind the picture (responsive sizes and centering on small screens) */}
          <div className="absolute -z-10 top-6 right-8 sm:top-10 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 w-[320px] sm:w-[360px] md:w-[420px] h-[320px] sm:h-[360px] md:h-[420px] rounded-full bg-gradient-to-tr from-orange-400 to-cyan-400 opacity-30 blur-3xl animate-[pulse_6s_ease-in-out_infinite] pointer-events-none" />
        <div className="w-full h-full absolute bottom-[-20%] -z-20 flex justify-center items-center rotate-90">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange-300 opacity-20 animate-[spin_40s_linear_infinite] blur-sm" />
        </div>
        <div className="w-full h-full absolute bottom-[-20%] -z-20 flex justify-center items-center rotate-90">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] w-auto text-orange-300 opacity-10 animate-[spin_50s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
