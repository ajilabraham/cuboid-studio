"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, MotionValue } from "framer-motion";

interface Props {
    scrollYProgress: MotionValue<number>;
}

export default function CuboidCanvas({ scrollYProgress }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Map progress to frame index (0 to 278)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 278]);

    // Preload Images with Batching
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const batchSize = 10;

            for (let i = 1; i <= 279; i += batchSize) {
                const promises = [];
                for (let j = i; j < i + batchSize && j <= 279; j++) {
                    promises.push(
                        new Promise<void>((resolve) => {
                            const img = new Image();
                            const fileName = `ffout${j.toString().padStart(3, "0")}.gif`;
                            img.src = `/images/CuboidGIF/${fileName}`;
                            img.onload = () => resolve();
                            img.onerror = () => resolve(); // Fail gracefully
                            loadedImages[j - 1] = img;
                        })
                    );
                }
                await Promise.all(promises);
            }

            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    // Canvas Rendering Logic
    useEffect(() => {
        if (!isLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = (index: number) => {
            const frame = Math.min(278, Math.max(0, Math.round(index)));
            const img = images[frame];
            if (!img) return;

            const dpr = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = window.innerHeight;

            if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            ctx.clearRect(0, 0, width, height);

            const imgRatio = img.width / img.height;
            const winRatio = width / height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (winRatio > imgRatio) {
                // Window is wider: match width, crop height (Cover)
                drawWidth = width;
                drawHeight = width / imgRatio;
                offsetX = 0;
                offsetY = (height - drawHeight) / 2;
            } else {
                // Window is taller: match height, crop width (Cover)
                drawHeight = height;
                drawWidth = height * imgRatio;
                offsetX = (width - drawWidth) / 2;
                offsetY = 0;
            }

            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        };

        render(frameIndex.get());
        const unsubscribe = frameIndex.on("change", (latest) => requestAnimationFrame(() => render(latest)));
        return () => unsubscribe();
    }, [isLoaded, frameIndex, images]);

    return (
        <>
            {!isLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center text-ivory bg-black">
                    <p className="text-2xl animate-pulse font-bold tracking-widest">LOADING EXPERIENCE</p>
                </div>
            )}
            <canvas ref={canvasRef} className="block w-full h-full object-contain" />
        </>
    );
}
