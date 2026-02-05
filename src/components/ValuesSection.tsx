"use client";

export default function ValuesSection() {
    return (
        <section className="bg-charcoal text-ivory py-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                {/* Left Col */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        Conscious <br /> Architecture.
                    </h2>
                    <p className="text-ivory/70 leading-relaxed font-sans max-w-sm">
                        We believe that every line drawn on paper acts as a contract with nature. Our designs prioritize sustainability not as a feature, but as a foundational element of form.
                    </p>
                    <div className="mt-8">
                        <div className="text-6xl font-serif text-gold-accent mb-2">40%</div>
                        <p className="text-sm tracking-widest text-ivory/50">ENERGY SAVINGS AVG.</p>
                    </div>
                </div>

                {/* Right Col */}
                <div className="flex flex-col gap-8 md:pt-32">
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight text-right">
                        Bespoke <br /> Objects.
                    </h2>
                    <p className="text-ivory/70 leading-relaxed font-sans max-w-sm ml-auto text-right">
                        From the handle of a door to the texture of a wall, no detail is too small. We design custom furniture and fixtures that echo the architectural language of the space.
                    </p>
                    <div className="mt-8 text-right">
                        <div className="text-6xl font-serif text-gold-accent mb-2">120+</div>
                        <p className="text-sm tracking-widest text-ivory/50">CUSTOM PIECES CRAFTED</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
