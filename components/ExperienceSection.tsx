"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { data } from "@/data";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm mb-4 block">
              // Experience
            </span>
            <h2 className="section-title">Work History</h2>
            <p className="section-subtitle mx-auto">
              My journey as a backend-focused developer
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {data.experience.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 mb-12 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 mt-2 z-10 animate-glow" />

                {/* Content */}
                <div
                  className={`pl-16 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div
                    className={`p-6 rounded-2xl bg-card border border-border hover-glow group ${
                      index % 2 === 0 ? "md:ml-auto" : ""
                    }`}
                  >
                    {/* Header */}
                    <div
                      className={`flex flex-col gap-2 mb-4 ${
                        index % 2 === 0 ? "md:items-end" : ""
                      }`}
                    >
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div
                        className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-muted-foreground mb-4 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className={`text-sm text-muted-foreground flex items-start gap-2 ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                {index % 2 !== 0 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
