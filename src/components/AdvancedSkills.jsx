import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { Skills } from "./Skills";
import { SkillsRadar } from "./SkillsRadar";
import TechStackComparison from "./TechStackCamparison";
import { CodeShowcase } from "./CodeShowcase";
import { ProficiencyBreakdown } from "./ProficiencyBreakdown";

export default function AdvancedSkills() {
  const radarSkills = [
    { name: "Agentic AI", level: 95 },
    { name: "LLM Systems", level: 92 },
    { name: "ML / Data", level: 85 },
    { name: "Full Stack", level: 90 },
    { name: "DevOps / AWS", level: 85 },
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
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Skills</TabsTrigger>
            <TabsTrigger value="comparison">Tech Stack</TabsTrigger>
            <TabsTrigger value="code">Code Examples</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <SkillsRadar skills={radarSkills} />
              <ProficiencyBreakdown skills={radarSkills} />
            </div>

            {/* Tools & Platforms */}
            <div className="mt-16 border-t border-border pt-12">
              <h3 className="text-center font-medium mb-6 text-muted-foreground uppercase tracking-widest text-sm">
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="px-4 py-2 border border-border rounded-full text-sm bg-background hover:bg-foreground hover:text-background transition-all cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="detailed">
            <Skills />
          </TabsContent>

          <TabsContent value="comparison">
            <TechStackComparison />
          </TabsContent>

          <TabsContent value="code">
            <CodeShowcase />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
