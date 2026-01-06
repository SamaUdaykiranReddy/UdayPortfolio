import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Button } from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";
import { Label } from "./ui/Label";
import { Mail, MapPin, Phone } from "lucide-react";
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
        "hGo8MbimLVZDKZXQ0"
      );

      toast.success("Your message was sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Oops! Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, title: "Email", value: "udaykiranreddy3232@gmail.com" },
    { icon: Phone, title: "Phone", value: "+1 7813230707" },
    { icon: MapPin, title: "Location", value: "Boston, MA" },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl mb-3 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-foreground mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-16 max-w-6xl mx-auto mb-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once:true,amount:0.5}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new opportunities. Whether
              you have a question or just want to say hello, feel free to reach
              out.
            </p>

            <div className="space-y-6 pt-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <Icon className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {item.title}
                      </div>
                      <div>{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                    placeholder="your.email@example.com"
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
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="resize-none"
                />
              </div>

              {/* AlertDialog Wraps the Submit Button */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    type="button"
                    className="h-6 px-3 bg-indigo-500 hover:bg-black hover:text-white text-white transition-colors rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Send Message?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to send this message? You won’t be
                      able to edit it after sending.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel disabled={isSubmitting}>
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={handleSubmit}>
                      Yes, Send
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center pt-12 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 UdaykiranReddy Sama. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
