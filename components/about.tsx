"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I worked in
        the automotive industry for nearly 8 years managing global supply
        chains. This experience sharpened my problem-solving abilities,
        communication and working as a team under pressure. However, my desire
        for a more technical challenge led me to complete a{" "}
        <span className="font-medium">full-stack web development </span>
        where I excelled as the the top student among over 100 peers. My
        interest in technical challenges, a key reason I pursued mechanical
        engineering, is also what excites me about the{" "}
        <span className="italic">problem-solving</span> aspect of programming.
        Additionally, I've been looking to broaden my skillset with TypeScript
        and SQL, always eager to explore new technologies.
      </p>

      <p>
        When not immersed in coding, my interests include{" "}
        <span className="italic">cooking and traveling</span>. I thoroughly
        enjoy <span className="font-medium">learning new things</span>,
        currently I'm learning <span className="font-medium">dutch</span>.
      </p>
    </motion.section>
  );
}
