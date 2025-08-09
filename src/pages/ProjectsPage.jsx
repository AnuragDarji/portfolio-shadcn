import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link as LinkIcon } from "lucide-react";
import Img1 from "../assets/Project/work-1.jpg";
import Img2 from "../assets/Project/work-2.jpg";
import Img3 from "../assets/Project/work-3.jpg";
import Img4 from "../assets/Project/work-4.jpg";
import Img5 from "../assets/Project/work-5.jpg";
import Img6 from "../assets/Project/work-6.jpg";
import Img7 from "../assets/Project/work-7.jpg";
import Img8 from "../assets/Project/work-8.jpg";
import Img9 from "../assets/Project/work-9.jpg";

// Sample project data - some without links
const projectsData = [
  {
    id: 1,
    title: "ApplyWize",
    description:
      "APPLYWIZE simplifies higher education admissions for students aspiring to study abroad.",
    category: "Web",
    image: Img1,
    tech: ["React", "Antd", "Sass", "TypeScript", "Django"],
    githubLink: "",
    liveLink: "https://applywize.com/",
  },
  {
    id: 7,
    title: "SkyEduco",
    description:
      "Responsive education portal guiding students abroad with personalized university matching, streamlined applications, and real-time tracking of progress.",
    category: "Web",
    image: Img9,
    tech: ["React", "Antd", "Sass", "TypeScript", "Django"],
    githubLink: "",
    liveLink: "https://skyeduco.com/",
  },
  {
    id: 8,
    title: "Xamera",
    description:
      "Responsive education portal guiding students abroad with personalized university matching, streamlined applications, and real-time tracking of progress.",
    category: "Web",
    image: Img7,
    tech: ["React", "Antd", "Sass", "TypeScript", "Django"],
    githubLink: "",
    liveLink: "https://xamera.org/",
  },
  {
    id: 9,
    title: "My Store",
    description:
      "Responsive education portal guiding students abroad with personalized university matching, streamlined applications, and real-time tracking of progress.",
    category: "Web",
    image: Img8,
    tech: ["React", "Sass", "Redux"],
    githubLink: "https://github.com/AnuragDarji/MyStore",
    liveLink: "https://my-store-nine-ecru.vercel.app/",
  },
  {
    id: 2,
    title: "Mobile HR App",
    description: "React Native app for employee attendance and HR management.",
    category: "Mobile",
    image: Img6,
    tech: ["React Native", "Expo", "Django"],
    githubLink: null, // No GitHub link
    liveLink: null,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio with animations,smooth scrolling and responsive.",
    category: "Web",
    image: Img5,
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/AnuragDarji/Portfolio",
    liveLink: "https://anuragdarji.github.io/Portfolio/", // No live link
  },
  {
    id: 4,
    title: "Hamprigo Industries",
    description: "An intelligent chatbot for customer support.",
    category: "Web",
    image: Img2,
    tech: ["React JS", "Antd"],
    githubLink: null, // No GitHub link
    liveLink: "https://hamprigoindustries.com/", // No live link
  },
  {
    id: 5,
    title: "Weather App",
    description: "An intelligent chatbot for customer support.",
    category: "Web",
    image: Img3,
    tech: ["React JS"],
    githubLink: "https://github.com/AnuragDarji/weather-app", // No GitHub link
    liveLink: "https://anuragdarji.github.io/weather-app/", // No live link
  },
  {
    id: 6,
    title: "Quiz App",
    description: "A quiz app where users select answers from multiple-choice options and view their final score at the end.",
    category: "Web",
    image: Img4,
    tech: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/AnuragDarji/Quiz-App", // No GitHub link
    liveLink: "https://anuragdarji.github.io/Quiz-App/", // No live link
  },
];

const categories = ["All", "Web", "Mobile"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">
              Projects
            </span>
          </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my work across different technologies and platforms.
        </p>
      </div>

      {/* Tabs for categories */}
      <Tabs
        defaultValue="All"
        onValueChange={setSelectedCategory}
        className="w-full flex flex-col items-center mb-16"
      >
        <TabsList className="mb-8 flex flex-wrap justify-center bg-secondary/20 p-1 rounded-full">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="px-6 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Project Cards */}
        <TabsContent value={selectedCategory} className="w-full">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden border border-border/50 hover:border-primary/10 group p-0 dark:bg-gray-800/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-58 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="rounded-full"
                          disabled={!project.githubLink}
                          asChild={!!project.githubLink}
                        >
                          {project.githubLink ? (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4 mr-2" /> Code
                            </a>
                          ) : (
                            <>
                              <Github className="w-4 h-4 mr-2" /> Code
                            </>
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          disabled={!project.liveLink}
                          asChild={!!project.liveLink}
                        >
                          {project.liveLink ? (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkIcon className="w-4 h-4 mr-2" /> Live
                            </a>
                          ) : (
                            <>
                              <LinkIcon className="w-4 h-4 mr-2" /> Live
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="font-mono text-xs px-2 py-1"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Social Links */}
      <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-border/50">
        <h3 className="text-lg font-medium text-muted-foreground">
          Find more on
        </h3>
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6"
            asChild
          >
            <a
              href="https://github.com/AnuragDarji"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" /> GitHub
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-6"
            asChild
          >
            <a
              href="https://linktr.ee/anuragdarji"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon className="w-5 h-5 mr-2" /> Linktree
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
