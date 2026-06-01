"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function SkillsRadar({ skills }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const activeIndex = hoveredIndex ?? selectedIndex;

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      <svg viewBox="0 0 300 300" className="w-full h-full">
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
          fillOpacity={0.15}
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Data points */}
        {skills.map((skill, i) => {
          const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
          const r = (skill.level / 100) * radius;
          const x = centerX + r * Math.cos(angle);
          const y = centerY + r * Math.sin(angle);
          const isActive = i === activeIndex;

          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={isActive ? 6 : 4}
              fill={
                isActive ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.7)"
              }
              className="cursor-pointer transition-all"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(i)}
            />
          );
        })}

        {/* Labels */}
        {skills.map((skill, i) => {
          const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
          const x = centerX + (radius + 28) * Math.cos(angle);
          const y = centerY + (radius + 28) * Math.sin(angle);
          const isActive = i === activeIndex;

          return (
            <text
              key={i}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              style={{
                fill: isActive
                  ? "hsl(var(--foreground))"
                  : "hsl(var(--muted-foreground))",
                fontWeight: isActive ? 700 : 400,
                transition: "fill 0.2s ease",
              }}
            >
              {skill.name}
            </text>
          );
        })}
      </svg>

      {/* Tooltip */}
      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded-xl text-sm shadow-lg font-medium"
        >
          {skills[activeIndex].name}: {skills[activeIndex].level}%
        </motion.div>
      )}
    </div>
  );
}
