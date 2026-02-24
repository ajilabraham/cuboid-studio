"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const categories = [
    {
        title: "Hotels",
        subtitle: "Sanctuaries of luxury and comfort, redefined for the modern traveler.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFDIrBsIHZ7FIkfpfkbpjaZE6kScSZVldkaF8Rky8vF4fiiu0Gs8MNYH0caL8mfF6yvPhj3aVAsbYjv_2BSIM9PNaiVhGQaorT8rq3Ex02fX-5D1eEJKmPj26m8W2utbVIn3bbqatfFXatRzB_p4y_a3P5dJ1mTl-zqBvNvRMAvMA7YOsILZUiS5CM0aVRjHcs5S0jze-c-Sp8AT7VXa0-OlRTw8Na4GdHmQtoUGM1vlLhWOVyCW1EaondjOeNa9IVUOyqh2GqGwI"
    },
    {
        title: "Restaurants",
        subtitle: "Culinary stages where ambiance and flavor find perfect harmony.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtJxvrULvBEKJe4sO8zRUMJIqs1rvfG8j-G3VW8zKW8400X0dnjz089sXE4-FyFlHFH72q2mNNCikvHZxsQxnODbLTyiu8IQqa8YEzvXEYFoebqlNz26X1Aw_FB0H6c5sJxYX-0aAC5ZoDP_MwV6sz6u3SPkRGNsGER_O-tKcZNmRVJtuWg8fANnpCqhlxWd8-cSbUFESJwx6VSGFPpWDYO_A0Hal70w8a08PHG6A7xFTp-Kz0Mrw1Kd6zivzd33NJpt7OC38J7wI"
    },
    {
        title: "Residence",
        subtitle: "Bespoke living spaces designed for elegance, comfort, and enduring legacy.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Retail",
        subtitle: "Immersive commercial environments that elevate brand experiences.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Hospitality",
        subtitle: "Welcoming spaces that blend aesthetic brilliance with intuitive service.",
        image: "/images/hospitality.jpg"
    },
    {
        title: "Health Care",
        subtitle: "Healing environments crafted with precision, empathy, and innovation.",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
    }
];

const HotelsRestaurants = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative overflow-hidden" id="expertise">
            <div className="flex flex-col md:flex-row h-auto md:h-[90vh] w-full">
                {categories.map((category, index) => {
                    const isHovered = hoveredIndex === index;
                    const flexValue = hoveredIndex === null ? 1 : (isHovered ? 4 : 1);

                    return (
                        <div
                            key={category.title}
                            className="relative group cursor-pointer overflow-hidden min-h-[150px] md:min-h-[400px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                            style={{ flex: flexValue }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className={`object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHovered ? 'grayscale-0 scale-105' : 'grayscale scale-100'}`}
                            />
                            <div className={`absolute inset-0 transition-colors duration-700 ${isHovered ? 'bg-[#1F2937]/10' : 'bg-[#1F2937]/50'}`}></div>
                            
                            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white">
                                <h4 className={`font-serif whitespace-nowrap transition-all duration-700 transform origin-bottom-left ${isHovered ? 'text-3xl md:text-5xl lg:text-6xl mb-4' : 'text-2xl md:text-3xl lg:text-4xl -rotate-90 md:rotate-0 mb-2 md:mb-6'}`}>
                                    {category.title}
                                </h4>
                                <p className={`text-sm md:text-lg font-light transition-all duration-700 ease-out overflow-hidden max-w-xs md:max-w-md ${isHovered ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 translate-y-8'}`}>
                                    {category.subtitle}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default HotelsRestaurants;
