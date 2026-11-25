"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { FeatureCarousel } from '@/components/ui/feature-carousel';
import { Case } from '@/components/ui/cases-with-infinite-scroll';
import { ShieldCheck, HardHat, Star, Users } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);

export default function Home() {
    const REVIEWS = [
        { id: 1, name: "Ibeh Charles", role: "Sales Manager", text: "Elevator X transformed our building’s accessibility with their expert elevator installation and maintenance services." },
        { id: 2, name: "Sarah K.", role: "Lead Architect", text: "Their attention to design details perfectly complemented our luxury residential project. Aesthetic and operation are unmatched." },
        { id: 3, name: "Chinedu E.", role: "Operations Director", text: "Reliability is critical for our hospital. Elevator X delivered robust systems we can trust 24/7 without fail." },
        { id: 4, name: "Folake A.", role: "Estate Developer", text: "Premium finish, silent operation, and an incredibly professional engineering team. Our absolute go-to." },
    ];
    
    // Duplicate for infinite scroll illusion
    const items = [...REVIEWS, ...REVIEWS];

    return (
        <main className="bg-brand-white min-h-screen relative font-sans text-brand-charcoal overflow-x-hidden">
            
            {/* 1. Hero Section */}
            <MinimalistHero 
                logoText="ELEVATOR X" 
                navLinks={[
                    { label: 'Home', href: '#' },
                    { label: 'About', href: '#about' },
                    { label: 'Services', href: '#services' },
                    { label: 'Portfolio', href: '#portfolio' },
                    { label: 'Gallery', href: '#gallery' },
                    { label: 'Contact', href: '#contact' }
                ]}
                mainText="Elevator X delivers top-quality elevator and access solutions designed to enhance safety and convenience for homes and businesses across Nigeria. Experience cutting-edge technology and reliable service that elevates your space." 
                readMoreLink="#services"
                cabinBgSrc="/cabin-open.png" 
                doorSrc="/doors-closed.png" 
                overlayText={{ part1: 'innovative', part2: 'solutions.' }} 
            />

            {/* 2. Infinite Scroll Logo Brand Carousel */}
            <Case />

            {/* 3. About Us Section */}
            <section id="about" className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-6">About Elevator X</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-brand-charcoal mb-8">
                        Elevating Excellence with <br/>Every Installation
                    </h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium">
                        At Elevator X, we are committed to delivering innovative and reliable elevator solutions that enhance accessibility and safety. Our mission is to set the standard in Nigeria for quality, service, and customer satisfaction, ensuring every project meets international benchmarks while supporting community growth.
                    </p>
                </div>
            </section>

            {/* 4. Interactive Feature Carousel */}
            <div id="services">
                <FeatureCarousel />
            </div>

            {/* 5. Testimonial Reel */}
            <div id="portfolio" className="w-full overflow-hidden bg-gray-50 py-24 relative border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">Client Feedback</h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-brand-charcoal">Trusted by Industry Leaders</h3>
                </div>
                {/* Fade overlays for the scrolling effect */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex">
                    <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 30, repeat: Infinity }} className="flex gap-6 px-3 whitespace-nowrap">
                        {items.map((review, i) => (
                            <div key={`${review.id}-${i}`} className="w-[300px] md:w-[400px] whitespace-normal bg-white shadow-sm hover:shadow-md border border-gray-100 p-8 rounded-2xl flex-shrink-0 transition-all duration-300">
                                <div className="flex gap-1 mb-6 text-brand-red">
                                    {[...Array(5)].map((_, index) => <Star fill="currentColor" key={index} size={16} stroke="currentColor" />)}
                                </div>
                                <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed italic">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-charcoal font-bold border border-gray-200">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-brand-charcoal font-semibold text-sm">{review.name}</h4>
                                        <span className="text-gray-400 text-[10px] tracking-wider uppercase font-bold">{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* 6. Trust Signals */}
            <div className="w-full bg-white border-b border-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
                    <div className="flex flex-col items-center text-gray-500 hover:text-brand-charcoal transition-colors">
                        <ShieldCheck size={24} />
                        <span className="text-xs font-bold tracking-widest uppercase mt-3 text-center">ISO 9001 Certified</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 hover:text-brand-charcoal transition-colors">
                        <HardHat size={24} />
                        <span className="text-xs font-bold tracking-widest uppercase mt-3 text-center">Expert Engineers</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 hover:text-brand-charcoal transition-colors">
                        <Star size={24} />
                        <span className="text-xs font-bold tracking-widest uppercase mt-3 text-center">Premium Quality</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 hover:text-brand-charcoal transition-colors">
                        <Users size={24} />
                        <span className="text-xs font-bold tracking-widest uppercase mt-3 text-center">Nationwide Support</span>
                    </div>
                </div>
            </div>

            {/* 7. Contact Form Section */}
            <section id="contact" className="relative w-full py-24 px-6 overflow-hidden flex items-center justify-center bg-brand-white border-t border-gray-200">
                <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">Contact Us</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-brand-charcoal mb-6 tracking-tight">
                            Ready to Elevate <br/>Your Space?
                        </h3>
                        <p className="text-gray-600 mb-10 text-base md:text-lg max-w-xl leading-relaxed">
                            Reach out to our engineering team today to discuss customized mobility solutions, request a quote, or schedule maintenance.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-brand-charcoal">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                                    <HardHat size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Expert Consultation</h4>
                                    <p className="text-xs text-gray-500">Speak with a certified engineer.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Name *</label>
                                    <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email *</label>
                                    <input type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Subject *</label>
                                <input type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors" placeholder="How can we help?" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Message *</label>
                                <textarea required rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-charcoal text-white px-8 py-4 rounded-xl font-bold uppercase tracking-[0.15em] text-xs hover:bg-brand-red transition-all duration-300 shadow-md">
                                Submit Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* 8. Footer */}
            <footer className="w-full py-12 px-6 text-center text-xs text-gray-400 font-bold tracking-widest uppercase bg-brand-white">
                © 2026 Elevator X. All Rights Reserved.
            </footer>

            {/* 9. Floating WhatsApp Button */}
            <a href="https://wa.me/2340000000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group" aria-label="Chat with us on WhatsApp">
                <WhatsAppIcon />
                <span className="absolute right-full mr-4 bg-brand-charcoal text-white text-xs font-medium py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat with an Engineer</span>
            </a>
        </main>
    );
}
