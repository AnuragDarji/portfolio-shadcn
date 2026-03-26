import React, { useState, useEffect } from "react";
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
import API_ENDPOINTS from "@/Constant/api";

const API = API_ENDPOINTS.PROJECTS;

const categories = ["All", "Web", "Mobile"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const category = selectedCategory === "All" ? "" : selectedCategory.toLowerCase();
        const url = category ? `${API}?category=${category}` : API;
        const res = await fetch(url);
        const data = await res.json();
        setProjectsData(data.projects || []);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setProjectsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [selectedCategory]);

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
              className="px-4 sm:px-6 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white transition-all text-sm sm:text-base"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Project Cards */}
        <TabsContent value={selectedCategory} className="w-full">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">Loading projects...</p>
            </div>
          ) : projectsData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projectsData.map((project) => (
                <Card
                  key={project._id}
                  className="hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden border border-border/50 hover:border-primary/10 group flex flex-col h-full p-0 dark:bg-gray-800/50"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <CardHeader className="p-0 mb-3">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((t, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="font-mono text-xs px-2 py-1"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2 mt-auto">
                        <Button
                          size="sm"
                          className="rounded-full"
                          disabled={!project.github}
                          asChild={!!project.github}
                        >
                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <Github className="w-4 h-4 mr-2" /> Code
                            </a>
                          ) : (
                            <span className="flex items-center">
                              <Github className="w-4 h-4 mr-2" /> Code
                            </span>
                          )}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          disabled={!project.live}
                          asChild={!!project.live}
                        >
                          {project.live ? (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <LinkIcon className="w-4 h-4 mr-2" /> Live
                            </a>
                          ) : (
                            <span className="flex items-center">
                              <LinkIcon className="w-4 h-4 mr-2" /> Live
                            </span>
                          )}
                        </Button>
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
        <div className="flex gap-4 flex-wrap justify-center">
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