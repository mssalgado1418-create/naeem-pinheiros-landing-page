"use client";

import { motion } from "framer-motion";
import { LiquidMagneticButton } from "@/components/ui/LiquidMagneticButton";

const LOCATION_FEATURES = [
    { title: "Alta Gastronomia", desc: "A poucos passos dos restaurantes mais premiados de São Paulo." },
    { title: "Efervescência Cultural", desc: "Galerias de arte, museus e espaços criativos que ditam tendências." },
    { title: "Mobilidade Premium", desc: "Acesso imediato às principais vias da cidade e infraestrutura completa." },
    { title: "Refúgio Urbano", desc: "Ruas arborizadas que garantem o respiro necessário no dia a dia." }
];

export function LocationSection() {
    return (
        <section className="relative py-32 bg-obsidian overflow-hidden border-t border-white/5" data-purpose="location-section">
            {/* Background Image Abstracted */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-[#111] to-obsidian opacity-90 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/Fachada2.jpeg"
                    alt="Pinheiros Lifestyle"
                    className="w-full h-full object-cover opacity-20 scale-105"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-20 flex flex-col items-center">
                {/* Top Label */}
                <motion.span
                    className="text-champagne tracking-[0.4em] text-[10px] uppercase block mb-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Contexto & Lifestyle
                </motion.span>

                <motion.h2
                    className="text-4xl md:text-6xl font-serif font-light uppercase tracking-wider text-white leading-tight text-center max-w-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    O Pulso de <span className="italic text-champagne">Pinheiros</span>
                </motion.h2>

                <motion.p
                    className="text-gray-400 text-base md:text-lg leading-loose max-w-2xl text-center mt-8 mb-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Estar no NAEEM é vivenciar o bairro mais desejado de São Paulo sob uma nova ótica. Um endereço que equilibra a efervescência cultural e gastronômica com a exclusividade de um refúgio privativo.
                </motion.p>

                {/* Grid of Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full max-w-5xl">
                    {LOCATION_FEATURES.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                        >
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-champagne/50 group-hover:bg-champagne/5 transition-all duration-500">
                                <span className="text-champagne font-serif italic text-lg">{idx + 1}</span>
                            </div>
                            <div>
                                <h3 className="text-white tracking-widest uppercase text-sm mb-2 group-hover:text-champagne transition-colors">{feature.title}</h3>
                                <p className="text-gray-500 text-sm font-light leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="pt-24 flex justify-center w-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <LiquidMagneticButton href="#consultation" className="scale-90 flex-shrink-0">
                        Vivenciar Pinheiros
                    </LiquidMagneticButton>
                </motion.div>
            </div>
        </section>
    );
}
