import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Star,
  Target,
  TrendingUp,
  Users,
  Brain,
  Bot,
  Database,
} from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Bot,
      title: "Agentic AI Engineer",
      organization: "Wells Fargo",
      year: "May 2024 – Present",
      description:
        "Designing multi-agent AI systems using GPT-4, Claude, and Gemini with Python and MCP. Architected RAG pipelines improving decision accuracy by 17% and reducing workflow cycle time by 18% in production banking environments.",
    },
    {
      icon: Brain,
      title: "Generative AI Engineer",
      organization: "Deloitte",
      year: "Jun 2023 – May 2024",
      description:
        "Engineered LLM-based enterprise solutions integrating AWS Bedrock, OpenAI, Cohere, and Gemini. Developed RAG knowledge systems and agentic workflows, reducing process turnaround time by 17% across consulting clients.",
    },
    {
      icon: TrendingUp,
      title: "AI / Machine Learning Engineer",
      organization: "Infosys",
      year: "Jul 2020 – Aug 2022",
      description:
        "Developed ML and deep learning models for structured and unstructured data. Built data pipelines, feature engineering frameworks, and deployed production APIs improving prediction accuracy by 15%.",
    },
    {
      icon: Target,
      title: "DevMind Pro — Autonomous AI Debugging",
      organization: "Personal Project",
      year: "2026",
      description:
        "Built a 7-agent LangGraph pipeline that autonomously detects errors, generates fixes, writes BDD tests, and opens GitHub PRs. Published as devmind-sdk on npm. Deployed on AWS EC2 with full CI/CD.",
    },
    {
      icon: Star,
      title: "Student AI — Early Warning System",
      organization: "Personal Project",
      year: "2025",
      description:
        "Built an XGBoost ML platform predicting student dropout risk 4 weeks early. Features LangChain agent, RAG chatbot, auto-retraining, and drift detection. Deployed on AWS EC2 with GitHub Actions CI/CD.",
    },
    {
      icon: Award,
      title: "AWS Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2022",
      description:
        "Certified in AWS cloud fundamentals, core services, security, and architecture best practices. Applied in production deployments across multiple projects.",
    },
  ];

  const stats = [
    {
      value: "5+",
      label: "Years Experience",
      description: "AI & software engineering",
    },
    {
      value: "17%",
      label: "Decision Accuracy",
      description: "Improved via RAG pipelines",
    },
    {
      value: "18%",
      label: "Cycle Time Reduction",
      description: "Via agent orchestration",
    },
    {
      value: "3",
      label: "Top Companies",
      description: "Wells Fargo, Deloitte, Infosys",
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
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-primary uppercase tracking-wider font-medium">
              Professional Highlights
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight">
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
                className="p-6 border-2 border-border hover:border-primary/50 transition-colors text-center rounded-xl"
              >
                <div className="text-3xl md:text-4xl font-semibold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
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
                  className="p-6 border-2 border-border hover:border-primary/50 transition-all group bg-background rounded-xl"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-xl transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.organization} · {achievement.year}
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
