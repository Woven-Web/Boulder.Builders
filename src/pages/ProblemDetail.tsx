
import { useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { ArrowUp, ArrowDown, Check, Clock, MessageSquare } from "lucide-react";
import ForumSection from "@/components/forum/ForumSection";
import ContributionDetail from "@/components/contributions/ContributionDetail";

// Mock data for a specific problem - in a real app, this would come from an API
const getProblemData = (id: string) => {
  const problemsData = [
    {
      id: 1,
      title: "Urban Mobility & Transportation Access",
      description: "How might we improve transportation options for all Boulder residents, especially those without cars?",
      detailedDescription: "Boulder faces significant transportation challenges, especially for residents who don't own cars. Limited public transit routes, inadequate bicycle infrastructure in some areas, and the high cost of transportation services create barriers to mobility. This particularly affects low-income residents, seniors, people with disabilities, and those who live in underserved neighborhoods. We need innovative solutions to ensure everyone can access jobs, education, healthcare, and other essential services.",
      contributors: 8,
      contributionCount: 12,
      status: "APPROVED",
      voteCount: 56,
      dateSubmitted: "2025-01-15",
      dateApproved: "2025-02-03",
      category: "Transportation",
      impactAreas: ["Accessibility", "Equity", "Environment"],
      stakeholders: [
        { id: 1, name: "Boulder Transportation Department", type: "government" },
        { id: 2, name: "RTD", type: "organization" },
        { id: 3, name: "CU Boulder Students", type: "community" }
      ],
      contributions: [
        { 
          id: 1, 
          type: "Research", 
          title: "Transport Access Survey Results", 
          author: "Jane Smith", 
          date: "2025-02-15", 
          votes: 12,
          description: "Results from a survey of 500 Boulder residents regarding transportation access needs and challenges.",
          comments: [
            { id: 1, author: "Mike Johnson", content: "Great data collection! Did you segment by neighborhood?", date: "2025-02-16", likes: 3 },
            { id: 2, author: "Sarah Lee", content: "This matches what we've seen in the north side communities.", date: "2025-02-17", likes: 5 }
          ]
        },
        { 
          id: 2, 
          type: "Idea", 
          title: "E-bike Sharing Program", 
          author: "Mike Johnson", 
          date: "2025-02-20", 
          votes: 18,
          description: "Implementing a subsidized e-bike sharing system targeting areas with limited public transit access.",
          comments: [
            { id: 3, author: "Alex Torres", content: "Have you considered the infrastructure costs?", date: "2025-02-21", likes: 1 },
            { id: 4, author: "Jane Smith", content: "This could pair well with the survey data I collected.", date: "2025-02-22", likes: 4 }
          ]
        },
        { 
          id: 3, 
          type: "Resource", 
          title: "Transit Funding Guide", 
          author: "Alex Torres", 
          date: "2025-03-01", 
          votes: 9,
          description: "Comprehensive guide to federal, state, and local funding sources for community transportation initiatives.",
          comments: []
        },
        { 
          id: 4, 
          type: "Question", 
          title: "ADA Compliance Research", 
          author: "Sam Williams", 
          date: "2025-03-10", 
          votes: 7,
          description: "Looking for resources on ADA requirements for transportation solutions in Boulder County.",
          comments: [
            { id: 5, author: "Robin Taylor", content: "The city planning department has guidelines available.", date: "2025-03-11", likes: 2 }
          ]
        }
      ],
      relatedProjects: [
        { id: 1, name: "Multi-modal Transportation Map", status: "In Progress" },
        { id: 3, name: "Boulder Creek Corridor Access Plan", status: "Planning" }
      ],
      forumThreads: [
        { 
          id: 1, 
          title: "Transportation equity in East Boulder", 
          author: "Emma Chen",
          date: "2025-01-20", 
          replies: 14,
          lastActivity: "2025-02-15"
        },
        { 
          id: 2, 
          title: "Bike lane safety improvements", 
          author: "David Lopez",
          date: "2025-01-25", 
          replies: 8,
          lastActivity: "2025-02-10"
        },
        { 
          id: 3, 
          title: "Student transportation needs discussion", 
          author: "Jordan Smith",
          date: "2025-02-05", 
          replies: 12,
          lastActivity: "2025-02-18"
        }
      ],
      similarProblems: [
        { id: 5, title: "Sustainable Water Management", relation: "Sustainability focus" },
        { id: 6, title: "Mental Health Resources", relation: "Community access" }
      ]
    },
    {
      id: 2,
      title: "Affordable Housing Solutions",
      description: "Exploring innovative approaches to increase affordable housing stock in Boulder County.",
      detailedDescription: "Boulder faces a severe affordable housing shortage, making it increasingly difficult for middle and low-income residents to find suitable housing. The high cost of living pushes essential workers out of the city, creating longer commutes, increased traffic, and a less diverse community. We need creative solutions that increase affordable housing stock while preserving Boulder's unique character and environmental values.",
      contributors: 5,
      contributionCount: 8,
      status: "APPROVED",
      voteCount: 72,
      dateSubmitted: "2025-01-10",
      dateApproved: "2025-01-25",
      category: "Housing",
      impactAreas: ["Affordability", "Equity", "Community Cohesion"],
      stakeholders: [
        { id: 4, name: "Boulder Housing Partners", type: "organization" },
        { id: 5, name: "City Planning Department", type: "government" },
        { id: 6, name: "Local Employers", type: "business" }
      ],
      contributions: [
        { 
          id: 5, 
          type: "Research", 
          title: "Housing Cost Analysis", 
          author: "Emma Chen", 
          date: "2025-01-30", 
          votes: 15,
          description: "Comprehensive analysis of housing costs in Boulder County compared to income levels.",
          comments: [
            { id: 6, author: "David Lopez", content: "This analysis is really eye-opening. Have you looked at surrounding counties for comparison?", date: "2025-01-31", likes: 4 }
          ]
        },
        { 
          id: 6, 
          type: "Idea", 
          title: "Co-housing Development Model", 
          author: "David Lopez", 
          date: "2025-02-05", 
          votes: 22,
          description: "Proposal for community-oriented co-housing developments to increase density while fostering community connections.",
          comments: [
            { id: 7, author: "Emma Chen", content: "I like how this addresses both the housing shortage and social isolation issues.", date: "2025-02-06", likes: 5 },
            { id: 8, author: "Robin Taylor", content: "Are there examples of this working in similar communities?", date: "2025-02-07", likes: 3 }
          ]
        },
        { 
          id: 7, 
          type: "Resource", 
          title: "Affordable Housing Toolkit", 
          author: "Robin Taylor", 
          date: "2025-02-12", 
          votes: 11,
          description: "Collection of resources, policies, and case studies for implementing affordable housing solutions.",
          comments: []
        }
      ],
      relatedProjects: [
        { id: 2, name: "Community Land Trust Initiative", status: "In Progress" },
        { id: 4, name: "Workforce Housing Development", status: "Planning" }
      ],
      forumThreads: [
        { 
          id: 4, 
          title: "Zoning reform ideas", 
          author: "David Lopez",
          date: "2025-01-22", 
          replies: 18,
          lastActivity: "2025-02-10"
        },
        { 
          id: 5, 
          title: "Affordable housing for seniors", 
          author: "Robin Taylor",
          date: "2025-01-28", 
          replies: 9,
          lastActivity: "2025-02-15"
        }
      ],
      similarProblems: [
        { id: 1, title: "Urban Mobility & Transportation Access", relation: "Infrastructure & access" },
        { id: 4, title: "Food Security for Low-Income Residents", relation: "Economic equity" }
      ]
    },
    {
      id: 3,
      title: "Sustainable Water Management",
      description: "Developing strategies for water conservation and drought resilience in our community.",
      detailedDescription: "With climate change increasing the frequency and severity of droughts in Colorado, Boulder faces significant challenges in water resource management. Our community needs to develop more sustainable water usage practices and infrastructure to ensure long-term water security while maintaining the natural beauty and ecological health of our watershed. We seek solutions that balance residential, agricultural, and recreational water needs.",
      contributors: 4,
      contributionCount: 6,
      status: "APPROVED",
      voteCount: 48,
      dateSubmitted: "2025-01-20",
      dateApproved: "2025-02-10",
      category: "Environment",
      impactAreas: ["Sustainability", "Climate Resilience", "Conservation"],
      stakeholders: [
        { id: 7, name: "Boulder Water Resources", type: "government" },
        { id: 8, name: "Local Farmers", type: "business" },
        { id: 9, name: "Environmental Organizations", type: "organization" }
      ],
      contributions: [
        { 
          id: 8, 
          type: "Research", 
          title: "Watershed Analysis", 
          author: "Jamie Wilson", 
          date: "2025-02-15", 
          votes: 14,
          description: "Comprehensive analysis of Boulder's watershed, including current conditions and future projections.",
          comments: [
            { id: 9, author: "Pat Chen", content: "Have you considered the impact of wildfire risk on water quality?", date: "2025-02-16", likes: 3 }
          ]
        },
        { 
          id: 9, 
          type: "Idea", 
          title: "Smart Irrigation System", 
          author: "Pat Chen", 
          date: "2025-02-28", 
          votes: 19,
          description: "Proposal for implementing smart irrigation technology in public spaces and incentivizing residential adoption.",
          comments: [
            { id: 10, author: "Jamie Wilson", content: "This could reduce water usage by up to 30% according to my research.", date: "2025-03-01", likes: 4 }
          ]
        },
        { 
          id: 10, 
          type: "Question", 
          title: "Graywater Reuse Systems", 
          author: "Leslie Martin", 
          date: "2025-03-05", 
          votes: 8,
          description: "Looking for information on implementing residential graywater reuse systems in Boulder County.",
          comments: [
            { id: 11, author: "Jamie Wilson", content: "The regulations around this changed recently. I can share the updates.", date: "2025-03-06", likes: 2 }
          ]
        }
      ],
      relatedProjects: [
        { id: 5, name: "Boulder Watershed Protection Plan", status: "Active" },
        { id: 6, name: "Water-Wise Landscaping Initiative", status: "Planning" }
      ],
      forumThreads: [
        { 
          id: 6, 
          title: "Water rights discussion", 
          author: "Jamie Wilson",
          date: "2025-02-01", 
          replies: 15,
          lastActivity: "2025-02-25"
        },
        { 
          id: 7, 
          title: "Xeriscaping best practices", 
          author: "Leslie Martin",
          date: "2025-02-10", 
          replies: 11,
          lastActivity: "2025-03-05"
        }
      ],
      similarProblems: [
        { id: 5, title: "Wildfire Prevention & Response", relation: "Environmental planning" }
      ]
    },
    {
      id: 4,
      title: "Food Security for Low-Income Residents",
      description: "Addressing food deserts and access to fresh, affordable food for all Boulder residents.",
      detailedDescription: "Despite Boulder's reputation for health and wellness, many low-income residents struggle with food insecurity and limited access to fresh, nutritious food. Food deserts exist in several neighborhoods, and the high cost of living leaves many families with inadequate resources for healthy meals. We need innovative solutions to ensure all Boulder residents have reliable access to affordable, nutritious food options.",
      contributors: 3,
      contributionCount: 4,
      status: "APPROVED",
      voteCount: 41,
      dateSubmitted: "2025-01-25",
      dateApproved: "2025-02-15",
      category: "Food & Health",
      impactAreas: ["Nutrition", "Equity", "Community Health"],
      stakeholders: [
        { id: 10, name: "Boulder Food Rescue", type: "organization" },
        { id: 11, name: "Local Grocers", type: "business" },
        { id: 12, name: "Health Department", type: "government" }
      ],
      contributions: [
        { 
          id: 11, 
          type: "Resource", 
          title: "Community Garden Map", 
          author: "River Johnson", 
          date: "2025-02-20", 
          votes: 10,
          description: "Interactive map of community gardens and food resources throughout Boulder County.",
          comments: [
            { id: 12, author: "Sam Patel", content: "Could you add information about which gardens have open plots available?", date: "2025-02-21", likes: 3 }
          ]
        },
        { 
          id: 12, 
          type: "Idea", 
          title: "Mobile Farmers Market", 
          author: "Sam Patel", 
          date: "2025-03-01", 
          votes: 16,
          description: "Proposal for a mobile farmers market that visits underserved neighborhoods with affordable fresh produce.",
          comments: [
            { id: 13, author: "River Johnson", content: "This could partner well with the community gardens I've mapped.", date: "2025-03-02", likes: 4 },
            { id: 14, author: "Taylor Reed", content: "Has anyone tried contacting local farms about possible partnerships?", date: "2025-03-03", likes: 2 }
          ]
        }
      ],
      relatedProjects: [
        { id: 7, name: "Community Kitchen Incubator", status: "Active" },
        { id: 8, name: "School Garden Program", status: "Active" }
      ],
      forumThreads: [
        { 
          id: 8, 
          title: "SNAP benefits accessibility", 
          author: "Sam Patel",
          date: "2025-02-05", 
          replies: 9,
          lastActivity: "2025-02-28"
        },
        { 
          id: 9, 
          title: "Food waste reduction ideas", 
          author: "River Johnson",
          date: "2025-02-15", 
          replies: 12,
          lastActivity: "2025-03-10"
        }
      ],
      similarProblems: [
        { id: 2, title: "Affordable Housing Solutions", relation: "Economic equity" },
        { id: 6, title: "Mental Health Resources", relation: "Community wellbeing" }
      ]
    },
    {
      id: 5,
      title: "Wildfire Prevention & Response",
      description: "Improving community preparation, response, and recovery for wildfire events.",
      detailedDescription: "As climate change intensifies, Boulder faces increased risk of catastrophic wildfires. Recent events have demonstrated the need for better preparation, response coordination, and recovery planning. We need comprehensive solutions that address forest management, emergency communications, evacuation planning, and community resilience in the face of growing wildfire threats.",
      contributors: 6,
      contributionCount: 9,
      status: "APPROVED",
      voteCount: 68,
      dateSubmitted: "2025-01-05",
      dateApproved: "2025-01-20",
      category: "Safety & Environment",
      impactAreas: ["Emergency Preparedness", "Community Resilience", "Environmental Management"],
      stakeholders: [
        { id: 13, name: "Boulder Fire-Rescue", type: "government" },
        { id: 14, name: "Forest Service", type: "government" },
        { id: 15, name: "Neighborhood Associations", type: "community" }
      ],
      contributions: [
        { 
          id: 13, 
          type: "Research", 
          title: "Fire Risk Assessment", 
          author: "Jordan Smith", 
          date: "2025-01-25", 
          votes: 21,
          description: "Detailed risk assessment of Boulder County areas most vulnerable to wildfire.",
          comments: [
            { id: 15, author: "Casey Jones", content: "This is incredibly useful for our neighborhood planning efforts.", date: "2025-01-26", likes: 6 }
          ]
        },
        { 
          id: 14, 
          type: "Idea", 
          title: "Community Alert System", 
          author: "Casey Jones", 
          date: "2025-02-03", 
          votes: 25,
          description: "Proposal for an improved community alert and evacuation notification system.",
          comments: [
            { id: 16, author: "Jordan Smith", content: "This addresses the communication gaps we identified in the risk assessment.", date: "2025-02-04", likes: 7 },
            { id: 17, author: "Taylor Reed", content: "Could this integrate with the evacuation route maps?", date: "2025-02-05", likes: 4 }
          ]
        },
        { 
          id: 15, 
          type: "Resource", 
          title: "Evacuation Route Maps", 
          author: "Taylor Reed", 
          date: "2025-02-10", 
          votes: 17,
          description: "Comprehensive evacuation route maps for all Boulder County neighborhoods.",
          comments: [
            { id: 18, author: "Casey Jones", content: "These should be distributed to every household in high-risk areas.", date: "2025-02-11", likes: 5 }
          ]
        }
      ],
      relatedProjects: [
        { id: 9, name: "Wildfire Mitigation Cooperative", status: "Active" },
        { id: 10, name: "Emergency Response Training Program", status: "Planning" }
      ],
      forumThreads: [
        { 
          id: 10, 
          title: "Forest management practices", 
          author: "Jordan Smith",
          date: "2025-01-15", 
          replies: 20,
          lastActivity: "2025-02-20"
        },
        { 
          id: 11, 
          title: "Home hardening techniques", 
          author: "Taylor Reed",
          date: "2025-01-30", 
          replies: 15,
          lastActivity: "2025-02-25"
        }
      ],
      similarProblems: [
        { id: 3, title: "Sustainable Water Management", relation: "Environmental planning" }
      ]
    },
    {
      id: 6,
      title: "Mental Health Resources",
      description: "Expanding access to mental health services and reducing stigma in our community.",
      detailedDescription: "Boulder residents face significant challenges accessing affordable, timely mental health services. Long wait times, high costs, and stigma create barriers to care, particularly for youth, students, and marginalized communities. We need innovative approaches to expand mental health resources, raise awareness, reduce stigma, and create supportive environments that promote mental wellbeing for all community members.",
      contributors: 4,
      contributionCount: 5,
      status: "POTENTIAL",
      voteCount: 37,
      dateSubmitted: "2025-02-01",
      dateApproved: null,
      category: "Health & Wellness",
      impactAreas: ["Healthcare Access", "Youth Support", "Community Wellbeing"],
      stakeholders: [
        { id: 16, name: "Mental Health Partners", type: "organization" },
        { id: 17, name: "Boulder Valley School District", type: "organization" },
        { id: 18, name: "CU Boulder Counseling Services", type: "organization" }
      ],
      contributions: [
        { 
          id: 16, 
          type: "Research", 
          title: "Mental Health Service Gaps", 
          author: "Alex Rivera", 
          date: "2025-02-15", 
          votes: 14,
          description: "Analysis of gaps in mental health service availability across Boulder County.",
          comments: [
            { id: 19, author: "Morgan Lee", content: "The data on wait times is particularly concerning.", date: "2025-02-16", likes: 5 }
          ]
        },
        { 
          id: 17, 
          type: "Idea", 
          title: "Peer Support Network", 
          author: "Morgan Lee", 
          date: "2025-02-28", 
          votes: 18,
          description: "Proposal for developing a trained peer support network to supplement professional services.",
          comments: [
            { id: 20, author: "Alex Rivera", content: "This could help address some of the immediate access issues identified in my research.", date: "2025-03-01", likes: 6 },
            { id: 21, author: "Jamie Wilson", content: "Has anyone looked into similar programs in other communities?", date: "2025-03-02", likes: 3 }
          ]
        }
      ],
      relatedProjects: [
        { id: 11, name: "School Mental Health Initiative", status: "Planning" },
        { id: 12, name: "Community Wellness Hub", status: "Proposed" }
      ],
      forumThreads: [
        { 
          id: 12, 
          title: "Mental health stigma reduction", 
          author: "Morgan Lee",
          date: "2025-02-10", 
          replies: 14,
          lastActivity: "2025-03-05"
        },
        { 
          id: 13, 
          title: "Youth mental health concerns", 
          author: "Alex Rivera",
          date: "2025-02-20", 
          replies: 18,
          lastActivity: "2025-03-10"
        }
      ],
      similarProblems: [
        { id: 4, title: "Food Security for Low-Income Residents", relation: "Community wellbeing" }
      ]
    }
  ];
  
  return problemsData.find(problem => problem.id === parseInt(id)) || null;
};

const ProblemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const problem = getProblemData(id!);
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedContribution, setSelectedContribution] = useState<number | null>(null);
  
  if (!problem) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Problem not found</h1>
          <p className="mt-4">The problem you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="mt-4 bg-boulder-teal-500 hover:bg-boulder-teal-600">
            <Link to="/problems">Back to Problems</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="bg-boulder-teal-50 py-4">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/problems">Problems</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-gray-600 font-medium">{problem.title}</span>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Problem Header */}
      <section className="bg-boulder-teal-50 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">{problem.title}</h1>
            <div className="flex items-center">
              <Badge variant="outline" className={
                problem.status === "APPROVED" 
                  ? "bg-boulder-green-50 text-boulder-green-600 border-boulder-green-200"
                  : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
              }>
                {problem.status === "APPROVED" ? "Approved" : "Potential"}
              </Badge>
            </div>
          </div>
          
          <p className="text-boulder-stone-600 text-lg mb-6">
            {problem.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="bg-boulder-teal-50 border-boulder-teal-200 text-boulder-teal-700">
              {problem.category}
            </Badge>
            {problem.impactAreas.map((area) => (
              <Badge key={area} variant="outline" className="bg-white border-boulder-stone-200">
                {area}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-3 rounded-md shadow-sm">
              <div className="text-boulder-stone-500 text-sm">Contributors</div>
              <div className="font-medium">{problem.contributors}</div>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <div className="text-boulder-stone-500 text-sm">Contributions</div>
              <div className="font-medium">{problem.contributionCount}</div>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <div className="text-boulder-stone-500 text-sm">Votes</div>
              <div className="font-medium">{problem.voteCount}</div>
            </div>
            <div className="bg-white p-3 rounded-md shadow-sm">
              <div className="text-boulder-stone-500 text-sm">Submitted</div>
              <div className="font-medium">{new Date(problem.dateSubmitted).toLocaleDateString()}</div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button className="bg-boulder-teal-500 hover:bg-boulder-teal-600">Contribute</Button>
            <Button variant="outline" className="flex items-center">
              <ArrowUp className="w-4 h-4 mr-1" />
              Vote ({problem.voteCount})
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="w-full justify-start mb-6 bg-transparent border-b p-0 h-auto">
              <TabsTrigger 
                value="overview" 
                className="px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-boulder-teal-500 data-[state=active]:bg-transparent"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="contributions" 
                className="px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-boulder-teal-500 data-[state=active]:bg-transparent"
              >
                Contributions
              </TabsTrigger>
              <TabsTrigger 
                value="forum" 
                className="px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-boulder-teal-500 data-[state=active]:bg-transparent"
              >
                Forum
              </TabsTrigger>
              <TabsTrigger 
                value="stakeholders" 
                className="px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-boulder-teal-500 data-[state=active]:bg-transparent"
              >
                Stakeholders
              </TabsTrigger>
              <TabsTrigger 
                value="related" 
                className="px-4 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-boulder-teal-500 data-[state=active]:bg-transparent"
              >
                Related
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="prose max-w-none">
                <h2 className="text-xl font-semibold mb-4">Problem Overview</h2>
                <p className="mb-6">{problem.detailedDescription}</p>
                
                <h3 className="text-lg font-semibold mb-3">Impact Areas</h3>
                <ul className="list-disc pl-5 mb-6">
                  {problem.impactAreas.map((area) => (
                    <li key={area} className="mb-1">{area}</li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mb-3">Timeline</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-boulder-teal-100 p-1 rounded-full mr-3">
                      <Clock className="w-4 h-4 text-boulder-teal-600" />
                    </div>
                    <div>
                      <div className="font-medium">Submitted</div>
                      <div className="text-boulder-stone-500 text-sm">{new Date(problem.dateSubmitted).toLocaleDateString()}</div>
                    </div>
                  </div>
                  {problem.dateApproved && (
                    <div className="flex items-start">
                      <div className="bg-boulder-green-100 p-1 rounded-full mr-3">
                        <Check className="w-4 h-4 text-boulder-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">Approved</div>
                        <div className="text-boulder-stone-500 text-sm">{new Date(problem.dateApproved).toLocaleDateString()}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="contributions" className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Contributions</h2>
              {selectedContribution !== null ? (
                <div>
                  <Button 
                    variant="outline" 
                    className="mb-4"
                    onClick={() => setSelectedContribution(null)}
                  >
                    ← Back to all contributions
                  </Button>
                  <ContributionDetail 
                    contribution={problem.contributions.find(c => c.id === selectedContribution)!} 
                  />
                </div>
              ) : (
                <div className="mb-6">
                  <Button className="mb-4 bg-boulder-teal-500 hover:bg-boulder-teal-600">Add a Contribution</Button>
                  
                  <div className="space-y-4">
                    {problem.contributions?.map((contribution) => (
                      <Card key={contribution.id} className="boulder-card">
                        <CardContent className="pt-6">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <Badge variant="outline" className="mb-2">{contribution.type}</Badge>
                              <h3 className="text-lg font-medium mb-1">{contribution.title}</h3>
                              <div className="text-sm text-boulder-stone-500">
                                By {contribution.author} • {new Date(contribution.date).toLocaleDateString()}
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="flex items-center gap-1">
                              <ArrowUp className="w-3 h-3" />
                              {contribution.votes}
                            </Button>
                          </div>
                          <p className="text-sm text-boulder-stone-600 line-clamp-2 mb-3">
                            {contribution.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-1 text-boulder-stone-500">
                              <MessageSquare className="w-4 h-4" />
                              <span className="text-xs">{contribution.comments.length} comments</span>
                            </div>
                            <Button 
                              variant="link" 
                              className="text-boulder-teal-600 p-0 h-auto"
                              onClick={() => setSelectedContribution(contribution.id)}
                            >
                              View details →
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="forum" className="mt-6">
              <ForumSection threads={problem.forumThreads} />
            </TabsContent>
            
            <TabsContent value="stakeholders" className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Stakeholders</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Involvement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {problem.stakeholders.map((stakeholder) => (
                    <TableRow key={stakeholder.id}>
                      <TableCell className="font-medium">{stakeholder.name}</TableCell>
                      <TableCell className="capitalize">{stakeholder.type}</TableCell>
                      <TableCell>Primary</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            
            <TabsContent value="related" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Related Problems</h2>
                  <div className="space-y-4">
                    {problem.similarProblems.map(related => (
                      <div key={related.id} className="border p-4 rounded-lg">
                        <Link to={`/problems/${related.id}`} className="text-boulder-teal-700 hover:text-boulder-teal-800 font-medium">
                          {related.title}
                        </Link>
                        <div className="text-sm text-boulder-stone-500">Relation: {related.relation}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Related Projects</h2>
                  <div className="space-y-4">
                    {problem.relatedProjects?.map(project => (
                      <div key={project.id} className="border p-4 rounded-lg">
                        <Link to={`/projects/${project.id}`} className="text-boulder-teal-700 hover:text-boulder-teal-800 font-medium">
                          {project.name}
                        </Link>
                        <div className="text-sm text-boulder-stone-500">
                          <Badge variant="outline" className={
                            project.status === "In Progress" 
                              ? "bg-boulder-sky-50 text-boulder-sky-600 border-boulder-sky-200"
                              : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
                          }>
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ProblemDetail;
