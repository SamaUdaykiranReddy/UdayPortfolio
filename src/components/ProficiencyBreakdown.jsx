"use client";

import { motion } from "framer-motion";

export function ProficiencyBreakdown({ skills }) {
  return (
    <div className="space-y-5 max-w-md w-full">
      <h3 className="text-xl font-semibold tracking-tight">
        Proficiency Breakdown
      </h3>
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm font-medium text-primary">
              {skill.level}%
            </span>
          </div>
          <div className="h-2.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="h-full bg-primary rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
