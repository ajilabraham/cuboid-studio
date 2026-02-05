"use client";

export default function ProcessFlow() {
    const steps = [
        { title: "Discovery", desc: "Understanding the soul of the project." },
        { title: "Concept", desc: "Translating intent into visual form." },
        { title: "Planning", desc: "The rigorous blueprint of execution." },
        { title: "Delivery", desc: "Bringing the vision to physical reality." },
    ];

    return (
        <section className="bg-off-white py-24 border-b border-charcoal/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal">
                        From Discovery <br /> to Delivery
                    </h2>
                    <p className="max-w-md text-right text-charcoal/60 mt-4 md:mt-0 font-sans">
                        Our process is a disciplined journey from the abstract to the tangible, ensuring no detail is lost in translation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {steps.map((step, i) => (
                        <div key={i} className="group p-6 border border-charcoal/10 hover:bg-charcoal hover:text-ivory transition-colors duration-300">
                            <span className="block text-4xl font-serif mb-4 text-gold-accent">0{i + 1}</span>
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-2">{step.title}</h3>
                            <p className="text-sm opacity-70 group-hover:opacity-90">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
