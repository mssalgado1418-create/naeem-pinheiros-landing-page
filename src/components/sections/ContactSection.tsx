"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        objective: "" // Investimento ou Moradia
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mensagem ultra-premium direcionada
        const message = `Prezados,

Gostaria de agendar um atendimento exclusivo para conhecer em primeira mão os diferenciais do projeto NAEEM Pinheiros.

Meus dados para contato:
Nome: ${formData.name.trim()}
E-mail: ${formData.email.trim()}
WhatsApp: ${formData.whatsapp.trim()}
Objetivo: ${formData.objective || 'Não informado'}

Aguardo o breve retorno de um consultor focado em high-end.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/5511987689734?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="consultation" className="py-32 bg-[#050505] relative border-t border-white/5" data-purpose="contact-section">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-obsidian opacity-50 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-20 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                {/* Texto e Call to Action */}
                <motion.div
                    className="w-full md:w-1/2 space-y-8"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-champagne tracking-[0.4em] text-[10px] uppercase block">
                        Exclusive Access
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-wider text-white leading-tight">
                        Agende sua<br />Consultoria Privada
                    </h2>
                    <div className="w-12 h-px bg-champagne" />
                    <p className="text-gray-400 text-base leading-loose max-w-sm">
                        Permita-nos apresentar a dimensão completa do NAEEM Pinheiros. Preencha seus dados para iniciarmos um atendimento discreto e altamente personalizado, voltado às suas necessidades.
                    </p>
                </motion.div>

                {/* Formulário Minimalista High-End */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                    <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 md:p-12 backdrop-blur-sm border border-white/10">
                        <div className="space-y-2 relative group">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/80">Nome Completo</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 py-2 text-white text-lg focus:outline-none focus:border-champagne transition-colors placeholder:text-gray-700 font-light"
                                placeholder="Seu nome"
                            />
                        </div>

                        <div className="space-y-2 relative group">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/80">E-mail</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 py-2 text-white text-lg focus:outline-none focus:border-champagne transition-colors placeholder:text-gray-700 font-light"
                                placeholder="seu.email@exclusivo.com"
                            />
                        </div>

                        <div className="space-y-2 relative group">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/80">WhatsApp</label>
                            <input
                                type="tel"
                                required
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 py-2 text-white text-lg focus:outline-none focus:border-champagne transition-colors placeholder:text-gray-700 font-light"
                                placeholder="(11) 90000-0000"
                            />
                        </div>

                        <div className="space-y-2 relative group">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/80">Momento de Compra</label>
                            <select
                                required
                                value={formData.objective}
                                onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                                className="w-full bg-transparent border-b border-white/20 py-2 text-white text-lg focus:outline-none focus:border-champagne transition-colors font-light appearance-none rounded-none"
                            >
                                <option value="" disabled className="bg-obsidian text-gray-400">Selecione seu momento</option>
                                <option value="Residência Principal" className="bg-obsidian text-white">Residência Principal</option>
                                <option value="Investimento" className="bg-obsidian text-white">Investimento High-Yield</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-10 py-5 bg-champagne text-obsidian uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(235,213,179,0.3)]"
                        >
                            Solicitar Atendimento Exclusivo
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
