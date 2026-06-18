"use client";

import {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-24 px-6"
        >
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-5xl font-bold">
                    Vamos Trabalhar Juntos
                </h2>

                <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
                    Estou sempre aberto a novas oportunidades, projetos freelance,
                    estágios e desafios na área de desenvolvimento de software, IA e análise de dados.
                    Entre em contato e vamos conversar.
                </p>

                {/* Container com proteção de clique */}
                <div className="mt-12 flex flex-wrap justify-center gap-4 relative z-20">

                    {/* E-mail - Dourado */}
                    <a
                        href="mailto:plembeckbianco@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 rounded-2xl
                                   bg-[#181818] border border-[#D4AF37]/30 text-white font-medium
                                   hover:border-[#D4AF37] hover:bg-[#D4AF37]/10
                                   transition-all duration-300 cursor-pointer
                                   relative z-30 pointer-events-auto"
                    >
                        <FaEnvelope className="text-xl" />
                        E-mail
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/pedro-ivo-lembeck-bianco-3253a532a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 rounded-2xl
                                   bg-[#181818] border border-[#D4AF37]/30 text-white font-medium
                                   hover:border-[#D4AF37] hover:bg-[#D4AF37]/10
                                   transition-all duration-300 cursor-pointer
                                   relative z-30 pointer-events-auto"
                    >
                        <FaLinkedin className="text-xl" />
                        LinkedIn
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/pedrolembeck"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-8 py-4 rounded-2xl
                                   bg-[#181818] border border-[#D4AF37]/30 text-white font-medium
                                   hover:border-[#D4AF37] hover:bg-[#D4AF37]/10
                                   transition-all duration-300 cursor-pointer
                                   relative z-30 pointer-events-auto"
                    >
                        <FaGithub className="text-xl" />
                        GitHub
                    </a>

                </div>

                <div className="mt-12 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
                    <p className="text-zinc-300">
                        Atualmente cursando Engenharia de Software e buscando oportunidades
                        para aplicar meus conhecimentos em desenvolvimento web,
                        inteligência artificial e ciência de dados.
                    </p>
                </div>

            </div>
        </section>
    );
}