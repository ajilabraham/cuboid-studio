"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: "L'HERITAGE GRANDE — DUBAI",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFDIrBsIHZ7FIkfpfkbpjaZE6kScSZVldkaF8Rky8vF4fiiu0Gs8MNYH0caL8mfF6yvPhj3aVAsbYjv_2BSIM9PNaiVhGQaorT8rq3Ex02fX-5D1eEJKmPj26m8W2utbVIn3bbqatfFXatRzB_p4y_a3P5dJ1mTl-zqBvNvRMAvMA7YOsILZUiS5CM0aVRjHcs5S0jze-c-Sp8AT7VXa0-OlRTw8Na4GdHmQtoUGM1vlLhWOVyCW1EaondjOeNa9IVUOyqh2GqGwI", // Using the bold modern image as placeholder
        description: "A masterful reinterpretation of classical architectural forms, L'Heritage Grande merges the majesty of traditional arches with high-performance modern materials. The resort creates a rhythmic procession of light and shadow, defining a new paradigm for luxury hospitality in the heart of the desert.",
        scope: "Exterior Architecture, Interior Curation, Landscape Integration",
        completion: "December 2023"
    },
    {
        id: 2,
        title: "AZURE HORIZON — MALDIVES",
        image: "/images/cuboid-logo.jpg", // Placeholder
        description: "Suspended between sky and sea, Azure Horizon redefines overwater living. Using sustainable engineered timber and glass, the structures disappear into the landscape, offering an immersive connection with the ocean while ensuring complete privacy and structural resilience.",
        scope: "Master Planning, Structural Design, Interior Architecture",
        completion: "August 2024"
    },
    {
        id: 3,
        title: "URBAN SANCTUARY — TOKYO",
        image: "/images/cuboid-logo-footer.jpg", // Placeholder
        description: "A brutalist concrete shell encasing a serene wooden core. This vertical retreat in the bustle of Tokyo uses light wells and internal gardens to create a self-contained ecosystem of calm. Japanese minimalism meets industrial precision.",
        scope: "Architecture, Interior Design, bespoke Furniture",
        completion: "January 2023"
    },
    {
        id: 4,
        title: "THE GLASS PAVILION — MILAN",
        image: "/images/automotive-pavilion.jpg", // Placeholder
        description: "Designed for high-end automotive display, the Glass Pavilion eliminates visual barriers. A cantilevered roof floats above seamless curved glass walls, putting the focus entirely on the machines within while managing thermal performance through active shading systems.",
        scope: "Showroom Design, Structural Engineering",
        completion: "November 2023"
    },
    {
        id: 5,
        title: "VERTEX TOWER — NEW YORK",
        image: "/images/executive-suite.png", // Placeholder
        description: "A mixed-use development that challenges the boxy skyline. Faceted glass panels reflect the changing city light, while internal atriums provide community spaces at altitude. A study in vertical connectivity and sustainable urban density.",
        scope: "Facade Engineering, Public Space Design",
        completion: "March 2025"
    }
];

