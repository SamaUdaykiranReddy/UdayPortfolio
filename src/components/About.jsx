import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Code, Award, Target, Zap } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function About() {
  const highlights = [
    {
      icon: Code,
      value: 15,
      suffix: "+",
      label: "Projects Built",
      description: "Across frontend & backend",
    },
    {
      icon: Users,
      label: "Users Impacted",
      description: "Through production apps",
      displayValue: "1000s",
    },
    {
      icon: TrendingUp,
      value: 4,
      suffix: " yrs",
      label: "Experience",
      description: "Full stack development",
    },
    {
      icon: Award,
      value: 99.9,
      suffix: "%",
      label: "Reliability",
      description: "Across key services",
    },
  ];

  const qualities = [
    {
      icon: Target,
      title: "Product-Focused",
      description: "Building features that solve real user and business problems",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working with designers, engineers, and stakeholders to ship",
    },
    {
      icon: Zap,
      title: "Efficient Execution",
      description: "Delivering high-quality code that scales as requirements evolve",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-primary uppercase tracking-wider font-medium">
              About Me
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight leading-tight">
            Building Reliable, Scalable Applications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto mb-20">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative pl-5 border-l-2 border-primary space-y-5">
              <p className="text-[17px] leading-[1.75] text-foreground">
                I'm a{" "}
                <strong className="font-semibold">Full Stack Developer</strong>{" "}
                with{" "}
                <strong className="font-semibold">4 years of experience</strong>{" "}
                building production web applications. I've worked across frontend
                and backend systems, contributing to features used by real users
                in live environments.
              </p>
              <p className="text-[17px] leading-[1.75] text-muted-foreground">
                My experience spans REST API design, database integration,
                performance improvements, and cross-functional collaboration. I
                write{" "}
                <strong className="font-semibold text-foreground">
                  clean, maintainable code
                </strong>{" "}
                that scales as product requirements grow.
              </p>
              <p className="text-[17px] leading-[1.75] text-muted-foreground">
                I enjoy{" "}
                <strong className="font-semibold text-foreground">
                  full-stack challenges
                </strong>{" "}
                — from crafting intuitive UIs to building backend logic and
                integrating cloud services. I'm continuously improving in system
                design, performance optimization, and modern dev practices.
              </p>
            </div>

            {/* Key qualities */}
            <div className="grid gap-3 pt-4">
              {qualities.map((quality, index) => {
                const Icon = quality.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 border border-border rounded-xl bg-background hover:bg-muted/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-0.5">{quality.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {quality.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Photo + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Photo */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border border-border group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/UdaySama.jpeg"
                alt="Udaykiran Reddy Sama"
                className="w-full aspect-[4/5] object-cover object-top transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
              />

              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Name tag */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50">
                  <p className="font-semibold text-sm">Udaykiran Reddy Sama</p>
                  <p className="text-xs text-muted-foreground">
                    Full Stack Developer · Boston, MA
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="p-5 border border-border rounded-xl bg-background hover:border-primary/30 hover:shadow-sm transition-all cursor-default"
                  >
                    <Icon className="h-4 w-4 mb-2.5 text-primary" />
                    <div className="text-2xl font-semibold mb-0.5">
                      {item.displayValue ? (
                        item.displayValue
                      ) : (
                        <AnimatedCounter
                          end={item.value}
                          suffix={item.suffix || ""}
                          start={true}
                        />
                      )}
                    </div>
                    <div className="text-[11px] text-muted-foreground uppercase tracking-widest">
                      {item.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}