import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function TechStackComparison() {
  const stacks = [
    {
      category: "Agentic AI & LLM Systems",
      technologies: [
        { name: "LangChain / LangGraph", experience: "2 years", projects: 8 },
        { name: "Multi-Agent Systems", experience: "2 years", projects: 7 },
        { name: "Prompt Engineering", experience: "3 years", projects: 15 },
        { name: "Tool Calling & Memory", experience: "2 years", projects: 8 },
        { name: "RAG Pipelines", experience: "2 years", projects: 10 },
      ],
    },
    {
      category: "LLM Platforms",
      technologies: [
        {
          name: "GPT-4 / GPT-4.1 (OpenAI)",
          experience: "3 years",
          projects: 12,
        },
        { name: "Claude (Anthropic)", experience: "2 years", projects: 8 },
        { name: "Gemini (Google)", experience: "2 years", projects: 6 },
        { name: "AWS Bedrock", experience: "2 years", projects: 5 },
        { name: "Groq API", experience: "1 year", projects: 4 },
        { name: "Cohere", experience: "1 year", projects: 3 },
      ],
    },
    {
      category: "Retrieval & Vector Systems",
      technologies: [
        { name: "Pinecone (Vector DB)", experience: "2 years", projects: 8 },
        { name: "Embeddings & Re-ranking", experience: "2 years", projects: 7 },
        { name: "RAG Architecture", experience: "2 years", projects: 10 },
        { name: "Semantic Search", experience: "2 years", projects: 6 },
      ],
    },
    {
      category: "ML & Data Engineering",
      technologies: [
        { name: "Python", experience: "5 years", projects: 20 },
        { name: "XGBoost / Scikit-learn", experience: "3 years", projects: 8 },
        { name: "TensorFlow / PyTorch", experience: "3 years", projects: 6 },
        { name: "SHAP / Explainability", experience: "2 years", projects: 5 },
        { name: "MLflow", experience: "2 years", projects: 4 },
        { name: "FastAPI", experience: "2 years", projects: 6 },
      ],
    },
    {
      category: "Full Stack & Infrastructure",
      technologies: [
        { name: "React / Next.js", experience: "5 years", projects: 18 },
        { name: "Node.js / Express", experience: "5 years", projects: 15 },
        { name: "TypeScript", experience: "3 years", projects: 12 },
        { name: "PostgreSQL", experience: "4 years", projects: 12 },
        { name: "MongoDB", experience: "4 years", projects: 10 },
        { name: "Redis", experience: "2 years", projects: 6 },
        { name: "Docker / AWS EC2", experience: "3 years", projects: 10 },
        { name: "GitHub Actions CI/CD", experience: "2 years", projects: 8 },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {stacks.map((stack, stackIndex) => (
        <motion.div
          key={stackIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: stackIndex * 0.1 }}
        >
          <h3 className="text-xl mb-4 flex items-center gap-3">
            <div className="h-1 w-8 bg-primary rounded-full" />
            {stack.category}
          </h3>

          <div className="border-2 border-border overflow-hidden rounded-xl">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-muted/30 border-b border-border text-sm font-medium">
              <div>Technology</div>
              <div className="text-center">Proficiency</div>
              <div className="text-center">Experience</div>
              <div className="text-center">Projects</div>
            </div>

            {/* Table Rows */}
            {stack.technologies.map((tech, techIndex) => (
              <motion.div
                key={techIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                className="grid grid-cols-4 gap-4 p-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors"
              >
                <div className="font-medium text-sm">{tech.name}</div>
                <div className="flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  {tech.experience}
                </div>
                <div className="text-center">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech.projects}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
