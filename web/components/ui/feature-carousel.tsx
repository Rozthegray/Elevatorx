"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Activity, Star, Wrench, HardHat } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
    {
        id: "passenger",
        label: "Passenger Elevator Model A",
        icon: Layers,
        image: "/image_6ed462.png", // Ensure this image is in your public folder
        description: "Customized sales solutions to fit your building’s unique requirements.",
    },
    {
        id: "escalators",
        label: "Commercial Escalator X",
        icon: Activity,
        image: "/image_6ed445.png",
        description: "Premium escalators designed for high traffic, safety, and innovation.",
    },
    {
        id: "stairlift",
        label: "Residential Stair Lift Pro",
        icon: Star,
        image: "/image_6ed44a.png",
        description: "Enhance home accessibility with our reliable and safe stair lift solutions.",
    },
    {
        id: "maintenance",
        label: "Maintenance & Repair",
        icon: Wrench,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
        description: "Ensuring your elevators operate safely and smoothly with expert maintenance.",
    },
    {
        id: "installation",
        label: "Installation Services",
        icon: HardHat,
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800",
        description: "Professional installation ensuring seamless integration and long-term performance.",
    }
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 65;

export const FeatureCarousel = () => {
    const [step, setStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const currentIndex = ((step % SERVICES.length) + SERVICES.length) % SERVICES.length;

    const nextStep = useCallback(() => {
        setStep((prev) => prev + 1);
    }, []);

    const handleChipClick = (index: number) => {
        const diff = (index - currentIndex + SERVICES.length) % SERVICES.length;
        if (diff > 0) setStep((s) => s + diff);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
        return () => clearInterval(interval);
    }, [nextStep, isPaused]);

    const getCardStatus = (index: number) => {
        const diff = index - currentIndex;
        const len = SERVICES.length;
        let normalizedDiff = diff;
        if (diff > len / 2) normalizedDiff -= len;
        if (diff < -len / 2) normalizedDiff += len;

        if (normalizedDiff === 0) return "active";
        if (normalizedDiff === -1) return "prev";
        if (normalizedDiff === 1) return "next";
        return "hidden";
    };

    return (
        <div className="w-full max-w-7xl mx-auto py-16 px-6 md:p-12">
            <div className="mb-12 text-center md:text-left">
                <h2 className="text-sm font-bold tracking-[0.2em] text-brand-red uppercase mb-4">Our Services</h2>
                <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-brand-charcoal mb-6">Innovative Elevator Solutions <br/>for Nigerian Homes</h3>
                <p className="text-gray-600 max-w-2xl text-base leading-relaxed mx-auto md:mx-0">
                    Discover our comprehensive elevator services, prioritizing excellence and client care. Trusted elevator and lift maintenance designed for safety and innovation.
                </p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] flex flex-col lg:flex-row min-h-[600px] bg-white border border-gray-200 shadow-xl">
                
                {/* Left Side: Navigation List */}
                <div className="w-full lg:w-[40%] min-h-[350px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-12 bg-gray-50">
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-gray-50 to-transparent z-40" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-40" />
                    <div className="relative w-full h-[400px] flex items-center justify-center lg:justify-start z-20">
                        {SERVICES.map((feature, index) => {
                            const isActive = index === currentIndex;
                            const distance = index - currentIndex;
                            // Wrap distance for infinite loop math
                            const wrappedDistance = ((((distance - -(SERVICES.length / 2)) % SERVICES.length) + SERVICES.length) % SERVICES.length) + -(SERVICES.length / 2);

                            return (
                                <motion.div
                                    key={feature.id}
                                    style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                                    animate={{
                                        y: wrappedDistance * ITEM_HEIGHT,
                                        opacity: 1 - Math.abs(wrappedDistance) * 0.25,
                                        scale: isActive ? 1 : 0.95
                                    }}
                                    transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                                    className="absolute flex items-center justify-start w-full max-w-[280px]"
                                >
                                    <button
                                        onClick={() => handleChipClick(index)}
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                        className={cn(
                                            "relative flex items-center gap-4 px-5 py-3 rounded-xl transition-all duration-500 text-left w-full border",
                                            isActive
                                                ? "bg-white border-gray-200 shadow-md z-10"
                                                : "bg-transparent border-transparent hover:bg-gray-100"
                                        )}
                                    >
                                        <div className={cn("flex items-center justify-center transition-colors duration-500", isActive ? "text-brand-red" : "text-gray-400")}>
                                            <feature.icon size={18} />
                                        </div>
                                        <span className={cn("font-heading font-semibold text-sm tracking-wide transition-colors uppercase", isActive ? "text-brand-charcoal" : "text-gray-500")}>
                                            {feature.label}
                                        </span>
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: Image Display */}
                <div className="flex-1 h-[400px] lg:h-full relative bg-gray-100 flex items-center justify-center py-12 px-6 lg:px-12 overflow-hidden border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
                        {SERVICES.map((feature, index) => {
                            const status = getCardStatus(index);
                            const isActive = status === "active";
                            const isPrev = status === "prev";
                            const isNext = status === "next";

                            return (
                                <motion.div
                                    key={feature.id}
                                    initial={false}
                                    animate={{
                                        x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                                        scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                                        opacity: isActive ? 1 : isPrev || isNext ? 0.3 : 0,
                                        rotate: isPrev ? -3 : isNext ? 3 : 0,
                                        zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                                        pointerEvents: isActive ? "auto" : "none",
                                    }}
                                    transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                                    className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-brand-charcoal origin-center"
                                >
                                    <img
                                        src={feature.image}
                                        alt={feature.label}
                                        className={cn(
                                            "w-full h-full object-cover transition-all duration-700",
                                            isActive ? "grayscale-0 blur-0" : "grayscale blur-[2px] brightness-75"
                                        )}
                                    />
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end"
                                            >
                                                <div className="bg-brand-red text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-[0.2em] w-fit shadow-md mb-3">
                                                    {index + 1} / {SERVICES.length}
                                                </div>
                                                <p className="text-white font-heading font-medium text-lg md:text-xl leading-relaxed drop-shadow-md">
                                                    {feature.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};