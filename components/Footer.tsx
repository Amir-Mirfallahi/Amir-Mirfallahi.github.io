"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";
import { data } from "@/data";
import Link from "next/link";

const socialLinks = [
  { icon: Github, href: data.contact.github, label: "GitHub" },
  { icon: Linkedin, href: data.contact.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${data.contact.email}`, label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const firstName = data.personal.name.split(" ")[0];

  const MotionLink = motion.create(Link);
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <Link
                href="#"
                className="text-xl font-bold font-mono text-foreground inline-block mb-4"
              >
                <span className="text-primary">&lt;</span>
                {firstName}
                <span className="text-primary">/&gt;</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                {data.personal.role} building scalable systems with Laravel and
                Django.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {data.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={data.contact.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    Blog
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <MotionLink
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </MotionLink>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {data.personal.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500" /> using React
              & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
