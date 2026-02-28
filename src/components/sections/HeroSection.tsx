"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { MOCK_DATA } from "@/data/mockData";
import { LiquidMagneticButton } from "@/components/ui/LiquidMagneticButton";

export function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Variable Font: peso cresce com o scroll
    const { scrollY } = useScroll();
    const fontWeight = useTransform(scrollY, [0, 600], [100, 800]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const revealVariants: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: (delay: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }
        })
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
            data-purpose="hero-section"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0 opacity-40 overflow-hidden">
                <div className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[150%] md:h-[150%] pointer-events-none">
                    <iframe
                        src="https://www.youtube.com/embed/GwubPSnTNpw?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=GwubPSnTNpw&modestbranding=1"
                        allow="autoplay; fullscreen"
                        frameBorder="0"
                        className="w-full h-full object-cover scale-[1.2]"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/10 to-obsidian/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-8 max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
                {/* Badge */}
                <motion.p
                    variants={revealVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    custom={0.1}
                    className="text-champagne tracking-[0.5em] text-xs uppercase font-light"
                >
                    {MOCK_DATA.hero.badge}
                </motion.p>

                {/* Título principal com reflexo do Projeto */}
                <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    custom={0.3}
                    className="flex flex-col items-center justify-center w-full"
                >
                    <motion.h1
                        style={{ fontWeight }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter uppercase leading-[0.9] text-center w-full break-words"
                    >
                        {MOCK_DATA.hero.title}
                    </motion.h1>
                    <h2 className="text-xl md:text-3xl font-serif italic text-champagne/80 tracking-widest mt-4 text-center">
                        NAEEM PINHEIROS
                    </h2>
                </motion.div>

                {/* Linha divisória */}
                <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    custom={0.5}
                    className="w-px h-16 bg-gradient-to-b from-champagne/0 via-champagne to-champagne/0 mx-auto"
                />

                {/* Subtítulo */}
                <motion.p
                    variants={revealVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    custom={0.6}
                    className="text-gray-400 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
                >
                    {MOCK_DATA.hero.subtitle}
                </motion.p>

                {/* CTA & Video Trigger */}
                <motion.div
                    variants={revealVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    custom={0.9}
                    className="pt-6 flex flex-col items-center justify-center space-y-4 w-full"
                >
                    <LiquidMagneticButton href="#consultation">
                        Solicitar Atendimento Exclusivo
                    </LiquidMagneticButton>
                    <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="text-[9px] uppercase tracking-[0.3em] text-champagne/60 font-medium"
                    >
                        Acesso Restrito a Investidores Selecionados
                    </motion.span>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-champagne to-transparent"
            />
        </section>
    );
}
