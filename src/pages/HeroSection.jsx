import { Code, ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import img from "../assets/grid2.svg";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "250px 250px",
          maskImage: "radial-gradient(ellipse at center, white, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, white, transparent)",
        }}
      ></div>

      <div className="container relative z-10 px-6">
        <div className="mx-auto max-w-2xl text-center">
          {/* Animated greeting */}
          <div className="mb-4 text-lg font-medium text-primary/80 animate-fade-in">
            Hello, I'm
          </div>

          {/* Name */}
          <h1
            className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-foreground"
            style={{ fontFamily: "Fira Code" }}
          >
            <span className="bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
              Anurag Darji
            </span>
          </h1>

          {/* Title */}
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            <span className="font-semibold text-foreground">
              Frontend Developer
            </span>{" "}
            specializing in{" "}
            <span className="relative whitespace-nowrap text-primary">
              <span className="relative">React.js</span>
            </span>{" "}
            and modern web technologies
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-primary hover:bg-primary/90"
            >
              <Link to="/projects">
                View My Work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="text-foreground border-muted-foreground hover:bg-muted/20 hover:text-primary"
            >
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:bg-muted/20 hover:text-primary"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:bg-muted/20 hover:text-primary"
            >
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:bg-muted/20 hover:text-primary"
            >
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          {/* <div className="mt-16 animate-bounce">
            <div className="h-6 w-4 rounded-full border-2 border-muted-foreground"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
