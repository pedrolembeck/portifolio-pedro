"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="uppercase tracking-[8px] text-yellow-500 mb-4">
                        Full Stack Developer
                    </p>

                    <h1 className="text-7xl font-black leading-tight">
                        Pedro Ivo
                        <br />
                        <span className="text-yellow-500">
              Lembeck Bianco
            </span>
                    </h1>

                    <p className="text-zinc-400 mt-8 text-xl max-w-xl">
                        Desenvolvimento Web, Inteligência Artificial,
                        Data Science e Arquitetura de Software.
                    </p>

                    <div className="flex gap-5 mt-12">


                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                >
                    <div className="relative">

                        <div
                            className="
    absolute
    -inset-2
    rounded-full
    border
    border-yellow-500/20
  "
                        />
                        <img
                            src="/profile.png"
                            alt="Pedro"
                            className="w-[420px] h-[420px] object-cover rounded-full border-4 border-yellow-500"
                        />

                    </div>
                </motion.div>

            </div>

        </section>
    );
}