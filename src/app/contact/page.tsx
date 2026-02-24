"use client";

import React from "react";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import dynamic from 'next/dynamic';

const ContactMap = dynamic(() => import('@/components/ContactMap'), {
    ssr: false,
    loading: () => <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#121212] border border-white/5 animate-pulse"><p className="text-[#FFB800] uppercase font-bold tracking-widest text-sm text-center">Loading 3D Map Lab...</p></div>
});

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-black w-full flex flex-col relative">

            {/* 3D Map Hero Background section */}
            <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden">
                <ContactMap />

                {/* Gradient overlay to smoothly transition the map into the rest of the dark page */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none opacity-80 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black pointer-events-none z-10" />

                {/* Hero overlaid text */}
                <div className="absolute inset-x-0 bottom-1/4 z-20 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-6xl md:text-[10rem] font-serif text-white uppercase tracking-tight mb-4 drop-shadow-2xl">
                        Get in <span className="text-[#FFB800] italic">Touch</span>
                    </h1>
                    <p className="text-gray-300 font-light max-w-2xl text-lg md:text-2xl drop-shadow-xl border border-white/10 bg-black/40 backdrop-blur-sm p-4 rounded-sm">
                        Find our global design labs below or drop us a message.
                    </p>
                </div>
            </div>

            {/* Main Content: Form below the hero */}
            <section className="flex-1 w-full max-w-4xl mx-auto px-6 mb-32 -mt-16 relative z-30">
                {/* Enquiry Form */}
                <div className="h-full border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md shadow-2xl">
                    <EnquiryForm />
                </div>
            </section>

            <Footer />
        </main>
    );
}
