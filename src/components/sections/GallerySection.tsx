"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const PLANTAS = [
    { id: 1, title: "Residência 189m²", image: "/Plantas/189m_Planta.jpg", desc: "Planta inteligente com integração total das áreas sociais." },
    { id: 2, title: "Residência 249m² Ampliada", image: "/Plantas/249m_PlantaAmpliada.jpg", desc: "Espaços expandidos para quem valoriza a máxima amplitude." },
    { id: 3, title: "Duplex 371m² Inferior", image: "/Plantas/371m_PlantaInferior.jpeg", desc: "Piso social do Duplex, desenhado para receber com imponência." },
    { id: 4, title: "Duplex 371m² Superior", image: "/Plantas/371m_PlantaSuperior.jpeg", desc: "Piso íntimo do Duplex, o refúgio absoluto no meio de Pinheiros." },
    { id: 5, title: "Cobertura 485m²", image: "/Plantas/Planta 485m².jpg", desc: "O ápice do NAEEM. Altura e metragem incomparáveis." },
    { id: 6, title: "Implantação", image: "/Plantas/Implantação.jpeg", desc: "A disposição inteligente do lazer e áreas comuns no terreno." },
];

export function GallerySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Animate the background slightly to give depth
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={sectionRef} className="relative py-32 overflow-hidden bg-obsidian border-t border-white/5" data-purpose="gallery-section">
            {/* Background Texture */}
            <motion.div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ y: yBg, backgroundImage: 'radial-gradient(circle at center, #EBD5B3 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div className="space-y-6">
                        <span className="text-champagne tracking-[0.4em] text-[10px] uppercase block">
                            Private Residences
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-wider text-white leading-tight">
                            Espaços Moldados<br />Pela Exclusividade
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-gray-400 text-base leading-relaxed">
                            Plantas inteligentes de 189m² a 485m², desenhadas para dilatar o tempo e o espaço. Descubra a planta que melhor reflete seu momento de vida.
                        </p>
                    </div>
                </motion.div>

                {/* Horizontal Scrolling Gallery */}
                <div className="relative -mx-6 md:-mx-20 px-6 md:px-20">
                    <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar">
                        {PLANTAS.map((planta, index) => (
                            <motion.div
                                key={planta.id}
                                className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center group cursor-pointer"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {/* Image Container */}
                                <div
                                    className="relative aspect-[4/3] w-full overflow-hidden bg-white/5 border border-white/10 mb-6"
                                    onClick={() => setSelectedImage(planta.image)}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={planta.image}
                                        alt={planta.title}
                                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[2000ms] opacity-80 group-hover:opacity-100"
                                    />
                                    {/* Hover Hint */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none delay-100">
                                        <span className="bg-obsidian/80 backdrop-blur text-champagne text-[10px] tracking-widest uppercase px-6 py-3 border border-champagne/30">
                                            Visualizar Planta
                                        </span>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-champagne font-serif text-xl italic group-hover:text-white transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-light uppercase tracking-wide text-white group-hover:text-champagne transition-colors">
                                            {planta.title}
                                        </h3>
                                    </div>
                                    <div className="w-12 h-px bg-white/20 group-hover:w-full group-hover:bg-champagne/50 transition-all duration-700" />
                                    <p className="text-gray-500 text-sm font-light pt-2">
                                        {planta.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 backdrop-blur-md p-4 md:p-12 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={selectedImage}
                                alt="Planta Ampliada"
                                className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                            />

                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-0 right-0 md:-right-12 md:top-0 text-white/50 hover:text-white transition-colors p-4 bg-obsidian/50 backdrop-blur rounded-full md:bg-transparent md:backdrop-filter-none"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
