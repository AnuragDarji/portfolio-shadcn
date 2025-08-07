import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "A full-featured online store with payment integration",
      category: "web",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "2",
      title: "Mobile Fitness App",
      description: "Workout tracking and nutrition planning application",
      category: "mobile",
      tags: ["React Native", "Firebase"],
    },
    {
      id: "3",
      title: "Data Analytics Dashboard",
      description: "Real-time data visualization for business metrics",
      category: "data",
      tags: ["Python", "D3.js", "SQL"],
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "Responsive personal portfolio with project showcase",
      category: "web",
      tags: ["Next.js", "Tailwind CSS"],
    },
    {
      id: "5",
      title: "AI Chatbot",
      description: "Customer support chatbot with natural language processing",
      category: "ai",
      tags: ["Python", "TensorFlow", "NLP"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "data", label: "Data Science" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 mb-8">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.id}
              value={category.id}
              onClick={() => setActiveTab(category.id)}
              className="py-2 px-4 rounded-md transition-colors"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <TabsContent key={project.id} value={activeTab}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default ProjectsPage;