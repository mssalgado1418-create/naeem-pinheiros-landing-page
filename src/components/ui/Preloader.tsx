"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Increment progress from 0 to 100
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    // Add a small delay at 100% before fading out
                    setTimeout(() => setIsLoading(false), 800);
                    return 100;
                }
                // Random increments for a more organic feel
                return Math.min(prev + Math.floor(Math.random() * 15) + 5, 100);
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    // Prevent scrolling while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
                >
                    <div className="flex flex-col items-center gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-serif tracking-tighter uppercase text-champagne/90">
                                NAEEM
                            </h1>
                        </motion.div>

                        <div className="w-px h-12 bg-gradient-to-b from-champagne/0 via-champagne/50 to-champagne/0" />

                        <div className="text-sm font-sans tracking-[0.3em] font-light text-gray-500 w-16 text-center">
                            {progress}%
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
