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
      "Full Stack Developer",
      "Frontend React Developer",
      "Backend Node.js Developer",
      "Software Engineer",
    ],
    []
  );

  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
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
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleDownloadResume = () => {
  const resumeUrl = "/Udaykiran_Reddy_Sama_resume.pdf"; // public folder root

  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Udaykiran_Reddy_Sama_resume.pdf";  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  // Motion variants for cleaner animation control
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15 },
    }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0">
        <ParallaxSection offset={120}>
          <motion.div
            className="absolute top-20 left-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          />
        </ParallaxSection>

        <ParallaxSection offset={80}>
          <motion.div
            className="absolute bottom-20 right-[10%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.25, 0.4] }}
            transition={{ repeat: Infinity, duration: 8, delay: 1 }}
          />
        </ParallaxSection>
      </div>

      {/* Foreground container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          className="max-w-5xl mx-auto text-center md:text-left"
          initial="hidden"
          animate="show"
        >
          {/* Badges */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
          >
            <motion.div
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-full bg-background/80 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm text-muted-foreground">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.div
              className="px-4 py-2 bg-gradient-to-r bg-black text-gray-50 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="inline h-3.5 w-3.5 mr-1.5" />
              Software Engineer
            </motion.div>

            <motion.div
              className="px-4 py-2 border border-border rounded-full text-sm bg-background/80 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              🏆 AWS Certified
            </motion.div>
          </motion.div>

          {/* Main Name */}
          <motion.h1
            variants={fadeUp}
            custom={2}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            Udaykiran Reddy
          </motion.h1>

          {/* Role typing animation */}
          <motion.div variants={fadeUp} custom={3} className="mb-6">
            <div className="text-2xl md:text-4xl h-12 md:h-16 font-medium">
              <span className="bg-gradient-to-r from-[#6F4DF6] via-[#A259FF] to-[#FF6AC1] bg-clip-text text-transparent">
                {typedText}
              </span>

              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-1 text-primary"
              >
                |
              </motion.span>
            </div>

            <p className="text-base md:text-lg text-muted-foreground mt-2">
              • Lovely Professsional University • Rivier University MS in CS • 4
              Years Experience
            </p>
          </motion.div>

          {/* Pitch paragraph */}
          <motion.p
            variants={fadeUp}
            custom={4}
            className="max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
          >
            I design and build{" "}
            <span className="font-semibold text-foreground">
              reliable and scalable web applications
            </span>{" "}
            that have been used by{" "}
            <span className="font-semibold text-foreground">
              thousands of users
            </span>
            . Over the past{" "}
            <span className="font-semibold text-foreground">4 years</span>, I’ve
            focused on full-stack development, collaborating with teams to
            deliver features efficiently and maintain high code quality.
          </motion.p>
          {/* Stats */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="grid grid-cols-3 gap-4 max-w-xl mx-auto md:mx-0 mb-10"
          >
            {[
              { value: "15+", label: "Projects" },
              { value: "Thousands", label: "Users" },
              { value: "4 Years", label: "Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 border rounded-lg bg-muted/40 backdrop-blur-sm"
              >
                <div className="text-2xl md:text-3xl font-semibold">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={6}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="h-14 px-8 bg-gradient-to-r from-black to-gray-800 text-white hover:from-black hover:to-gray-700 shadow-lg"
              >
                View Portfolio
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ExternalLink className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleDownloadResume}
                variant="outline"
                size="lg"
                className="h-14 px-8 border-2 border-border bg-background/50 backdrop-blur-sm hover:bg-gray-200 transition-colors rounded-lg"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                onClick={() => scrollToSection("contact")}
                variant="ghost"
                size="lg"
                className="h-14 px-8 border-border hover:bg-gray-200 transition-colors rounded-lg"
              >
                Let's Talk →
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={fadeUp}
            custom={7}
            className="flex items-center justify-center md:justify-start gap-4"
          >
            {[
              { href: "https://github.com", icon: Github },
              { href: "https://linkedin.com", icon: Linkedin },
              { href: "mailto:john.anderson@example.com", icon: Mail },
            ].map(({ href, icon: Icon }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg border border-transparent hover:border-border hover:bg-muted transition"
              >
                <Icon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs tracking-wider uppercase mb-1">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
}
