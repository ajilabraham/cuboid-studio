"use client";

import { motion } from "framer-motion";

export default function AwardsTicker() {
    const awards = [
        "International Hospitality Design Winner 2024",
        "•",
        "Architectural Digest Top 100",
        "•",
        "Dezeen Awards Shortlist",
        "•",
        "Sustainable Luxury Gold Standard",
        "•",
        "World Architecture Festival Finalist",
        "•"
    ];

    return (
        <div className="bg-gold-accent w-full py-4 overflow-hidden flex items-center">
            <motion.div
                className="flex whitespace-nowrap gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {/* Double the array to create seamless loop */}
                {[...awards, ...awards, ...awards, ...awards].map((text, i) => (
                    <span key={i} className="text-charcoal font-bold font-sans tracking-widest text-sm uppercase">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
