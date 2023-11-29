"use client";

import {useRef} from "react";
import {projectsData} from "@/lib/data";
import {motion, useScroll, useTransform} from "framer-motion";
import { FaGithub } from "react-icons/fa6";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
                                    title,
                                    features,
                                    description,
                                    projectLink,
                                    imageUrl,
                                    icons,
                                    index,
                                    githubLink,
                                }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const isOdd = index % 2 !== 0;

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgess,
                opacity: opacityProgess,
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section className="flex flex-col justify-center py-10">
                <div className="mx-auto px-4" style={{ maxWidth: "90rem" }}>
                    <div className="p-12 bg-white shadow-2xl rounded-lg dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition">
                        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 my-20 items-center">
                            {/* Image on the left for odd indices */}
                            {isOdd && (
                                <div className="col-span-full md:col-span-3 flex justify-center">
                                    {githubLink && (
                                        <a href={githubLink} target="_blank" rel="noopener noreferrer"
                                           className="absolute translate-x-1/2 top-24 lg:top-40 lg:left-40 sm:top-24 sm:left-1/2">
                                            <FaGithub className="scale-[3] hover:scale-[4] hover:duration-300"/>
                                        </a>
                                    )}
                                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                        <motion.div
                                            className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-lg"
                                            whileHover={{ scale: 1.04, translateX: 10, translateY: -10, rotate: 2 }}
                                        >
                                            <img src={imageUrl} alt={title} className="w-full object-contain max-h-80"/>
                                        </motion.div>
                                    </a>
                                </div>
                            )}

                            {/* Content */}
                            <div className={`col-span-full ${isOdd ? "lg:col-span-4 lg:col-start-4" : "lg:col-span-4"}`}>
                                <h4 className="text-3xl font-medium capitalize mb-8 text-center dark:text-white">{title}</h4>
                                <p className="mb-6 text-lg leading-relaxed dark:text-white/70">{description}</p>
                                <h5 className="mb-4 font-semibold text-lg dark:text-white">Key Technical Features:</h5>
                                <ul className="mb-6 list-disc pl-5 space-y-2 text-lg dark:text-white/70">
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="hidden xl:block flex justify-center space-x-24 max-w-4xl mx-auto flex-wrap mt-8">
                                    {icons}
                                </div>
                            </div>

                            {/* Image on the right for even indices */}
                            {!isOdd && (
                                <div className="col-span-full md:col-span-3 flex justify-center">
                                    {githubLink &&
                                        <a href={githubLink} target="_blank" rel="noopener noreferrer"
                                           className="absolute translate-x-1/2 top-24 lg:top-40 lg:right-40 sm:top-24 sm:right-1/2">
                                            <FaGithub className="scale-[3] hover:scale-[4] hover:duration-300"/>
                                        </a>}
                                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                                        <motion.div
                                            className="overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-lg "
                                            whileHover={{ scale: 1.04, translateX: -10, translateY: 10, rotate: -2 }}
                                        >
                                            <img src={imageUrl} alt={title} className="w-full object-contain max-h-80"/>
                                        </motion.div>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
