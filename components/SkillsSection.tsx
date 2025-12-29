"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Database, Container, Code } from "lucide-react";
import { data } from "@/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Database,
  Container,
  Code,
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              // Skills
            </span>
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle mx-auto">
              Technologies and tools I use to build robust, scalable
              applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.skills.map((category, categoryIndex) => {
              const IconComponent = iconMap[category.icon] || Server;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + categoryIndex * 0.1,
                  }}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover-glow"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">
                          {category.title}
                        </h3>
                        {category.badge && (
                          <span className="text-xs text-muted-foreground font-mono">
                            ({category.badge})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay:
                              0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground font-mono">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={
                                isInView ? { width: `${skill.level}%` } : {}
                              }
                              transition={{
                                duration: 1,
                                delay:
                                  0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                                ease: "easeOut",
                              }}
                              className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
