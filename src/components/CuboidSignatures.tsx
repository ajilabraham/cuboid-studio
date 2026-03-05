"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        image: "/images/signatures/malabar-gold.jpg",
        description: "From private estates to retail complexes, our expertise in contemporary design ensures every space we touch exudes timeless elegance and class.",
        scope: "Retail Showroom, Interior Architecture",
        completion: "2024"
    },
    {
        id: 2,
        image: "/images/signatures/condo-living.jpg",
        description: "Our studio sets new industry benchmarks by seamlessly merging artistry with meticulous execution across residential and commercial projects.",
        scope: "Residential Interiors, Custom Furniture",
        completion: "February 2024"
    },
    {
        id: 4,
        image: "/images/signatures/green-dining.jpg",
        description: "We prioritize a balanced approach where sophisticated aesthetics fuse with functional comfort, enhancing the entire living environment.",
        scope: "Interior Architecture, Bespoke Joinery",
        completion: "January 2024"
    },
    {
        id: 5,
        image: "/images/signatures/showroom-lounge.jpg",
        description: "Elevating every space through personalized design, seamless execution, and the pursuit of timeless sophistication.",
        scope: "Commercial Architecture, Interior Design",
        completion: "2024"
    },
    {
        id: 6,
        image: "/images/signatures/showroom-interior.jpg",
        description: "We transcend blueprints by crafting personalized design solutions tailored to the unique tastes and lifestyles of our clients.",
        scope: "Retail Showroom, Custom Fit-outs",
        completion: "2024"
    }
];

const CuboidSignatures = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = React.useRef(null);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { margin: "-20%" }); // Removed once: true so it triggers on scroll up/down

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -window.innerWidth * 0.8, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: window.innerWidth * 0.8, behavior: "smooth" });
        }
    };

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
                        The Country Lab Signatures
                    </h2>
                    <div className="w-16 h-1 bg-[#FFB800] mx-auto"></div>
                </div>

                {/* --- DESKTOP VIEW: 3D Carousel (Hidden on Mobile) --- */}
                <div className="hidden md:flex relative h-[350px] items-center justify-center perspective-1000 mb-[-80px]">
                    <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
                        {projects.map((project, index) => {
                            const style = getStyleForIndex(index);
                            return (
                                <motion.div
                                    key={project.id}
                                    className="absolute w-[480px] aspect-[16/10] rounded-sm shadow-2xl cursor-pointer bg-white"
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
                                            alt={`Project ${project.id}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* --- MOBILE VIEW: Horizontal Scroll Snap Cards (Hidden on Desktop) --- */}
                <div className="md:hidden relative -mx-4 mb-4">
                    {/* Left/Right Navigation Arrows for Mobile */}
                    <button
                        onClick={scrollLeft}
                        aria-label="Scroll left"
                        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md text-white rounded-full shadow-lg border border-white/40 hover:bg-white/40 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={scrollRight}
                        aria-label="Scroll right"
                        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md text-white rounded-full shadow-lg border border-white/40 hover:bg-white/40 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-4 hide-scrollbar">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="relative min-w-[85vw] snap-center aspect-[4/5] rounded-2xl overflow-hidden shadow-xl"
                                onClick={() => handleCardClick(index)}
                            >
                                <Image
                                    src={project.image}
                                    alt={`Project ${project.id}`}
                                    fill
                                    className="object-cover"
                                />
                                {/* Gradient Overlay for Text Readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                                {/* Card Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 text-white pointer-events-none">
                                    <h3 className="text-xl font-serif mb-2">{project.scope}</h3>
                                    <p className="text-sm text-gray-200 line-clamp-3 mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center text-xs font-medium uppercase tracking-wider text-[#FFB800]">
                                        <span>{project.completion}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dark Details Panel - Desktop Only */}
            <div className="hidden md:block relative z-20 mx-auto max-w-6xl px-4">
                <div className="bg-[#18181B] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden border border-white/5">

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

                                <p className="text-gray-300 leading-relaxed text-sm font-light mb-4 max-w-2xl">
                                    {activeProject.description}
                                </p>


                            </div>

                            {/* Right Metadata */}
                            <div className="md:col-span-2 flex flex-col justify-center border-l border-white/10 pl-6 space-y-4">
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <h4 className="text-[#FFB800] text-[10px] font-bold uppercase tracking-widest mb-1">Scope</h4>
                                        <p className="text-gray-400 font-light leading-tight text-xs">{activeProject.scope}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-[#FFB800] text-[10px] font-bold uppercase tracking-widest mb-1">Completion</h4>
                                        <p className="text-gray-400 font-light text-xs">{activeProject.completion}</p>
                                    </div>
                                </div>

                                {/* Navigation UI */}
                                <div className="flex gap-2 justify-end">
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
