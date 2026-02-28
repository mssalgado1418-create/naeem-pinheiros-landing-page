"use client";

import { motion, Variants } from "framer-motion";
import { MOCK_DATA } from "@/data/mockData";
import { LiquidMagneticButton } from "@/components/ui/LiquidMagneticButton";

export function Hospitality() {
    const { hospitality } = MOCK_DATA;

    // Quebra o título em palavras para stagger
    const words = hospitality.title.split(" ");

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } }
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const featureVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }
        })
    };

    return (
        <section
            className="py-32 px-6 md:px-20 max-w-7xl mx-auto"
            data-purpose="hospitality"
        >
            {/* Badge */}
            <motion.span
                className="text-champagne tracking-[0.4em] text-[10px] uppercase block mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {hospitality.badge}
            </motion.span>

            {/* Título com Stagger por palavra */}
            <motion.h2
                className="font-serif text-3xl md:text-5xl uppercase tracking-widest leading-tight max-w-4xl mb-16 flex flex-wrap gap-x-4 gap-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {words.map((word, i) => (
                    <motion.span key={i} variants={wordVariants} className="inline-block">
                        {word}
                    </motion.span>
                ))}
            </motion.h2>

            {/* Linha divisória */}
            <motion.div
                className="w-full h-px bg-white/10 mb-16"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
            />

            {/* Features — lista horizontal discreta */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                {hospitality.features.map((feature, i) => (
                    <motion.div
                        key={feature}
                        custom={i}
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-start gap-4 group"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                        <span className="text-sm uppercase tracking-[0.25em] text-gray-300 group-hover:text-champagne transition-colors duration-500">
                            {feature}
                        </span>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="pt-16 flex justify-center w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
            >
                <LiquidMagneticButton href="#consultation" className="scale-90 flex-shrink-0">
                    Solicitar Atendimento Exclusivo
                </LiquidMagneticButton>
            </motion.div>
        </section>
    );
}
