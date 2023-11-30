import React from "react";
import {FaCss3Alt, FaHtml5, FaNode, FaReact, FaSass, FaStripe} from "react-icons/fa";
import {SiExpress, SiJavascript, SiMongodb, SiNextdotjs, SiTypescript, SiStrapi} from "react-icons/si";

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
    company: "Beachshore Design - Watford, UK",
    title: "Web Developer, Front end.",
    description:
      "Working with a variety of clients to develop websites and applications to meet their specific requirements.",
    imgURL: "/beachshore.jpg",
    date: "Oct 2023 - Present",
  },
  {
    company: "University of Edinburgh & HyperionDev",
    title: "Student",
    description:
      "Full stack Web Development Bootcamp. Throughout this course I learnt the fundamentals of Web Development and learnt coding in Javascript, HTML, CSS and learnt frameworks such as React and Next.",
    imgURL: "/Hyperiondev-logo.jpg",
    date: "Mar 2023 - Sept 2023",
  },
  {
    company: "Tevva - Essex, UK",
    title: "Senior Buyer",
    description:
      "The commercial lead for electrified powertrian, ensuring the business has first to market technology leading in performance, cost and sustainability.",
    imgURL: "/tevva.png",
    date: "Jul 2022 - Mar 2023",
  },
  {
    company: "Alstom - Derby, UK",
    title: "Commodity buyer",
    description:
        "The local lead buyer for electrical hardware with targets to improve on contract postiion and new product development.",
    imgURL: "/Alstom_logo.svg",
    date: "Feb 2021 - Jul 2022",
  },
  {
    company: "Jaguar Land Rover - Gaydon, UK",
    title: "Senior Global Strategy Buyer",
    description:
        "Responsible for the development and implementation of the global sourcing strategies across the category.",
    imgURL: "/jaguar.jpg",
    date: "Feb 2019 - Feb 2021",
  },
  {
    company: "Jaguar Land Rover - Gaydon, UK",
    title: "Buyer",
    description:
        "I lead overall operations which comprised contract management supplier performance, improvement activities, and stakeholder management",
    imgURL: "/jaguar.jpg",
    date: "Sept 2017 - Feb 2019",
  },
  {
    company: "Jaguar Land Rover - Gaydon, UK",
    title: "Graduate Trainee",
    description:
        "An introduction into automotive procurement and supply chain management.",
    imgURL: "/jaguar.jpg",
    date: "Sept 2015 - Sept 2017",
  },
  {
    company: "University of Leicester",
    title: "Student",
    description:
        "I studied Mechanical Engineering with a focus on automotive.",
    imgURL: "/University_of_Leicester_Logo_Shield.png",
    date: "Sept 2011 - Jun 2015",
  },
] as const;

export const projectsData = [
  {
    index: 0,
    title: "Community App",
    description: "This project represents a social media platform built using modern tools and technologies. Users can share their thoughts, dive into discussions, and connect with the digital community.",
    features: [
      "Frontend: The application's frontend is crafted with Next.js, optimizing for faster page loads and enhanced SEO. TypeScript brings a layer of type safety, ensuring a robust application with fewer runtime errors.",
      "Backend: Express.js, running within the Node.js environment, managing server-side operations, routing, and data handling.",
      "User Authentication: Is managed with Clerk allowing a simplified yet secure user authentication system",
      "Database: MongoDB is at the core of data management, ensuring efficient storage and retrieval of user content."
    ],
    projectLink: "https://community-mern.vercel.app/",
    githubLink: "https://github.com/ianh8899/Community-MERN",
    imageUrl: "/community-mern.png",
    exampleUsername:"example",
    examplePassword:"c0mmuun1ty",
    icons: (
        <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
          <SiTypescript size="40" color={"#3178C6"} className="my-2"/>
          <SiMongodb size="40" color={"#4DB33D"} className="my-2"/>
          <SiExpress size="40" color={"#000000"} className="my-2"/>
          <SiNextdotjs size="40" color={"#000000"} className="my-2"/>
          <FaNode size="40" color={"#539E43"} className="my-2"/>
    </div>
)
  },
  {
    index: 1,
    title: "Clothing Store eCommerce App",
    description: "This project serves as a demonstration of a full-stack e-Commerce platform. While currently just an example, the underlying architecture and technical integration showcase a cohesive blend of frontend and backend technologies.",
    features: [
      "Frontend: Built with React, ensuring a dynamic and interactive user experience. Styling enhanced by Sass for an organized CSS structure.",
      "Backend: Powered by Strapi on an Ubuntu VPS via Hostinger, providing reliable data management.",
      "Payments: Integration of Stripe in test mode demonstrates potential for secure transactions."
    ],
    projectLink: "http://ecommerce2569896.co.uk/",
    githubLink: "https://github.com/ianh8899/Shopping",
    imageUrl: "/eCommerce Image.jpg",
    exampleUsername:"",
    examplePassword:"",
    icons: (
        <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
          <FaReact size="40" color={"#61DBFB"} className="my-2"/>
          <FaSass size="40" color={"#CC6699"} className="my-2"/>
          <FaStripe size="40" color={"#008CDD"} className="my-2"/>
          <SiStrapi size="40" color={"#2E7EEA"} className="my-2"/>
        </div>
    )
  },
  {
    index: 2,
    title: "Quotation Manager",
    description: "The RFQ MERN Application streamlines the procurement process, enabling interaction between buyers and suppliers in small organizations.",
    features: [
      "3-tier Architecture: Frontend with React.js, Backend with Express.js and Node.js, Database managed by MongoDB.",
      "Next.js Integration for performance and dynamic pages.",
      "Functionalities include secure JWT authentication, RFQ management system, and personalized dashboards."
    ],
    projectLink: "https://github.com/ianh8899/rfq-app",
    imageUrl: "/rfqApp screenshot.png",
    githubLink: "https://github.com/ianh8899/rfq-app",
    exampleUsername:"",
    examplePassword:"",
    icons: (
        <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
          <SiMongodb size="40" color={"#4DB33D"} className="my-2"/>
          <SiExpress size="40" color={"#000000"} className="my-2"/>
          <SiNextdotjs size="40" color={"#000000"} className="my-2"/>
          <FaNode size="40" color={"#539E43"} className="my-2"/>
        </div>
    )
  },
  {
    index: 3,
    title: "HyperionDev Portfolio",
    description: "A comprehensive learning journey through Full Stack Web Development, covering front-end and back-end technologies, security protocols, and API integration.",
    features: [
      "Web Fundamentals: JavaScript, CSS, HTML.",
      "Front-End Mastery: CSS, React, Bootstrap.",
      "Back-End Proficiency: Express and MongoDB.",
      "Security Protocols: User validation and JWT.",
      "API Integration and Frameworks: React, Next.js."
    ],
    projectLink: "https://www.hyperiondev.com/portfolio/139412/",
    githubLink: "",
    imageUrl: "/Hyperiondev-logo.jpg",
    exampleUsername:"",
    examplePassword:"",
    icons: (
        <div className="flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap">
          <SiJavascript size="40" color={"#f8c41b"} className="my-2"/>
          <FaHtml5 size="40" color={"#E34F26"} className="my-2"/>
          <FaCss3Alt size="40" color={"#1572B6"} className="my-2"/>
          <FaReact size="40" color={"#2E7EEA"} className="my-2"/>
        </div>
    )
  }
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
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
