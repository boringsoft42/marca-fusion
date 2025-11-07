"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "120x",
    label: "Faster reach",
    description: "Connect with leads instantly",
  },
  {
    icon: Clock,
    value: "7 days",
    label: "Setup time",
    description: "From zero to automated",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Users",
    description: "Trusted by companies worldwide",
  },
];

const logos = [
  { name: "Company 1", width: 120 },
  { name: "Company 2", width: 100 },
  { name: "Company 3", width: 140 },
  { name: "Company 4", width: 110 },
  { name: "Company 5", width: 130 },
  { name: "Company 6", width: 120 },
];

export function SocialProofSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 border-y border-[#e0e0e0] bg-[#ebe8e3]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        {/* Trusted by banner */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#6b6b6b] mb-8">
            TRUSTED BY 50,000+ COMPANIES
          </p>

          {/* Logo grid */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="h-12 bg-[#e0e0e0] rounded"
                style={{ width: logo.width }}
              />
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                <Icon className="mx-auto h-12 w-12 text-[#0d6832] mb-4" strokeWidth={1.5} />
                <div className="text-4xl font-normal text-[#1a1a1a] mb-2">{stat.value}</div>
                <div className="text-xl font-medium text-[#1a1a1a] mb-1">{stat.label}</div>
                <p className="text-[15px] text-[#6b6b6b] leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
