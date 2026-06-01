"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function SkillsRadar({ skills }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const centerX = 150;
  const centerY = 150;
  const radius = 100;
  const levels = 5;

  const getPolygonPoints = (values) =>
    values
      .map((value, i) => {
        const angle = (Math.PI * 2 * i) / values.length - Math.PI / 2;
        const r = (value / 100) * radius;
        return `${centerX + r * Math.cos(angle)},${centerY + r * Math.sin(angle)}`;
      })
      .join(" ");

  const getAxisPoints = (index) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  };

  const getDataPoint = (index) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
    const r = (skills[index].level / 100) * radius;
    return {
      x: centerX + r * Math.cos(angle),
      y: centerY + r * Math.sin(angle),
    };
  };

  const getLabelPoint = (index) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
    return {
      x: centerX + (radius + 28) * Math.cos(angle),
      y: centerY + (radius + 28) * Math.sin(angle),
    };
  };

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto select-none">
      <svg viewBox="0 0 300 300" className="w-full h-full overflow-visible">
        {/* Background circles */}
        {[...Array(levels)].map((_, i) => (
          <circle
            key={i}
            cx={centerX}
            cy={centerY}
            r={(radius / levels) * (i + 1)}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="0.8"
            opacity={0.6}
          />
        ))}

        {/* Axes */}
        {skills.map((_, i) => {
          const p = getAxisPoints(i);
          return (
            <line
              key={i}
              x1={centerX}
              y1={centerY}
              x2={p.x}
              y2={p.y}
              stroke="hsl(var(--border))"
              strokeWidth="0.8"
              opacity={0.6}
            />
          );
        })}

        {/* Data polygon */}
        <motion.polygon
          points={getPolygonPoints(skills.map((s) => s.level))}
          fill="hsl(var(--primary))"
          fillOpacity={hoveredIndex !== null ? 0.05 : 0.15}
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeOpacity={hoveredIndex !== null ? 0.3 : 1}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: `${centerX}px ${centerY}px` }}
        />

        {/* Data points + hover zones */}
        {skills.map((skill, i) => {
          const pt = getDataPoint(i);
          const lp = getLabelPoint(i);
          const isHovered = hoveredIndex === i;
          const isOther = hoveredIndex !== null && hoveredIndex !== i;

          return (
            <g key={i}>
              {/* Invisible large hit area */}
              <circle
                cx={pt.x}
                cy={pt.y}
                r={18}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              />

              {/* Visible dot */}
              <motion.circle
                cx={pt.x}
                cy={pt.y}
                r={isHovered ? 7 : 4}
                fill={
                  isHovered
                    ? "hsl(var(--primary))"
                    : "hsl(var(--primary) / 0.6)"
                }
                opacity={isOther ? 0.15 : 1}
                animate={{
                  r: isHovered ? 7 : 4,
                  opacity: isOther ? 0.15 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none"
              />

              {/* Glow ring on hover */}
              {isHovered && (
                <motion.circle
                  cx={pt.x}
                  cy={pt.y}
                  r={12}
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="1.5"
                  strokeOpacity={0.4}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-none"
                />
              )}

              {/* Label */}
              <motion.text
                x={lp.x}
                y={lp.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                animate={{
                  opacity: isOther ? 0.2 : 1,
                  fontWeight: isHovered ? 700 : 400,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  fill: isHovered
                    ? "hsl(var(--foreground))"
                    : "hsl(var(--muted-foreground))",
                  fontWeight: isHovered ? 700 : 400,
                  pointerEvents: "none",
                }}
              >
                {skill.name}
              </motion.text>
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            key={hoveredIndex}
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded-xl text-sm shadow-lg font-medium pointer-events-none whitespace-nowrap"
          >
            {skills[hoveredIndex].name}: {skills[hoveredIndex].level}%
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
