import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Code, Award, Target, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      value: 15,
      suffix: "+",
      label: "Projects Built",
      description: "Across frontend and backend systems",
    },
    {
      icon: Users,
      value: "Thousands",
      label: "Users Impacted",
      description: "Through production applications",
    },
    {
      icon: TrendingUp,
      value: 4,
      suffix: " Years",
      label: "Industry Experience",
      description: "As a full stack developer",
    },
    {
      icon: Award,
      value: 99.9,
      suffix: "%",
      label: "Reliability",
      description: "Maintained across key services",
    },
  ];

  const qualities = [
    {
      icon: Target,
      title: "Product-Focused",
      description:
        "Focus on building features that solve real user and business problems",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work closely with designers, engineers, and stakeholders to deliver features",
    },
    {
      icon: Zap,
      title: "Efficient Execution",
      description:
        "Deliver high-quality code efficiently while following best practices",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <div className="flex items-center gap-4 mb-8">
            <div className="text-sm text-black-600 uppercase tracking-wider">
              About Me
            </div>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <h2 className="text-4xl md:text-5xl mb-16 tracking-tight leading-tight text-left">
            Building Reliable, Scalable Applications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary" />

              <div className="space-y-6">
                <p className="text-[17px] leading-[1.7] text-left text-foreground max-w-[640px]">
                  I'm a{" "}
                  <strong className="font-semibold text-foreground">
                    Full Stack Developer
                  </strong>{" "}
                  with{" "}
                  <strong className="font-semibold text-foreground">
                    nearly 4 years of experience
                  </strong>{" "}
                  building and maintaining production web applications. I’ve
                  worked across frontend and backend systems, contributing to
                  features used by real users in live environments.
                </p>

                <p className="text-[17px] leading-[1.7] text-left text-muted-foreground max-w-[640px]">
                  My experience includes developing APIs, integrating databases,
                  improving performance, and collaborating with cross-functional
                  teams. I focus on writing{" "}
                  <strong className="font-semibold text-foreground">
                    clean, maintainable code
                  </strong>{" "}
                  that scales as product requirements evolve.
                </p>

                <p className="text-[17px] leading-[1.7] text-left text-muted-foreground max-w-[640px]">
                  I enjoy working on{" "}
                  <strong className="font-semibold text-foreground">
                    full-stack challenges
                  </strong>{" "}
                  — from crafting intuitive user interfaces to implementing
                  backend logic and integrating cloud services. I’m continuously
                  improving my skills in system design, performance
                  optimization, and modern development practices.
                </p>
              </div>
            </div>

            {/* Key Qualities */}
            <div className="grid gap-4 pt-6">
              {qualities.map((quality, index) => {
                const Icon = quality.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 border border-border bg-background"
                  >
                    <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="mb-1 font-medium text-left">
                        {quality.title}
                      </h4>
                      <p className="text-[15px] leading-[1.6] text-muted-foreground text-left">
                        {quality.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="aspect-[4/5] overflow-hidden border-2 border-border bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Image Placeholder</span>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "hsl(var(--foreground))",
                    }}
                    className="p-5 border-2 border-border bg-background hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Icon className="h-5 w-5 mb-3 text-primary" />
                    <div className="text-2xl mb-1 font-semibold text-left">
                      {item.prefix || ""}
                      {item.value}
                      {item.suffix || ""}
                    </div>
                    <div className="text-[11px] text-muted-foreground uppercase tracking-widest text-left">
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
