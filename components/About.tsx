"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.225 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        In my final year of pursuing a degree in{" "}
        <span className="font-medium">Computer Science</span>, I&apos;ve honed
        my passion for coding, especially in the realm of frontend development.
        My journey into programming began in the second year of my studies,
        where I dedicated myself to mastering various courses to augment my
        skill set. While my expertise primarily lies in{" "}
        <span className="font-medium">React</span>, my current focus revolves
        around delving deeper into <span className="font-medium">Next.js</span>{" "}
        and broadening my knowledge with{" "}
        <span className="font-medium">TypeScript</span>. For me, continual learning is like oxygen for growth, and I&apos;m always eager to explore emerging
        technologies. I thrive on the challenge of problem-solving, a sentiment
        that remains a constant driving force in my coding endeavors.
      </p>
    </motion.section>
  );
};

export default About;
