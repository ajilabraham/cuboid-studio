"use client";

import { motion } from "framer-motion";

const categories = [
    { id: 1, title: "Hospitality & Hotels" },
    { id: 2, title: "Commercial Spaces" },
    { id: 3, title: "High-End Residential" },
];

export default function CategoryStrips() {
    return (
        <section className="w-full bg-charcoal">
            {categories.map((cat, index) => (
                <motion.div
                    key={cat.id}
                    className="relative group w-full h-32 md:h-48 border-b border-ivory/10 flex items-center justify-center overflow-hidden cursor-pointer"
                    whileHover={{ height: "300px" }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {/* Background Placeholder (would be image) */}
                    <div className={`absolute inset-0 bg-neutral-800 opacity-50 transition-opacity duration-500 group-hover:opacity-30`} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        <span className="text-gold-accent text-xs font-sans tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            DISCOVER
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-wide uppercase group-hover:scale-105 transition-transform duration-500">
                            {cat.title}
                        </h2>
                    </div>
                </motion.div>
            ))}
        </section>
    );
}
