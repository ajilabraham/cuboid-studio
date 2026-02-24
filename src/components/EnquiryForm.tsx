import React, { useState } from 'react';

const EnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct email body
        const subject = encodeURIComponent(`New Project Enquiry from ${formData.name}`);
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
        `.trim());

        // Open mail client
        window.location.href = `mailto:info@countrylabinteriors.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 500);
    };

    return (
        <div className="bg-[#121212] p-8 md:p-12 border border-white/5 rounded-none h-full flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-serif mb-4 uppercase leading-tight text-white">
                Start a <span className="text-[#FFB800] italic">Project</span>
            </h3>
            <p className="text-gray-400 font-light mb-10 max-w-md">
                Whether it's a new build or a visionary interior, tell us about your project requirements.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#FFB800] uppercase tracking-widest mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#FFB800] transition-colors font-light rounded-none placeholder-gray-600"
                        placeholder="John Doe"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="email" className="block text-xs font-bold text-[#FFB800] uppercase tracking-widest mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#FFB800] transition-colors font-light rounded-none placeholder-gray-600"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-[#FFB800] uppercase tracking-widest mb-2">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#FFB800] transition-colors font-light rounded-none placeholder-gray-600"
                            placeholder="+1 (555) 000-0000"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#FFB800] uppercase tracking-widest mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-[#FFB800] transition-colors font-light rounded-none placeholder-gray-600 resize-none"
                        placeholder="Tell us about your project..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFB800] text-black font-bold uppercase tracking-widest py-4 mt-4 hover:bg-white transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                >
                    {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    {!isSubmitting && <span className="text-xl leading-none">↗</span>}
                </button>
            </form>
        </div>
    );
};

export default EnquiryForm;
