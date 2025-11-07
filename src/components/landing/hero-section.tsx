"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackCTAClick, trackUseCaseSelection } from "@/lib/analytics";
import {
  UserCheck,
  Calendar,
  CheckCircle2,
  HeadphonesIcon,
  Bell,
  DollarSign,
  ArrowRight,
} from "lucide-react";

const useCases = [
  {
    id: "lead-qualification",
    label: "Lead Qualification",
    icon: UserCheck,
    description: "Automatically qualify and score incoming leads",
  },
  {
    id: "schedule-meetings",
    label: "Schedule Meetings",
    icon: Calendar,
    description: "Book meetings automatically with qualified prospects",
  },
  {
    id: "meeting-confirmation",
    label: "Meeting Confirmation",
    icon: CheckCircle2,
    description: "Confirm and remind attendees about scheduled meetings",
  },
  {
    id: "customer-support",
    label: "Customer Support",
    icon: HeadphonesIcon,
    description: "Provide 24/7 automated customer support",
  },
  {
    id: "send-reminders",
    label: "Send Reminders",
    icon: Bell,
    description: "Automate reminder calls and messages",
  },
  {
    id: "debt-collection",
    label: "Debt Collection",
    icon: DollarSign,
    description: "Handle payment reminders professionally",
  },
];

export function HeroSection() {
  const [selectedUseCase, setSelectedUseCase] = useState(useCases[0]);

  return (
    <section
      className="relative overflow-hidden bg-white py-16 md:py-20 lg:py-24"
      aria-label="Hero section"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Headline with BlurFade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[48px] font-normal text-[#1a1a1a] leading-tight">
              Transform Your Business with AI Automation
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mt-6 text-[15px] leading-relaxed text-[#6b6b6b] max-w-3xl mx-auto">
              Empower your sales, marketing, and operations teams with intelligent AI agents that work 24/7. Deploy in 7 days, scale effortlessly, trusted by 50,000+ companies worldwide.
            </p>
          </motion.div>

          {/* CTAs with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6"
          >
            <Link
              href="/sign-up"
              onClick={() => trackCTAClick({
                cta_location: "hero",
                cta_text: "Start for Free",
                cta_type: "primary",
                destination_url: "/sign-up"
              })}
              className="inline-flex items-center gap-2 bg-[#0d6832] text-white px-7 py-3 rounded-3xl text-[15px] font-medium hover:bg-[#0a5528] transition-colors duration-200"
            >
              Start for Free
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>

            <Link
              href="/contact"
              onClick={() => trackCTAClick({
                cta_location: "hero",
                cta_text: "Book a Demo",
                cta_type: "secondary",
                destination_url: "/contact"
              })}
              className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] px-7 py-3 rounded-3xl text-[15px] font-medium border-2 border-[#e0e0e0] hover:bg-[#ebe8e3] transition-colors duration-200"
            >
              Book a Demo
            </Link>
          </motion.div>

          {/* Hero Visual/Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mt-16 relative">
              <div className="relative rounded-2xl border border-[#e0e0e0] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="aspect-video w-full rounded-lg bg-[#ebe8e3] flex items-center justify-center">
                  {/* Placeholder for product screenshot */}
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#0d6832]/20 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#0d6832]/40 animate-pulse" />
                    </div>
                    <p className="text-sm text-[#6b6b6b]">Product Demo Visual</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Case Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
            role="region"
            aria-label="Use case selector"
          >
            <p
              id="use-case-label"
              className="text-sm font-medium text-[#6b6b6b] mb-6 tracking-wider"
            >
              SELECT YOUR USE CASE
            </p>

            <div
              className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6"
              role="group"
              aria-labelledby="use-case-label"
            >
              {useCases.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <motion.button
                    key={useCase.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + idx * 0.05 }}
                    onClick={() => {
                      setSelectedUseCase(useCase);
                      trackUseCaseSelection(useCase.label);
                    }}
                    aria-pressed={selectedUseCase.id === useCase.id}
                    aria-label={`${useCase.label}: ${useCase.description}`}
                    className={`group relative rounded-2xl border-2 p-4 text-left transition-all duration-300 hover:scale-105 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] focus:outline-none focus:ring-2 focus:ring-[#0d6832] focus:ring-offset-2 ${
                      selectedUseCase.id === useCase.id
                        ? "border-[#0d6832] bg-[#0d6832]/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                        : "border-[#e0e0e0] bg-white hover:bg-[#ebe8e3]"
                    }`}
                  >
                    <Icon
                      className={`h-8 w-8 mb-2 transition-all duration-300 ${
                        selectedUseCase.id === useCase.id
                          ? "text-[#0d6832] scale-110"
                          : "text-[#6b6b6b] group-hover:text-[#0d6832] group-hover:scale-110"
                      }`}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <p
                      className={`text-xs sm:text-sm font-medium transition-colors ${
                        selectedUseCase.id === useCase.id
                          ? "text-[#1a1a1a]"
                          : "text-[#6b6b6b] group-hover:text-[#1a1a1a]"
                      }`}
                    >
                      {useCase.label}
                    </p>
                  </motion.button>
                );
              })}
            </div>

            {/* Selected Use Case Description */}
            <motion.div
              key={selectedUseCase.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
              className="mt-8 rounded-2xl border border-[#e0e0e0] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              role="status"
              aria-live="polite"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#0d6832]/10" aria-hidden="true">
                  <selectedUseCase.icon className="h-6 w-6 text-[#0d6832]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-[#1a1a1a]">{selectedUseCase.label}</h3>
              </div>
              <p className="text-[#6b6b6b] text-[15px] leading-relaxed">{selectedUseCase.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
