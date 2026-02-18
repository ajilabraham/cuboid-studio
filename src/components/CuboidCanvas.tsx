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

    // Preload Images with Progressive Loading
    useEffect(() => {
        const loadImages = async () => {
            const totalFrames = 279;
            const initialBuffer = 50; // Load first 50 frames before showing UI
            const batchSize = 10;
            const loadedCache: HTMLImageElement[] = new Array(totalFrames).fill(undefined);

            const loadImage = (index: number) => new Promise<void>((resolve) => {
                const img = new Image();
                const fileName = `ffout${index.toString().padStart(3, "0")}.gif`;
                img.src = `/images/CuboidGIF/${fileName}`;
                img.onload = () => {
                    loadedCache[index - 1] = img;
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load image: ${fileName}`);
                    resolve();
                };
            });

            // 1. Load Initial Buffer
            const initialPromises = [];
            for (let i = 1; i <= initialBuffer; i++) {
                initialPromises.push(loadImage(i));
            }
            await Promise.all(initialPromises);

            setImages([...loadedCache]);
            setIsLoaded(true); // Unblock UI immediately after buffer is ready

            // 2. Background Load Remaining Frames
            for (let i = initialBuffer + 1; i <= totalFrames; i += batchSize) {
                const batchPromises = [];
                for (let j = i; j < i + batchSize && j <= totalFrames; j++) {
                    batchPromises.push(loadImage(j));
                }
                await Promise.all(batchPromises);
                setImages([...loadedCache]); // Update state progressively
            }
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
