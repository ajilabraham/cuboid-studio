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

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll of the 1400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(scrollYProgress, [0.8, 1], ["#000000", "#121212"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
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
          <motion.div style={{ opacity: logoOpacity }} className="absolute top-4 left-4 md:top-8 md:left-8 z-40 pointer-events-none">
            <div className="relative w-[13.2rem] h-[6.6rem] md:w-[19.2rem] md:h-[9.6rem]">
              <Image
                src="/cuboid-logo.png"
                alt="Country Lab"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
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
        <Footer />
      </div>

    </motion.main >
  );
}
