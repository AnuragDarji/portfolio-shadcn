import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import blog from "../assets/Project/blog.png";
import hr from "../assets/Project/hr.png";

export function ProjectsSection() {
  const projects = [
    {
      title: "ApplyWize",
      description: "APPLYWIZE simplifies higher education admissions for students aspiring to study abroad.",
      tags: ["React","Sass", "TypeScript", "Django"],
      githubUrl: "#",
      liveUrl: "#",
      image: "https://anuragdarji.github.io/Portfolio/assets/img/work-1.jpg"
    },
    {
      title: "Task Management App",
      description: "Developed and maintained a responsive, high-performance fintech blog platform for ApplyWize.",
      tags: ["React.js", "Sass", "Django"],
      githubUrl: "#",
      liveUrl: "https://blog.applywize.com/",
      image: blog,
    },
    {
      title: "HR App",
      description: "Web application that generates images using OpenAI's DALL-E model with user prompts.",
      tags: ["React", "OpenAI", "Node.js", "Cloudinary"],
      githubUrl: "#",
      liveUrl: "#",
      image: hr,
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-500">Projects</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Here are some of my recent projects. Each one was built to solve specific problems and deliver exceptional user experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="p-0 bg-white/90 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 dark:hover:border-purple-400/30 transition-all group overflow-hidden h-full flex flex-col shadow-sm dark:shadow-none">
      
      {/* Image should be at top without padding */}
      <div className="relative h-68 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient & Tags on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/0 dark:from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, i) => (
              <Badge 
                key={i} 
                variant="secondary" 
                className="bg-white/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Card content with padding */}
      <div className="flex flex-col flex-grow p-4">
        <CardHeader className="p-0 mb-2">
          <CardTitle className="text-gray-900 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow p-0 mt-2">
          {/* Additional content can go here if needed */}
        </CardContent>

        <CardFooter className="p-0 mt-4 flex justify-between">
          <Button 
            asChild 
            variant="ghost" 
            size="sm" 
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </a>
          </Button>
          <Button 
            asChild 
            size="sm" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
