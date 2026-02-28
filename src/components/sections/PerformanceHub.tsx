"use client";

import { motion, Variants } from "framer-motion";
import { MOCK_DATA } from "@/data/mockData";
import { LiquidMagneticButton } from "@/components/ui/LiquidMagneticButton";

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
};

export function PerformanceHub() {
    const { performanceHub } = MOCK_DATA;

    return (
        <section className="py-32 bg-[#050505]" data-purpose="performance-hub">
            <div className="max-w-7xl mx-auto px-6 md:px-20">
                {/* Badge */}
                <motion.span
                    className="text-champagne tracking-[0.4em] text-[10px] uppercase block mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {performanceHub.badge}
                </motion.span>

                {/* Vertical Stack de seções */}
                <div className="space-y-0">
                    {performanceHub.sections.map((section, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={section.headline}
                                variants={sectionVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                className={`relative min-h-[70vh] flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} overflow-hidden`}
                            >
                                {/* Imagem imersiva */}
                                <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        alt={section.imageAlt}
                                        src={section.image}
                                        className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[3000ms]"
                                    />
                                    {/* Gradient de fusão */}
                                    <div
                                        className={`absolute inset-0 ${isEven
                                            ? "bg-gradient-to-r from-transparent to-[#050505]"
                                            : "bg-gradient-to-l from-transparent to-[#050505]"
                                            }`}
                                    />
                                </div>

                                {/* Texto */}
                                <motion.div
                                    className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16 space-y-8"
                                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-8 h-px bg-champagne" />
                                    <h2 className="text-3xl md:text-5xl font-serif font-light uppercase tracking-wider text-white leading-tight">
                                        {section.headline}
                                    </h2>
                                    <p className="text-gray-400 text-base leading-loose max-w-md">
                                        {section.body}
                                    </p>
                                    <div className="pt-6 w-full flex justify-center md:justify-start">
                                        <LiquidMagneticButton href="#consultation" className="scale-[0.85] flex-shrink-0">
                                            {isEven ? "Agendar Visita" : "Conhecer Estrutura"}
                                        </LiquidMagneticButton>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats da Piscina */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 border-t border-white/5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {performanceHub.stats.map((stat) => (
                        <div key={stat.label} className="text-center space-y-2">
                            <p className="text-3xl font-serif text-white">{stat.value}</p>
                            <p className="text-[10px] uppercase tracking-widest text-gray-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
