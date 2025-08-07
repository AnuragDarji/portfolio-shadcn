import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      tags: ["React", "Node.js", "Stripe", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/images/ecommerce.jpg"
    },
    {
      title: "Task Management App",
      description: "Productivity application with real-time collaboration features and drag-and-drop interface.",
      tags: ["Next.js", "Firebase", "TypeScript", "DnD"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/images/taskapp.jpg"
    },
    {
      title: "AI Image Generator",
      description: "Web application that generates images using OpenAI's DALL-E model with user prompts.",
      tags: ["React", "OpenAI", "Node.js", "Cloudinary"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/images/ai-generator.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Projects</span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Here are some of my recent projects. Each one was built to solve specific problems and deliver exceptional user experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800/50 hover:text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-400/30 transition-all group overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, i) => (
              <Badge 
                key={i} 
                variant="secondary" 
                className="bg-gray-800/80 text-gray-300 border-gray-700 hover:bg-gray-700"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        {/* Additional content can go here if needed */}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button asChild variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Code
          </a>
        </Button>
        <Button asChild size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}