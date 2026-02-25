import React from 'react';
import Image from 'next/image';

const ProjectGrid = () => {
    return (
        <section className="py-24 bg-[#1F2937] dark:bg-black text-white" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
                    <h2 className="text-5xl md:text-7xl font-serif">Featured Projects</h2>
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

                    {/* Showreel Video & Gallery Split */}
                    <div className="md:col-span-12 flex flex-col lg:flex-row gap-8 mt-8">

                        {/* Fixed Size Left Player */}
                        <div className="w-full lg:w-[478px] h-[850px] shrink-0 group cursor-pointer relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            >
                                <source src="/videos/ShowReel.mp4" type="video/mp4" />
                            </video>

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-md bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white ml-1">
                                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-6 right-6 pointer-events-none">
                                <h4 className="text-2xl font-serif text-white mb-2">2024 Design Showreel</h4>
                                <p className="text-gray-300 font-light text-sm tracking-wide">Watch our signature spaces come to life</p>
                            </div>
                        </div>

                        {/* Right Gallery */}
                        <div className="flex-1 flex flex-col gap-8 h-auto lg:h-[850px]">
                            <div className="relative flex-1 min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden group cursor-pointer border border-gray-800">
                                <Image
                                    src="/images/hospitality-bar.jpg"
                                    alt="Hospitality Bar"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/80 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-8 left-8">
                                    <h4 className="text-2xl font-serif text-white mb-1">Illuminated Social Spaces</h4>
                                    <p className="text-gray-300 font-light text-sm">Bespoke Hospitality Venues</p>
                                </div>
                            </div>
                            <div className="relative flex-1 min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden group cursor-pointer border border-gray-800">
                                <Image
                                    src="/images/hospitality-lounge.jpg"
                                    alt="Hospitality Lounge"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/80 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-8 left-8">
                                    <h4 className="text-2xl font-serif text-white mb-1">Organic Textures & Forms</h4>
                                    <p className="text-gray-300 font-light text-sm">Resort Lounge Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;
