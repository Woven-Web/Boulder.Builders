
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, MessageCircle, PlusCircle } from "lucide-react";
import EmptyState from "@/components/people/EmptyState";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Mock data for problems
const problemsData = [
  {
    id: 1,
    title: "Urban Mobility & Transportation Access",
    description: "How might we improve transportation options for all Boulder residents, especially those without cars?",
    contributors: 8,
    contributionCount: 12,
    status: "APPROVED",
    discussionCount: 15,
    lastActivity: "2025-04-28T14:30:00",
  },
  {
    id: 2,
    title: "Affordable Housing Solutions",
    description: "Exploring innovative approaches to increase affordable housing stock in Boulder County.",
    contributors: 5,
    contributionCount: 8,
    status: "APPROVED",
    discussionCount: 10,
    lastActivity: "2025-04-29T09:15:00",
  },
  {
    id: 3,
    title: "Sustainable Water Management",
    description: "Developing strategies for water conservation and drought resilience in our community.",
    contributors: 4,
    contributionCount: 6,
    status: "APPROVED",
    discussionCount: 7,
    lastActivity: "2025-04-25T16:45:00",
  },
  {
    id: 4,
    title: "Food Security for Low-Income Residents",
    description: "Addressing food deserts and access to fresh, affordable food for all Boulder residents.",
    contributors: 3,
    contributionCount: 4,
    status: "APPROVED",
    discussionCount: 5,
    lastActivity: "2025-04-27T11:20:00",
  },
  {
    id: 5,
    title: "Wildfire Prevention & Response",
    description: "Improving community preparation, response, and recovery for wildfire events.",
    contributors: 6,
    contributionCount: 9,
    status: "APPROVED",
    discussionCount: 12,
    lastActivity: "2025-04-26T14:10:00",
  },
  {
    id: 6,
    title: "Mental Health Resources",
    description: "Expanding access to mental health services and reducing stigma in our community.",
    contributors: 4,
    contributionCount: 5,
    status: "POTENTIAL",
    discussionCount: 8,
    lastActivity: "2025-04-30T10:05:00",
  },
  {
    id: 7,
    title: "Pedestrian Safety in Downtown",
    description: "Exploring ways to make downtown Boulder safer and more accessible for pedestrians.",
    contributors: 0,
    contributionCount: 0,
    status: "POTENTIAL",
    discussionCount: 3,
    lastActivity: "2025-05-01T09:30:00",
  },
  {
    id: 8,
    title: "Community Solar Expansion",
    description: "Creating more opportunities for residents to participate in community solar projects.",
    contributors: 2,
    contributionCount: 0,
    status: "POTENTIAL",
    discussionCount: 6,
    lastActivity: "2025-04-29T16:15:00",
  },
];

