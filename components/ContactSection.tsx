"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { data } from "@/data";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: data.contact.github,
    username: "@" + data.openSource.username,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: data.contact.linkedin,
    username: data.personal.name,
  },
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${data.contact.email}`,
    username: data.contact.email,
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              // Contact
            </span>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle mx-auto">
              Have a project in mind? I'd love to hear about it.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-card border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      target={
                        link.href.startsWith("mailto") ? undefined : "_blank"
                      }
                      rel={
                        link.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{link.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {link.username}
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Blog Link */}
              <div className="p-6 rounded-2xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20">
                <h3 className="text-lg font-bold mb-2">Read My Blog</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  I write about backend development, APIs, and software
                  architecture. (Also my frontend adventures!)
                </p>
                <Link
                  href={data.contact.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="gap-2">
                    Visit Blog
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </Link>
              </div>

              {/* Availability */}
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      data.personal.availability.status === "available"
                        ? "bg-green-500 animate-pulse"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span className="font-medium">
                    {data.personal.availability.status === "available"
                      ? "Available for Work"
                      : "Limited Availability"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {data.personal.availability.message}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
