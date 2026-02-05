import React from 'react';

const CurateLegacies = () => {
    return (
        <section className="bg-[#EAB308] py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[#1F2937] text-[clamp(2.5rem,8vw,5.5rem)] font-serif leading-[0.9] uppercase tracking-tighter mb-12">
                    "WE DON'T JUST BUILD STRUCTURES; WE <span className="italic">CURATE</span> LEGACIES THAT DEFINE THE NEXT ERA OF LUXURY."
                </h2>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#1F2937] mb-6 flex items-center justify-center">
                        {/* Quote Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-[#EAB308]">
                            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                        </svg>
                    </div>
                    <p className="text-[#1F2937] font-bold uppercase tracking-widest text-sm">Marcus Sterling — Founder & Chief Architect</p>
                </div>
            </div>
        </section>
    );
};

export default CurateLegacies;
