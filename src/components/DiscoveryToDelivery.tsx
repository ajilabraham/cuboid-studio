import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DiscoveryToDelivery = () => {
    // We can add simple horizontal scroll logic or just use the native scroll with snap as in the HTML.
    // The HTML uses native clean CSS snap which is often smoother for simple lists.
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-[#FDFCF9] dark:bg-[#121212] overflow-hidden" id="process">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-[#EAB308] uppercase tracking-[0.3em] font-semibold text-sm mb-4">How we work</h2>
                    <h3 className="text-4xl font-serif text-[#1F2937] dark:text-gray-100">From Discovery to Delivery</h3>
                </div>
                <div className="hidden md:flex space-x-4 text-[#1F2937] dark:text-white">
                    <button onClick={scrollLeft} className="w-10 h-10 border border-[#1F2937]/20 dark:border-white/20 rounded-full hover:bg-[#EAB308] hover:border-[#EAB308] transition-colors flex items-center justify-center">
                        {/* Chevron Left SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button onClick={scrollRight} className="w-10 h-10 border border-[#1F2937]/20 dark:border-white/20 rounded-full hover:bg-[#EAB308] hover:border-[#EAB308] transition-colors flex items-center justify-center">
                        {/* Chevron Right SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex space-x-8 overflow-x-auto px-6 pb-12 no-scrollbar snap-x snap-mandatory"
            >
                {/* Card 1 */}
                <div className="min-w-[350px] md:min-w-[450px] snap-center bg-[#FDFCF9] dark:bg-gray-900 p-10 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
                    <div className="w-16 h-16 bg-[#EAB308]/10 rounded-xl flex items-center justify-center text-[#EAB308] mb-8">
                        {/* Psychology Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 011.5-.45l.951 3.245a1.5 1.5 0 002.898.779.75.75 0 00-.918-.992l-2.906.91a4.5 4.5 0 00-3.025 0l-2.906-.91a.75.75 0 00-.918.992 1.5 1.5 0 002.898-.779l.951-3.245A6.01 6.01 0 0112 12.75V18m0 0a3 3 0 003 3 1.5 1.5 0 001.5-1.5 3 3 0 00-3-3m-3 3a3 3 0 01-3-3 1.5 1.5 0 011.5 1.5 3 3 0 013 3" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-serif mb-4 text-[#1F2937] dark:text-gray-100">01. Discovery</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                        We begin by immersing ourselves in your brand identity and vision, identifying unique opportunities for spatial storytelling.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="min-w-[350px] md:min-w-[450px] snap-center bg-[#FDFCF9] dark:bg-gray-900 p-10 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
                    <div className="w-16 h-16 bg-[#EAB308]/10 rounded-xl flex items-center justify-center text-[#EAB308] mb-8">
                        {/* Architecture Icon placeholder */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-serif mb-4 text-[#1F2937] dark:text-gray-100">02. Concept & Plan</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                        Our team develops comprehensive architectural plans and mood boards that bridge aesthetic dreams with structural reality.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="min-w-[350px] md:min-w-[450px] snap-center bg-[#FDFCF9] dark:bg-gray-900 p-10 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800">
                    <div className="w-16 h-16 bg-[#EAB308]/10 rounded-xl flex items-center justify-center text-[#EAB308] mb-8">
                        {/* Layers Icon placeholder */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                        </svg>
                    </div>
                    <h4 className="text-2xl font-serif mb-4 text-[#1F2937] dark:text-gray-100">03. Curation</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                        Material sourcing, custom furniture design, and lighting orchestration happen in this phase to ensure total cohesion.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DiscoveryToDelivery;
