import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Code,
  Award,
  Target,
  Zap,
  Brain,
} from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function About() {
  const highlights = [
    {
      icon: Code,
      value: 15,
      suffix: "+",
      label: "Projects Built",
      description: "AI, ML & full-stack systems",
    },
    {
      icon: Users,
      label: "Companies",
      description: "Wells Fargo, Deloitte, Infosys",
      displayValue: "3",
    },
    {
      icon: TrendingUp,
      value: 5,
      suffix: "+ yrs",
      label: "Experience",
      description: "AI & software engineering",
    },
    {
      icon: Award,
      label: "Certified",
      description: "AWS Cloud Practitioner",
      displayValue: "AWS",
    },
  ];

  const qualities = [
    {
      icon: Brain,
      title: "Agentic AI Systems",
      description:
        "Designing multi-agent pipelines, RAG architectures, and LLM workflows for enterprise production environments",
    },
    {
      icon: Target,
      title: "Business Impact Focused",
      description:
        "Every system I build is tied to measurable outcomes — cycle time, accuracy, throughput, and cost efficiency",
    },
    {
      icon: Zap,
      title: "End-to-End Delivery",
      description:
        "From architecture to deployment — I own the full lifecycle including CI/CD, monitoring, and optimization",
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
            Building Autonomous AI Systems <br className="hidden md:block" />
            That Drive Real Business Outcomes
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
                I'm an{" "}
                <strong className="font-semibold">Agentic AI Engineer</strong>{" "}
                with{" "}
                <strong className="font-semibold">
                  5+ years of experience
                </strong>{" "}
                designing and deploying production-grade autonomous AI systems
                across banking and enterprise consulting environments at{" "}
                <strong className="font-semibold">Wells Fargo</strong> and{" "}
                <strong className="font-semibold">Deloitte</strong>.
              </p>
              <p className="text-[17px] leading-[1.75] text-muted-foreground">
                I specialize in{" "}
                <strong className="font-semibold text-foreground">
                  multi-agent systems, RAG pipelines, and tool-integrated LLM
                  workflows
                </strong>{" "}
                using GPT-4, Claude, and Gemini. My work has improved decision
                accuracy by 17% and reduced operational cycle time by 18% in
                production environments.
              </p>
              <p className="text-[17px] leading-[1.75] text-muted-foreground">
                I translate complex business workflows into{" "}
                <strong className="font-semibold text-foreground">
                  scalable agentic solutions
                </strong>{" "}
                — from prompt engineering and evaluation frameworks to full
                deployment with CI/CD, monitoring, and drift detection.
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
              <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50">
                  <p className="font-semibold text-sm">Udaykiran Reddy Sama</p>
                  <p className="text-xs text-muted-foreground">
                    Agentic AI Engineer · Woburn, MA
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
