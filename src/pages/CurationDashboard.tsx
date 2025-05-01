
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon, XIcon, FlagIcon, UserPlus } from "lucide-react";

// Mock data for items needing curation
const pendingContributions = [
  {
    id: 1,
    type: "IDEA",
    title: "Community Garden in North Boulder",
    description: "Proposal to convert unused lot on Broadway into a community garden with educational programs.",
    author: "Maya Rodriguez",
    authorId: 12,
    problem: "Food Sustainability",
    problemId: 5,
    submittedAt: "2025-04-30T09:15:00"
  },
  {
    id: 2,
    type: "RESEARCH",
    title: "Impact of Wildfire Smoke on Boulder Air Quality",
    description: "Analysis of air quality measurements during 2020-2024 wildfire seasons and health implications.",
    author: "Dr. James Chen",
    authorId: 8,
    problem: "Climate Resilience",
    problemId: 4,
    submittedAt: "2025-04-29T14:30:00"
  }
];

const pendingProblems = [
  {
    id: 101,
    title: "Electric Vehicle Infrastructure",
    description: "Boulder needs more EV charging stations to support transition to electric vehicles, especially in residential areas.",
    author: "Taylor Johnson",
    authorId: 17,
    submittedAt: "2025-04-28T11:20:00"
  },
  {
    id: 102,
    title: "Youth Mental Health Services",
    description: "There's a growing need for accessible mental health services for teens and young adults in Boulder County.",
    author: "Robin Garcia",
    authorId: 23,
    submittedAt: "2025-04-27T16:45:00"
  }
];

const pendingEvents = [
  {
    id: 201,
    name: "Boulder Creek Restoration Day",
    description: "Community volunteer event to remove invasive species and plant native vegetation along Boulder Creek.",
    organizer: "Boulder Watershed Collective",
    organizerId: 5,
    date: "2025-05-15T09:00:00",
    location: "Boulder Creek Path (Eben G. Fine Park)",
    submittedAt: "2025-04-29T10:30:00"
  }
];

const flaggedContent = [
  {
    id: 301,
    type: "COMMUNICATION",
    content: "This comment contains inappropriate language that violates community guidelines.",
    author: "Anonymous User",
    authorId: 42,
    reporter: "Lisa Thompson",
    reporterId: 7,
    reason: "Inappropriate language",
    reportedAt: "2025-04-30T08:15:00"
  }
];

const promotionCandidates = [
  {
    id: 401,
    name: "Michael Stevens",
    username: "mike_s",
    contributions: 7,
    joinedAt: "2025-03-15T00:00:00",
    currentRole: "COMMUNITY"
  },
  {
    id: 402,
    name: "Emma Davis",
    username: "em_davis",
    contributions: 5,
    joinedAt: "2025-03-20T00:00:00",
    currentRole: "COMMUNITY"
  }
];

