"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

interface Props {
    progress: MotionValue<number>;
}

export default function ScrollIndicator({ progress }: Props) {
    // Fade out very quickly as scroll starts
    const opacity = useTransform(progress, [0, 0.02], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex flex-col items-center justify-center gap-2"
        >
            {/* Subtle animated chevron/arrow */}
            <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <path
                    d="M12 5V19M12 19L19 12M12 19L5 12"
                    stroke="#FFB800"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </motion.svg>
        </motion.div>
    );
}
