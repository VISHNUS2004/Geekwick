"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const path = usePathname();

  const linkStyle = (route: string) => ({
    color: path === route ? "#38bdf8" : "white",
    fontWeight: path === route ? "bold" : "normal",
  });

  return (
    <header>
      <nav>
        <Link href="/" style={linkStyle("/")}>Home</Link> |{" "}
        <Link href="/about" style={linkStyle("/about")}>About</Link> |{" "}
        <Link href="/contact" style={linkStyle("/contact")}>Contact</Link> |{" "}
        <Link href="/services" style={linkStyle("/services")}>Services</Link> |{" "}
        <Link href="/courses" style={linkStyle("/courses")}>Courses</Link> |{" "}
        <Link href="/trainers" style={linkStyle("/trainers")}>Trainers</Link> |{" "}
        <Link href="/dashboard" style={linkStyle("/dashboard")}>Dashboard</Link>

        {/* Toggle Button */}
        <ThemeToggle />
      </nav>
    </header>
  );
}