import React from 'react';
import Image from 'next/image';

const BoldModern = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
            <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFDIrBsIHZ7FIkfpfkbpjaZE6kScSZVldkaF8Rky8vF4fiiu0Gs8MNYH0caL8mfF6yvPhj3aVAsbYjv_2BSIM9PNaiVhGQaorT8rq3Ex02fX-5D1eEJKmPj26m8W2utbVIn3bbqatfFXatRzB_p4y_a3P5dJ1mTl-zqBvNvRMAvMA7YOsILZUiS5CM0aVRjHcs5S0jze-c-Sp8AT7VXa0-OlRTw8Na4GdHmQtoUGM1vlLhWOVyCW1EaondjOeNa9IVUOyqh2GqGwI"
                alt="High-contrast architectural detail"
                fill
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                priority
            />
            <div className="relative z-10 text-center px-6">
                <h1 className="text-[clamp(3rem,10vw,8rem)] font-serif text-white leading-tight mb-6 uppercase tracking-tighter">
                    Bold & Modern<br />Architecture
                </h1>
                <div className="w-24 h-px bg-[#EAB308] mx-auto"></div>
            </div>
        </section>
    );
};

export default BoldModern;
