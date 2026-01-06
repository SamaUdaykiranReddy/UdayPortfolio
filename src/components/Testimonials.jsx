import { motion } from "framer-motion";
import { Quote, Star, Linkedin } from "lucide-react";
import { Card } from "./ui/Card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/Button";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with Uday was a great experience. He quickly understood our project requirements and delivered high-quality code on time. His positive attitude and willingness to learn made him a valuable member of our team.",
      author: "Chandu",
      title: "Frontend Lead",
      company: "Tek AI",
      rating: 5,
      linkedinUrl: "https://linkedin.com",
    },
    {
      quote:
        "Uday contributed significantly to our web application. He implemented features efficiently and was always open to feedback. His collaborative mindset and problem-solving skills were impressive for a developer with only a few years of experience.",
      author: "Navya Choudary",
      title: "Project Manager",
      company: "GenX AI",
      rating: 5,
      linkedinUrl: "https://linkedin.com",
    },
    {
      quote:
        "Uday has shown great growth as a developer. He quickly adapts to new technologies, writes clean code, and communicates clearly with the team. I’m confident he will continue to make a strong impact in any project he joins.",
      author: "Sri",
      title: "Software Engineer",
      company: "GenX AI",
      rating: 5,
      linkedinUrl: "https://linkedin.com",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-primary uppercase tracking-wider">
              Testimonials
            </div>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight text-left">
            What People Say About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-16">
            Feedback from teammates, mentors, and clients during my journey as a
            developer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col border-2 hover:border-foreground transition-all">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="h-8 w-8 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t-2 border-border pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-border">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium mb-0.5">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground mb-1">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="flex-shrink-0"
                    >
                      <a
                        href={testimonial.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            View more recommendations on LinkedIn
          </p>
          <Button asChild variant="outline" size="lg" className="border-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              View LinkedIn Profile
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
