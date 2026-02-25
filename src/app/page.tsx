"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CuboidCanvas from "@/components/CuboidCanvas";
import TextOverlays from "@/components/TextOverlays";

import InfoSections from "@/components/InfoSections"; // Keeping for reference or removal

import ScrollIndicator from "@/components/ScrollIndicator";
import Image from "next/image";

import BoldModern from "@/components/BoldModern";
import AboutParallax from "@/components/AboutParallax";
import CuboidSignatures from "@/components/CuboidSignatures";
import MeticulousDesign from "@/components/MeticulousDesign";
import HotelsRestaurants from "@/components/HotelsRestaurants";
import DiscoveryToDelivery from "@/components/DiscoveryToDelivery";
import ProjectGrid from "@/components/ProjectGrid";
import CurateLegacies from "@/components/CurateLegacies";
import Responsibility from "@/components/Responsibility";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';

const ContactMap = dynamic(() => import('@/components/ContactMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#121212] border border-white/5 animate-pulse"><p className="text-[#FFB800] uppercase font-bold tracking-widest text-sm text-center">Loading 3D Map Lab...</p></div>
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll of the 1400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(scrollYProgress, [0.8, 1], ["#000000", "#121212"]);
  // Fade out the canvas/fixed elements as we approach the end of the sequence
  const canvasOpacity = useTransform(scrollYProgress, [0.95, 1], [1, 0]);

  return (
    <motion.main style={{ backgroundColor }} className="min-h-screen">
      {/* 
         Canvas Sequence Container (1400vh). 
         The content (Canvas + Overlays) is sticky inside.
       */}
      <div ref={containerRef} className="relative h-[1400vh] z-20">
        <motion.div style={{ opacity: canvasOpacity }} className="sticky top-0 h-screen w-full overflow-hidden">
          <CuboidCanvas scrollYProgress={scrollYProgress} />
          <ScrollIndicator progress={scrollYProgress} />
          <TextOverlays progress={scrollYProgress} />
        </motion.div>
      </div>




      {/* Rest of the Page Content */}
      <div className="relative z-40 bg-[#121212] -mt-32">
        <AboutParallax />
        <BoldModern />
        <MeticulousDesign />
        <CuboidSignatures />
        <HotelsRestaurants />
        <DiscoveryToDelivery />
        <ProjectGrid />
        <CurateLegacies />
        <Responsibility />
        {/* 3D Map Section */}
        <section className="pt-12 pb-12 bg-[#FFB800] dark:bg-[#FFB800]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-end">
              <div>
                <h2 className="text-gray-800 uppercase tracking-[0.3em] font-semibold text-sm mb-4">Global Locations</h2>
                <h3 className="text-5xl md:text-6xl font-serif leading-tight text-[#1F2937] dark:text-gray-900">Fly in to our <br className="hidden md:block" /><span className="font-bold">Country Labs</span></h3>
              </div>
              <p className="text-lg text-gray-800 dark:text-gray-900 font-medium leading-relaxed max-w-md pb-2">
                Explore our global headquarters and secondary design hubs. Get in touch to schedule a private consultation for your next visionary project.
              </p>
            </div>
          </div>
        </section>
        <div className="w-full h-[60vh] md:h-[75vh] relative overflow-hidden ring-y ring-white/10">
          <ContactMap />
        </div>
        <Footer />
      </div>

    </motion.main >
  );
}
