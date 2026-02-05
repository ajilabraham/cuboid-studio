import React from 'react';
import Image from 'next/image';

const HotelsRestaurants = () => {
    return (
        <section className="relative overflow-hidden" id="expertise">
            <div className="flex flex-col md:flex-row h-auto md:h-[90vh]">
                {/* Hotels */}
                <div className="relative flex-1 group cursor-pointer overflow-hidden min-h-[400px]">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFDIrBsIHZ7FIkfpfkbpjaZE6kScSZVldkaF8Rky8vF4fiiu0Gs8MNYH0caL8mfF6yvPhj3aVAsbYjv_2BSIM9PNaiVhGQaorT8rq3Ex02fX-5D1eEJKmPj26m8W2utbVIn3bbqatfFXatRzB_p4y_a3P5dJ1mTl-zqBvNvRMAvMA7YOsILZUiS5CM0aVRjHcs5S0jze-c-Sp8AT7VXa0-OlRTw8Na4GdHmQtoUGM1vlLhWOVyCW1EaondjOeNa9IVUOyqh2GqGwI"
                        alt="Majestic arched entrance"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#1F2937]/40 group-hover:bg-[#1F2937]/20 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                        <h4 className="text-4xl md:text-6xl font-serif mb-4">Hotels</h4>
                        <p className="text-lg font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            Sanctuaries of luxury and comfort, redefined for the modern traveler.
                        </p>
                    </div>
                </div>

                {/* Restaurants */}
                <div className="relative flex-1 group cursor-pointer overflow-hidden min-h-[400px]">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtJxvrULvBEKJe4sO8zRUMJIqs1rvfG8j-G3VW8zKW8400X0dnjz089sXE4-FyFlHFH72q2mNNCikvHZxsQxnODbLTyiu8IQqa8YEzvXEYFoebqlNz26X1Aw_FB0H6c5sJxYX-0aAC5ZoDP_MwV6sz6u3SPkRGNsGER_O-tKcZNmRVJtuWg8fANnpCqhlxWd8-cSbUFESJwx6VSGFPpWDYO_A0Hal70w8a08PHG6A7xFTp-Kz0Mrw1Kd6zivzd33NJpt7OC38J7wI"
                        alt="Lush green moss wall interior"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#1F2937]/40 group-hover:bg-[#1F2937]/20 transition-colors"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
                        <h4 className="text-4xl md:text-6xl font-serif mb-4">Restaurants</h4>
                        <p className="text-lg font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                            Culinary stages where ambiance and flavor find perfect harmony.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotelsRestaurants;
