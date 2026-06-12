import { Link } from "react-scroll";
import { useLanguage } from "../../context/LanguageProvider";

const AboutMeText = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h1 className="font-extrabold text-3xl sm:text-4xl text-cyan">{t("nav.about")}</h1>
        <h2 className="text-white text-lg sm:text-xl">Hello, i'm Ahmed Hassan.</h2>
        <p className="text-white text-sm sm:text-base max-w-3xl">
          I’m a passionate and dedicated developer specializing in creating
          modern, responsive, and user-friendly web applications. My skill set
          includes:
        </p>
        <ul className="list-disc text-white text-sm sm:text-base text-left max-w-3xl pl-6">
          <li><span className="font-extrabold">Frontend and Backend Development:</span> HTML, CSS, JavaScript, React, and Node.js.</li>
          <li><span className="font-extrabold">Design & Prototyping:</span> Expertise in Figma for crafting visually stunning UI/UX designs.</li>
          <li><span className="font-extrabold">Styling Frameworks:</span> Tailwind CSS for building clean and scalable styles efficiently.</li>
          <li><span className="font-extrabold">Responsive Design:</span> Ensuring seamless user experiences across all devices.</li>
        </ul>
        <p className="text-justify text-white text-sm sm:text-base max-w-3xl">
          I thrive on turning creative ideas into functional, high-quality digital solutions. My focus is on writing clean,
          maintainable code and delivering projects that combine aesthetics with top-notch performance. I’m always eager to
          learn new technologies and push the boundaries of my skills to stay ahead in this ever-evolving field. When I’m not
          coding, I enjoy exploring new tools and techniques to improve my craft and collaborating with like-minded individuals
          to create impactful web experiences.
        </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          {t("nav.projects")}
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
