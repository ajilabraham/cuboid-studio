"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    align?: 'center' | 'left';
    customPadding?: string;
}

export default function PageHeader({ titlePrefix, titleHighlight, description, align = 'center', customPadding = 'pt-32 pb-12' }: PageHeaderProps) {
    const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

    return (
        <div className={`w-full max-w-7xl mx-auto ${customPadding} flex flex-col ${alignClass} px-6 relative z-20`}>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl md:text-6xl font-serif text-white uppercase tracking-tight mb-4 drop-shadow-2xl leading-none"
            >
                {titlePrefix} <span className="text-[#FFB800] italic">{titleHighlight}</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-gray-400 font-light max-w-2xl text-sm md:text-xl mt-4"
            >
                {description}
            </motion.p>
        </div>
    );
}
