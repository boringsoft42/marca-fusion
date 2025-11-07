"use client";

import { motion } from "framer-motion";
import {
  Clock,
  RefreshCw,
  MessageCircle,
  Filter,
  CalendarCheck,
  Globe2,
  Zap,
  Shield,
} from "lucide-react";

const capabilities = [
  {
    icon: Clock,
    title: "24/7 AI Availability",
    description:
      "Your AI agents never sleep. Handle inquiries, qualify leads, and book meetings around the clock.",
  },
  {
    icon: RefreshCw,
    title: "Real-time CRM Sync",
    description:
      "Automatically update your CRM with every interaction. Keep your data fresh and accurate.",
  },
  {
    icon: MessageCircle,
    title: "Natural Conversations",
    description:
      "Advanced AI that understands context, nuance, and intent. Sounds human, works like magic.",
  },
  {
    icon: Filter,
    title: "Auto Lead Qualification",
    description:
      "Intelligent scoring and routing. Focus your team on the hottest opportunities.",
  },
  {
    icon: CalendarCheck,
    title: "Calendar Integration",
    description:
      "Seamlessly schedule meetings across Google, Outlook, and more. Eliminate back-and-forth.",
  },
  {
    icon: Globe2,
    title: "Multi-language Support",
    description:
      "Communicate with prospects in their language. Support for 50+ languages globally.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description:
      "From signup to first automation in under 30 minutes. No dev team required.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with enterprise-grade encryption. Your data is always protected.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[48px] font-normal text-[#1a1a1a]">
              Platform Capabilities
            </h2>
            <p className="mt-4 text-[15px] text-[#6b6b6b] leading-relaxed">
              Everything you need to automate your business processes with AI
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white p-6 hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  <Icon className="h-10 w-10 text-[#0d6832] mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-medium mb-2 text-[#1a1a1a]">{capability.title}</h3>
                  <p className="text-[15px] text-[#6b6b6b] leading-relaxed">
                    {capability.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
