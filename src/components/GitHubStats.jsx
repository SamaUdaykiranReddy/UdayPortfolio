"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitFork, Code } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function GitHubStats() {
 
  const stats = [
    {
      icon: Star,
      label: "Stars Earned",
      value: 120,
      color: "text-yellow-500",
    },
    {
      icon: GitFork,
      label: "Forks",
      value: 63,
      color: "text-blue-500",
    },
    {
      icon: GitBranch,
      label: "Repositories",
      value: 35,
      color: "text-green-500",
    },
    {
      icon: Code,
      label: "Contributions",
      value: 720,
      color: "text-purple-500",
    },
  ];

  
  const contributions = [
    { day: "Mon", commits: 20 },
    { day: "Tue", commits: 18 },
    { day: "Wed", commits: 25 },
    { day: "Thu", commits: 22 },
    { day: "Fri", commits: 15 },
    { day: "Sat", commits: 10 },
    { day: "Sun", commits: 8 },
  ];

  const maxCommits = Math.max(...contributions.map((c) => c.commits));
  const chartHeight = 160; // px (IMPORTANT)

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 border-2 border-border bg-background"
            >
              <Icon className={`h-6 w-6 mb-3 ${stat.color}`} />

              <div className="text-3xl mb-1">
                <AnimatedCounter end={stat.value} start />
              </div>

              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Weekly Contributions */}
      <div className="p-6 border-2 border-border bg-background">
        <h4 className="mb-6 font-medium">Weekly Contributions</h4>

        <div className="flex items-end justify-center gap-6 h-[160px]">
          {contributions.map((item, index) => {
            const barHeight = (item.commits / maxCommits) * chartHeight;

            return (
              <div
                key={index}
                className="flex flex-col items-center justify-end h-full"
              >
                {/* Commit count */}
                <span className="text-xs mb-2">{item.commits}</span>

                {/* Bar */}
                <div
                  style={{ height: `${barHeight}px` }}
                  className="w-6 bg-blue-600 rounded-sm"
                />

                {/* Day */}
                <span className="mt-2 text-xs text-muted-foreground">
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* GitHub Profile Link */}
      <motion.a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        className="block p-6 border-2 border-border bg-background hover:border-foreground transition-all text-center"
      >
        <Code className="h-8 w-8 mx-auto mb-3" />
        <p className="font-medium mb-1">View GitHub Profile</p>
        <p className="text-sm text-muted-foreground">
          Explore repositories and activity
        </p>
      </motion.a>
    </div>
  );
}
