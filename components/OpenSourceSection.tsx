"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, GitFork, Star, GitPullRequest, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { data } from "@/data";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitFork,
  Star,
  GitPullRequest,
  Users,
};

export const OpenSourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary font-mono text-sm mb-4 block">// Open Source</span>
            <h2 className="section-title">GitHub Activity</h2>
            <p className="section-subtitle mx-auto mb-12">
              Contributing to the developer community through open source
            </p>
          </motion.div>

          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {data.openSource.stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon] || GitFork;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover-glow group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* GitHub Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative p-8 rounded-2xl bg-card border border-border hover-glow overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* GitHub Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border-2 border-primary/30">
                <Github className="w-12 h-12 text-primary" />
              </div>

              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold mb-2">{data.openSource.username}</h3>
                <p className="text-muted-foreground mb-4">
                  {data.openSource.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {data.openSource.tags.map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              </div>

              <Link
                href={data.contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="gap-2">
                  <Github className="w-5 h-5" />
                  View Profile
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};