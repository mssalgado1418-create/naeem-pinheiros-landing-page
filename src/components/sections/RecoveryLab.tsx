"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { MOCK_DATA } from "@/data/mockData";

export function RecoveryLab() {
    const { recoveryLab } = MOCK_DATA;
    const [shimmerIndex, setShimmerIndex] = useState<number | null>(null);

    // Ciclo de shimmer a cada 5 segundos
    useEffect(() => {
        const startShimmerCycle = () => {
            const randomIndex = Math.floor(Math.random() * recoveryLab.cards.length);
            setShimmerIndex(randomIndex);
            setTimeout(() => setShimmerIndex(null), 2500);
        };
        const intervalId = setInterval(startShimmerCycle, 5000);
        setTimeout(startShimmerCycle, 1500);
        return () => clearInterval(intervalId);
    }, [recoveryLab.cards.length]);

    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto" data-purpose="recovery-lab">
            {/* Header */}
            <div className="mb-20 space-y-4">
                <span className="text-champagne tracking-[0.4em] text-[10px] uppercase block">
                    {recoveryLab.badge}
                </span>
                <h2 className="text-champagne font-serif text-4xl md:text-5xl italic">
                    {recoveryLab.title}
                </h2>
                <p className="text-gray-400 max-w-lg text-sm leading-relaxed">
                    {recoveryLab.description}
                </p>
            </div>

            {/* Grid de Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {recoveryLab.cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.04,
                            boxShadow: "0 0 32px rgba(197, 163, 103, 0.25)",
                            transition: { duration: 0.3 }
                        }}
                        className="glass-card p-10 space-y-10 magnetic-area group relative cursor-default"
                    >
                        {/* Shimmer overlay */}
                        <div className={`shimmer-overlay ${shimmerIndex === index ? "is-shimmering" : ""}`} />

                        <div className="h-32 flex items-end">
                            <span className="text-6xl font-serif text-champagne/20 group-hover:text-champagne/60 transition-colors duration-500">
                                {card.id}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-sm uppercase tracking-[0.3em] text-white font-light">
                                {card.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {card.description}
                            </p>
                        </div>

                        {/* Barra hover */}
                        <div className="w-8 h-px bg-champagne group-hover:w-full transition-all duration-700" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
