import { motion } from "framer-motion";
import { Badge } from "./ui/Badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/Accordion";
import { AnimatedCounter } from "./AnimatedCounter";

export function Skills() {
  const skillCategories = [
    {
      id: "agentic",
      title: "Agentic AI & LLM Systems",
      icon: "🤖",
      skills: [
        {
          name: "Multi-Agent Systems",
          level: 95,
          years: "2 years",
          projects: 8,
        },
        {
          name: "LangChain / LangGraph",
          level: 92,
          years: "2 years",
          projects: 7,
        },
        {
          name: "Prompt Engineering",
          level: 95,
          years: "3 years",
          projects: 15,
        },
        { name: "RAG Pipelines", level: 92, years: "2 years", projects: 10 },
        {
          name: "Tool Calling & Memory",
          level: 90,
          years: "2 years",
          projects: 8,
        },
      ],
    },
    {
      id: "llm",
      title: "LLM Platforms & APIs",
      icon: "🧠",
      skills: [
        { name: "GPT-4 / GPT-4.1", level: 95, years: "3 years", projects: 12 },
        {
          name: "Claude (Anthropic)",
          level: 90,
          years: "2 years",
          projects: 8,
        },
        { name: "Gemini", level: 88, years: "2 years", projects: 6 },
        { name: "AWS Bedrock", level: 85, years: "2 years", projects: 5 },
        { name: "Groq API", level: 88, years: "1 year", projects: 4 },
      ],
    },
    {
      id: "ml",
      title: "Machine Learning & Data",
      icon: "📊",
      skills: [
        { name: "Python", level: 95, years: "5 years", projects: 20 },
        {
          name: "XGBoost / Scikit-learn",
          level: 85,
          years: "3 years",
          projects: 8,
        },
        {
          name: "TensorFlow / PyTorch",
          level: 80,
          years: "3 years",
          projects: 6,
        },
        {
          name: "SHAP / Explainability",
          level: 82,
          years: "2 years",
          projects: 5,
        },
        { name: "MLflow", level: 80, years: "2 years", projects: 4 },
      ],
    },
    {
      id: "retrieval",
      title: "Retrieval & Vector Systems",
      icon: "🔍",
      skills: [
        { name: "Pinecone", level: 90, years: "2 years", projects: 8 },
        {
          name: "Embeddings & Re-ranking",
          level: 88,
          years: "2 years",
          projects: 7,
        },
        { name: "PostgreSQL", level: 85, years: "4 years", projects: 12 },
        { name: "Redis", level: 80, years: "2 years", projects: 6 },
        { name: "MongoDB", level: 82, years: "4 years", projects: 10 },
      ],
    },
    {
      id: "fullstack",
      title: "Full Stack & DevOps",
      icon: "💻",
      skills: [
        { name: "React / Next.js", level: 92, years: "5 years", projects: 18 },
        {
          name: "Node.js / Express",
          level: 88,
          years: "5 years",
          projects: 15,
        },
        { name: "TypeScript", level: 88, years: "3 years", projects: 12 },
        { name: "Docker / AWS EC2", level: 85, years: "3 years", projects: 10 },
        {
          name: "GitHub Actions CI/CD",
          level: 85,
          years: "2 years",
          projects: 8,
        },
      ],
    },
  ];

  const tools = [
    "LangChain",
    "LangGraph",
    "Pinecone",
    "MLflow",
    "AWS",
    "Docker",
    "GitHub Actions",
    "Groq",
    "Postman",
    "VS Code",
    "Jira",
    "Slack",
  ];

  return (
    <section id="skills" className="py-24 bg-muted/20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-primary uppercase tracking-wider font-medium">
              Skills
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground">
            Proficiency levels with real-world experience across AI, ML, and
            full-stack systems
          </p>
        </motion.div>

        {/* Skill Categories */}
        <Accordion type="single" collapsible className="space-y-4 mb-16">
          {skillCategories.map((category) => (
            <AccordionItem
              key={category.id}
              value={category.id}
              className="rounded-xl border border-border bg-background/70 px-6"
            >
              <AccordionTrigger className="py-6 text-lg font-medium flex items-center gap-3">
                <span>{category.icon}</span>
                {category.title}
              </AccordionTrigger>

              <AccordionContent className="pb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-primary">
                          <AnimatedCounter
                            end={skill.level}
                            suffix="%"
                            start={true}
                          />
                        </span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {skill.years} experience · {skill.projects} projects
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Tools */}
        <div className="border-t border-border pt-12">
          <h3 className="text-xl mb-6 font-medium tracking-tight text-center">
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 rounded-xl hover:bg-foreground hover:text-background transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
