import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import authentication from "@/public/Authentication_app.png";
import stripeProject from "@/public/stripeSubscriptionProject.png";
import portfolioProject from "@/public/Thumbnail.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduate Student",
    location: "University of Hertfordshire, UK",
    description:
      "I am currently in my last year of my degree at the University of Hertfordshire in the UK. I have been studying various subjects related to software development and have gained a solid foundation in programming and computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "Front-End Developer (Internship)",
    location: "Islamabad, PK",
    description:
      "I completed an internship as a front-end developer, where I gained practical experience in building user interfaces and implementing front-end functionality. During this time, I upskilled myself to become a Next.js developer, learning how to build scalable and performant web applications using the Next.js framework.",
    icon: React.createElement(CgWorkAlt),
    date: " May-Sep(4m) - 2023",
  },
  {
    title: "Front End Developer @Veme.ly",
    location: "Islamabad, PK (remote)",
    description:
      "Working as a front-end developer on a contract basis at Veme.ly. My main responsibilities include creating user interfaces, conducting code reviews, and exploring new technologies. Also working on side projects to further enhance my skills and knowledge in software development.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Online Course Landing Page",
    description:
      "This project was a landing page for an online course. It integrated Stripe as the payment system, allowing users to purchase the course.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Stripe", "Aceternity UI"],
    imageUrl: stripeProject,
    slug: "https://github.com/Naish031/ConstructionMainPage",
  },
  {
    title: "3D Portfolio",
    description:
      "My portfolio website. I used Three.js and React Three Fiber to create the 3D effect.",
    tags: [
      "React",
      "Next.js",
      "SQL",
      "Tailwind",
      "Framer",
      "Three.js",
      "React Three Fiber",
    ],
    imageUrl: portfolioProject,
    slug: "https://github.com/Naish031/Portfolio-3D",
  },
  {
    title: "CorpComment",
    description:
      "This project was a practice project for learning authentication in React. It involved implementing user sign up, sign in, and a dashboard. React Router was used for routing.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "React Router"],
    imageUrl: authentication,
    slug: "https://github.com/Naish031/Authentication_app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Three JS",
  "MongoDB",
  "Storybook",
  "React Email",
  "React Resend",
  "Express",
  "Framer Motion",
] as const;
