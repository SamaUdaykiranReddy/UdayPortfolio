import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function TechStackComparison() {
  const stacks = [
    {
      category: "Frontend",
      technologies: [
        {
          name: "React",
          proficient: true,
          experience: "4 years",
          projects: 18,
        },
        {
          name: "HTML / CSS / Tailwind",
          proficient: true,
          experience: "4 years",
          projects: 25,
        },
        {
          name: "JavaScript",
          proficient: true,
          experience: "3 years",
          projects: 10,
        },
      ],
    },
    {
      category: "Backend",
      technologies: [
        {
          name: "Node.js / Express",
          proficient: true,
          experience: "4 years",
          projects: 10,
        },
        {
          name: "REST APIs",
          proficient: true,
          experience: "3 years",
          projects: 12,
        },
      ],
    },
    {
      category: "Databases",
      technologies: [
        {
          name: "PostgreSQL",
          proficient: true,
          experience: "3 years",
          projects: 8,
        },
        {
          name: "MongoDB",
          proficient: true,
          experience: "3 years",
          projects: 7,
        },
      ],
    },
    {
      category: "Tools & Platforms",
      technologies: [
        {
          name: "Git / GitHub",
          proficient: true,
          experience: "4 years",
          projects: 20,
        },
        {
          name: "VS Code",
          proficient: true,
          experience: "4 years",
          projects: 20,
        },
        {
          name: "Postman",
          proficient: true,
          experience: "3 years",
          projects: 10,
        },
        { name: "AWS", proficient: true, experience: "2 years", projects: 5 },
        { name: "Figma", proficient: true, experience: "2 years", projects: 5 },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {stacks.map((stack, stackIndex) => (
        <motion.div
          key={stackIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
        >
          <h3 className="text-xl mb-4 flex items-center gap-3">
            <div className="h-1 w-8 bg-primary" />
            {stack.category}
          </h3>

          <div className="border-2 border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-muted/30 border-b border-border text-sm font-medium">
              <div>Technology</div>
              <div className="text-center">Proficiency</div>
              <div className="text-center">Experience</div>
              <div className="text-center">Projects</div>
            </div>

            {/* Table Rows */}
            {stack.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                className="grid grid-cols-4 gap-4 p-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
              >
                <div className="font-medium">{tech.name}</div>
                <div className="flex justify-center">
                  {tech.proficient ? (
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                      <X className="h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  {tech.experience}
                </div>
                <div className="text-center">
                  {tech.projects > 0 ? (
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech.projects}
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-sm">-</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
