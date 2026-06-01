"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "./ui/Button";

export function CodeShowcase() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const codeExamples = [
    {
      title: "DevMind — Error Feed",
      language: "TypeScript / React",
      description: "Real-time error feed with 5s polling, search & filter",
      code: `// DevMind: Real-time error feed (ErrorFeed.tsx)
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://34.205.172.253:3001";

export default function ErrorFeed() {
  const [errors, setErrors] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem("devmind_token");
      const headers = token ? { Authorization: \`Bearer \${token}\` } : {};
      const res = await fetch(\`\${API_URL}/api/errors\`, { headers });
      const data = await res.json();
      setErrors(Array.isArray(data) ? data : []);
    };

    load();
    const interval = setInterval(load, 5000); // auto-refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const filtered = errors.filter((e) => {
    const matchesFilter = filter === "all" ? true
      : filter === "open" ? e.status !== "resolved"
      : e.status === "resolved";
    const matchesSearch = search === "" ? true
      : e.error_text?.toLowerCase().includes(search.toLowerCase()) ||
        e.service?.toLowerCase().includes(search.toLowerCase()) ||
        e.root_cause?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return filtered.map((error) => (
    <ErrorCard key={error.id} analysis={error} />
  ));
}`,
    },
    {
      title: "Student AI — Risk Dashboard",
      language: "TypeScript / Next.js",
      description: "Instructor dashboard with ML predictions and SHAP charts",
      code: `// Student AI: Risk prediction + SHAP visualization (dashboard/page.tsx)
const getPrediction = async (student) => {
  setStudents((prev) =>
    prev.map((s) => s.id === student.id ? { ...s, loading: true } : s)
  );

  const res = await api.post(\`/api/predict/\${student.id}\`);
  // Returns: { risk_score, risk_label, top_factors, suggestion }

  const updated = { ...student, prediction: res.data, loading: false };
  setStudents((prev) =>
    prev.map((s) => s.id === student.id ? updated : s)
  );
  setSelected(updated);
};

// SHAP risk factors rendered as horizontal bar chart
<ResponsiveContainer width="100%" height={120}>
  <BarChart
    data={selected.prediction.top_factors.map((f) => ({
      name: f.feature.replace(/_/g, " "),
      value: Math.abs(f.impact),
    }))}
    layout="vertical"
  >
    <YAxis type="category" dataKey="name" width={100}
      tick={{ fontSize: 10, fill: "#9ca3af" }} />
    <Bar dataKey="value" radius={4}>
      {selected.prediction.top_factors.map((f, i) => (
        <Cell key={i} fill={riskBarColor(selected.prediction.risk_label)} />
      ))}
    </Bar>
  </BarChart>
</ResponsiveContainer>

// AI recommendation from Groq displayed below
<p>{selected.prediction.suggestion}</p>`,
    },
    {
      title: "LangGraph Agent Pipeline",
      language: "Python",
      description: "DevMind — 7-agent autonomous debugging orchestration",
      code: `# DevMind: LangGraph 7-agent pipeline (orchestrator.py)
from langgraph.graph import StateGraph, END
from typing import TypedDict, Optional

class AgentState(TypedDict):
    error: str
    stack: str
    anomaly: Optional[dict]
    root_cause: Optional[str]
    fix: Optional[str]
    tests: Optional[str]
    bdd: Optional[str]
    explanation: Optional[str]
    pr_url: Optional[str]

def build_devmind_pipeline():
    graph = StateGraph(AgentState)

    # Register all 7 agents
    graph.add_node("anomaly_detector",   anomaly_detector_agent)
    graph.add_node("root_cause_analyst", root_cause_agent)
    graph.add_node("fix_suggester",      fix_suggester_agent)  # RAG-powered
    graph.add_node("test_generator",     test_generator_agent)
    graph.add_node("bdd_generator",      bdd_generator_agent)
    graph.add_node("explainer",          explainer_agent)
    graph.add_node("pr_creator",         pr_creator_agent)     # opens GitHub PR

    # Sequential pipeline
    graph.set_entry_point("anomaly_detector")
    graph.add_edge("anomaly_detector",   "root_cause_analyst")
    graph.add_edge("root_cause_analyst", "fix_suggester")
    graph.add_edge("fix_suggester",      "test_generator")
    graph.add_edge("test_generator",     "bdd_generator")
    graph.add_edge("bdd_generator",      "explainer")
    graph.add_edge("explainer",          "pr_creator")
    graph.add_edge("pr_creator",          END)

    return graph.compile()
    # Total: ~200ms per error across all 7 agents`,
    },
    {
      title: "XGBoost + SHAP Prediction",
      language: "Python",
      description: "Student AI — risk scoring with explainability",
      code: `# Student AI: XGBoost prediction + SHAP (main.py)
import xgboost as xgb
import shap
import numpy as np

model = xgb.XGBClassifier(
    n_estimators=100,
    max_depth=4,
    scale_pos_weight=3,   # handle class imbalance
    eval_metric="auc"
)
explainer = shap.TreeExplainer(model)

@app.post("/predict")
async def predict(data: PredictRequest, db=Depends(get_db)):
    # Fetch 14 behavioral features from PostgreSQL
    features = await get_student_features(data.student_id, db)

    X = np.array([[
        features["avg_logins"],
        features["avg_forum_posts"],
        features["avg_video_minutes"],
        features["avg_submissions"],
        features["login_trend"],         # week-over-week change
        features["missed_assignments"],
        features["submission_rate"],
        features["avg_score"],
        features["min_score"],
        # + 5 demographic features
    ]])

    risk_score = float(model.predict_proba(X)[0][1])
    shap_values = explainer.shap_values(X)[0]

    # Top 3 factors for instructor dashboard
    top_factors = sorted(
        zip(FEATURE_NAMES, shap_values),
        key=lambda x: abs(x[1]), reverse=True
    )[:3]

    # Groq generates actionable recommendation
    suggestion = await generate_suggestion(risk_score, top_factors)

    return {
        "risk_score": risk_score,
        "risk_label": "high" if risk_score > 0.7 else "medium" if risk_score > 0.4 else "low",
        "top_factors": [{"feature": f, "impact": float(v)} for f, v in top_factors],
        "suggestion": suggestion
    }`,
    },
  ];

  const handleCopy = async (code) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {codeExamples.map((example, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 border-2 rounded-xl transition-all text-sm font-medium ${
              activeTab === index
                ? "border-foreground bg-foreground text-background"
                : "border-border hover:border-foreground"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {example.title}
          </motion.button>
        ))}
      </div>

      {/* Code Display */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="border-2 border-border bg-zinc-950 text-zinc-100 overflow-hidden rounded-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div>
            <div className="font-medium mb-1">
              {codeExamples[activeTab].title}
            </div>
            <div className="text-sm text-zinc-400">
              {codeExamples[activeTab].description}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400 px-2 py-1 bg-zinc-800 rounded-lg">
              {codeExamples[activeTab].language}
            </span>
            <Button
              onClick={() => handleCopy(codeExamples[activeTab].code)}
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-zinc-100"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Code */}
        <div className="p-6 overflow-x-auto">
          <pre className="text-sm font-mono">
            <code className="text-zinc-300 leading-relaxed">
              {codeExamples[activeTab].code}
            </code>
          </pre>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "4", label: "AI Projects" },
          { value: "7", label: "Agent Pipeline" },
          { value: "5+", label: "Years Coding" },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-4 border-2 border-border rounded-xl text-center hover:border-primary/50 transition-colors"
          >
            <div className="text-2xl font-semibold mb-1">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