const CurationDashboard = () => {
  const [activeTab, setActiveTab] = useState("contributions");
  
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-heading font-bold">Curation Dashboard</h1>
                <p className="text-boulder-stone-600">
                  Manage community content and maintain platform quality.
                </p>
              </div>
              <Badge variant="outline" className="bg-boulder-green-50 text-boulder-green-700 border-boulder-green-200 px-4 py-1.5">
                Curator Access
              </Badge>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs 
              defaultValue="contributions" 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <TabsList className="grid grid-cols-5 gap-2">
                  <TabsTrigger value="contributions" className="relative">
                    Contributions
                    {pendingContributions.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-boulder-coral-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {pendingContributions.length}
                      </span>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="problems" className="relative">
                    Problems
                    {pendingProblems.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-boulder-coral-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {pendingProblems.length}
                      </span>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="events" className="relative">
                    Events
                    {pendingEvents.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-boulder-coral-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {pendingEvents.length}
                      </span>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="flags" className="relative">
                    Flags
                    {flaggedContent.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-boulder-coral-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {flaggedContent.length}
                      </span>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="users" className="relative">
                    Users
                    {promotionCandidates.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-boulder-coral-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {promotionCandidates.length}
                      </span>
                    )}
                  </TabsTrigger>
                </TabsList>
              </div>
              
              {/* Contributions Tab */}
              <TabsContent value="contributions">
                <h2 className="text-xl font-semibold mb-4">Pending Contributions</h2>
                
                {pendingContributions.length > 0 ? (
                  <div className="space-y-4">
                    {pendingContributions.map(contribution => (
                      <Card key={contribution.id} className="boulder-card">
                        <CardHeader className="pb-2">
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge variant="secondary" className="bg-boulder-teal-50 text-boulder-teal-700 border-none">
                              {contribution.type.replace(/_/g, ' ')}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{contribution.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-boulder-stone-600 mb-4">{contribution.description}</p>
                          <div className="text-sm text-boulder-stone-500 space-y-1">
                            <p>Author: <span className="font-medium">{contribution.author}</span></p>
                            <p>Problem: <a href={`/problems/${contribution.problemId}`} className="text-boulder-teal-600 hover:underline">{contribution.problem}</a></p>
                            <p>Submitted: {formatDate(contribution.submittedAt)}</p>
                          </div>
                          
                          <div className="mt-6 flex flex-wrap gap-3 justify-end">
                            <Button variant="outline" className="bg-boulder-stone-50 hover:bg-boulder-stone-100">
                              View Full Content
                            </Button>
                            <Button variant="outline" className="border-boulder-coral-200 text-boulder-coral-700 hover:bg-boulder-coral-50 hover:text-boulder-coral-800">
                              <XIcon className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                            <Button className="bg-boulder-green-600 hover:bg-boulder-green-700">
                              <CheckIcon className="h-4 w-4 mr-2" />
                              Approve
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No pending contributions</h3>
                    <p className="text-boulder-stone-500">
                      All contributions have been reviewed. Check back later for new submissions.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* Problems Tab */}
              <TabsContent value="problems">
                <h2 className="text-xl font-semibold mb-4">Potential Problems</h2>
                
                {pendingProblems.length > 0 ? (
                  <div className="space-y-4">
                    {pendingProblems.map(problem => (
                      <Card key={problem.id} className="boulder-card">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{problem.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-boulder-stone-600 mb-4">{problem.description}</p>
                          <div className="text-sm text-boulder-stone-500 space-y-1">
                            <p>Proposed by: <span className="font-medium">{problem.author}</span></p>
                            <p>Submitted: {formatDate(problem.submittedAt)}</p>
                          </div>
                          
                          <div className="mt-6 flex flex-wrap gap-3 justify-end">
                            <Button variant="outline" className="bg-boulder-stone-50 hover:bg-boulder-stone-100">
                              View Discussion
                            </Button>
                            <Button variant="outline" className="border-boulder-coral-200 text-boulder-coral-700 hover:bg-boulder-coral-50 hover:text-boulder-coral-800">
                              <XIcon className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                            <Button className="bg-boulder-green-600 hover:bg-boulder-green-700">
                              <CheckIcon className="h-4 w-4 mr-2" />
                              Approve as Problem
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No potential problems</h3>
                    <p className="text-boulder-stone-500">
                      All proposed problems have been reviewed. Check back later for new submissions.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* Events Tab */}
              <TabsContent value="events">
                <h2 className="text-xl font-semibold mb-4">Pending Events</h2>
                
                {pendingEvents.length > 0 ? (
                  <div className="space-y-4">
                    {pendingEvents.map(event => (
                      <Card key={event.id} className="boulder-card">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{event.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-boulder-stone-600 mb-4">{event.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="text-sm text-boulder-stone-500 space-y-1">
                              <p>Organizer: <span className="font-medium">{event.organizer}</span></p>
                              <p>Date: {formatDate(event.date)}</p>
                            </div>
                            <div className="text-sm text-boulder-stone-500 space-y-1">
                              <p>Location: {event.location}</p>
                              <p>Submitted: {formatDate(event.submittedAt)}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex flex-wrap gap-3 justify-end">
                            <Button variant="outline" className="border-boulder-coral-200 text-boulder-coral-700 hover:bg-boulder-coral-50 hover:text-boulder-coral-800">
                              <XIcon className="h-4 w-4 mr-2" />
                              Reject
                            </Button>
                            <Button className="bg-boulder-green-600 hover:bg-boulder-green-700">
                              <CheckIcon className="h-4 w-4 mr-2" />
                              Approve Event
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No pending events</h3>
                    <p className="text-boulder-stone-500">
                      All submitted events have been reviewed. Check back later for new submissions.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* Flags Tab */}
              <TabsContent value="flags">
                <h2 className="text-xl font-semibold mb-4">Flagged Content</h2>
                
                {flaggedContent.length > 0 ? (
                  <div className="space-y-4">
                    {flaggedContent.map(flag => (
                      <Card key={flag.id} className="boulder-card">
                        <CardHeader className="pb-2">
                          <div className="flex items-center gap-2 mb-2">
                            <FlagIcon className="h-4 w-4 text-boulder-coral-500" />
                            <span className="text-sm font-medium text-boulder-coral-700">
                              {flag.type} Reported
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="p-3 bg-boulder-stone-50 rounded-md mb-4">
                            <p className="text-boulder-stone-600 italic">"{flag.content}"</p>
                          </div>
                          
                          <div className="text-sm text-boulder-stone-500 space-y-1">
                            <p>Author: <span className="font-medium">{flag.author}</span></p>
                            <p>Reported by: {flag.reporter}</p>
                            <p>Reason: {flag.reason}</p>
                            <p>Reported: {formatDate(flag.reportedAt)}</p>
                          </div>
                          
                          <div className="mt-6 flex flex-wrap gap-3 justify-end">
                            <Button variant="outline" className="bg-boulder-stone-50 hover:bg-boulder-stone-100">
                              View in Context
                            </Button>
                            <Button variant="outline" className="border-boulder-stone-200 hover:bg-boulder-stone-100">
                              Dismiss Flag
                            </Button>
                            <Button className="bg-boulder-coral-600 hover:bg-boulder-coral-700">
                              Remove Content
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No flagged content</h3>
                    <p className="text-boulder-stone-500">
                      There are no content flags that need your attention right now.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* Users Tab */}
              <TabsContent value="users">
                <h2 className="text-xl font-semibold mb-4">Contributor Candidates</h2>
                <p className="text-boulder-stone-600 mb-6">
                  Community members who may be eligible for promotion based on their contribution history.
                </p>
                
                {promotionCandidates.length > 0 ? (
                  <div className="space-y-4">
                    {promotionCandidates.map(candidate => (
                      <Card key={candidate.id} className="boulder-card">
                        <CardContent className="p-5">
                          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 items-center">
                            <div className="flex gap-3 items-center">
                              <div className="w-10 h-10 rounded-full bg-boulder-sky-100 text-boulder-sky-500 flex items-center justify-center font-medium">
                                {candidate.name.charAt(0)}
                              </div>
                              <div>
                                <h3 className="font-medium">{candidate.name}</h3>
                                <p className="text-sm text-boulder-stone-500">@{candidate.username}</p>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap md:flex-nowrap gap-3 items-center">
                              <div className="text-sm space-x-3">
                                <Badge className="bg-boulder-sky-50 text-boulder-sky-700 border-boulder-sky-200">
                                  {candidate.contributions} Contributions
                                </Badge>
                                <span className="text-boulder-stone-500">Member since {new Date(candidate.joinedAt).toLocaleDateString()}</span>
                              </div>
                              
                              <Button className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
                                <UserPlus className="h-4 w-4 mr-2" />
                                Promote to Contributor
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No promotion candidates</h3>
                    <p className="text-boulder-stone-500">
                      There are no community members eligible for promotion at this time.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CurationDashboard;
