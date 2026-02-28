"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface LiquidMagneticButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export function LiquidMagneticButton({
    children,
    href,
    onClick,
    className = ""
}: LiquidMagneticButtonProps) {
    const anchorRef = useRef<HTMLAnchorElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    const getRect = () => {
        const el = anchorRef.current ?? buttonRef.current;
        return el?.getBoundingClientRect();
    };

    useEffect(() => {
        if (isHovered) {
            controls.start({
                y: ["100%", "0%"],
                transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
            });
        } else {
            controls.start({
                y: "100%",
                transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
            });
        }
    }, [isHovered, controls]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = getRect();
        if (!rect) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = rect;
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const x = (clientX - centerX) * 0.3;
        const y = (clientY - centerY) * 0.4;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
    };

    const innerContent = (
        <motion.div
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative z-20 flex items-center justify-center w-full h-full px-10 py-5"
        >
            <span className={`text-xs uppercase tracking-[0.4em] transition-colors duration-500 ${isHovered ? 'text-obsidian font-bold' : 'text-white'}`}>
                {children}
            </span>
        </motion.div>
    );

    const buttonClasses = `magnetic-area group relative overflow-hidden inline-flex border border-champagne/30 w-max ${className}`;

    if (href) {
        return (
            <a
                ref={anchorRef}
                href={href}
                className={buttonClasses}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
            >
                <motion.div
                    animate={controls}
                    initial={{ y: "100%" }}
                    className="absolute inset-0 z-10 bg-champagne pointer-events-none"
                    style={{ willChange: "transform" }}
                />
                {innerContent}
            </a>
        );
    }

    return (
        <button
            ref={buttonRef}
            onClick={onClick}
            className={buttonClasses}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                animate={controls}
                initial={{ y: "100%" }}
                className="absolute inset-0 z-10 bg-champagne pointer-events-none"
                style={{ willChange: "transform" }}
            />
            {innerContent}
        </button>
    );
}
