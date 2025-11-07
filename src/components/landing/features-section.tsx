"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { features } from "@/data/features";

export function FeaturesSection() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 bg-[#ebe8e3]"
      aria-label="Features and benefits"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] font-normal text-[#1a1a1a]">
              Everything You Need to Succeed
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mt-6 text-[15px] leading-relaxed text-[#6b6b6b]">
              Powerful features designed to help your business automate, scale,
              and grow. Deploy intelligent AI agents in days, not months.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.1,
                  }}
                >
                  <Card
                    className="group h-full border border-[#e0e0e0] bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300 rounded-2xl"
                  >
                    <CardContent className="p-6 space-y-4">
                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#0d6832]/10">
                        <Icon
                          className="w-6 h-6 text-[#0d6832]"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-medium text-[#1a1a1a]">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#6b6b6b] text-[15px] leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
