"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const storedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (theme === null) return null;

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl p-2 transition-all duration-300 cursor-pointer"
    >
      {theme === "dark" ? (
        <SunIcon className="w-8 h-8 text-yellow-400" />
      ) : (
        <MoonIcon className="w-8 h-8 text-gray-800" />
      )}
    </button>
  );
};

export const MenuItem = ({ setIsOpen, setActive, href, active, item, children }) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-[#0c0808] dark:text-[#0c0808] "
      >
        <Link href={href} onClick={() => setIsOpen(false)}>
          {children || item}
        </Link>
      </motion.p>
      {active === item && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className=" backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
          >
            <motion.div layout className="w-max h-full p-4">{children}</motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="hidden md:flex text-2xl space-x-6 justify-center w-full "
        onMouseLeave={() => setActive(null)}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { setActive, setIsOpen })
        )}
      </nav>

      {/* Mobile Navbar */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-[#7c4ee4] dark:bg-[#7c4ee4] shadow-lg text-xl border border-transparent dark:border-white/[0.9] space-y-4 p-6 md:hidden">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { setActive, setIsOpen })
          )}
        </nav>
      )}
    </>
  );
};

const Logo = () => (
  <h1 className="text-2xl font-bold text-[#7c4ee4] cursor-pointer flex justify-center">
    LOG<span className="text-[#333333]">it</span>
  </h1>
);

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-white  shadow-md">
      <div className="flex items-center justify-between p-4 ">
        <Logo />

        {/* Desktop & Mobile Menu */}
        <Menu setActive={setActive} isOpen={isOpen} setIsOpen={setIsOpen}>
          <MenuItem setIsOpen={setIsOpen} active={active} item="Home" href="/"/>
          <MenuItem setIsOpen={setIsOpen} active={active} item="Blog" href="/blog"/>
          <MenuItem setIsOpen={setIsOpen} active={active} item="About" href="/about"/>
          <MenuItem setIsOpen={setIsOpen} active={active} item="Contact us" href="/contact"/>
          <ThemeToggle />
        </Menu>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black text-3xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
