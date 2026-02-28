"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function AmbientAudio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            // Volume reduzido para ambiente
            audioRef.current.volume = 0.2;
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            {/* Audio Element Hidden */}
            <audio
                ref={audioRef}
                src="/ambient.mp3"
                loop
                preload="none"
            />

            {/* Floating Toggle Button */}
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                onClick={toggleAudio}
                className="fixed bottom-6 left-6 md:bottom-10 md:left-10 z-[100] w-12 h-12 rounded-full border border-white/20 bg-obsidian/50 backdrop-blur-md flex items-center justify-center group hover:border-champagne/50 hover:bg-champagne/10 transition-all duration-500"
                aria-label="Toggle Ambient Sound"
            >
                <div className="flex items-end justify-center gap-[2px] h-3">
                    <motion.div
                        animate={{ height: isPlaying ? ["4px", "12px", "6px", "10px", "4px"] : "4px" }}
                        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                        className="w-[2px] bg-champagne rounded-full"
                    />
                    <motion.div
                        animate={{ height: isPlaying ? ["8px", "4px", "12px", "6px", "8px"] : "4px" }}
                        transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
                        className="w-[2px] bg-champagne rounded-full"
                    />
                    <motion.div
                        animate={{ height: isPlaying ? ["6px", "10px", "4px", "12px", "6px"] : "4px" }}
                        transition={{ repeat: Infinity, duration: 1.3, ease: "linear" }}
                        className="w-[2px] bg-champagne rounded-full"
                    />
                </div>

                {/* Tooltip Hover */}
                <div className="absolute left-full ml-4 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-[9px] uppercase tracking-widest text-champagne/80 font-medium">
                        {isPlaying ? 'Pausar Atmosfera' : 'Ativar Atmosfera'}
                    </span>
                </div>
            </motion.button>
        </>
    );
}
