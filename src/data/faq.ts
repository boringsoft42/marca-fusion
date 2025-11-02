export interface FAQ {
  id: string;
  category: "product" | "pricing" | "support" | "technical";
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    category: "product",
    question: "How quickly can I deploy AI agents?",
    answer:
      "Our platform enables deployment in just 7 days from start to finish. This includes initial setup, agent configuration, testing, and integration with your existing systems. We provide guided onboarding and dedicated support to ensure a smooth, rapid deployment process.",
  },
  {
    id: "faq-2",
    category: "product",
    question: "What types of tasks can AI agents handle?",
    answer:
      "Our AI agents excel at lead qualification, meeting scheduling, customer support, follow-up communications, payment reminders, and more. They can handle complex conversations, qualify prospects based on your criteria, book meetings directly into calendars, and provide 24/7 support across all channels.",
  },
  {
    id: "faq-3",
    category: "pricing",
    question: "How does pricing work?",
    answer:
      "We offer flexible pricing based on your usage and team size. Plans start with pay-as-you-go options for small teams and scale to enterprise packages with custom pricing. All plans include core features, with advanced analytics, priority support, and custom integrations available on higher tiers. Contact our sales team for detailed pricing.",
  },
  {
    id: "faq-4",
    category: "pricing",
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. During the trial, you'll get hands-on support from our team to help you configure your AI agents and see real results. After the trial, you can choose the plan that best fits your needs.",
  },
  {
    id: "faq-5",
    category: "technical",
    question: "How secure is my data?",
    answer:
      "Security is our top priority. We employ bank-level encryption (AES-256), maintain SOC 2 Type II certification, and comply with GDPR, HIPAA, and other major regulatory frameworks. All data is encrypted in transit and at rest. We conduct regular security audits and penetration testing to ensure your data remains protected.",
  },
  {
    id: "faq-6",
    category: "technical",
    question: "What integrations are supported?",
    answer:
      "We integrate seamlessly with major CRM systems (Salesforce, HubSpot), calendar platforms (Google Calendar, Outlook), communication tools (Slack, Teams), and countless other applications via our API. Custom integrations can be built for enterprise customers. Our team provides integration support during onboarding.",
  },
  {
    id: "faq-7",
    category: "support",
    question: "What kind of support do you provide?",
    answer:
      "All customers receive email support with 24-hour response times. Higher-tier plans include priority support, dedicated account managers, and 24/7 phone support. We also provide comprehensive documentation, video tutorials, and a knowledge base. During onboarding, you'll work directly with our team to ensure successful deployment.",
  },
  {
    id: "faq-8",
    category: "support",
    question: "Can I customize the AI agents' behavior?",
    answer:
      "Absolutely! Our platform allows extensive customization of AI agent behavior, conversation flows, qualification criteria, and responses. You can define custom scripts, set specific triggers, configure escalation paths, and tailor the agent's personality to match your brand voice. No coding required for most customizations.",
  },
];

// Helper function to get FAQs by category
export function getFAQsByCategory(category: FAQ["category"]): FAQ[] {
  return faqs.filter((faq) => faq.category === category);
}

// Get all unique categories
export const faqCategories: FAQ["category"][] = [
  "product",
  "pricing",
  "technical",
  "support",
];
