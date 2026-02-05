import React from 'react';
import Image from 'next/image';

const ProjectGrid = () => {
    return (
        <section className="py-24 bg-[#1F2937] dark:bg-black text-white" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
                    <h2 className="text-5xl md:text-7xl font-serif">Featured Projects</h2>
                    <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-[#EAB308]">
                        <a className="hover:underline" href="#">View All Works</a>
                        <span className="material-symbols-outlined">
                            {/* Arrow Outward SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-8">
                    {/* Project 1 */}
                    <div className="md:col-span-8 group cursor-pointer">
                        <div className="overflow-hidden rounded-2xl aspect-[16/9] mb-6 relative">
                            <Image
                                src="/images/automotive-pavilion.jpg"
                                alt="Modern curvilinear glass automotive showroom"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="text-3xl font-serif mb-2">Automotive Excellence Pavilion</h4>
                                <p className="text-gray-400 font-light">Commercial / Showroom Design</p>
                            </div>
                            <span className="px-4 py-1 border border-[#EAB308] text-[#EAB308] rounded-full text-xs uppercase font-bold">2023 Award Winner</span>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="md:col-span-4 group cursor-pointer flex flex-col justify-end">
                        <div className="overflow-hidden rounded-2xl aspect-square mb-6 relative">
                            <Image
                                src="/images/executive-suite.png"
                                alt="Sophisticated executive office interior"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div>
                            <h4 className="text-2xl font-serif mb-2">The Executive Suite</h4>
                            <p className="text-gray-400 font-light">Corporate Hospitality / Interior</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
