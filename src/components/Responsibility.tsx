import React from 'react';

const Responsibility = () => {
    return (
        <section className="py-24 bg-[#FDFCF9] dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-px bg-gray-200 dark:bg-gray-800">
                    {/* Left Column */}
                    <div className="bg-[#FDFCF9] dark:bg-gray-900 p-16">
                        <h2 className="text-[#EAB308] uppercase tracking-[0.3em] font-semibold text-sm mb-6">Responsibility</h2>
                        <h3 className="text-4xl font-serif mb-8 text-[#1F2937] dark:text-white">Conscious Architecture</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-10">
                            We prioritize biophilic design and sustainable materials, as seen in our signature 'Green Wall' restaurant concepts. Our goal is to reduce environmental impact without compromising aesthetic prestige.
                        </p>
                        <div className="flex items-center gap-12">
                            <div>
                                <span className="block text-3xl font-serif text-[#1F2937] dark:text-white">40%</span>
                                <span className="text-xs uppercase text-gray-400 tracking-widest">Energy Savings</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-serif text-[#1F2937] dark:text-white">LEED</span>
                                <span className="text-xs uppercase text-gray-400 tracking-widest">Certified Design</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-[#FDFCF9] dark:bg-gray-900 p-16 border-l border-gray-200 dark:border-gray-800">
                        <h2 className="text-[#EAB308] uppercase tracking-[0.3em] font-semibold text-sm mb-6">Artifacts</h2>
                        <h3 className="text-4xl font-serif mb-8 text-[#1F2937] dark:text-white">Bespoke Objects</h3>
                        <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-10">
                            A space is only as good as its touchpoints. We offer specialized design for custom lighting fixtures and furniture pieces that are exclusive to each Cuboid Studio project.
                        </p>
                        <button className="flex items-center gap-3 font-semibold uppercase text-xs tracking-[0.2em] group text-[#1F2937] dark:text-white">
                            Explore Our Design Lab
                            <span className="group-hover:translate-x-1 transition-transform">
                                {/* Arrow Right SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Responsibility;
