"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
    logoText: string;
    navLinks: { label: string; href: string }[];
    mainText: string;
    readMoreLink: string;
    cabinBgSrc: string;
    doorSrc: string;
    overlayText: { part1: string; part2: string };
}

export const MinimalistHero = ({
    logoText, navLinks, mainText, readMoreLink, cabinBgSrc, doorSrc, overlayText
}: HeroProps) => {
    const [isElevatorOpen, setIsElevatorOpen] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const mechanicalEase = [0.43, 0.13, 0.23, 0.96]; 

    useEffect(() => {
        const timer = setTimeout(() => setHasLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative flex flex-col w-full min-h-[100svh] items-center overflow-hidden bg-brand-white">
            
            <header className="absolute top-0 z-40 flex w-full p-6 md:p-12 items-center justify-between">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-xl md:text-2xl font-heading font-extrabold tracking-[0.15em] text-brand-charcoal uppercase">
                    {logoText}
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="hidden items-center space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-xs font-semibold tracking-[0.2em] text-gray-500 transition-colors hover:text-brand-charcoal uppercase">{link.label}</a>
                    ))}
                </motion.div>
            </header>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* Adjusted padding: pt-40 md:pt-48 pb-24 */}
            <div className="relative z-20 w-full flex-grow flex flex-col items-center justify-center px-6 pt-40 md:pt-48 pb-24 max-w-7xl mx-auto">
                <div className="w-full grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-center justify-items-center lg:justify-items-stretch">
                    
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }} className="order-1 flex flex-col items-center text-center lg:items-start lg:text-left mt-8 lg:mt-0">
                        <div className="mb-6 inline-flex items-center space-x-2 rounded-full border border-gray-200 bg-white shadow-sm px-4 py-1.5">
                            <span className="h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
                            <span className="text-[10px] font-bold tracking-widest text-brand-charcoal uppercase">Precision Engineering</span>
                        </div>
                        <p className="max-w-xs text-base leading-loose text-gray-600">{mainText}</p>
                        <a href={readMoreLink} className="mt-8 group flex items-center space-x-3 text-xs font-bold tracking-[0.2em] text-brand-charcoal uppercase transition-opacity hover:opacity-70">
                            <span>Discover Systems</span>
                            <span className="rounded-full bg-brand-charcoal/5 p-2 transition-transform group-hover:translate-x-1"><ArrowRight size={16} /></span>
                        </a>
                    </motion.div>

                    <div className="relative order-2 flex justify-center items-center h-[450px] w-full mt-4 md:mt-0">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: isElevatorOpen ? 1 : 0.2, scale: isElevatorOpen ? 1.05 : 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} className="absolute z-0 h-[300px] w-[300px] rounded-full bg-brand-red/10 blur-[60px] md:h-[400px] md:w-[400px]" />
                        <motion.div 
                            className="relative z-10 cursor-pointer overflow-hidden rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.2)] bg-black"
                            initial={{ opacity: 0, x: -50, scale: 0.95 }}
                            animate={hasLoaded ? { opacity: 1, x: 0, scale: isElevatorOpen ? 1.05 : 1, width: isElevatorOpen ? 320 : 250, height: isElevatorOpen ? 450 : 380, boxShadow: isElevatorOpen ? "0 10px 40px rgba(183, 28, 28, 0.15)" : "0 30px 60px rgba(0,0,0,0.2)" } : {}}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            onClick={() => setIsElevatorOpen(!isElevatorOpen)}
                        >
                            <img src={cabinBgSrc} alt="Elevator Interior" className="absolute inset-0 h-full w-full object-cover z-0 transition-all duration-1000" style={{ filter: isElevatorOpen ? "brightness(1)" : "brightness(0.7)" }} />
                            <div className="absolute inset-0 z-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none" />

                            <motion.div className="absolute left-0 top-0 bottom-0 w-1/2 z-10 overflow-hidden" initial={{ x: 0 }} animate={{ x: isElevatorOpen ? "-100%" : 0 }} transition={{ duration: 1.2, ease: mechanicalEase }}>
                                <img src={doorSrc} alt="Left Door" className="absolute left-0 top-0 h-full w-[200%] max-w-none object-cover object-left shadow-[5px_0_15px_rgba(0,0,0,0.5)]" />
                            </motion.div>

                            <motion.div className="absolute right-0 top-0 bottom-0 w-1/2 z-10 overflow-hidden" initial={{ x: 0 }} animate={{ x: isElevatorOpen ? "100%" : 0 }} transition={{ duration: 1.2, ease: mechanicalEase }}>
                                <img src={doorSrc} alt="Right Door" className="absolute right-0 top-0 h-full w-[200%] max-w-none object-cover object-right shadow-[-5px_0_15px_rgba(0,0,0,0.5)]" />
                            </motion.div>

                            <motion.div animate={{ opacity: isElevatorOpen ? 0 : 1 }} transition={{ duration: 0.3 }} className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                                <div className="flex flex-col items-center space-y-4">
                                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/40 backdrop-blur-md shadow-lg">
                                        <div className="h-2 w-2 rounded-full bg-brand-red animate-ping absolute"></div>
                                        <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                                    </div>
                                    <span className="text-[9px] font-bold tracking-[0.4em] text-white uppercase drop-shadow-md">Open</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }} className="order-3 flex items-center justify-center text-center lg:justify-end mt-8 lg:mt-0">
                        <h1 className="text-6xl font-heading font-extrabold tracking-tighter text-brand-charcoal md:text-7xl lg:text-8xl lg:text-right">
                            <span className="font-medium text-gray-400 block mb-2">{overlayText.part1}</span>
                            {overlayText.part2}
                        </h1>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};