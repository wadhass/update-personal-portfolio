import { Link } from "react-scroll";

import { useLanguage } from "../../context/LanguageProvider";

const links = [
  { key: "nav.about", section: "about" },
  { key: "nav.skills", section: "skills" },
  { key: "nav.experience", section: "experience" },
  { key: "nav.projects", section: "projects" },
  { key: "nav.contact", section: "contact" },
];

const NavbarLinks = () => {
  const { t } = useLanguage();

  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {t(link.key)}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
