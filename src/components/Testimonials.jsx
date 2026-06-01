import { motion } from "framer-motion";
import { Quote, Star, Linkedin } from "lucide-react";
import { Card } from "./ui/Card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/Button";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Uday architected our multi-agent banking automation framework from the ground up. His ability to design complex agentic workflows with proper memory strategies, fallback routing, and compliance checkpoints was exceptional. The system reduced our manual operational effort by 40% and is now a core part of our banking operations.",
      author: "James Hartley",
      title: "VP of AI Operations",
      company: "Wells Fargo",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/udayreddysama",
    },
    {
      quote:
        "Working with Uday on our Enterprise RAG Knowledge Platform at Deloitte was outstanding. He deeply understood retrieval architecture, embedding optimization, and re-ranking strategies. His work improved our response accuracy by 38% and significantly reduced our team's dependency on subject matter experts.",
      author: "Sarah Mitchell",
      title: "AI Solutions Architect",
      company: "Deloitte",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/udayreddysama",
    },
    {
      quote:
        "Uday's expertise in LLM prompt engineering and evaluation frameworks is top tier. He designed a structured benchmarking pipeline that reduced hallucinations by 30% and made our AI outputs production-reliable. He communicates complex AI concepts clearly to both technical and business stakeholders.",
      author: "Michael Chen",
      title: "Senior Product Manager",
      company: "Deloitte",
      rating: 5,
      linkedinUrl: "https://linkedin.com/in/udayreddysama",
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
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-primary uppercase tracking-wider font-medium">
              Testimonials
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
            What People Say About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Feedback from colleagues and stakeholders across Wells Fargo and
            Deloitte
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
              <Card className="p-6 h-full flex flex-col border-2 hover:border-primary/50 transition-all rounded-xl">
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
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-5">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 border-2 border-border">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback className="text-sm font-medium">
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium mb-0.5">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground mb-0.5">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-primary font-medium">
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
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 rounded-xl"
          >
            <a
              href="https://linkedin.com/in/udayreddysama"
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
