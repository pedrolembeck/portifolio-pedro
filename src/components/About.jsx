"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-40">

            <div className="max-w-6xl mx-auto px-8">

                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 40 }}
                    className="text-6xl font-bold mb-16"
                >
                    Sobre Mim
                </motion.h2>

                <div className="bg-zinc-900/50 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-12">

                    <p className="text-zinc-300 text-xl leading-relaxed">
                        Estudante de Sistemas de Informação,
                        apaixonado por desenvolvimento Full Stack,
                        Data Science e Engenharia de Software.

                        Tenho experiência em React,
                        Next.js, Python, Java,
                        MongoDB e Neo4j.
                    </p>

                </div>

            </div>

        </section>
    );
}