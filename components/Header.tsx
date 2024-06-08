"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-provider";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
  useActiveSectionContext();
  return (
    <header className="z-[99] relative">
      <motion.div
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{
          x: "-50%",
          y: 0,
          opacity: 100,
          transition: {
            type: "spring",
            stiffness: 260,
            duration: 0.3,
            delay: 0.1,
          },
        }}
        className="fixed top-0 left-1/2 h-[5rem] w-full rounded-none border border-white border-opacity-50 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-900 dark:border-black/40 dark:bg-opacity-70"
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="w-[22rem] flex flex-wrap items-center justify-center text-[0.9rem] font-medium gap-y-1 text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link, index) => (
            <motion.li
              key={index}
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  duration: 0.3,
                  delay: 0.1,
                },
              }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 120 }}
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800 "
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
