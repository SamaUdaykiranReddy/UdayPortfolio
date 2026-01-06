"use client";

import { motion } from "framer-motion";

export function ProficiencyBreakdown({ skills }) {
  return (
    <div className="space-y-5 max-w-md">
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
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full bg-blue-600 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
