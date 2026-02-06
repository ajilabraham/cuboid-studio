"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const AboutParallax = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[800px] overflow-hidden flex items-center justify-center">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]"
            >
                <Image
                    src="/images/about-parallax.jpg"
                    alt="Abstract Architectural Form"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </motion.div>

            {/* Content Overlay */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
            >
                <div className="bg-black/40 backdrop-blur-md p-10 md:p-16 rounded-sm border border-white/10 shadow-2xl">
                    <h2 className="text-3xl md:text-5xl font-serif text-[#FFB800] mb-8 font-bold tracking-wide">
                        Distilling Your Vision,<br />One Detail at a Time
                    </h2>

                    <div className="space-y-6 text-gray-100 font-light leading-relaxed text-lg md:text-xl">
                        <p>
                            Welcome to <strong>Country Lab</strong>, Ontario’s premier studio where rustic warmth meets clinical precision.
                        </p>
                        <p>
                            Whether we are crafting an intimate residential sanctuary or a high-performance commercial environment, our approach remains the same: a meticulous experiment in style and function.
                        </p>
                        <p>
                            From the initial concept to the final detail, we provide full-service interior solutions that treat your vision as the catalyst and our expertise as the formula for an extraordinary space.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="h-1 w-20 bg-[#FFB800] mx-auto rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutParallax;
