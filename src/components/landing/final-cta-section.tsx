"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackCTAClick } from "@/lib/analytics";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  "Deploy in 7 days, not months",
  "No credit card required to start",
  "24/7 AI agents that never sleep",
  "Enterprise-grade security & compliance",
];

export function FinalCTASection() {
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-[#ebe8e3]"
      aria-label="Final call to action"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-[#0d6832]/10 border border-[#0d6832]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#0d6832]" strokeWidth={1.5} />
              <span className="text-sm font-medium text-[#1a1a1a]">
                Start Your AI Automation Journey
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-[48px] font-normal text-[#1a1a1a] leading-tight mb-6">
              Ready to Transform Your Business?
            </h2>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[15px] leading-relaxed text-[#6b6b6b] mb-12 max-w-2xl mx-auto">
              Join 50,000+ companies automating their operations with AI. Deploy
              intelligent agents in 7 days and start seeing results immediately.
            </p>
          </motion.div>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-3 text-left"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0d6832]/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base text-[#1a1a1a] font-medium">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/sign-up"
              onClick={() => trackCTAClick({
                cta_location: "final_cta",
                cta_text: "Get Started Free",
                cta_type: "primary",
                destination_url: "/sign-up"
              })}
              className="inline-flex items-center gap-2 bg-[#0d6832] text-white px-7 py-3 rounded-3xl text-[15px] font-medium hover:bg-[#0a5528] transition-colors duration-200"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>

            <Link
              href="/contact"
              onClick={() => trackCTAClick({
                cta_location: "final_cta",
                cta_text: "Talk to Sales",
                cta_type: "secondary",
                destination_url: "/contact"
              })}
              className="inline-flex items-center justify-center px-7 py-3 text-[15px] font-medium text-[#1a1a1a] bg-white border-2 border-[#e0e0e0] rounded-3xl hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200"
            >
              Talk to Sales
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="mt-8 text-sm text-[#6b6b6b]">
              Trusted by 50,000+ businesses worldwide • No credit card required
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
