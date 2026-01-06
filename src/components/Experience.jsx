import { motion, percent } from "framer-motion";
import { Briefcase, GraduationCap, Award, ChevronRight } from "lucide-react";

import { InteractiveTimeline } from "./InteractiveTimeline";

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Product-Based Company",
      period: "2025 - Present",
      location: "Remote",
      type: "Full-time",
      description:
        "Working as a full stack developer building and maintaining scalable web applications used by real customers.",
      achievements: [
        "Developed and maintained full stack features using React and Node.js",
        "Built REST APIs and integrated third-party services for core business workflows",
        "Improved application performance and reduced page load time by ~30%",
        "Collaborated with designers and backend engineers to ship features end-to-end",
      ],
      technologies: ["ReactJs", "Node.js", "Javascript", "PostgreSQL", "AWS"],
    },
    {
      title: "Software Engineer",
      company: "Mid-Size Tech Company",
      period: "Sep 2024 - May 2025",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Contributed to frontend and backend development for internal and customer-facing applications.",
      achievements: [
        "Built reusable UI components improving development speed across the team",
        "Implemented backend APIs and database schemas for new product modules",
        "Fixed production bugs and improved system stability",
        "Participated in code reviews and agile development processes",
      ],
      technologies: ["React", "JavaScript", "Node.js", "MongoDB",],
    },
    {
      title: "Junior Software Developer",
      company: "Startup / Agency",
      period: "2020 - 2022",
      location: "Hybrid",
      type: "Full-time",
      description:
        "Started career working on web applications for multiple client projects.",
      achievements: [
        "Implemented responsive UI screens based on design specifications",
        "Integrated frontend applications with backend APIs",
        "Assisted in deploying applications to cloud environments",
        "Learned best practices for version control, testing, and clean code",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    },
  ];

  const education = [
    {
      degree: "Bachelors in Computer Science Engineering",
      school: "Lovely Professional University",
      period: "2017 - 2021",
      percent: "per:  65%",
      focus: "Computer Science & Software Engineering",
      achievements: [
        "Completed multiple academic and personal software projects",
        "Active participant in coding contests and technical events",
      ],
    },
     {
      degree: "Master's in Computer Science",
      school: "Rivier University",
      period: "2022 - 2024",
      gpa: "GPA:  3.46/4",
      focus: "Computer Science & Software Engineering",
      achievements: [
        "Completed multiple academic and personal software projects",
        "Active participant in coding contests and technical events",
      ],
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development Certification",
      year: "2021",
      issuer: "Udemy Online Course",
    },
    {
      name: "AWS Cloud Practitioner",
      year: "2022",
      issuer: "Amazon Web Services",
    },
    {
      name: "JavaScript & React Advanced Certification",
      year: "2023",
      issuer: "Professional Training Platform",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-indigo-600 uppercase tracking-wider">
              Career Journey
            </div>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-16 tracking-tight text-left">
            Professional Experience
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-indigo-600 text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl tracking-tight">Work Experience</h3>
            </div>
            <InteractiveTimeline experiences={experiences} />
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-2 bg-indigo-600 text-white">
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
                  className="p-6 border-2 border-gray-300 hover:border-indigo-600 transition-colors bg-white"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                    <div>
                      <h4 className="text-lg mb-1">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-sm text-gray-500 mt-1">{edu.gpa}</p>
                    </div>
                    <span className="text-sm text-gray-500 mt-2 lg:mt-0 whitespace-nowrap">
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
                        className="flex items-start gap-2 text-sm text-gray-600"
                      >
                        <ChevronRight className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-indigo-600" />
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
              <div className="p-2 bg-indigo-600 text-white">
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
                  className="p-5 border-2 border-gray-300 hover:border-indigo-600 transition-colors bg-white group"
                >
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="mb-1 text-sm">{cert.name}</h4>
                      <p className="text-xs text-gray-500">
                        {cert.issuer} • {cert.year}
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
