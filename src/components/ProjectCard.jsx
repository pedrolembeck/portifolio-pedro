"use client";

import {
    FaGithub,
    FaCode,
    FaExternalLinkAlt,
    FaStar,
} from "react-icons/fa";

export default function ProjectCard({ project }) {

    console.log("Github:", project.html_url);
    console.log("Homepage:", project.homepage);

    return (
        <div className="group bg-[#0B0B0B] border border-[#D4AF37]/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]">

            <div className="h-1 bg-[#D4AF37]" />

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                    {project.displayName}
                </h3>

                <p className="text-zinc-400 min-h-[80px]">
                    {project.description || "Projeto desenvolvido para estudo e aperfeiçoamento técnico."}
                </p>

                <div className="mt-6">
                    <h4 className="text-sm text-[#D4AF37] uppercase mb-2">
                        Tecnologias
                    </h4>

                    <div className="flex flex-wrap gap-2">
                        {project.techStack?.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2 text-zinc-500">
                            <FaCode />
                            <span>{project.language || "N/A"}</span>
                        </div>

                        <div className="flex items-center gap-2 text-zinc-500">
                            <FaStar />
                            <span>{project.stargazers_count}</span>
                        </div>
                    </div>
                    {/* BOTÕES FORÇADOS COM WINDOW.OPEN */}
                    <div className="flex gap-3 pt-4 relative z-30">
                        <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                e.preventDefault();     // impede comportamento padrão
                                e.stopPropagation();
                                console.log("✅ Tentando abrir Código:", project.html_url);
                                if (project.html_url) {
                                    window.open(project.html_url, "_blank", "noopener,noreferrer");
                                }
                            }}
                            className="flex-1 flex items-center justify-center gap-2
                   bg-[#181818] border border-[#D4AF37]/20 py-3 rounded-xl
                   hover:border-[#D4AF37] transition-all
                   cursor-pointer relative z-40 pointer-events-auto"
                        >
                            <FaGithub />
                            Código
                        </a>

                        {project.homepage && project.homepage.trim() !== "" && (
                            <a
                                href={project.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log("✅ Tentando abrir Demo:", project.homepage);
                                    if (project.homepage) {
                                        window.open(project.homepage, "_blank", "noopener,noreferrer");
                                    }
                                }}
                                className="flex-1 flex items-center justify-center gap-2
                       bg-[#D4AF37] text-black py-3 rounded-xl font-semibold
                       hover:scale-105 transition-all
                       cursor-pointer relative z-40 pointer-events-auto"
                            >
                                <FaExternalLinkAlt />
                                Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}