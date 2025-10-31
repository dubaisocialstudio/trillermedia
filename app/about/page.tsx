"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Dubai, UAE</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              About Triller Media
            </h1>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Triller Media exists to help brands and creators find their
              identity and presence through creativity and strategy. We believe
              that every brand and creator deserves to look as good as they are,
              and we make that happen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Based in Dubai, we focus on quality, originality, and design that
              speaks. Our approach blends strategic thinking with aesthetic
              excellence, creating work that stands out in an increasingly noisy
              digital landscape.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We understand that your brand is more than a logo or website —
              it's your story, your voice, and your connection with your
              audience. That's why we craft every detail with intention,
              ensuring that what we create reflects who you are and where you're
              going.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-12"
          >
            <div className="rounded-lg border border-border/40 bg-muted/20 p-8">
              <p className="text-lg leading-relaxed italic text-foreground">
                "In a world where everyone is competing for attention, we help
                you stand out by being authentically you — refined,
                forward-thinking, and confident."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

