import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import {
  ExternalLink,
  Github,
  Users,
  Zap,
  TrendingUp,
  Brain,
  Database,
  Shield,
  Bot,
  GitPullRequest,
} from "lucide-react";
import { Badge } from "./ui/Badge";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "DevMind Pro — Autonomous AI Debugging Platform",
      company: "Personal Project",
      category: "Agentic AI Platform",
      year: "2026",
      description:
        "DevMind detects production errors, diagnoses root causes, generates fixes, writes BDD tests, and opens GitHub PRs — fully autonomously. Zero debugging required. Published as an npm SDK.",
      challenge:
        "Developers waste hours debugging production errors manually. Traditional tools like Sentry only capture errors — they don't fix them. The challenge was building a fully autonomous system that not only detects errors but analyzes, fixes, tests, and deploys the solution without human intervention.",
      solution:
        "Built a 7-agent LangGraph pipeline (Anomaly Detector → Root Cause Analyst → Fix Suggester → Test Generator → BDD Generator → Explainer → PR Creator). RAG on the user's actual codebase via Pinecone ensures fixes reference real function names. Multi-tenant architecture with per-user GitHub, Jira, Slack, and email integrations. Published devmind-sdk to npm.",
      results:
        "Fully deployed on AWS EC2 with CI/CD via GitHub Actions. SDK published on npm. Automatically creates GitHub PRs with fixes applied, Jira tickets, Slack notifications, and email alerts. Each error analyzed in ~200ms with 7 specialized AI agents.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
      tags: [
        "Next.js 15",
        "TypeScript",
        "Node.js",
        "Python",
        "FastAPI",
        "LangGraph",
        "Groq",
        "Pinecone",
        "RAG",
        "PostgreSQL",
        "Redis",
        "AWS EC2",
        "Docker",
        "GitHub Actions",
        "SendGrid",
        "Jira API",
        "Slack",
        "npm SDK",
      ],
      metrics: [
        { icon: Bot, label: "7 AI Agents", sublabel: "LangGraph Pipeline" },
        {
          icon: GitPullRequest,
          label: "Auto GitHub PR",
          sublabel: "Zero Manual Debugging",
        },
        { icon: Zap, label: "~200ms", sublabel: "Per Error Analysis" },
        { icon: Shield, label: "Multi-Tenant", sublabel: "Per-User Isolation" },
      ],
      liveUrl: "http://34.205.172.253:3002",
      githubUrl: "https://github.com/SamaUdaykiranReddy/devmind",
      npmUrl: "https://www.npmjs.com/package/devmind-sdk",
    },
    {
      title: "Student AI — Early Warning System",
      company: "Personal Project",
      category: "Full-Stack AI / ML Platform",
      year: "2025",
      description:
        "Predicts which students are at risk of failing 4 weeks before it happens — then tells instructors exactly what to do about it. Built with a full ML pipeline, LangChain AI agent, RAG chatbot, and auto-retraining on real student data.",
      challenge:
        "Universities lose millions to dropouts every year. Traditional systems flag students after they fail. The challenge was building a system that predicts risk weeks in advance using behavioral signals, explains why a student is at risk, and generates specific actionable recommendations for instructors.",
      solution:
        "Built an XGBoost ML model trained on 14 behavioral features. SHAP explains the top 3 risk factors per student. Groq API generates actionable recommendations. A LangChain AI agent monitors students autonomously, and a RAG chatbot answers student questions using Pinecone vector search. The model auto-retrains weekly on real PostgreSQL data with drift detection.",
      results:
        "Fully deployed on AWS EC2 with CI/CD via GitHub Actions. Predictions delivered in ~200ms. Model retrains automatically every week on real student behavior. Drift detection alerts instructors if model accuracy drops more than 10%.",
      image:
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop",
      tags: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "FastAPI",
        "XGBoost",
        "SHAP",
        "LangChain",
        "Groq",
        "Pinecone",
        "PostgreSQL",
        "Redis",
        "AWS EC2",
        "Docker",
        "GitHub Actions",
        "MLflow",
      ],
      metrics: [
        { icon: Brain, label: "XGBoost + SHAP", sublabel: "ML Predictions" },
        { icon: Zap, label: "~200ms", sublabel: "Prediction Speed" },
        {
          icon: TrendingUp,
          label: "Auto Retraining",
          sublabel: "Weekly on Real Data",
        },
        {
          icon: Users,
          label: "LangChain Agent",
          sublabel: "Autonomous Monitoring",
        },
      ],
      liveUrl: "http://54.86.60.216:3001",
      githubUrl: "https://github.com/SamaUdaykiranReddy/student-ai",
      npmUrl: null,
    },
    {
      title: "Kitchen Management Web Application",
      company: "GenX AI",
      category: "Full-Stack Web Application",
      year: "2024",
      description:
        "A product-focused kitchen and order management system where admins manage items and users place orders through a responsive web interface.",
      challenge:
        "The system required clear admin and user workflows, reliable data handling for orders and items, and a structure that could support future feature additions without refactoring.",
      solution:
        "Built a React-based frontend using Tailwind CSS and custom styles, and developed REST APIs using Node.js connected to MongoDB. Implemented clean component-based architecture and tested APIs using Postman.",
      results:
        "Delivered a scalable and maintainable full-stack application with smooth frontend–backend communication and role-based workflows.",
      image:
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=800&fit=crop",
      tags: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "REST APIs",
        "Postman",
      ],
      metrics: [
        { icon: Users, label: "Admin & Users", sublabel: "Role-Based Access" },
        { icon: Zap, label: "REST APIs", sublabel: "Backend Integration" },
        {
          icon: TrendingUp,
          label: "Scalable",
          sublabel: "Future-Ready Design",
        },
        { icon: Database, label: "MongoDB", sublabel: "Data Storage" },
      ],
      liveUrl: null,
      githubUrl: null,
      npmUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-primary uppercase tracking-wider font-medium">
              Portfolio
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight leading-tight">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Real-world projects spanning agentic AI systems, machine learning
            platforms, and full-stack web applications.
          </p>
        </motion.div>

        <div className="space-y-20 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all rounded-xl">
                {/* Header */}
                <div className="p-8 md:p-10 border-b bg-muted/30">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge>{project.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {project.company} · {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl mb-3 tracking-tight font-semibold">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground max-w-3xl leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-4 bg-background border border-border rounded-xl"
                        >
                          <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                          <div>
                            <div className="text-sm font-medium">
                              {metric.label}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.sublabel}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-muted min-h-[300px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  <div className="lg:col-span-3 p-8 md:p-10 space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-primary font-medium mb-2">
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-primary font-medium mb-2">
                        The Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {project.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-primary font-medium mb-2">
                        The Results
                      </h4>
                      <p className="leading-relaxed text-sm">
                        {project.results}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-primary font-medium mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
                      {project.liveUrl && (
                        <Button asChild size="sm">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      )}
                      {project.npmUrl && (
                        <Button asChild variant="outline" size="sm">
                          <a
                            href={project.npmUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Zap className="h-4 w-4 mr-2" />
                            npm Package
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
