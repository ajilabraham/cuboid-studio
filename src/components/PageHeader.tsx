"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    titlePrefix: string;
    titleHighlight: string;
    description: string;
}

export default function PageHeader({ titlePrefix, titleHighlight, description }: PageHeaderProps) {
    return (
        <div className="w-full pt-32 pb-12 flex flex-col items-center justify-center text-center px-6 relative z-20">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl md:text-[10rem] font-serif text-white uppercase tracking-tight mb-4 drop-shadow-2xl leading-none"
            >
                {titlePrefix} <span className="text-[#FFB800] italic">{titleHighlight}</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-gray-400 font-light max-w-2xl text-lg md:text-2xl mt-4"
            >
                {description}
            </motion.p>
        </div>
    );
}
