"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Case() {s
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <div className="w-full bg-brand-white py-12 md:py-24 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10">
          <h2 className="font-heading text-2xl font-bold tracking-tighter text-brand-charcoal md:text-3xl lg:text-4xl lg:max-w-xl text-left">
            Trusted by thousands of businesses worldwide
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent className="ml-0">
              {Array.from({ length: 15 }).map((_, index) => (
                <CarouselItem className="basis-1/3 pl-4 md:basis-1/4 lg:basis-1/6" key={index}>
                  <div className="flex aspect-square items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 p-6 transition-colors duration-300 hover:bg-gray-100">
                    <span className="font-heading text-sm font-bold uppercase tracking-widest text-gray-400">
                      Logo {index + 1}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}