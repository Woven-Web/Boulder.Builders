
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// Mock data for problems
const problemsData = [
  {
    id: 1,
    title: "Urban Mobility & Transportation Access",
    description: "How might we improve transportation options for all Boulder residents, especially those without cars?",
    contributors: 8,
    contributions: 12,
    status: "APPROVED",
  },
  {
    id: 2,
    title: "Affordable Housing Solutions",
    description: "Exploring innovative approaches to increase affordable housing stock in Boulder County.",
    contributors: 5,
    contributions: 8,
    status: "APPROVED",
  },
  {
    id: 3,
    title: "Sustainable Water Management",
    description: "Developing strategies for water conservation and drought resilience in our community.",
    contributors: 4,
    contributions: 6,
    status: "APPROVED",
  },
  {
    id: 4,
    title: "Food Security for Low-Income Residents",
    description: "Addressing food deserts and access to fresh, affordable food for all Boulder residents.",
    contributors: 3,
    contributions: 4,
    status: "APPROVED",
  },
  {
    id: 5,
    title: "Wildfire Prevention & Response",
    description: "Improving community preparation, response, and recovery for wildfire events.",
    contributors: 6,
    contributions: 9,
    status: "APPROVED",
  },
  {
    id: 6,
    title: "Mental Health Resources",
    description: "Expanding access to mental health services and reducing stigma in our community.",
    contributors: 4,
    contributions: 5,
    status: "POTENTIAL",
  },
];

const Problems = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  
  // Filter problems based on search query and status
  const filteredProblems = problemsData.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || problem.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Community Problems</h1>
            <p className="text-boulder-stone-600 mb-6">
              Browse, discuss, and contribute to problems identified by the Boulder community. Together, we can find innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
                Propose a New Problem
              </Button>
              <Button variant="outline" className="border-boulder-teal-200 text-boulder-teal-700 hover:bg-boulder-teal-50 hover:text-boulder-teal-700">
                Learn About the Process
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problems List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-boulder-stone-400" size={18} />
              <Input
                type="search"
                placeholder="Search problems..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant={statusFilter === "all" ? "default" : "outline"} 
                size="sm"
                className={statusFilter === "all" ? "bg-boulder-teal-500 hover:bg-boulder-teal-600" : ""}
                onClick={() => setStatusFilter("all")}
              >
                All
              </Button>
              <Button 
                variant={statusFilter === "APPROVED" ? "default" : "outline"} 
                size="sm"
                className={statusFilter === "APPROVED" ? "bg-boulder-teal-500 hover:bg-boulder-teal-600" : ""}
                onClick={() => setStatusFilter("APPROVED")}
              >
                Approved
              </Button>
              <Button 
                variant={statusFilter === "POTENTIAL" ? "default" : "outline"} 
                size="sm"
                className={statusFilter === "POTENTIAL" ? "bg-boulder-teal-500 hover:bg-boulder-teal-600" : ""}
                onClick={() => setStatusFilter("POTENTIAL")}
              >
                Potential
              </Button>
            </div>
          </div>
          
          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProblems.map((problem) => (
              <Card key={problem.id} className="boulder-card">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                    <Badge variant="outline" className={
                      problem.status === "APPROVED" 
                        ? "bg-boulder-green-50 text-boulder-green-600 border-boulder-green-200"
                        : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
                    }>
                      {problem.status === "APPROVED" ? "Approved" : "Potential"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-boulder-stone-600">
                    {problem.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-boulder-stone-500">
                      {problem.contributors} contributors
                    </span>
                    <span className="text-sm text-boulder-stone-500">
                      {problem.contributions} contributions
                    </span>
                  </div>
                  <Link 
                    to={`/problems/${problem.id}`} 
                    className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium"
                  >
                    View details →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProblems.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No problems found</h3>
              <p className="text-boulder-stone-500">
                Try adjusting your search or propose a new problem to discuss.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Problems;
