"use client";

// React Icons - Font Awesome
import {
    FaCss3Alt,
    FaDatabase,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaJava,
    FaJs,
    FaNodeJs,
    FaPython,
    FaReact,
} from "react-icons/fa";


import {
    SiNextdotjs,
    SiSpringboot,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

import { SiTableau } from "@react-icons/all-files/si/SiTableau";

const skills = [
    { Icon: SiTypescript, name: "TypeScript" },
    {Icon: FaJs, name: "JavaScript"},
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: FaReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: FaPython, name: "Python" },
    { Icon: FaJava, name: "Java" },
    {Icon: SiSpringboot, name: "Springboot"},
    { Icon: SiTailwindcss, name: "Tailwind" },
    {Icon: FaHtml5,name: "Html"},
    {Icon: FaCss3Alt, name: "CSS"},
    { Icon: FaDocker, name: "Docker" },
    { Icon: FaGitAlt, name: "Git" },
    { Icon: FaGithub, name: "GitHub" },
    { Icon: FaDatabase, name: "SQL" },
    { Icon: SiTableau, name: "Tableau" },
];

export default function Skills() {
    return (
        <section className="py-40 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-center text-6xl font-bold mb-20 text-white">
                    Tecnologias
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                    {skills.map(({ Icon, name }, index) => (
                        <div
                            key={index}
                            className="
                                group
                                bg-zinc-900
                                border border-yellow-500/10
                                hover:border-yellow-500
                                rounded-3xl
                                p-8
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-4
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:shadow-2xl
                                hover:shadow-yellow-500/10
                            "
                        >
                            <div className="text-7xl text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                                <Icon />
                            </div>
                            <p className="text-zinc-400 group-hover:text-yellow-400 font-medium transition-colors duration-300">
                                {name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}