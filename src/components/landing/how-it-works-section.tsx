"use client";

import { motion } from "framer-motion";
import { FileText, Brain, Plug, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Provide business context",
    description:
      "Tell us about your business, goals, and processes. Our AI learns what makes your business unique.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Train your agent",
    description:
      "Customize your AI agent's personality, responses, and workflows to match your brand perfectly.",
  },
  {
    number: "03",
    icon: Plug,
    title: "Integrate with 1,000+ tools",
    description:
      "Connect seamlessly with your CRM, calendar, and favorite tools. Start automating in minutes.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#ebe8e3]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] font-normal text-[#1a1a1a]">
              How It Works
            </h2>
            <p className="mt-4 text-[15px] text-[#6b6b6b] leading-relaxed">
              Get started in three simple steps. No technical knowledge required.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Connector line (desktop only) */}
                  {idx < steps.length - 1 && (
                    <div className="absolute top-16 left-full hidden w-full lg:block">
                      <ArrowRight className="h-6 w-6 text-[#6b6b6b] mx-auto -translate-x-1/2" strokeWidth={1.5} />
                    </div>
                  )}

                  <div className="relative overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white p-8 h-full shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    {/* Step number */}
                    <div className="absolute top-4 right-4 text-6xl font-normal text-[#6b6b6b] opacity-20">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#0d6832]/10">
                      <Icon className="h-8 w-8 text-[#0d6832]" strokeWidth={1.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-medium mb-3 text-[#1a1a1a]">{step.title}</h3>
                    <p className="text-[#6b6b6b] text-[15px] leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-[#0d6832] text-white px-7 py-3 rounded-3xl text-[15px] font-medium hover:bg-[#0a5528] transition-colors duration-200"
            >
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
