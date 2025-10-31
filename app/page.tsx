"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Sparkles, Users, Globe, Code, Mail } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative flex min-h-screen md:min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 sm:px-8 md:mt-0 md:pt-0">
        {/* Mobile: Triller Media logo over video */}
        <a
          href="#home"
          className="md:hidden absolute top-4 left-4 sm:left-6 text-lg font-semibold tracking-tight text-foreground z-50 py-2 px-3 -mx-3 -my-2 touch-manipulation"
          aria-label="Triller Media Home"
        >
          Triller Media
        </a>

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        >
          <source src="/reel%201%20.mp4" type="video/mp4" />
        </video>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-background/50 md:bg-background/40" />

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[2.5rem] font-bold leading-tight tracking-tight sm:text-5xl md:text-7xl lg:text-8xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
            >
              <span className="block md:inline">We make{" "}
              <span className="text-[#5B9FFF] drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">brands</span></span>{" "}
              <span className="block md:inline">and{" "}
              <span className="text-[#5B9FFF] drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">creators</span>{" "}look</span>{" "}
              <span className="block md:inline">how they{" "}
              <span className="italic text-[#5B9FFF] drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]">deserve</span>.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
            >
              Triller Media builds personal brands, UGC content, and digital
              experiences that stand out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="group h-14 gap-2 rounded-full px-8 text-base"
              >
                <a href="#contact">
                  Work With Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto max-w-4xl px-6 py-12 md:py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Dubai, UAE</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Triller Media
            </h2>
          </div>

          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Triller Media exists to help brands and creators find their
              identity and presence through creativity and strategy. We believe
              that every brand and creator deserves to look as good as they are,
              and we make that happen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Based in Dubai, we focus on quality, originality, and design that
              speaks. Our approach blends strategic thinking with aesthetic
              excellence, creating work that stands out in an increasingly noisy
              digital landscape.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              We understand that your brand is more than a logo or website —
              it's your story, your voice, and your connection with your
              audience. That's why we craft every detail with intention,
              ensuring that what we create reflects who you are and where you're
              going.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="border-y border-border/40 bg-muted/20 py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Services
              </h2>
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
                    className="group relative rounded-lg border border-border/40 bg-card p-6 md:p-8 transition-all hover:border-border hover:shadow-lg"
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
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="border-y border-border/40 bg-muted/20 py-12 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Work
              </h2>
            </div>

            {/* Reel Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Reel 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-card"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src="/reel%201%20.mp4" type="video/mp4" />
                </video>
              </motion.div>

              {/* Reel 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative overflow-hidden rounded-lg bg-card"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src="/reel%202.mp4" type="video/mp4" />
                </video>
              </motion.div>

              {/* Reel 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative overflow-hidden rounded-lg bg-card"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                >
                  <source src="/reel%203.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-3xl px-6 py-12 md:py-24 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Let's build something that turns heads.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="h-14 rounded-lg border border-border/50 bg-muted/30 px-4 text-base transition-all placeholder:text-muted-foreground/60 focus:border-foreground/50 focus:bg-background focus-visible:ring-2 focus-visible:ring-foreground/20"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="h-14 rounded-lg border border-border/50 bg-muted/30 px-4 text-base transition-all placeholder:text-muted-foreground/60 focus:border-foreground/50 focus:bg-background focus-visible:ring-2 focus-visible:ring-foreground/20"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="min-h-[140px] resize-none rounded-lg border border-border/50 bg-muted/30 px-4 py-3 text-base transition-all placeholder:text-muted-foreground/60 focus:border-foreground/50 focus:bg-background focus-visible:ring-2 focus-visible:ring-foreground/20"
                />
              </div>

              <div className="flex justify-center md:justify-end pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className="group w-full md:w-auto h-14 gap-2 rounded-full px-8 text-base font-medium"
                >
                  Send Message
                  <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-muted-foreground"
          >
            <p>Based in Dubai, UAE</p>
            <p className="mt-2">
              We typically respond within 24-48 hours.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
