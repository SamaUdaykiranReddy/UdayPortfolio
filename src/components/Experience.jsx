import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ChevronRight } from "lucide-react";
import { InteractiveTimeline } from "./InteractiveTimeline";

export function Experience() {
  const experiences = [
    {
      title: "Agentic AI Engineer",
      company: "Wells Fargo",
      period: "May 2024 – Present",
      location: "Woburn, MA",
      type: "Full-time",
      description:
        "Designing and deploying production-grade autonomous AI systems for banking workflows using multi-agent architectures, RAG pipelines, and LLM orchestration.",
      achievements: [
        "Designed multi-agent AI systems using GPT-4, Claude, and Gemini with Python and MCP, improving workflow cycle time by 18%",
        "Architected RAG pipelines with embeddings, retrieval, and re-ranking, improving decision accuracy and response relevance by 17%",
        "Built scalable agent orchestration systems with tool calling, memory strategies, APIs, and database integrations, improving operational throughput by 16%",
        "Optimized LLM performance using prompt engineering, chain-of-thought reasoning, and evaluation frameworks, reducing latency",
      ],
      technologies: [
        "GPT-4",
        "Claude",
        "Gemini",
        "Python",
        "MCP",
        "RAG",
        "LangChain",
        "AWS",
      ],
    },
    {
      title: "Generative AI Engineer",
      company: "Deloitte",
      period: "Jun 2023 – May 2024",
      location: "Remote",
      type: "Full-time",
      description:
        "Engineered LLM-based enterprise solutions integrating multiple AI platforms, RAG knowledge systems, and agentic workflows for large-scale consulting clients.",
      achievements: [
        "Engineered LLM-based solutions integrating AWS Bedrock, OpenAI, Cohere, and Gemini, improving model selection efficiency by 16%",
        "Developed RAG-based knowledge systems using vector stores and contextual grounding, improving response relevance by 18%",
        "Implemented agentic workflows, APIs, and enterprise integrations, reducing process turnaround time by 17%",
        "Enhanced prompt strategies using zero-shot, few-shot, and chain-of-thought techniques, improving output accuracy",
      ],
      technologies: [
        "AWS Bedrock",
        "OpenAI",
        "Cohere",
        "Gemini",
        "RAG",
        "Vector Stores",
        "Python",
      ],
    },
    {
      title: "AI / Machine Learning Engineer",
      company: "Infosys",
      period: "Jul 2020 – Aug 2022",
      location: "India",
      type: "Full-time",
      description:
        "Developed machine learning and deep learning models for structured and unstructured data, built data pipelines, and deployed production ML APIs.",
      achievements: [
        "Developed ML and deep learning models for structured and unstructured data using Python, improving prediction accuracy by 15%",
        "Built data processing pipelines and feature engineering frameworks, enabling scalable model training and evaluation",
        "Implemented model deployment pipelines and API integrations, improving system performance and reliability by 14%",
        "Optimized models using hyperparameter tuning and validation techniques, reducing processing time by 13%",
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "Scikit-learn",
        "SQL",
        "REST APIs",
        "Docker",
      ],
    },
  ];

  const education = [
    {
      degree: "Master's in Computer Science Engineering",
      school: "Rivier University",
      period: "2022 – 2024",
      gpa: "GPA: 3.46 / 4.0",
      focus: "Computer Science & AI",
      achievements: [
        "Focused on machine learning, distributed systems, and software engineering",
        "Active participant in coding contests and technical events",
      ],
    },
    {
      degree: "Bachelor's in Computer Science Engineering",
      school: "Lovely Professional University",
      period: "2017 – 2021",
      gpa: "65%",
      focus: "Computer Science & Software Engineering",
      achievements: [
        "Completed multiple academic and personal software projects",
        "Active participant in coding contests and technical events",
      ],
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      year: "2022",
      issuer: "Amazon Web Services",
    },
    {
      name: "Full Stack Web Development Certification",
      year: "2021",
      issuer: "Udemy",
    },
    {
      name: "JavaScript & React Advanced Certification",
      year: "2023",
      issuer: "Professional Training Platform",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
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
              Career Journey
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            Professional Experience
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl tracking-tight">Work Experience</h3>
            </div>
            <InteractiveTimeline experiences={experiences} />
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl tracking-tight">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border-2 border-border hover:border-primary/50 transition-colors bg-background rounded-xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-medium mb-1">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.gpa}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 lg:mt-0 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm mb-3">
                    <strong>Focus:</strong> {edu.focus}
                  </p>
                  <ul className="space-y-1.5">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-primary" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-primary text-primary-foreground rounded-lg">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-2xl tracking-tight">
                Certifications & Awards
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 border-2 border-border hover:border-primary/50 transition-colors bg-background rounded-xl group"
                >
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="mb-1 text-sm font-medium">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
