import { color } from "framer-motion";

import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  trendWear, // project-1
  project2,
  project3,
  express,
  mui,
  framer,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from "../assets";

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import nexusHome from "../assets/nexusHome.PNG";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// services
const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

// Technologies
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },

  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Material Ui",
    icon: mui,
  },

  {
    name: "framer",
    icon: framer,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Express Js",
    icon: express,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "github",
    icon: github,
  },
];

// Experiences
const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

// Projects
const projects = [
  {
    name: "TrendWear",
    description: "TrendWear is a modern online fashion platform where you can easily browse and shop the latest styles from top brands. Enjoy curated collections and a seamless shopping experience in one stylish place.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react router",
        color: "green-text-gradient",
      },
      {
        name: "react hook form",
        color: "pink-text-gradient",
      },
      {
        name: "react icons",
        color: "yellow-text-gradient",
      },
      {
        name: "context api",
        color: "purple-text-gradient",
      },
      {
        name: "material ui",
        color: "red-text-gradient",
      },
    ],
    image: trendWear,
    source_code_link: "https://trendwear-clothingsite.vercel.app/",
  },

  {
    name: "NexusHome",
    description: "NexusHome is a cutting-edge real estate online platform that makes it easy to browse, discover, and purchase your dream home. Explore trusted listings in prime locations with a seamless, user-friendly experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react router",
        color: "green-text-gradient",
      },
      {
        name: "react toastify",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
      {
        name: "framer motion",
        color: "purple-text-gradient",
      },
      {
        name: "Web3Forms",
        color: "red-text-gradient",
      },
    ],
    image: nexusHome,
    source_code_link: "https://nexushome-realstate.vercel.app/",
  },

  {
    name: "GoGroove-Ecommerce",
    description:
      "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
