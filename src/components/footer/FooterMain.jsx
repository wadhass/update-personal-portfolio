import { Link } from "react-scroll";
import { useLanguage } from "../../context/LanguageProvider";

const FooterMain = () => {
  const { t } = useLanguage();
  const footerLinks = [
    { key: "nav.about", section: "about" },
    { key: "nav.skills", section: "skills" },
    { key: "nav.experience", section: "experience" },
    { key: "nav.projects", section: "projects" },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey ">Ahmed Hassan</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {t(item.key)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        {t("footer.copy")}
      </p>
    </div>
  );
};

export default FooterMain;
