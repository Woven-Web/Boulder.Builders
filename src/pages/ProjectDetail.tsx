
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Github, Globe, ArrowLeft, Users, Calendar, MessageSquare } from "lucide-react";

// Mock data for specific project
const projectsData = [
  {
    id: "1",
    name: "Community Solar Gardens",
    description: "A project to expand community-owned solar options for residents who can't install solar on their properties.",
    longDescription: "The Community Solar Gardens project aims to create accessible, community-owned solar energy options for Boulder residents who cannot install solar panels on their own properties, whether due to renting, living in multi-family housing, or having unsuitable roofs. This initiative will establish shared solar arrays in suitable locations across the community, allowing residents to purchase or subscribe to portions of the generated electricity, reducing their energy bills while supporting renewable energy development in Boulder.\n\nBy implementing this model, we can democratize access to solar energy, reduce our community's carbon footprint, create local jobs, and build energy resilience.",
    status: "In Progress",
    contributors: 5,
    problem: "Energy Sustainability",
    problemId: "7",
    externalUrl: "https://example.com/community-solar",
    githubUrl: "https://github.com/example/community-solar",
    license: "MIT",
    startDate: "2024-03-15",
    updates: [
      {
        date: "2024-04-28",
        title: "Site selection completed",
        content: "We've finalized our first two locations for community solar installations after extensive surveys and community input."
      },
      {
        date: "2024-04-15",
        title: "Partnership with local utility",
        content: "Secured initial agreement with Boulder utility company to support grid integration for community solar projects."
      },
      {
        date: "2024-03-30",
        title: "Community information session",
        content: "Held our first public information session with over 45 attendees expressing interest in participating."
      }
    ],
    team: [
      {
        id: "1",
        name: "Maria Rodriguez",
        role: "Project Lead",
        avatar: "/placeholder.svg"
      },
      {
        id: "2",
        name: "David Chen",
        role: "Solar Engineer",
        avatar: "/placeholder.svg"
      },
      {
        id: "3",
        name: "Aisha Johnson",
        role: "Community Liaison",
        avatar: "/placeholder.svg"
      },
      {
        id: "4",
        name: "James Wilson",
        role: "Financial Analyst",
        avatar: "/placeholder.svg"
      },
      {
        id: "5",
        name: "Leila Patel",
        role: "Policy Advisor",
        avatar: "/placeholder.svg"
      }
    ],
    discussions: [
      {
        id: "1",
        title: "Financing models for community members",
        author: "James Wilson",
        date: "2024-04-25",
        replies: 12,
        preview: "I've been researching different financing options that would make this accessible to lower-income residents..."
      },
      {
        id: "2",
        title: "Potential partnership with local schools",
        author: "Aisha Johnson",
        date: "2024-04-23",
        replies: 8,
        preview: "Several schools have expressed interest in hosting solar gardens and incorporating them into their curriculum..."
      },
      {
        id: "3",
        title: "Technical specifications for first installation",
        author: "David Chen",
        date: "2024-04-20",
        replies: 15,
        preview: "Based on our site surveys, I'm proposing the following panel configuration and capacity..."
      }
    ],
    relatedProjects: [
      {
        id: "4",
        name: "Boulder Energy Efficiency Program",
        status: "Active"
      },
      {
        id: "6",
        name: "Community Power Cooperative",
        status: "Planning"
      }
    ]
  },
  {
    id: "2",
    name: "Rental Rights App",
    description: "Mobile app to help renters understand their rights and available resources in Boulder County.",
    longDescription: "The Rental Rights App project aims to develop a comprehensive mobile application that educates renters about their legal rights and connects them with resources in Boulder County. Many renters, especially students and newcomers to the area, are unaware of local tenant protections, fair housing laws, and available assistance programs.\n\nThis user-friendly app will provide accessible information about rental regulations, step-by-step guidance for common housing issues, directory of local tenant resources, multilingual support, and notification tools for important deadlines and policy changes.",
    status: "Planning",
    contributors: 3,
    problem: "Affordable Housing",
    problemId: "2",
    externalUrl: "https://example.com/rental-rights",
    githubUrl: "https://github.com/example/rental-rights-app",
    license: "GPL-3.0",
    startDate: "2024-04-01",
    updates: [
      {
        date: "2024-04-26",
        title: "Initial wireframes completed",
        content: "First draft of app interface wireframes ready for community feedback."
      },
      {
        date: "2024-04-10",
        title: "Partnership with Legal Aid",
        content: "Boulder County Legal Aid has agreed to provide content review and legal accuracy checks."
      }
    ],
    team: [
      {
        id: "6",
        name: "Taylor Jackson",
        role: "Project Manager",
        avatar: "/placeholder.svg"
      },
      {
        id: "7",
        name: "Sophia Martinez",
        role: "UX Designer",
        avatar: "/placeholder.svg"
      },
      {
        id: "8",
        name: "Raj Patel",
        role: "Mobile Developer",
        avatar: "/placeholder.svg"
      }
    ],
    discussions: [
      {
        id: "4",
        title: "App feature prioritization",
        author: "Taylor Jackson",
        date: "2024-04-25",
        replies: 7,
        preview: "Based on our initial research, I think we should prioritize these key features for our MVP..."
      },
      {
        id: "5",
        title: "User research findings",
        author: "Sophia Martinez",
        date: "2024-04-22",
        replies: 5,
        preview: "After interviewing 15 renters in different situations, these are the common pain points we need to address..."
      }
    ],
    relatedProjects: [
      {
        id: "8",
        name: "Affordable Housing Database",
        status: "In Progress"
      }
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Find the project based on the ID
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <p className="mt-4 text-boulder-stone-600">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild className="mt-6">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to projects
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Project header */}
      <section className="bg-boulder-teal-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm text-boulder-teal-700 hover:text-boulder-teal-800 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className={
                  project.status === "In Progress" 
                    ? "bg-boulder-sky-50 text-boulder-sky-600 border-boulder-sky-200"
                    : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
                }>
                  {project.status}
                </Badge>
                <span className="text-sm text-boulder-stone-500">Started {new Date(project.startDate).toLocaleDateString()}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-bold">{project.name}</h1>
              <p className="mt-2 text-boulder-stone-600">
                Related to: <Link to={`/problems/${project.problemId}`} className="text-boulder-teal-600 hover:underline">{project.problem}</Link>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-1 h-4 w-4" />
                    GitHub Repo
                  </a>
                </Button>
              )}
              {project.externalUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Globe className="mr-1 h-4 w-4" />
                    Project Site
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Project content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 md:grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="discussion" className="relative">
                Discussion
                <span className="absolute top-0 right-1 -mt-1 bg-boulder-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {project.discussions.length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="related">Related</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>About This Project</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none text-boulder-stone-700">
                        {project.longDescription.split("\n\n").map((paragraph, idx) => (
                          <p key={idx} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                    </CardContent>
                    {project.license && (
                      <CardFooter className="border-t pt-4">
                        <p className="text-sm text-boulder-stone-500">
                          License: <span className="font-medium">{project.license}</span>
                        </p>
                      </CardFooter>
                    )}
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-boulder-stone-500 mb-1">Status</h3>
                        <p className="font-medium">{project.status}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-boulder-stone-500 mb-1">Started</h3>
                        <p className="font-medium">{new Date(project.startDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-boulder-stone-500 mb-1">Contributors</h3>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-boulder-stone-500 mr-2" />
                          <span>{project.contributors} active contributors</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-boulder-stone-500 mb-1">Related Problem</h3>
                        <Link 
                          to={`/problems/${project.problemId}`} 
                          className="text-boulder-teal-600 hover:underline font-medium"
                        >
                          {project.problem}
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Team Tab */}
            <TabsContent value="team">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {project.team.map((member) => (
                  <Card key={member.id}>
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-16 w-16 mb-2">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="font-medium text-lg">{member.name}</h3>
                        <p className="text-sm text-boulder-stone-500">{member.role}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-center border-t">
                      <Button variant="ghost" size="sm">View Profile</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Updates Tab */}
            <TabsContent value="updates">
              <Card>
                <CardHeader>
                  <CardTitle>Project Timeline</CardTitle>
                  <CardDescription>Recent updates and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative pl-6 border-l border-boulder-stone-200">
                    {project.updates.map((update, idx) => (
                      <div 
                        key={idx} 
                        className={`mb-8 relative ${idx === project.updates.length - 1 ? "" : ""}`}
                      >
                        <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-boulder-teal-100 border-2 border-boulder-teal-500"></div>
                        <div className="flex items-center mb-2">
                          <CalendarIcon className="mr-2 h-4 w-4 text-boulder-stone-400" />
                          <span className="text-sm text-boulder-stone-500">{new Date(update.date).toLocaleDateString()}</span>
                        </div>
                        <h3 className="text-lg font-medium">{update.title}</h3>
                        <p className="mt-1 text-boulder-stone-600">{update.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Discussion Tab */}
            <TabsContent value="discussion">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-medium">Project Discussions</h3>
                  <Button>Start New Discussion</Button>
                </div>
                
                {project.discussions.map((discussion) => (
                  <Card key={discussion.id} className="hover:border-boulder-teal-200 transition-colors">
                    <CardHeader className="pb-2">
                      <Link to={`#`} className="hover:text-boulder-teal-700">
                        <CardTitle className="text-lg">{discussion.title}</CardTitle>
                      </Link>
                      <CardDescription className="flex items-center gap-2">
                        Started by {discussion.author} • {new Date(discussion.date).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-boulder-stone-700">{discussion.preview}</p>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <div className="flex items-center text-sm text-boulder-stone-500">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {discussion.replies} replies
                      </div>
                      <Button variant="ghost" size="sm">
                        View Discussion →
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {/* Related Tab */}
            <TabsContent value="related">
              <div className="space-y-8">
                {/* Related Problems */}
                <div>
                  <h3 className="text-xl font-medium mb-4">Related Problems</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        <Link 
                          to={`/problems/${project.problemId}`}
                          className="text-boulder-teal-600 hover:text-boulder-teal-700"
                        >
                          {project.problem}
                        </Link>
                      </CardTitle>
                      <CardDescription>
                        This project directly addresses this community problem
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                
                {/* Related Projects */}
                {project.relatedProjects && project.relatedProjects.length > 0 && (
                  <div>
                    <h3 className="text-xl font-medium mb-4">Related Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.relatedProjects.map((relatedProject) => (
                        <Card key={relatedProject.id}>
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">
                                <Link 
                                  to={`/projects/${relatedProject.id}`}
                                  className="text-boulder-teal-600 hover:text-boulder-teal-700"
                                >
                                  {relatedProject.name}
                                </Link>
                              </CardTitle>
                              <Badge variant="outline" className={
                                relatedProject.status === "In Progress" || relatedProject.status === "Active"
                                  ? "bg-boulder-sky-50 text-boulder-sky-600 border-boulder-sky-200"
                                  : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
                              }>
                                {relatedProject.status}
                              </Badge>
                            </div>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Related Events - Could be added in the future */}
                <div>
                  <h3 className="text-xl font-medium mb-4">Upcoming Events</h3>
                  <Card className="bg-boulder-stone-50">
                    <CardContent className="pt-6 text-center">
                      <Calendar className="h-12 w-12 mx-auto mb-2 text-boulder-stone-400" />
                      <p className="text-boulder-stone-600">No upcoming events related to this project.</p>
                      <Button variant="outline" className="mt-4">
                        Browse Calendar
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