const CuboidSignatures = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = React.useRef(null);
    const isInView = useInView(containerRef, { margin: "-20%" }); // Removed once: true so it triggers on scroll up/down

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleCardClick = (index: number) => {
        setCurrentIndex(index);
    };

    // Helper to handle wrapping indices for styling logic
    const getWrappedDiff = (index: number) => {
        let diff = index - currentIndex;
        while (diff > 2) diff -= 5;
        while (diff < -2) diff += 5;
        return diff;
    };

    const getStyleForIndex = (index: number) => {
        const diff = getWrappedDiff(index);
        const isActive = diff === 0;

        let x = 0;
        let scale = 1;
        let zIndex = 0;
        let rotateY = 0;
        let opacity = 1;
        let brightness = 1;
        let y: any = 0;

        if (isActive) {
            x = 0;
            scale = 1.1; // Slightly less scale up
            zIndex = 30;
            rotateY = 0;
            opacity = 1;
            brightness = 1;
        } else {
            // Side cards
            const direction = diff > 0 ? 1 : -1;
            const absDiff = Math.abs(diff);

            // Wider spacing for landscape cards
            x = direction * (240 + (absDiff * 120));
            scale = 1 - (absDiff * 0.15);
            zIndex = 20 - absDiff;
            rotateY = direction * -30; // Slightly less rotation
            opacity = absDiff > 2 ? 0 : 0.6;
            brightness = 0.5;

            // Entrance Animation
            if (!isInView) {
                x = 0;
                rotateY = 0;
                opacity = 0;
            }

            // Floating Animation
            if (isInView) {
                y = [0, -8, 0];
            }
        }

        return { x, scale, zIndex, rotateY, opacity, brightness, y };
    };

    const activeProject = projects[currentIndex];

    return (
        <section className="py-8 md:py-16 bg-[#F9F8F6] dark:bg-[#121212] overflow-hidden" id="signatures" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-6 md:mb-10">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1F2937] dark:text-gray-100 mb-3 tracking-tight">
                        The Cuboid Signatures
                    </h2>
                    <div className="w-16 h-1 bg-[#EAB308] mx-auto"></div>
                </div>

                {/* 3D Carousel Area - Landscape Optimized */}
                <div className="relative h-[250px] md:h-[350px] flex items-center justify-center perspective-1000 mb-[-40px] md:mb-[-80px]">
                    <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
                        {projects.map((project, index) => {
                            const style = getStyleForIndex(index);
                            return (
                                <motion.div
                                    key={project.id}
                                    className="absolute w-[280px] md:w-[480px] aspect-[16/10] rounded-sm shadow-2xl cursor-pointer bg-white"
                                    animate={{
                                        x: style.x,
                                        scale: style.scale,
                                        zIndex: style.zIndex,
                                        rotateY: style.rotateY,
                                        opacity: style.opacity,
                                        filter: `brightness(${style.brightness})`,
                                        y: style.y
                                    }}
                                    transition={{
                                        x: { duration: 0.8, ease: "backOut" },
                                        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 },
                                        default: { duration: 0.6 }
                                    }}
                                    onClick={() => handleCardClick(index)}
                                >
                                    <div className="relative w-full h-full overflow-hidden border-4 border-white">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Dark Details Panel - Extra Wide & Low Profile */}
            <div className="relative z-20 mx-auto max-w-6xl px-4">
                <div className="bg-[#18181B] text-white rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden border border-white/5">

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeProject.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-6 gap-8 items-center"
                        >
                            {/* Left Content */}
                            <div className="md:col-span-4">
                                <h3 className="text-[#EAB308] text-xl md:text-2xl font-serif mb-3 uppercase tracking-wider leading-tight">
                                    {activeProject.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm font-light mb-4 max-w-2xl">
                                    {activeProject.description}
                                </p>

                                <div className="flex gap-6 items-center">
                                    <button className="text-[#EAB308] font-bold text-xs tracking-widest uppercase hover:text-white transition-colors duration-300 flex items-center gap-2">
                                        View Case Study
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Right Metadata */}
                            <div className="md:col-span-2 flex flex-col justify-center border-l-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6 space-y-4">
                                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                                    <div>
                                        <h4 className="text-[#EAB308] text-[10px] font-bold uppercase tracking-widest mb-1">Scope</h4>
                                        <p className="text-gray-400 font-light leading-tight text-xs">{activeProject.scope}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#EAB308] text-[10px] font-bold uppercase tracking-widest mb-1">Completion</h4>
                                        <p className="text-gray-400 font-light text-xs">{activeProject.completion}</p>
                                    </div>
                                </div>

                                {/* Navigation UI */}
                                <div className="flex gap-2 justify-start md:justify-end">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handlePrev}
                                            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:border-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:border-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CuboidSignatures;
