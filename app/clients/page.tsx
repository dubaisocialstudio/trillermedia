"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Triller Media transformed my brand identity completely. Their attention to detail and understanding of my vision was exceptional.",
    author: "Sarah Al-Mansoori",
    role: "Content Creator",
  },
  {
    quote:
      "Working with Triller Media was a game-changer. They didn't just design our website—they understood our brand and brought it to life.",
    author: "Ahmed Hassan",
    role: "Brand Founder",
  },
  {
    quote:
      "The UGC profile they created opened doors I didn't know existed. Professional, strategic, and beautifully executed.",
    author: "Leila Khoury",
    role: "Influencer",
  },
];

export default function Clients() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Clients & Partners
            </h1>
            <p className="text-lg text-muted-foreground">
              We're proud to work with brands and creators who value quality
              and authenticity.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6 rounded-lg border border-border/40 bg-card p-8"
              >
                <Quote className="h-8 w-8 text-accent" />
                <p className="text-lg leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Logos Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-16"
          >
            <div className="rounded-lg border border-border/40 bg-muted/20 p-12 text-center">
              <p className="text-muted-foreground">
                Client logos and partnerships will be displayed here.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

