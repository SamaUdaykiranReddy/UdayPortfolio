"use client";

import { motion } from "framer-motion";

export function ProficiencyBreakdown({ skills }) {
  return (
    <div className="space-y-6 w-full">
      <h3 className="text-xl font-semibold tracking-tight">
        Proficiency Breakdown
      </h3>
      {skills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          {/* Skill name + percentage */}
          <div className="flex justify-between items-center">
            <span className="font-medium text-sm">{skill.name}</span>
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {skill.level}%
            </span>
          </div>

          {/* Full 100% track with blue fill */}
          <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
            {/* Blue progress bar */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="h-full bg-blue-600 rounded-full"
            />
          </div>

          {/* Scale markers 0 - 25 - 50 - 75 - 100 */}
          <div className="flex justify-between text-[10px] text-muted-foreground px-0.5">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
        </div>
      ))}
    </div>
  );
}
