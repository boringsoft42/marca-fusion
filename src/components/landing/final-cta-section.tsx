"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { trackCTAClick } from "@/lib/analytics";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const benefits = [
  "Deploy in 7 days, not months",
  "No credit card required to start",
  "24/7 AI agents that never sleep",
  "Enterprise-grade security & compliance",
];

export function FinalCTASection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative py-20 sm:py-32 overflow-hidden"
      aria-label="Final call to action"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" aria-hidden="true" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-3xl" />
        </div>
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-purple-500/30 blur-3xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <BlurFade delay={0} duration={0.6}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-foreground">
                Start Your AI Automation Journey
              </span>
            </div>
          </BlurFade>

          {/* Headline */}
          <BlurFade delay={0.1} duration={0.6}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent leading-tight mb-6">
              Ready to Transform Your Business?
            </h2>
          </BlurFade>

          {/* Description */}
          <BlurFade delay={0.2} duration={0.6}>
            <p className="text-lg sm:text-xl leading-8 text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join 50,000+ companies automating their operations with AI. Deploy
              intelligent agents in 7 days and start seeing results immediately.
            </p>
          </BlurFade>

          {/* Benefits List */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-3 text-left"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-blue-500" aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base text-foreground font-medium">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, delay: 0.8 }}
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
            >
              <ShimmerButton
                className="px-8 py-4 text-base font-semibold shadow-2xl"
                shimmerColor="#60a5fa"
                shimmerSize="0.15em"
                background="linear-gradient(to right, #2563eb, #1d4ed8)"
                borderRadius="0.5rem"
              >
                <span className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </span>
              </ShimmerButton>
            </Link>

            <Link
              href="/contact"
              onClick={() => trackCTAClick({
                cta_location: "final_cta",
                cta_text: "Talk to Sales",
                cta_type: "secondary",
                destination_url: "/contact"
              })}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-foreground bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg hover:bg-white/20 transition-all hover:scale-105 shadow-lg"
            >
              Talk to Sales
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <BlurFade delay={1} duration={0.6}>
            <p className="mt-8 text-sm text-muted-foreground">
              Trusted by 50,000+ businesses worldwide • No credit card required
            </p>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
