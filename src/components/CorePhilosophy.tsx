"use client";

export default function CorePhilosophy() {
    const pillars = [
        {
            title: "Architectural Vision",
            description: "We don't just build structures; we craft skylines. Our approach merges structural integrity with an unyielding commitment to aesthetic dominance."
        },
        {
            title: "Interior Ecosystems",
            description: "Space is an organism. We curate environments that breathe, evolving with the inhabitants to ensure that every square foot serves a distinct purpose."
        },
        {
            title: "Functional Flow",
            description: "Beauty without utility is vanity. We engineer movement, ensuring that the transition between spaces is as seamless as thought itself."
        }
    ];

    return (
        <section className="bg-off-white px-6 py-24 md:py-32">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Main Headline */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-charcoal text-center tracking-tight leading-[0.9] mb-16 max-w-5xl">
                    Meticulous Design & <br />
                    <span className="italic">Strategic Planning</span>
                </h2>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full border-t border-charcoal/10 pt-12">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <span className="text-gold-accent font-sans text-sm tracking-widest uppercase font-bold">
                                0{index + 1}
                            </span>
                            <h3 className="text-2xl font-serif text-charcoal">
                                {pillar.title}
                            </h3>
                            <p className="text-charcoal/70 font-sans leading-relaxed text-sm md:text-base">
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
