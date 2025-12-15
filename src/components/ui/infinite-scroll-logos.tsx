"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface InfiniteScrollLogosProps {
  logos: Array<{
    name: string;
    image: string;
    alt?: string;
  }>;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right";
  className?: string;
}

export function InfiniteScrollLogos({
  logos,
  speed = "normal",
  direction = "left",
  className,
}: InfiniteScrollLogosProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  const speedClasses = {
    slow: "animate-scroll-slow",
    normal: "animate-scroll",
    fast: "animate-scroll-fast",
  };

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex">
        <div
          className={cn(
            "flex gap-8 md:gap-12 lg:gap-16 shrink-0",
            speedClasses[speed],
            direction === "left" ? "" : "animate-scroll-reverse",
            isPaused && "animation-paused"
          )}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={logo.image}
                  alt={logo.alt || logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className={cn(
            "flex gap-8 md:gap-12 lg:gap-16 shrink-0",
            speedClasses[speed],
            direction === "left" ? "" : "animate-scroll-reverse",
            isPaused && "animation-paused"
          )}
          aria-hidden="true"
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-duplicate-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={logo.image}
                  alt={logo.alt || logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

