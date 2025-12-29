"use client"
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Zap, Users, Globe } from "lucide-react";
import { data } from "@/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Terminal,
  Zap,
  Users,
  Globe,
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
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
              // About Me
            </span>
            <h2 className="section-title">{data.personal.name}</h2>
            <p className="section-subtitle mx-auto">{data.personal.tagline}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border" />
                <div className="absolute inset-4 rounded-xl bg-secondary/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <Terminal className="w-12 h-12 text-primary" />
                    </div>
                    <div className="font-mono text-sm text-muted-foreground">
                      <span className="text-primary">&gt;</span>{" "}
                      {data.personal.role}
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border border-primary/20 rounded-lg rotate-12" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary/20 rounded-lg -rotate-12" />
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {data.personal.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {data.personal.stats.yearsExperience}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Coding
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {data.personal.stats.projects}
                  </div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {data.personal.stats.openSource}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Open Source
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {data.highlights.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Terminal;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="group p-6 rounded-xl bg-card border border-border hover-glow cursor-default"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
