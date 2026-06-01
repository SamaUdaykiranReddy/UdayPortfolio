import { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/Button";
import { ParallaxSection } from "./ParallaxSection";

export function Hero() {
  const roles = useMemo(
    () => [
      "Agentic AI Engineer",
      "LLM Systems Architect",
      "Generative AI Specialist",
      "Full Stack Developer",
    ],
    [],
  );

  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < role.length) {
          setTypedText(role.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRole, roles]);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    const navH = document.querySelector("nav")?.offsetHeight || 0;
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navH - 10,
        behavior: "smooth",
      });
    }
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Udaykiran_Reddy_Sama_resume.pdf";
    link.download = "Udaykiran_Reddy_Sama_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const socialLinks = [
    {
      href: "https://github.com/SamaUdaykiranReddy",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/udayreddysama",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "mailto:udaykiranreddy3232@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParallaxSection offset={120}>
          <motion.div
            className="absolute top-20 left-[8%] w-80 h-80 bg-primary/6 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          />
        </ParallaxSection>
        <ParallaxSection offset={80}>
          <motion.div
            className="absolute bottom-24 right-[8%] w-80 h-80 bg-purple-500/6 rounded-full blur-3xl"
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.5, 0.3, 0.5] }}
            transition={{ repeat: Infinity, duration: 9, delay: 1 }}
          />
        </ParallaxSection>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div
          className="max-w-5xl mx-auto text-center md:text-left"
          initial="hidden"
          animate="show"
        >
          {/* Status badges */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-full bg-background/80 backdrop-blur-sm text-sm text-muted-foreground"
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Available for new opportunities
            </motion.div>

            <motion.div
              className="flex items-center gap-1.5 px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium"
              whileHover={{ scale: 1.03 }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Agentic AI Engineer
            </motion.div>

            <motion.div
              className="px-4 py-2 border border-border rounded-full text-sm bg-background/80 backdrop-blur-sm"
              whileHover={{ scale: 1.03 }}
            >
              🏆 AWS Certified
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            Udaykiran Reddy
          </motion.h1>

          {/* Typed role */}
          <motion.div variants={fadeUp} custom={3} className="mb-6">
            <div className="text-2xl md:text-4xl h-12 md:h-16 font-medium">
              <span className="bg-gradient-to-r from-[#6F4DF6] via-[#A259FF] to-[#FF6AC1] bg-clip-text text-transparent">
                {typedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-0.5 text-primary"
              >
                |
              </motion.span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mt-2 tracking-wide">
              Wells Fargo &nbsp;•&nbsp; Deloitte &nbsp;•&nbsp; Rivier University
              MS in CS &nbsp;•&nbsp; 5+ Years Experience
            </p>
          </motion.div>

          {/* Pitch */}
          <motion.p
            variants={fadeUp}
            custom={4}
            className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
          >
            I design and deploy{" "}
            <span className="font-semibold text-foreground">
              production-grade autonomous AI systems
            </span>{" "}
            — multi-agent pipelines, RAG architectures, and LLM workflows used
            in{" "}
            <span className="font-semibold text-foreground">
              banking and enterprise environments
            </span>
            . Over{" "}
            <span className="font-semibold text-foreground">5+ years</span>{" "}
            building and shipping AI solutions end-to-end.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="grid grid-cols-3 gap-3 max-w-md mx-auto md:mx-0 mb-10"
          >
            {[
              { value: "5+", label: "Years Exp" },
              { value: "15+", label: "Projects" },
              { value: "3", label: "Companies" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04, y: -2 }}
                className="p-4 border border-border rounded-xl bg-muted/40 backdrop-blur-sm text-center"
              >
                <div className="text-2xl md:text-3xl font-semibold">
                  {stat.value}
                </div>
                <div className="text-[11px] text-muted-foreground tracking-widest uppercase mt-0.5">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-12"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="h-12 px-7 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-medium shadow-sm"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="h-12 px-7 border-2 rounded-xl font-medium hover:bg-muted/60"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="ghost"
                size="lg"
                className="h-12 px-7 rounded-xl font-medium hover:bg-muted/60"
              >
                Let's Talk →
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            custom={7}
            className="flex items-center justify-center md:justify-start gap-3"
          >
            {socialLinks.map(({ href, icon: Icon, label }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-xl border border-border hover:border-foreground/30 hover:bg-muted transition-all"
              >
                <Icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
        >
          <span className="text-[10px] tracking-[0.15em] uppercase">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  );
}
