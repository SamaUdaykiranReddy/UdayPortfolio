import React from "react";
import { motion } from "framer-motion";
import { Award, Star, Target, TrendingUp, Users, Code } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Code,
      title: "Full-Stack Product Development",
      organization: "GenX AI",
      year: "2025 – Present",
      description:
        "Working on a production-ready kitchen and order management web application, building scalable frontend features in React and backend APIs using Node.js and MongoDB.",
    },
    {
      icon: TrendingUp,
      title: "Frontend & API Contributions",
      organization: "Tek AI",
      year: "2024 – 2025",
      description:
        "Contributed to web application development by building responsive UI using React, HTML, CSS, and Bootstrap, and assisting with backend API development and MongoDB integration.",
    },
    {
      icon: Users,
      title: "Frontend Development Internship",
      organization: "Icroz Solutions Pvt Ltd",
      year: "2020 – 2022",
      description:
        "Developed responsive user interfaces using React.js, fixed UI bugs, converted designs into reusable components, and collaborated using Git for version control.",
    },
    {
      icon: Target,
      title: "Kitchen Management Web Application",
      organization: "Personal Project",
      year: "2024",
      description:
        "Built a full-stack kitchen management system where admins manage items and users place orders, using React, Node.js, MongoDB, Tailwind CSS, and Postman.",
    },
    {
      icon: Star,
      title: "Kitchen Bill Scanning Application",
      organization: "Personal Project",
      year: "2024",
      description:
        "Developed a utility application to scan, store, and retrieve kitchen bill records with React frontend and Node.js APIs connected to MongoDB.",
    },
    {
      icon: Award,
      title: "Personal Portfolio & Corporate Websites",
      organization: "Independent Work",
      year: "2023 – Present",
      description:
        "Designed and developed responsive portfolio and corporate websites using React, Tailwind CSS, and custom CSS, focusing on clean UI and maintainable architecture.",
    },
  ];

  const stats = [
    {
      value: "4+ Years",
      label: "Experience",
      description: "Frontend & full-stack development",
    },
    {
      value: "15+",
      label: "Projects Built",
      description: "Academic & real-world applications",
    },
    {
      value: "5+",
      label: "Tech Stack",
      description: "React, Node, MongoDB & more",
    },
    {
      value: "100%",
      label: "Responsive UI",
      description: "Mobile-first design approach",
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container mx-auto px-4 text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-primary uppercase tracking-wider">
              Professional Highlights
            </div>
            <div className="h-0.5 flex-1 bg-gray-300" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-16 tracking-tight">
            Experience & Achievements
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border-2 border-border hover:border-foreground transition-colors text-center"
              >
                <div className="text-3xl md:text-4xl mb-2">{stat.value}</div>
                <div className="text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border-2 border-border hover:border-foreground transition-all group bg-background"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-foreground text-background group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.organization} • {achievement.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
