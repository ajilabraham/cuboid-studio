import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            {/* Infinite Marquee Section */}
            <div className="bg-[#FFB800] text-[#1F2937] py-12 overflow-hidden whitespace-nowrap">
                <div className="inline-block animate-marquee flex items-center">
                    <span className="text-2xl font-serif mx-12 uppercase italic">A' Design Award Gold 2024</span>
                    {/* Star Icon */}
                    <span className="text-xl">★</span>
                    <span className="text-2xl font-serif mx-12 uppercase italic">International Hospitality Design Winner</span>
                    <span className="text-xl">★</span>
                    <span className="text-2xl font-serif mx-12 uppercase italic">Top 10 Emerging Architecture Firms</span>
                    <span className="text-xl">★</span>
                    <span className="text-2xl font-serif mx-12 uppercase italic">Sustainability Excellence 2023</span>
                    <span className="text-xl">★</span>
                    {/* Duplicate for smooth loop - relying on CSS animation 'marquee' defined in global or Tailwind */}
                    <span className="text-2xl font-serif mx-12 uppercase italic">A' Design Award Gold 2024</span>
                    <span className="text-xl">★</span>
                    <span className="text-2xl font-serif mx-12 uppercase italic">International Hospitality Design Winner</span>
                    <span className="text-xl">★</span>
                </div>
            </div>

            <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5" id="contact">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-16 mb-24">
                        <div className="md:col-span-2">

                            <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Ready to redefine your <span className="text-[#FFB800]">interiors?</span></h3>
                            <p className="text-gray-400 font-light max-w-sm mb-10">From initial sketch to the final brick, we are your partners in creating world-class destinations.</p>
                            <div className="flex space-x-6">
                                <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFB800] hover:border-[#FFB800] transition-all font-bold text-xs" href="#">FB</a>
                                <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFB800] hover:border-[#FFB800] transition-all font-bold text-xs" href="#">IG</a>
                                <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFB800] hover:border-[#FFB800] transition-all font-bold text-xs" href="#">LI</a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[#FFB800] uppercase tracking-widest text-xs font-bold mb-8">Navigation</h4>
                            <ul className="space-y-4 font-light text-gray-300">
                                <li><a className="hover:text-white transition-colors" href="#">Architecture Portfolio</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Interior Design</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Sustainability Lab</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Contact & Enquiries</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#FFB800] uppercase tracking-widest text-xs font-bold mb-8">Headquarters</h4>
                            <address className="not-italic text-gray-300 font-light leading-loose">
                                Unit 40, 3883 Quartz Rd,<br />
                                Mississauga, ON L5B 0M4<br /><br />
                                <a className="text-white border-b border-[#FFB800] pb-1" href="mailto:hello@countrylabinteriors.com">hello@countrylabinteriors.com</a>
                            </address>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-gray-500 text-xs tracking-widest uppercase">
                        <p>© 2026 Country Lab. All architectural rights reserved.</p>
                        <div className="mt-4 md:mt-0 flex items-center gap-2">
                            Design Excellence for the Contemporary Era
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
