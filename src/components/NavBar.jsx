"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrolled(window.scrollY > 50);
        });
    }, []);

    return (
        <nav
            className={`
        fixed
        top-0
        w-full
        z-50
        transition-all
        duration-500

        ${
                scrolled
                    ? "bg-black/50 backdrop-blur-xl"
                    : "bg-transparent"
            }
      `}
        >
            <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">
                <h1 className="font-bold text-xl">
                    Pedro.dev
                </h1>
            </div>
        </nav>
    );
}