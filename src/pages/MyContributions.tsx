
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

// Mock data for contributions
const contributionsData = [
  {
    id: 1,
    type: "IDEA",
    title: "Bike Lane Extension on Broadway",
    description: "Extending the protected bike lane on Broadway from Baseline to Table Mesa to improve cyclist safety.",
    problem: "Urban Mobility",
    problemId: 1,
    status: "PENDING",
    submittedAt: "2025-04-28T14:30:00",
  },
  {
    id: 2,
    type: "RESEARCH",
    title: "Water Usage Analysis for Boulder Creek",
    description: "Analysis of water usage and conservation efforts along Boulder Creek watershed over the past 5 years.",
    problem: "Water Quality",
    problemId: 3,
    status: "APPROVED",
    submittedAt: "2025-04-15T09:45:00",
    approvedAt: "2025-04-17T11:20:00",
  },
  {
    id: 3,
    type: "LIVED_EXPERIENCE",
    title: "Rental Challenges as a Student",
    description: "My experience trying to find affordable housing as a graduate student at CU Boulder.",
    problem: "Affordable Housing",
    problemId: 2,
    status: "REJECTED",
    submittedAt: "2025-04-10T16:15:00",
    rejectedAt: "2025-04-12T10:30:00",
    rejectionReason: "Content too similar to existing contribution. Please check Problem #2 for related discussions.",
  },
  {
    id: 4,
    type: "DESIGN_MOCKUP",
    title: "App Interface for Transportation Hub",
    description: "Mobile interface mockup for a unified Boulder transportation hub that connects buses, bikes, and ride shares.",
    problem: "Urban Mobility",
    problemId: 1,
    status: "PENDING",
    submittedAt: "2025-05-01T08:15:00",
  },
];

const MyContributions = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  // Filter contributions based on active tab
  const filteredContributions = contributionsData.filter(contribution => {
    if (activeTab === "all") return true;
    return contribution.status.toLowerCase() === activeTab.toLowerCase();
  });
  
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
  
  // Get status badge variant
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return { 
          variant: "outline" as const,
          className: "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200",
          icon: <Clock className="h-3 w-3 mr-1" />
        };
      case "APPROVED":
        return { 
          variant: "outline" as const,
          className: "bg-boulder-green-50 text-boulder-green-700 border-boulder-green-200",
          icon: <CheckCircle className="h-3 w-3 mr-1" />
        };
      case "REJECTED":
        return { 
          variant: "outline" as const,
          className: "bg-boulder-coral-50 text-boulder-coral-700 border-boulder-coral-200",
          icon: <AlertCircle className="h-3 w-3 mr-1" />
        };
      default:
        return { 
          variant: "outline" as const,
          className: "",
          icon: null
        };
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Contributions</h1>
            <p className="text-boulder-stone-600 mb-6">
              Track the status of your contributions to problems in the Boulder community.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contributions Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="mb-6" value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {/* Contributions List */}
          <div className="space-y-6">
            {filteredContributions.length > 0 ? (
              filteredContributions.map(contribution => {
                const statusBadge = getStatusBadge(contribution.status);
                
                return (
                  <Card key={contribution.id} className="boulder-card">
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="bg-boulder-teal-50 text-boulder-teal-700 border-none">
                          {contribution.type.replace(/_/g, ' ')}
                        </Badge>
                        <Badge variant={statusBadge.variant} className={statusBadge.className}>
                          <span className="flex items-center">
                            {statusBadge.icon}
                            {contribution.status}
                          </span>
                        </Badge>
                      </div>
                      <CardTitle>{contribution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-boulder-stone-600 mb-4">{contribution.description}</p>
                      <div className="text-sm text-boulder-stone-500">
                        <p>Related to: <a href={`/problems/${contribution.problemId}`} className="text-boulder-teal-600 hover:underline">{contribution.problem}</a></p>
                        <p>Submitted: {formatDate(contribution.submittedAt)}</p>
                        
                        {contribution.status === "APPROVED" && contribution.approvedAt && (
                          <p>Approved: {formatDate(contribution.approvedAt)}</p>
                        )}
                        
                        {contribution.status === "REJECTED" && contribution.rejectedAt && (
                          <>
                            <p>Rejected: {formatDate(contribution.rejectedAt)}</p>
                            {contribution.rejectionReason && (
                              <div className="mt-2 p-3 bg-boulder-coral-50 border border-boulder-coral-200 rounded-md">
                                <p className="text-boulder-coral-700">{contribution.rejectionReason}</p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 flex justify-end">
                      <Button variant="outline" className="text-boulder-teal-600 border-boulder-teal-200 hover:bg-boulder-teal-50">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No contributions found</h3>
                <p className="text-boulder-stone-500">
                  You don't have any {activeTab !== "all" ? activeTab.toLowerCase() : ""} contributions yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MyContributions;
