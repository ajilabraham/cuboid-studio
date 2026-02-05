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
                    <h2 className="text-3xl md:text-5xl font-serif text-[#EAB308] mb-8 font-bold tracking-wide">
                        Reshaping Perspectives,<br />One Cube at a Time.
                    </h2>

                    <div className="space-y-6 text-gray-100 font-light leading-relaxed text-lg md:text-xl">
                        <p>
                            Welcome to <strong>Cuboid Studio</strong>, where we redefine the dimensions of living. As Kerala’s premier full-service design firm, we don’t just fill rooms; we <span className="text-[#EAB308] font-medium">sculpt them</span>.
                        </p>
                        <p>
                            From the heart of Kochi to the far reaches of Ontario, our team specializes in bespoke interiors that balance geometric precision with organic soul.
                        </p>
                        <p>
                            At Cuboid, your vision provides the blueprint, and our expertise builds the sanctuary—crafting sustainable, functional spaces that reflect your unique signature.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="h-1 w-20 bg-[#EAB308] mx-auto rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutParallax;
