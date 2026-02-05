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

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleCardClick = (index: number) => {
        setCurrentIndex(index);
    };

    // Calculate which items to show. for a simple 5 item carousel
    // we just render them all and animate positions

    const getCardStyle = (index: number) => {
        const diff = index - currentIndex;
        // Adjust for seamless looping if we wanted, but for 5 items strictly coverflow
        // it's easier to clamp or just let them go off screen. 
        // Let's do a simple centered view where index 0 is center.

        // We actually want strictly 3 visible maybe? Or 5 visible.
        // Let's simple animate absolute positions based on 'diff'.

        const center = 0;
        const isActive = diff === 0;

        // Configuration for positions
        let x = 0;
        let scale = 1;
        let zIndex = 0;
        let rotateY = 0;
        let opacity = 1;

        if (isActive) {
            x = 0;
            scale = 1.2;
            zIndex = 20;
            rotateY = 0;
            opacity = 1;
        } else if (diff === -1 || diff === 4) { // Left neighbor (wrap around)
            x = -300; // Desktop offset
            scale = 0.9;
            zIndex = 10;
            rotateY = 25;
            opacity = 0.6;
        } else if (diff === 1 || diff === -4) { // Right neighbor
            x = 300;
            scale = 0.9;
            zIndex = 10;
            rotateY = -25;
            opacity = 0.6;
        } else if (diff === -2 || diff === 3) { // Far Left
            x = -550;
            scale = 0.7;
            zIndex = 5;
            rotateY = 35;
            opacity = 0.3;
        } else if (diff === 2 || diff === -3) { // Far Right
            x = 550;
            scale = 0.7;
            zIndex = 5;
            rotateY = -35;
            opacity = 0.3;
        }

        return { x, scale, zIndex, rotateY, opacity };
    };

    // Helper to handle wrapping indices for styling logic
    const getWrappedDiff = (index: number) => {
        let diff = index - currentIndex;
        // Normalize diff to simulate infinite loop feeling locally around center
        // -2, -1, 0, 1, 2
        // If total is 5. 
        // if curr is 0. index 4 is diff 4. should be treated as -1.
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

        if (isActive) {
            x = 0;
            scale = 1.15;
            zIndex = 30;
            rotateY = 0;
            opacity = 1;
            brightness = 1;
        } else {
            // Side cards
            const direction = diff > 0 ? 1 : -1;
            const absDiff = Math.abs(diff);

            x = direction * (200 + (absDiff * 140)); // Progressive spacing
            scale = 1 - (absDiff * 0.15); // Progressive scaling down
            zIndex = 20 - absDiff;
            rotateY = direction * -35; // Flip towards center
            opacity = absDiff > 2 ? 0 : 0.6; // Fade out far items
            brightness = 0.5;
        }

        return { x, scale, zIndex, rotateY, opacity, brightness };
    };

    const activeProject = projects[currentIndex];

    return (
        <section className="py-24 bg-[#F9F8F6] dark:bg-[#121212] overflow-hidden" id="signatures">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-6xl md:text-7xl font-serif text-[#1F2937] dark:text-gray-100 mb-4 tracking-tight">
                        The Cuboid Signatures
                    </h2>
                    <div className="w-24 h-1 bg-[#EAB308] mx-auto"></div>
                </div>

                {/* 3D Carousel Area */}
                <div className="relative h-[500px] flex items-center justify-center perspective-1000 mb-[-100px] md:mb-[-150px]">
                    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
                        {projects.map((project, index) => {
                            const style = getStyleForIndex(index);
                            return (
                                <motion.div
                                    key={project.id}
                                    className="absolute w-[300px] md:w-[400px] aspect-[3/4] rounded-sm shadow-2xl cursor-pointer bg-white"
                                    animate={{
                                        x: style.x,
                                        scale: style.scale,
                                        zIndex: style.zIndex,
                                        rotateY: style.rotateY,
                                        opacity: style.opacity,
                                        filter: `brightness(${style.brightness})`
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
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

            {/* Dark Details Panel */}
            <div className="relative z-20 mx-auto max-w-5xl px-4">
                <div className="bg-[#18181B] text-white rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
                    {/* Background noise/texture can be added here */}

                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeProject.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid md:grid-cols-5 gap-12"
                        >
                            {/* Left Content */}
                            <div className="md:col-span-3">
                                <h3 className="text-[#EAB308] text-3xl md:text-4xl font-serif mb-6 uppercase tracking-wider">
                                    {activeProject.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg font-light mb-10">
                                    {activeProject.description}
                                </p>

                                <button className="bg-[#EAB308] text-black px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 flex items-center gap-2">
                                    Explore Full Case Study
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>

                            {/* Right Metadata */}
                            <div className="md:col-span-2 flex flex-col justify-center border-l border-white/10 pl-8 md:pl-12 space-y-8">
                                <div>
                                    <h4 className="text-[#EAB308] text-xs font-bold uppercase tracking-widest mb-2">Project Scope</h4>
                                    <p className="text-gray-400 font-light leading-relaxed">{activeProject.scope}</p>
                                </div>
                                <div>
                                    <h4 className="text-[#EAB308] text-xs font-bold uppercase tracking-widest mb-2">Completion</h4>
                                    <p className="text-gray-400 font-light">{activeProject.completion}</p>
                                </div>

                                {/* Navigation Controls */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        onClick={handlePrev}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:border-white"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all hover:border-white"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
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
