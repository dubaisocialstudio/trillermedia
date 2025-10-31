"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Globe, Code } from "lucide-react";

const services = [
  {
    title: "Personal Branding & UGC Content",
    description:
      "Tailored content strategies and creator support that define and elevate your unique identity. We craft narratives that resonate and content that engages.",
    icon: Sparkles,
    delay: 0.1,
  },
  {
    title: "UGC Profiles for Creators",
    description:
      "Profile building and presentation designed for collaborations. We showcase your work and personality in ways that brands and audiences connect with.",
    icon: Users,
    delay: 0.2,
  },
  {
    title: "Web Design",
    description:
      "Sleek, functional, and modern websites built to match your brand personality. Every pixel is intentional, every interaction meaningful.",
    icon: Globe,
    delay: 0.3,
  },
  {
    title: "Software Design",
    description:
      "Smart, user-focused digital tools and experiences. We design software that looks beautiful and works seamlessly, reflecting your brand at every touchpoint.",
    icon: Code,
    delay: 0.4,
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Services
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We offer comprehensive creative solutions designed to elevate your
              brand and presence in the digital world.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: service.delay }}
                  className="group relative rounded-lg border border-border/40 bg-card p-8 transition-all hover:border-border hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

