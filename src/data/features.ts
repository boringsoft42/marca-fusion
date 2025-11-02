import {
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Users,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "instant-deployment",
    icon: Zap,
    title: "Lightning-Fast Deployment",
    description:
      "Get your AI agents up and running in just 7 days. Our streamlined onboarding process ensures you start seeing results immediately without lengthy setup times.",
  },
  {
    id: "enterprise-security",
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards. Your data is protected with multi-layer security protocols and regular audits.",
  },
  {
    id: "scalable-growth",
    icon: TrendingUp,
    title: "Scale Effortlessly",
    description:
      "Handle 10 or 10,000 conversations simultaneously. Our infrastructure automatically scales to meet your business demands without performance degradation.",
  },
  {
    id: "always-available",
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Your AI agents never sleep. Provide round-the-clock support, lead qualification, and engagement across all time zones without additional staffing costs.",
  },
  {
    id: "team-collaboration",
    icon: Users,
    title: "Seamless Team Collaboration",
    description:
      "Built-in collaboration tools enable your entire team to manage, monitor, and optimize AI agents together with role-based permissions and shared insights.",
  },
  {
    id: "advanced-analytics",
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track performance metrics, conversion rates, and ROI with comprehensive dashboards. Make data-driven decisions with actionable insights at your fingertips.",
  },
];
