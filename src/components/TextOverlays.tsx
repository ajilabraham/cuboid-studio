"use client";

import { MotionValue, useTransform, motion } from "framer-motion";

interface Props {
    progress: MotionValue<number>;
}

export default function TextOverlays({ progress }: Props) {
    // Ranges need tuning based on visual flow. 
    // Assuming 0-1 range.

    // 1: "From nothingness, intent." (Starts after logo fade)
    const opacity1 = useTransform(progress, [0.1, 0.15, 0.2, 0.25], [0, 1, 1, 0]);

    // 2: "Ideas begin to lean in."
    const opacity2 = useTransform(progress, [0.25, 0.3, 0.35, 0.4], [0, 1, 1, 0]);

    // 3: "Precision finds its place."
    const opacity3 = useTransform(progress, [0.45, 0.5, 0.55, 0.6], [0, 1, 1, 0]);

    // 4: "Balance holds the magic."
    const opacity4 = useTransform(progress, [0.65, 0.7, 0.75, 0.8], [0, 1, 1, 0]);

    // 5: "This is how spaces begin." (Towards end)
    const opacity5 = useTransform(progress, [0.85, 0.9, 0.95, 0.98], [0, 1, 1, 0]);

    const commonClasses = "absolute inset-0 flex items-center justify-center pointer-events-none p-4";
    const textClasses = "text-5xl md:text-7xl lg:text-9xl font-bold uppercase text-center text-ivory tracking-tighter drop-shadow-2xl";

    return (
        <>
            <motion.div style={{ opacity: opacity1 }} className={commonClasses}>
                <h2 className={textClasses}>From nothingness, intent.</h2>
            </motion.div>
            <motion.div style={{ opacity: opacity2 }} className={commonClasses}>
                <h2 className={textClasses}>Ideas begin to lean in.</h2>
            </motion.div>
            <motion.div style={{ opacity: opacity3 }} className={commonClasses}>
                <h2 className={textClasses}>Precision finds its place.</h2>
            </motion.div>
            <motion.div style={{ opacity: opacity4 }} className={commonClasses}>
                <h2 className={textClasses}>Balance holds the magic.</h2>
            </motion.div>
            <motion.div style={{ opacity: opacity5 }} className={commonClasses}>
                <h2 className={textClasses}>This is how Cuboid spaces begin.</h2>
            </motion.div>
        </>
    );
}
