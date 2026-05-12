import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/Card";
import { Button } from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import { Label } from "./ui/Label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/AlertDialog";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_wwloxyw",
        "template_jszfzgo",
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        "hGo8MbimLVZDKZXQ0",
      );
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "udaykiranreddy3232@gmail.com" },
    { icon: Phone, title: "Phone", value: "+1 (781) 323-0707" },
    { icon: MapPin, title: "Location", value: "Boston, MA" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-sm text-primary uppercase tracking-wider font-medium">
              Contact
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight">Get In Touch</h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto mb-24">
          {/* Left — Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Card className="h-full p-2">
              <CardHeader>
                <CardTitle className="text-xl">Contact Details</CardTitle>
                <CardDescription>
                  I'm always open to new opportunities, projects, or just a
                  friendly hello.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 border border-border rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider">
                          {item.title}
                        </div>
                        <div className="text-sm font-medium">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right — Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            <Card className="h-full p-2">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        type="button"
                        size="lg"
                        className="h-12 px-8 w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-xl font-medium"
                        disabled={
                          isSubmitting ||
                          !formData.name ||
                          !formData.email ||
                          !formData.message
                        }
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Send this message?</AlertDialogTitle>
                        <AlertDialogDescription>
                          You won't be able to edit it after sending. Ready to
                          go?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel disabled={isSubmitting}>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handleSubmit}>
                          Yes, send it
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-10 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Udaykiran Reddy Sama. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
