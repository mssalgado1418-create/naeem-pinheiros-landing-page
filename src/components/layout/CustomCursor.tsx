"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Adiciona o scale caso o item esteja dentro de uma área magnética ou possua a tag "a" / "button"
            if (
                target.closest(".magnetic-area") ||
                target.tagName === "A" ||
                target.tagName === "BUTTON"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updatePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updatePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-8 h-8 border border-champagne rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out mix-blend-difference hidden md:block ${isHovering ? "scale-[2.5] bg-champagne/10" : ""
                }`}
            style={{
                transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
            }}
        />
    );
}
