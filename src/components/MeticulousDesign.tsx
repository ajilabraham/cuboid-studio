import React from 'react';

const MeticulousDesign = () => {
    return (
        <section className="py-24 bg-[#FDFCF9] dark:bg-[#121212]" id="philosophy">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
                    <div>
                        <h2 className="text-[#EAB308] uppercase tracking-[0.3em] font-semibold text-sm mb-4">Core Philosophy</h2>
                        <h3 className="text-5xl md:text-6xl font-serif leading-tight text-[#1F2937] dark:text-gray-100">Meticulous Design & Strategic Planning</h3>
                    </div>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-md pb-2">
                        Our approach integrates spatial psychology with architectural precision to create environments that leave a lasting impression on every guest.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 font-serif">
                    {/* Item 1 */}
                    <div className="bg-[#FDFCF9] dark:bg-[#121212] p-12 hover:bg-[#EAB308]/5 transition-colors group">
                        <span className="text-5xl font-serif text-[#EAB308] block mb-8">01</span>
                        <h4 className="text-2xl font-serif mb-4 text-[#1F2937] dark:text-gray-100">Architectural Vision</h4>
                        <p className="text-gray-500 dark:text-gray-400 font-light">Defining the structural soul of hospitality spaces through innovative geometry and material selection.</p>
                    </div>
                    {/* Item 2 */}
                    <div className="bg-[#FDFCF9] dark:bg-[#121212] p-12 hover:bg-[#EAB308]/5 transition-colors group">
                        <span className="text-5xl font-serif text-[#EAB308] block mb-8">02</span>
                        <h4 className="text-2xl font-serif mb-4 text-[#1F2937] dark:text-gray-100">Interior Ecosystems</h4>
                        <p className="text-gray-500 dark:text-gray-400 font-light">Creating seamless transitions between lighting, furniture, and atmosphere to evoke specific emotions.</p>
                    </div>
                    {/* Item 3 */}
                    <div className="bg-[#FDFCF9] dark:bg-[#121212] p-12 hover:bg-[#EAB308]/5 transition-colors group">
                        <span className="text-5xl font-serif text-[#EAB308] block mb-8">03</span>
                        <h4 className="text-2xl font-serif mb-4 text-[#1F2937] dark:text-gray-100">Functional Flow</h4>
                        <p className="text-gray-500 dark:text-gray-400 font-light">Optimizing operational efficiency for staff while maintaining a premium experience for guests.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeticulousDesign;
