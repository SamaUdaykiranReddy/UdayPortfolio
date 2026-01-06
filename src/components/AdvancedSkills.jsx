import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { Skills } from "./Skills";
import { SkillsRadar } from "./SkillsRadar";
import TechStackComparison from "./TechStackCamparison";
import { GitHubStats } from "./GitHubStats";
import { CodeShowcase } from "./CodeShowcase";
import { ProficiencyBreakdown } from "./ProficiencyBreakdown";

export default function AdvancedSkills() {
  const radarSkills = [
    { name: "Frontend", level: 95 },
    { name: "Backend", level: 85 },
    { name: "Database", level: 80 },
    { name: "System Design", level: 80 },
    { name: "Tools", level: 80 },
  ];
  const tools = [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "AWS",
    "Figma",
    "Vercel",
    "Firebase",
    "Jira",
    "Slack",
  ];

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Skills</TabsTrigger>
            <TabsTrigger value="comparison">Tech Stack</TabsTrigger>
            <TabsTrigger value="github">GitHub Stats</TabsTrigger>
            <TabsTrigger value="code">Code Examples</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className=" grid lg:grid-cols-2 gap-12 items-start">
              <SkillsRadar skills={radarSkills} />
              <ProficiencyBreakdown skills={radarSkills} />
            </div>
          </TabsContent>

          {/* Detailed Skills Tab */}
          <TabsContent value="detailed">
            <Skills />
          </TabsContent>

          <TabsContent value="comparison">
            <TechStackComparison />
          </TabsContent>

          <TabsContent value="github">
            <GitHubStats />
          </TabsContent>

          <TabsContent value="code">
            <CodeShowcase />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
