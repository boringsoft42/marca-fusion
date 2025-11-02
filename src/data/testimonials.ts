export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechCorp Solutions",
    content:
      "The AI agents transformed our lead qualification process. We're now reaching 3x more qualified prospects with the same team size. The 7-day deployment was exactly as promised.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthMetrics Inc",
    content:
      "Implementation was seamless and the ROI was immediate. Our customer support costs dropped by 40% while satisfaction scores increased. This platform pays for itself within weeks.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    role: "Director of Operations",
    company: "StreamFlow Systems",
    content:
      "The 24/7 availability has been a game-changer for our global operations. No more timezone headaches, and our conversion rates improved by 65% across all regions.",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "David Park",
    role: "Head of Marketing",
    company: "Innovate Digital",
    content:
      "We've automated our entire meeting scheduling workflow. What used to take hours of back-and-forth now happens instantly. Our team can focus on high-value activities.",
    rating: 5,
  },
  {
    id: "testimonial-5",
    name: "Jessica Williams",
    role: "Customer Success Manager",
    company: "CloudScale Partners",
    content:
      "The analytics dashboard gives us insights we never had before. We can optimize our AI agents in real-time and see the impact immediately. Absolutely worth the investment.",
    rating: 5,
  },
  {
    id: "testimonial-6",
    name: "Robert Martinez",
    role: "CTO",
    company: "DataDriven Labs",
    content:
      "Security was our top concern, and this platform exceeded expectations. Enterprise-grade protection with seamless integration. Our compliance team was impressed.",
    rating: 5,
  },
];
