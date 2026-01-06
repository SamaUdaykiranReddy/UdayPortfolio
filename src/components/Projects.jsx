import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import {
  ExternalLink,
  Github,
  Users,
  Zap,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Badge } from "./ui/Badge";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Kitchen Management Web Application",
      company: "GenX AI",
      category: "Full-Stack Web Application",
      year: "2025",
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
        "Custom CSS",
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
        { icon: Clock, label: "Real-Time", sublabel: "Order Handling" },
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="text-sm text-primary uppercase tracking-wider">
              Portfolio
            </div>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <h2 className="text-4xl md:text-5xl mb-8 tracking-tight leading-tight text-left">
            Future Case Studies
          </h2>

          <p className="text-muted-foreground max-w-3xl text-left">
            In-depth look at real-world projects showcasing full-stack
            development, problem-solving, and scalable application design.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Card className="overflow-hidden border-2 hover:border-foreground transition-all text-left rounded-lg">
                {/* Project Header */}
                <div className="p-8 md:p-10 border-b bg-muted/30 bg-gray-100">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Badge>{project.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {project.company} • {project.year}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl mb-3 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground max-w-3xl">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.metrics.map((metric, i) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-4 bg-background border border-border"
                        >
                          <Icon className="h-5 w-5 text-primary" />
                          <div>
                            <div className="text-lg">{metric.label}</div>
                            <div className="text-xs text-muted-foreground">
                              {metric.sublabel}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Project Content */}
                <div className="grid lg:grid-cols-5">
                  {/* Image */}
                  <div className="lg:col-span-2 bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-3 p-8 md:p-10 space-y-8">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-primary mb-3">
                        The Challenge
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-primary mb-3">
                        The Solution
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-primary mb-3">
                        The Results
                      </h4>
                      <p className="leading-relaxed">{project.results}</p>
                    </div>

                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-primary mb-4">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-border">
                      <Button asChild>
                        <a href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href={project.githubUrl}>
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
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
