"use client";

import React from "react";
import { motion } from "framer-motion";

function SectionBreak() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 110 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-gray-200 h-20 w-1 rounded-full my-20 hidden sm:block dark:bg-opacity-20"
    ></motion.section>
  );
}

export default SectionBreak;
