import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import logo from "../assets/logo.png";

const navbarLinks = [
  {
    title: "الرئيسية",
    href: "/",
  },
  {
    title: "من نحن",
    href: "/#about",
  },
  {
    title: "الخدمات",
    href: "/#services",
  },

  {
    title: "المجالات",
    href: "/#sectors",
  },
  {
    title: "البرنامج التدريبي",
    href: "/#training",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="shadow-md bg-white fixed top-0 left-0 w-full z-50">
      <nav className="container bg-white py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="let's joy-logo" className="w-[130px]" />
        </div>

        <ul className="hidden lg:flex gap-6 items-center">
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-gray-700 text-lg font-medium hover:text-straighthub transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden  lg:flex items-center gap-2">
          <button className="font-bold bg-straighthub text-white px-4 py-2 rounded-lg ">
            سجل الآن
          </button>
          <button className="border font-bold border-straighthub text-straighthub px-4 py-2 rounded-lg">
            تواصل معنا
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <RxCross2 size={28} />
          ) : (
            <HiMiniBars3BottomLeft size={28} />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-3">
              {navbarLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="block text-gray-700 hover:text-letsjoygreen"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                <button className="w-full bg-straighthub text-white px-4 py-2 rounded-lg mt-2">
                  تواصل معنا
                </button>
              </li>
              <li>
                <button className="w-full bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                  احجز الآن
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
