"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CuboidCanvas from "@/components/CuboidCanvas";
import TextOverlays from "@/components/TextOverlays";
import Viewfinder from "@/components/Viewfinder";
import InfoSections from "@/components/InfoSections";
import ScrollIndicator from "@/components/ScrollIndicator";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll of the 1400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundColor = useTransform(scrollYProgress, [0.8, 1], ["#000000", "#FBF6F6"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <motion.main style={{ backgroundColor }} className="min-h-screen">
      {/* 
         Canvas Sequence Container (1400vh). 
         The content (Canvas + Overlays) is sticky inside.
       */}
      <div ref={containerRef} className="relative h-[1400vh] z-20">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <CuboidCanvas scrollYProgress={scrollYProgress} />
          <motion.div style={{ opacity: logoOpacity }} className="absolute top-4 left-4 md:top-8 md:left-8 z-40 pointer-events-none">
            <div className="relative w-44 h-22 md:w-64 md:h-32">
              <Image
                src="/images/cuboid-logo.jpg"
                alt="Cuboid Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
          <ScrollIndicator progress={scrollYProgress} />
          <TextOverlays progress={scrollYProgress} />
        </div>
      </div>

      {/* 
         Viewfinder: Fixed Overlay. 
         - Fades in based on canvas progress.
         - Floats based on global scroll (handled internally).
       */}
      <Viewfinder canvasProgress={scrollYProgress} />

      {/* Post-Sequence Content */}
      <InfoSections />
    </motion.main>
  );
}
