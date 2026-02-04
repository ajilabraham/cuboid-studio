"use client";

import { MotionValue, useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";

interface Props {
    canvasProgress: MotionValue<number>;
}

export default function Viewfinder({ canvasProgress }: Props) {
    // Opacity: Solid only at the end of the canvas sequence
    const opacity = useTransform(canvasProgress, [0.95, 1], [0, 1]);

    // Global Scroll for floating effect in InfoSections
    const { scrollY } = useScroll();

    // Floating animation: Move gently in X and Y as user reads info sections
    // We can just oscillate based on scrollY or map it.
    // Prompt: "Navigate between left and right columns"
    // Map scrollY to X position. 
    // Assuming InfoSections starts after ~1400vh (approx 14 * windowHeight).
    // We'll just use a periodic wave or map directly.
    const x = useTransform(scrollY, [0, 50000], [0, 5000]); // Just simplified linear movement for now?
    // Better: Sine wave effect isn't directly doable with simple useTransform on linear input without a custom transform function or spring.
    // Use a repeating range.
    const tx = useTransform(scrollY, (value) => Math.sin(value * 0.002) * 200);
    const ty = useTransform(scrollY, (value) => Math.cos(value * 0.003) * 50);

    return (
        <motion.div
            style={{ opacity, x: tx, y: ty }}
            className="fixed inset-0 z-30 pointer-events-none flex items-center justify-center mixing-blend-difference"
        >
            <div className="relative w-[80vw] h-[80vh] md:w-[40vw] md:h-[60vh]">
                <Image
                    src="/images/ffoutstatic.png"
                    alt="Hand Viewfinder"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
        </motion.div>
    );
}
