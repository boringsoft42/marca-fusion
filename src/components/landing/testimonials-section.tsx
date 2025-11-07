"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials } from "@/data/testimonials";
import { trackTestimonialNavigation } from "@/lib/analytics";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    const newIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(newIndex);
    trackTestimonialNavigation("next", newIndex);
  }, [currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, handleNext]);

  const handlePrev = () => {
    setDirection(-1);
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(newIndex);
    trackTestimonialNavigation("previous", newIndex);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    trackTestimonialNavigation("dot", index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section
      className="relative py-16 md:py-20 lg:py-24 bg-white"
      aria-label="Customer testimonials"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        {/* Trust Indicators Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-3xl bg-[#0d6832]/10 border border-[#0d6832]/20 mb-6">
              <Star className="w-4 h-4 text-[#0d6832] fill-[#0d6832]" strokeWidth={1.5} />
              <span className="text-sm font-medium text-[#1a1a1a]">
                Trusted by 50,000+ Businesses
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
              Loved by Teams Worldwide
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mt-6 text-[15px] leading-relaxed text-[#6b6b6b]">
              See how businesses like yours are transforming their operations
              with AI automation.
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full w-12 h-12 bg-white border border-[#e0e0e0] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full w-12 h-12 bg-white border border-[#e0e0e0] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:scale-110 transition-all duration-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-[#1a1a1a]" strokeWidth={1.5} />
          </button>

          {/* Testimonial Cards */}
          <div className="relative overflow-hidden min-h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrev();
                  }
                }}
                className="w-full"
              >
                <Card className="border border-[#e0e0e0] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-2xl">
                  <CardContent className="p-8 sm:p-12">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="p-3 rounded-full bg-[#0d6832]/10">
                        <Quote className="w-8 h-8 text-[#0d6832]" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div
                      className="flex justify-center gap-1 mb-6"
                      role="img"
                      aria-label={`${testimonials[currentIndex].rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonials[currentIndex].rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-[#e0e0e0]"
                          }`}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-center mb-8">
                      <p className="text-lg sm:text-xl leading-relaxed text-[#1a1a1a] font-normal">
                        &ldquo;{testimonials[currentIndex].content}&rdquo;
                      </p>
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="w-16 h-16 border-2 border-[#0d6832]/20">
                        <AvatarFallback className="text-lg font-medium bg-[#0d6832]/10 text-[#0d6832]">
                          {testimonials[currentIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="text-center">
                        <p className="font-medium text-[#1a1a1a]">
                          {testimonials[currentIndex].name}
                        </p>
                        <p className="text-sm text-[#6b6b6b]">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-sm text-[#0d6832] font-medium">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div
            className="flex justify-center gap-2 mt-8"
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#0d6832]"
                    : "w-2 bg-[#e0e0e0] hover:bg-[#6b6b6b]/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row Below Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl font-normal text-[#1a1a1a] mb-2">4.9/5</div>
              <p className="text-sm text-[#6b6b6b]">
                Average Customer Rating
              </p>
            </div>
            <div>
              <div className="text-4xl font-normal text-[#1a1a1a] mb-2">50K+</div>
              <p className="text-sm text-[#6b6b6b]">
                Active Business Users
              </p>
            </div>
            <div>
              <div className="text-4xl font-normal text-[#1a1a1a] mb-2">98%</div>
              <p className="text-sm text-[#6b6b6b]">
                Customer Satisfaction
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
