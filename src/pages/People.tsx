
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, FileText, ListChecks } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for people
const peopleData = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Contributor",
    avatar: "JD",
    bio: "Urban planning enthusiast with a focus on sustainable transportation solutions.",
    skills: ["Research", "Policy Analysis", "Community Outreach"],
    connections: {
      problems: [
        { id: 1, title: "Urban Mobility & Transportation Access" },
        { id: 2, title: "Affordable Housing Solutions" }
      ],
      projects: [
        { id: 2, name: "Rental Rights App" }
      ]
    }
  },
  {
    id: 2,
    name: "John Smith",
    role: "Contributor",
    avatar: "JS",
    bio: "Software developer focused on civic tech and public data accessibility.",
    skills: ["Programming", "Web Development", "Data Visualization"],
    connections: {
      problems: [
        { id: 2, title: "Affordable Housing Solutions" }
      ],
      projects: []
    }
  },
  {
    id: 3,
    name: "Alex Johnson",
    role: "Curator",
    avatar: "AJ",
    bio: "Environmental scientist working on water conservation and climate resilience.",
    skills: ["Data Analysis", "Environmental Science", "Project Management"],
    connections: {
      problems: [
        { id: 1, title: "Urban Mobility & Transportation Access" },
        { id: 3, title: "Sustainable Water Management" }
      ],
      projects: [
        { id: 3, name: "Boulder Creek Watershed Monitoring" }
      ]
    }
  },
  {
    id: 4,
    name: "Sam Wilson",
    role: "Contributor",
    avatar: "SW",
    bio: "Community organizer with experience in food justice initiatives.",
    skills: ["Event Planning", "Grant Writing", "Community Engagement"],
    connections: {
      problems: [
        { id: 3, title: "Sustainable Water Management" },
        { id: 4, title: "Food Security for Low-Income Residents" }
      ],
      projects: [
        { id: 1, name: "Community Solar Gardens" }
      ]
    }
  }
];

const People = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // Get unique skills across all people
  const allSkills = Array.from(
    new Set(
      peopleData.flatMap(person => person.skills)
    )
  ).sort();
  
  // Filter people based on search query and selected skills
  const filteredPeople = peopleData.filter(person => {
    const matchesSearch = 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesSkills = selectedSkills.length === 0 || 
      selectedSkills.some(skill => person.skills.includes(skill));
    
    return matchesSearch && matchesSkills;
  });

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">People</h1>
            <p className="text-boulder-stone-600">
              Connect with contributors and curators in the Boulder community who are actively working on local problems and projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* People List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-start">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-boulder-stone-400" size={18} />
              <Input
                type="search"
                placeholder="Search people..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-sm font-medium mb-2">Filter by skill</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full md:w-auto justify-between">
                    {selectedSkills.length === 0 
                      ? "Select skills" 
                      : `${selectedSkills.length} skill${selectedSkills.length > 1 ? 's' : ''} selected`}
                    <CheckIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Skills</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {allSkills.map((skill) => (
                    <DropdownMenuCheckboxItem
                      key={skill}
                      checked={selectedSkills.includes(skill)}
                      onCheckedChange={() => toggleSkill(skill)}
                    >
                      {skill}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {selectedSkills.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {selectedSkills.map(skill => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="px-2 py-1 flex items-center gap-1"
                    >
                      {skill}
                      <button 
                        onClick={() => toggleSkill(skill)}
                        className="ml-1 rounded-full hover:bg-muted"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => setSelectedSkills([])}
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* People Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPeople.map((person) => (
              <Card key={person.id} className="boulder-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-boulder-sky-100 text-boulder-sky-500 flex items-center justify-center font-medium text-xl">
                      {person.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{person.name}</h3>
                      <Badge className={
                        person.role === "Curator"
                          ? "bg-boulder-coral-100 text-boulder-coral-700 border-boulder-coral-200"
                          : "bg-boulder-sky-100 text-boulder-sky-700 border-boulder-sky-200"
                      }>
                        {person.role}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-boulder-stone-600 mb-4">
                    {person.bio}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-1">
                      {person.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs bg-boulder-stone-100 text-boulder-stone-700 px-2 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Connections</h4>
                    <div className="space-y-2">
                      {person.connections.problems.length > 0 && (
                        <div className="flex items-center gap-2">
                          <FileText className="text-boulder-coral-500" size={16} />
                          <span className="text-sm">{person.connections.problems.length} Problems</span>
                        </div>
                      )}
                      
                      {person.connections.projects.length > 0 && (
                        <div className="flex items-center gap-2">
                          <ListChecks className="text-boulder-green-600" size={16} />
                          <span className="text-sm">{person.connections.projects.length} Projects</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-boulder-stone-200 flex justify-end">
                    <Link
                      to={`/people/${person.id}`}
                      className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium"
                    >
                      View profile →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPeople.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No people found</h3>
              <p className="text-boulder-stone-500">
                Try adjusting your search or filters.
              </p>
            </div>
          )}
          
          {/* Join CTA */}
          <div className="mt-12 bg-boulder-teal-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-medium mb-2">Join the Community</h3>
            <p className="text-boulder-stone-600 mb-4">
              Want to be featured on this page? Sign in with GitHub and start contributing to problems and projects.
            </p>
            <Button className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
              Sign In with GitHub
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default People;
