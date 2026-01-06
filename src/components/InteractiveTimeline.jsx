import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { Badge } from "./ui/Badge";

export function InteractiveTimeline({ experiences }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:left-8" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const isSelected = selectedIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(index)}
              className="relative pl-8 md:pl-20 cursor-pointer"
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-[-4px] md:left-[28px] top-0 w-3 h-3 rounded-full border-2 bg-background z-10"
                animate={{
                  borderColor:
                    isSelected || isHovered
                      ? "hsl(var(--foreground))"
                      : "hsl(var(--border))",
                  scale: isSelected || isHovered ? 1.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content Card */}
              <motion.div
                className="border-2 border-border bg-background p-6 md:p-8"
                animate={{
                  borderColor: isSelected
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--border))",
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <h4 className="text-xl mb-1.5">{exp.title}</h4>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
                      <span className="font-medium text-foreground">
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                    <Briefcase className="h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements - Expandable */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isSelected ? "auto" : 0,
                    opacity: isSelected ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2.5 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: isSelected ? 1 : 0,
                          x: isSelected ? 0 : -20,
                        }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                    >
                      <Badge variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Expand Indicator */}
                {!isSelected && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-xs text-muted-foreground flex items-center gap-1"
                  >
                    Click to expand <ChevronRight className="h-3 w-3" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
