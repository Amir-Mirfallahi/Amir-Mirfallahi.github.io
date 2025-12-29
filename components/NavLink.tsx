"use client";
import React, { forwardRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends Omit<LinkProps, "className"> {
  className?: string;
  children?: React.ReactNode;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ children, className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const [hash, setHash] = useState("");

    useEffect(() => {
      setHash(window.location.hash);

      const handleHashChange = () => {
        setHash(window.location.hash);
        console.log('Hash changed to', window.location.hash);
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const hrefString = typeof href === "string" ? href : href.pathname ?? "";

    const isHashLink = hrefString.startsWith("#");
    const isActive = isHashLink ? hash === hrefString : pathname === hrefString;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        aria-current={isActive ? "page" : undefined}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };
