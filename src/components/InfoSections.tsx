export default function InfoSections() {
    return (
        <section className="relative z-10 bg-ivory text-black py-24 px-6 md:px-12 min-h-screen">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
                {/* Left Column Content */}
                <div className="space-y-48">
                    <article>
                        <h3 className="text-5xl md:text-7xl font-bold mb-8 font-sans">Designed for Impact</h3>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
                            Architecture is not just about structure; it is about the feeling of space.
                            We craft environments that speak before a word is spoken. From the ground up,
                            every element serves a distinct narrative purpose.
                        </p>
                    </article>
                    <article className="md:pt-24">
                        <h3 className="text-5xl md:text-7xl font-bold mb-8 font-sans">Sustainable Futures</h3>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
                            Every line drawn is a commitment to the future. Our materials are chosen with precision,
                            ensuring longevity and harmony with the natural world. We build for tomorrow, not just today.
                        </p>
                    </article>
                </div>

                {/* Right Column Content */}
                <div className="space-y-48 md:pt-48">
                    <article>
                        <h3 className="text-5xl md:text-7xl font-bold mb-8 font-sans">Fluid Dynamics</h3>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
                            Motion is inherent in our designs. Light travels, air flows, and people move.
                            We choreograph these elements into a seamless dance that guides the observer
                            through the built environment.
                        </p>
                    </article>
                    <article>
                        <h3 className="text-5xl md:text-7xl font-bold mb-8 font-sans">The Human Scale</h3>
                        <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
                            We never lose sight of the inhabitant. Grandeur is balanced with intimacy,
                            creating spaces that feel both majestic and personal. It's about how the body
                            occupies the void.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
