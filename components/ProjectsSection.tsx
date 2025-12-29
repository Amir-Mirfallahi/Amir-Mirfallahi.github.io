"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  ExternalLink,
  Server,
  Smartphone,
  Globe,
  Code2,
  Mic,
  Construction,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { data } from "@/data";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Mic,
  Construction,
  Smartphone,
  Globe,
  Code2,
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              // Projects
            </span>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle mx-auto">
              Real-world projects showcasing my backend development expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => {
              const IconComponent = iconMap[project.icon] || Server;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`group relative p-8 rounded-2xl bg-card border border-border hover-glow overflow-hidden ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                          >
                            <Github className="w-5 h-5" />
                          </Link>
                        )}
                        {project.demo && (
                          <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-5 h-5" />
                View More on GitHub
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
