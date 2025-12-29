"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { data } from "@/data";
import Link from "next/link";
import { NavLink } from "./NavLink";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animations with framer-motion
  const MotionLink = motion.create(Link);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const firstName = data.personal.name.split(" ")[0];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <MotionLink
          href="/"
          className="text-xl font-bold font-mono text-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <span className="text-primary">&lt;</span>
          {firstName}
          <span className="text-primary">/&gt;</span>
        </MotionLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {data.navigation.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              activeClassName="nav-link-active"
              className="nav-link text-sm font-medium"
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            href={data.contact.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-sm font-medium flex items-center gap-1"
          >
            Blog
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={data.contact.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="hero" size="sm">
              Hire Me
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {data.navigation.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  activeClassName="text-foreground"
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                href={data.contact.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-1"
              >
                Blog
                <ExternalLink className="w-3 h-3" />
              </Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="hero" className="w-full mt-2">
                  Hire Me
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
