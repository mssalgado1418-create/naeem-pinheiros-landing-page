"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MOCK_DATA } from "@/data/mockData";
import { LiquidMagneticButton } from "@/components/ui/LiquidMagneticButton";

export function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax na imagem: sobe levemente enquanto o usuário desce
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
    // Fade-in lateral no texto
    const textX = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-[80vh] flex flex-col md:flex-row overflow-hidden"
            data-purpose="philosophy"
        >
            {/* 60% — Imagem com Parallax */}
            <div className="w-full md:w-[60%] h-[50vh] md:h-auto relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 scale-110"
                    style={{ y: imageY }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        alt="Wellness Philosophy"
                        src={MOCK_DATA.philosophy.backgroundImage}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-obsidian/80" />
            </div>

            {/* 40% — Texto com fade-in lateral */}
            <motion.div
                style={{ x: textX, opacity: textOpacity }}
                className="w-full md:w-[40%] flex flex-col justify-center px-10 md:px-16 py-20 space-y-8 bg-obsidian"
            >
                <span className="text-champagne tracking-[0.4em] text-[10px] uppercase">
                    The Philosophy
                </span>

                <blockquote className="font-serif italic text-2xl md:text-3xl leading-relaxed text-white/90">
                    &ldquo;{MOCK_DATA.philosophy.quote}&rdquo;
                </blockquote>

                <div className="w-12 h-px bg-champagne" />

                <cite className="not-italic text-champagne tracking-[0.25em] text-xs uppercase">
                    {MOCK_DATA.philosophy.author}
                </cite>

                <div className="pt-8 w-full flex justify-center md:justify-start">
                    <LiquidMagneticButton href="#consultation" className="scale-90 flex-shrink-0">
                        Descubra o NAEEM
                    </LiquidMagneticButton>
                </div>
            </motion.div>
        </section>
    );
}
