"use client";

import React from "react";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import ErrorBoundary from "@/components/ErrorBoundary";
import dynamic from 'next/dynamic';

const ContactMap = dynamic(() => import('@/components/ContactMap'), {
    ssr: false,
    loading: () => <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#121212] border border-white/5 animate-pulse"><p className="text-[#FFB800] uppercase font-bold tracking-widest text-sm text-center">Loading 3D Map Lab...</p></div>
});

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-black w-full flex flex-col relative">

            {/* Page Header */}
            <div className="w-full pt-32 pb-12 flex flex-col items-center justify-center text-center px-6 relative z-20">
                <h1 className="text-6xl md:text-[10rem] font-serif text-white uppercase tracking-tight mb-4 drop-shadow-2xl">
                    Get in <span className="text-[#FFB800] italic">Touch</span>
                </h1>
                <p className="text-gray-400 font-light max-w-2xl text-lg md:text-2xl mt-4">
                    Find our global design labs above or drop us a message.
                </p>
            </div>

            {/* 3D Map Hero section */}
            <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden ring-y ring-white/10">
                <ContactMap />
            </div>

            {/* Main Content: Form below the hero */}
            <section className="flex-1 w-full max-w-4xl mx-auto px-6 mb-32 mt-16 relative z-30">
                {/* Enquiry Form */}
                <div className="h-full border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md shadow-2xl">
                    <EnquiryForm />
                </div>
            </section>

            <Footer />
        </main>
    );
}
