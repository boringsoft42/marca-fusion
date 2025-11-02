"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function FeaturesSection() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section
      className="relative py-20 sm:py-32 bg-background"
      aria-label="Features and benefits"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <BlurFade delay={0} duration={0.6}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Everything You Need to Succeed
            </h2>
          </BlurFade>

          <BlurFade delay={0.1} duration={0.6}>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Powerful features designed to help your business automate, scale,
              and grow. Deploy intelligent AI agents in days, not months.
            </p>
          </BlurFade>
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={prefersReducedMotion ? { duration: 0 } : {
                    duration: 0.5,
                    delay: idx * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Card
                    className="group h-full border-2 border-border bg-card hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6 space-y-4">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Icon
                          className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform duration-300"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-500 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Optional decorative gradient */}
        <div
          className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-3xl" />
          </div>
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2">
            <div className="h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