// Mock data for potential problem discussions
const discussionsData = [
  {
    id: 1,
    title: "Bike Lane Safety Improvements",
    description: "Discussing how we can make bike lanes safer throughout Boulder, especially on major thoroughfares.",
    author: {
      username: "cyclingadvocate",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg"
    },
    comments: 12,
    postedAt: "2025-04-30T16:45:00",
    votes: 18
  },
  {
    id: 2,
    title: "Senior Technology Access",
    description: "How can we ensure Boulder's senior population has access to and knowledge of essential technology?",
    author: {
      username: "techforall",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    comments: 8,
    postedAt: "2025-04-29T11:20:00",
    votes: 14
  },
  {
    id: 3,
    title: "Small Business Support Network",
    description: "Creating better support systems for small businesses in Boulder, especially during economic downturns.",
    author: {
      username: "localbizowner",
      avatar: "https://randomuser.me/api/portraits/women/61.jpg"
    },
    comments: 15,
    postedAt: "2025-04-28T09:15:00",
    votes: 22
  },
  {
    id: 4,
    title: "Public Art Initiative",
    description: "Exploring ways to incorporate more public art throughout Boulder neighborhoods.",
    author: {
      username: "artsforall",
      avatar: "https://randomuser.me/api/portraits/men/31.jpg"
    },
    comments: 7,
    postedAt: "2025-04-27T14:30:00",
    votes: 11
  },
];

const Problems = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [activeTab, setActiveTab] = useState<string>("approved");
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("");
  const [newDiscussionDescription, setNewDiscussionDescription] = useState("");
  const { toast } = useToast();
  
  // Mock authentication
  const isAuthenticated = true;
  
  // Filter problems based on search query and status
  const filteredProblems = problemsData.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || problem.status === statusFilter;
    const matchesTab = activeTab === "all" || 
                      (activeTab === "approved" && problem.status === "APPROVED") || 
                      (activeTab === "potential" && problem.status === "POTENTIAL");
    return matchesSearch && matchesStatus && matchesTab;
  });

  // Filter discussions based on search query
  const filteredDiscussions = discussionsData.filter(discussion => {
    return discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           discussion.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Format date for relative time display
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return "Today";
    } else if (diffInDays === 1) {
      return "Yesterday";
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInDays < 30) {
      return `${Math.floor(diffInDays / 7)} weeks ago`;
    } else {
      return date.toLocaleDateString("en-US", { month: 'short', day: 'numeric' });
    }
  };

  const handleSubmitNewDiscussion = () => {
    if (!newDiscussionTitle.trim() || !newDiscussionDescription.trim()) {
      toast({
        title: "Missing information",
        description: "Please provide both a title and description for your discussion.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would send data to an API
    toast({
      title: "Discussion submitted",
      description: "Your problem discussion has been submitted for community feedback.",
    });
    
    // Clear form fields
    setNewDiscussionTitle("");
    setNewDiscussionDescription("");
  };

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
      
      {/* Problem Tabs */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="approved" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <TabsList className="bg-boulder-teal-50">
                <TabsTrigger value="approved" className="data-[state=active]:bg-boulder-teal-500 data-[state=active]:text-white">
                  Approved Problems
                </TabsTrigger>
                <TabsTrigger value="potential" className="data-[state=active]:bg-boulder-teal-500 data-[state=active]:text-white">
                  Problem Discovery
                </TabsTrigger>
              </TabsList>
              
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-boulder-stone-400" size={18} />
                <Input
                  type="search"
                  placeholder={activeTab === "approved" ? "Search problems..." : "Search discussions..."}
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            {/* Approved Problems Tab */}
            <TabsContent value="approved" className="mt-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-heading font-bold">Approved Problems</h2>
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
                          {problem.contributionCount} contributions
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
                <EmptyState 
                  title="No problems found"
                  message="Try adjusting your search or propose a new problem to discuss."
                />
              )}
            </TabsContent>
            
            {/* Problem Discovery Tab */}
            <TabsContent value="potential" className="mt-0">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-heading font-bold">Problem Discovery Forum</h2>
              </div>
              
              {/* New Discussion Form */}
              {isAuthenticated && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-xl">Propose a New Problem</CardTitle>
                    <CardDescription>
                      Share a challenge or opportunity you've identified in the Boulder community.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Input
                        placeholder="Title for your problem discussion"
                        value={newDiscussionTitle}
                        onChange={(e) => setNewDiscussionTitle(e.target.value)}
                        className="mb-2"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Describe the problem or opportunity you've identified... What makes it important for the Boulder community?"
                        value={newDiscussionDescription}
                        onChange={(e) => setNewDiscussionDescription(e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button 
                      className="bg-boulder-teal-500 hover:bg-boulder-teal-600"
                      onClick={handleSubmitNewDiscussion}
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Submit For Discussion
                    </Button>
                  </CardFooter>
                </Card>
              )}
              
              {/* Discussion List */}
              <div className="space-y-6">
                {filteredDiscussions.map((discussion) => (
                  <Card key={discussion.id} className="boulder-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{discussion.title}</CardTitle>
                        <div className="flex items-center gap-1">
                          <Badge variant="outline" className="bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200">
                            Potential
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-boulder-stone-600 mb-4">
                        {discussion.description}
                      </CardDescription>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full overflow-hidden">
                            <img 
                              src={discussion.author.avatar} 
                              alt={discussion.author.username} 
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium">{discussion.author.username}</span>
                        </div>
                        <span className="text-sm text-boulder-stone-500">
                          Posted {formatRelativeTime(discussion.postedAt)}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4 text-boulder-stone-500" />
                          <span className="text-sm text-boulder-stone-500">{discussion.comments} comments</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-boulder-stone-500">{discussion.votes} votes</span>
                        </div>
                      </div>
                      <Link 
                        to={`/problems/discovery/${discussion.id}`} 
                        className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium"
                      >
                        Join discussion →
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {/* Empty State */}
              {filteredDiscussions.length === 0 && (
                <EmptyState 
                  title="No discussions found"
                  message="Try adjusting your search or start a new problem discussion."
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Problems;
