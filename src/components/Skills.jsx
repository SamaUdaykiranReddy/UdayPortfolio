"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/Accordion";
import { AnimatedCounter } from "./AnimatedCounter";

export function Skills() {
  const skillCategories = [
    {
      id: "languages",
      title: "Languages & Frameworks",
      icon: "💻",
      skills: [
        {
          name: "JavaScript",
          level: 90,
          years: "4 years",
          projects: 20,
        },
        {
          name: "React",
          level: 90,
          years: "4 years",
          projects: 18,
        },
        {
          name: "HTML / CSS / Tailwind",
          level: 95,
          years: "4 years",
          projects: 25,
        },
        {
          name: "Node.js / Express",
          level: 80,
          years: "3 years",
          projects: 10,
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: "🔌",
      skills: [
        {
          name: "REST API Design",
          level: 85,
          years: "3 years",
          projects: 12,
        },
        {
          name: "Authentication (JWT / OAuth)",
          level: 80,
          years: "3 years",
          projects: 8,
        },
        {
          name: "Server-side Rendering (Next.js)",
          level: 85,
          years: "3 years",
          projects: 10,
        },
      ],
    },
    {
      id: "databases",
      title: "Databases",
      icon: "🗄️",
      skills: [
        {
          name: "PostgreSQL",
          level: 80,
          years: "3 years",
          projects: 8,
        },
        {
          name: "MongoDB",
          level: 80,
          years: "3 years",
          projects: 7,
        },
        {
          name: "SQL (General)",
          level: 75,
          years: "3 years",
          projects: 6,
        },
      ],
    },
  ];

  const tools = ["Git", "GitHub", "VS Code", "Postman", "AWS", "Figma","Vercel", "Firebase"];

  return (
    <section id="skills" className="py-24 bg-muted/20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground">
            Proficiency levels with real-world experience and project impact
          </p>
        </motion.div>

        {/* Skill Categories */}
        <Accordion type="single" collapsible className="space-y-4 mb-16">
          {skillCategories.map((category) => (
            <AccordionItem
              key={category.id}
              value={category.id}
              className="rounded-xl border border-border bg-background/70 px-6"
            >
              <AccordionTrigger className="py-6 text-lg font-medium flex items-center gap-3">
                <span>{category.icon}</span>
                {category.title}
              </AccordionTrigger>

              <AccordionContent className="pb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3"
                    >
                      {/* Skill Header */}
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm font-medium text-primary">
                          <AnimatedCounter
                            end={skill.level}
                            suffix="%"
                            start={true}
                          />
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-blue-600 rounded-full"
                        />
                      </div>

                      {/* Meta */}
                      <div className="text-xs text-muted-foreground">
                        {skill.years} experience • {skill.projects} projects
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Tools */}
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl mb-6 font-medium tracking-tight text-center ">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
              >
                <Badge
                  variant="outline"
                  className="
    px-4 py-2
    rounded-xl
    hover:bg-gray-800
    hover:text-white
    transition-colors
  "
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
