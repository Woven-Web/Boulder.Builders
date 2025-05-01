
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// Mock data for projects
const projectsData = [
  {
    id: 1,
    name: "Community Solar Gardens",
    description: "A project to expand community-owned solar options for residents who can't install solar on their properties.",
    status: "In Progress",
    contributors: 5,
    problem: "Energy Sustainability",
    externalUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    name: "Rental Rights App",
    description: "Mobile app to help renters understand their rights and available resources in Boulder County.",
    status: "Planning",
    contributors: 3,
    problem: "Affordable Housing",
    externalUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    name: "Boulder Creek Watershed Monitoring",
    description: "Citizen science project to monitor water quality in Boulder Creek and its tributaries.",
    status: "In Progress",
    contributors: 8,
    problem: "Water Quality",
    externalUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    name: "Multi-modal Transportation Map",
    description: "Interactive map showing bike lanes, bus routes, and pedestrian paths to encourage car-free transportation.",
    status: "Planning",
    contributors: 4,
    problem: "Urban Mobility",
    externalUrl: "#",
    githubUrl: "#",
  },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter projects based on search query
  const filteredProjects = projectsData.filter(project => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           project.problem.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Community Projects</h1>
            <p className="text-boulder-stone-600 mb-6">
              Explore and contribute to active projects that are addressing challenges in the Boulder community.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search */}
          <div className="mb-8 flex items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-boulder-stone-400" size={18} />
              <Input
                type="search"
                placeholder="Search projects..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="boulder-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <Badge variant="outline" className={
                      project.status === "In Progress" 
                        ? "bg-boulder-sky-50 text-boulder-sky-600 border-boulder-sky-200"
                        : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
                    }>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-boulder-stone-500">
                    Related to: <Link to={`/problems`} className="text-boulder-teal-600 hover:underline">{project.problem}</Link>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-boulder-stone-600">{project.description}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 flex flex-col sm:flex-row gap-4 justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs bg-boulder-stone-100 hover:bg-boulder-stone-200 text-boulder-stone-700 px-3 py-1 rounded-full"
                      >
                        GitHub Repo
                      </a>
                    )}
                    {project.externalUrl && (
                      <a 
                        href={project.externalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs bg-boulder-stone-100 hover:bg-boulder-stone-200 text-boulder-stone-700 px-3 py-1 rounded-full"
                      >
                        Project Site
                      </a>
                    )}
                    <span className="text-xs bg-boulder-teal-50 text-boulder-teal-700 px-3 py-1 rounded-full">
                      {project.contributors} contributors
                    </span>
                  </div>
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium"
                  >
                    View details →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-boulder-stone-500">
                Try adjusting your search or check back soon for new projects.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
