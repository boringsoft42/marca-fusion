"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { trackFAQExpansion } from "@/lib/analytics";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string>("");
  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 bg-white"
      aria-label="Frequently asked questions"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-[#0d6832]/10 border border-[#0d6832]/20 mb-6">
              <HelpCircle className="w-4 h-4 text-[#0d6832]" strokeWidth={1.5} />
              <span className="text-sm font-medium text-[#1a1a1a]">
                Got Questions?
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-[48px] font-normal text-[#1a1a1a]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mt-6 text-[15px] leading-relaxed text-[#6b6b6b]">
              Everything you need to know about deploying AI agents for your
              business. Can&apos;t find an answer? Contact our support team.
            </p>
          </motion.div>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            value={openItem}
            onValueChange={(value) => {
              const faq = faqs.find((f) => f.id === value);
              if (faq) {
                trackFAQExpansion(faq.question, value !== "");
              }
              setOpenItem(value);
            }}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
              >
                <AccordionItem
                  value={faq.id}
                  className="border border-[#e0e0e0] rounded-2xl px-6 bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium text-base sm:text-xl pr-4 text-[#1a1a1a]">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6b6b6b] text-[15px] leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="mt-16 text-center">
            <p className="text-[15px] text-[#6b6b6b] mb-4">
              Still have questions?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 text-[15px] font-medium text-white bg-[#0d6832] rounded-3xl hover:bg-[#0a5528] transition-colors duration-200"
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
