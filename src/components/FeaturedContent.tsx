
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

// Mock data for featured problems
const featuredProblems = [
  {
    id: 1,
    title: "Urban Mobility & Transportation Access",
    description: "How might we improve transportation options for all Boulder residents, especially those without cars?",
    contributions: 12,
    status: "Active",
  },
  {
    id: 2,
    title: "Affordable Housing Solutions",
    description: "Exploring innovative approaches to increase affordable housing stock in Boulder County.",
    contributions: 8,
    status: "Active",
  },
  {
    id: 3,
    title: "Sustainable Water Management",
    description: "Developing strategies for water conservation and drought resilience in our community.",
    contributions: 6,
    status: "Active",
  }
];

// Mock data for featured projects
const featuredProjects = [
  {
    id: 1,
    name: "Community Solar Gardens",
    description: "A project to expand community-owned solar options for residents who can't install solar on their properties.",
    status: "In Progress",
    contributors: 5,
  },
  {
    id: 2,
    name: "Rental Rights App",
    description: "Mobile app to help renters understand their rights and available resources in Boulder County.",
    status: "Planning",
    contributors: 3,
  }
];

const FeaturedContent = () => {
  return (
    <section className="py-16 bg-boulder-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold mb-12 text-center">Featured Community Work</h2>
        
        {/* Featured Problems */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-semibold">Active Problems</h3>
            <Link to="/problems" className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium">
              View all problems →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProblems.map((problem) => (
              <Card key={problem.id} className="boulder-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{problem.title}</CardTitle>
                    <Badge variant="outline" className="bg-boulder-green-50 text-boulder-green-600 border-boulder-green-200">
                      {problem.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-boulder-stone-600">
                    {problem.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <span className="text-sm text-boulder-stone-500">
                    {problem.contributions} contributions
                  </span>
                  <Link to={`/problems/${problem.id}`} className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium">
                    Explore →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Featured Projects */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-semibold">Active Projects</h3>
            <Link to="/projects" className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium">
              View all projects →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="boulder-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{project.name}</CardTitle>
                    <Badge variant="outline" className="bg-boulder-sky-50 text-boulder-sky-600 border-boulder-sky-200">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-boulder-stone-600">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <span className="text-sm text-boulder-stone-500">
                    {project.contributors} contributors
                  </span>
                  <Link to={`/projects/${project.id}`} className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium">
                    Learn more →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
