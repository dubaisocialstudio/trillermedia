"use client";

import { motion } from "framer-motion";

// Placeholder projects - replace with actual portfolio items
const projects = [
  {
    title: "Brand Identity & Web Presence",
    category: "Personal Branding",
    description:
      "Complete brand identity and web design for a Dubai-based creator, establishing a distinctive visual language and online presence.",
  },
  {
    title: "UGC Creator Portfolio",
    category: "UGC & Content",
    description:
      "Developed a comprehensive creator profile and content strategy that increased collaboration opportunities by 300%.",
  },
  {
    title: "Luxury Brand Website",
    category: "Web Design",
    description:
      "Designed and built a minimal, high-end website for a luxury brand, reflecting elegance and sophistication through every interaction.",
  },
  {
    title: "Creator Collaboration Platform",
    category: "Software Design",
    description:
      "Designed a streamlined platform connecting brands with creators, focusing on user experience and visual clarity.",
  },
];

export default function Work() {
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
              Work
            </h1>
            <p className="text-lg text-muted-foreground">
              Showcasing successful projects, collaborations, and design work.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border border-border/40 bg-card"
              >
                <div className="aspect-[4/3] bg-muted/20" />
                <div className="border-t border-border/40 p-6">
                  <div className="mb-2 text-sm font-medium text-muted-foreground">
                    {project.category}
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-8 text-center text-muted-foreground"
          >
            <p>More work coming soon.</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

