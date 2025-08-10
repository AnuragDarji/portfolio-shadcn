import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import blog from "../assets/Project/work-10.jpg";
import hr from "../assets/Project/work-6.jpg";
import { useNavigate } from "react-router-dom";

export function ProjectsSection() {
  const navigate = useNavigate();
  const projects = [
    {
      title: "ApplyWize",
      description:
        "APPLYWIZE simplifies higher education admissions for students aspiring to study abroad.",
      tags: ["React", "Sass", "TypeScript", "Django"],
      githubUrl: "",
      liveUrl: "https://applywize.com/",
      image: "https://anuragdarji.github.io/Portfolio/assets/img/work-1.jpg",
    },
    {
      title: "Blog website",
      description:
        "Developed and maintained a responsive, high-performance fintech blog platform for ApplyWize.",
      tags: ["React.js", "Sass", "Django"],
      githubUrl: "",
      liveUrl: "https://blog.applywize.com/",
      image: blog,
    },
    {
      title: "HR App",
      description:
        "React Native app for employee attendance and HR management.",
      tags: ["React Native", "Expo", "Django"],
      githubUrl: "https://github.com/AnuragDarji/HR-App",
      liveUrl: "",
      image: hr,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">
              Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve
            specific problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white group"
            // onClick={() => window.open("https://linktr.ee/anuragdarji", "_blank")}
            onClick={()=> navigate("/projects")}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite 2s;
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="p-0 bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700  transition-all group overflow-hidden h-full flex flex-col shadow-sm dark:shadow-none duration-300">
      {/* Image container with always-visible badges */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges container - now always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-900/70 to-transparent">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-white/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-grow p-6">
        <CardHeader className="p-0 mb-3">
          <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 mt-1">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardFooter className="p-0 mt-auto flex justify-between gap-2">
          {project.githubUrl ? (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-700"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> Code
              </a>
            </Button>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              disabled
              className="text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 cursor-not-allowed"
            >
              <Lock className="mr-2 h-4 w-4" /> Private
            </Button>
          )}

          {project.liveUrl ? (
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-md hover:shadow-purple-500/20 transition-all"
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          ) : (
            <Button
              size="sm"
              disabled
              className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            >
              <Lock className="mr-2 h-4 w-4" /> Private
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
}
