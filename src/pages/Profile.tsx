
import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  User,
  MapPin,
  Award,
  Code,
  Lightbulb,
  CalendarDays,
  FileText,
  MessageSquare
} from "lucide-react";

// Mock user data
const userData = {
  id: "1",
  username: "jane_doe",
  displayName: "Jane Doe",
  role: "CONTRIBUTOR",
  bio: "Urban planner passionate about sustainable transportation and community development in Boulder. Working on solutions for accessible mobility.",
  joinedDate: "2025-01-15T00:00:00Z",
  avatar: "JD",
  skills: ["Urban Planning", "Research", "Data Analysis", "Community Engagement"],
  badges: [
    { name: "Contributor", description: "Approved contributor with quality participation" },
    { name: "Problem Solver", description: "Made significant contributions to solving a problem" }
  ],
  mapOptIn: true,
  mapLocationDescription: "North Boulder",
  activity: [
    { 
      type: "CONTRIBUTION",
      title: "Bike Lane Extension Research",
      description: "Added research on impact of protected bike lanes on commuter safety and usage.",
      problemTitle: "Urban Mobility",
      problemId: "1",
      date: "2025-04-15T10:30:00Z"
    },
    { 
      type: "COMMENT",
      title: "Comment on Housing Density Proposal",
      description: "Added insights about transit-oriented development models for Boulder's future growth.",
      problemTitle: "Affordable Housing",
      problemId: "2", 
      date: "2025-04-10T14:20:00Z"
    },
    { 
      type: "EVENT_ATTENDANCE",
      title: "Boulder Creek Cleanup Day",
      description: "Participated in community event",
      eventId: "1",
      date: "2025-04-05T09:00:00Z"
    },
  ]
};

const Profile = () => {
  const { username } = useParams<{ username: string }>(); // This would be used to fetch real user data
  const [user] = useState(userData); // We'd fetch real user data based on username
  const [activeTab, setActiveTab] = useState("overview");
  const [isOwnProfile] = useState(true); // In a real app, we'd check if this is the logged-in user's profile
  
  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  // Format activity date
  const formatActivityDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  // Get icon for activity type
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "CONTRIBUTION":
        return <FileText size={18} className="text-boulder-teal-500" />;
      case "COMMENT":
        return <MessageSquare size={18} className="text-boulder-sky-500" />;
      case "EVENT_ATTENDANCE":
        return <CalendarDays size={18} className="text-boulder-coral-500" />;
      default:
        return <FileText size={18} />;
    }
  };

  return (
    <Layout>
      {/* Profile Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-start">
            {/* Avatar and basic info */}
            <div className="md:w-1/3 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full bg-boulder-sky-100 text-boulder-sky-500 flex items-center justify-center text-5xl font-medium mb-4">
                {user.avatar}
              </div>
              <h1 className="text-2xl font-bold mb-1">{user.displayName}</h1>
              <p className="text-boulder-stone-500 mb-2">@{user.username}</p>
              
              <div className="flex gap-2 mt-2">
                <Badge className={
                  user.role === "CONTRIBUTOR" 
                    ? "bg-boulder-teal-50 text-boulder-teal-700 border-boulder-teal-200" 
                    : "bg-boulder-coral-50 text-boulder-coral-700 border-boulder-coral-200"
                }>
                  {user.role === "CONTRIBUTOR" ? "Contributor" : "Curator"}
                </Badge>
                {user.mapOptIn && (
                  <Badge variant="outline" className="border-boulder-stone-200">
                    <MapPin size={12} className="mr-1" /> On Map
                  </Badge>
                )}
              </div>
            </div>
            
            {/* Bio and quick stats */}
            <div className="md:w-2/3">
              <p className="text-boulder-stone-600 mb-6">
                {user.bio}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="text-sm text-boulder-stone-500 flex items-center gap-1">
                  <User size={16} />
                  <span>Member since {formatDate(user.joinedDate)}</span>
                </div>
                {user.mapOptIn && user.mapLocationDescription && (
                  <div className="text-sm text-boulder-stone-500 flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{user.mapLocationDescription}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Profile Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="contributions">Contributions</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                {isOwnProfile && (
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                )}
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                {/* Skills */}
                <div>
                  <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Code size={20} className="text-boulder-sky-500" />
                    Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {user.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-boulder-sky-50 border-boulder-sky-100 py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Badges */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Award size={20} className="text-boulder-coral-500" />
                    Badges
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {user.badges.map((badge, index) => (
                      <Card key={index} className="overflow-hidden border-boulder-stone-200">
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-boulder-coral-100 text-boulder-coral-600 flex items-center justify-center">
                            <Award size={16} />
                          </div>
                          <div>
                            <h3 className="font-medium">{badge.name}</h3>
                            <p className="text-sm text-boulder-stone-500">{badge.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div>
                  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <FileText size={20} className="text-boulder-teal-500" />
                    Recent Activity
                  </h2>
                  <div className="space-y-4">
                    {user.activity.slice(0, 2).map((item, index) => (
                      <Card key={index} className="border-boulder-stone-200">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <div className="mt-1">
                              {getActivityIcon(item.type)}
                            </div>
                            <div>
                              <h3 className="font-medium">{item.title}</h3>
                              <p className="text-sm text-boulder-stone-600">{item.description}</p>
                              <div className="flex flex-wrap gap-3 mt-2 text-xs text-boulder-stone-500">
                                {item.problemTitle && (
                                  <span>Problem: <a href={`/problems/${item.problemId}`} className="text-boulder-teal-600 hover:underline">{item.problemTitle}</a></span>
                                )}
                                <span>{formatActivityDate(item.date)}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <div className="text-center pt-2">
                      <Button 
                        variant="outline"
                        className="text-boulder-teal-600 border-boulder-teal-200 hover:bg-boulder-teal-50"
                        onClick={() => setActiveTab("activity")}
                      >
                        View All Activity
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Contributions Tab */}
              <TabsContent value="contributions">
                <div className="bg-boulder-stone-50 p-4 mb-6 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-boulder-teal-100 rounded-full p-1 text-boulder-teal-600">
                      <Lightbulb size={16} />
                    </div>
                    <p className="text-sm text-boulder-stone-600">
                      Contributions are ideas, research, designs, and other valuable inputs that {user.displayName} has shared with the Boulder community.
                    </p>
                  </div>
                </div>
                
                <div className="text-center py-12 bg-white rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
                  <p className="text-boulder-stone-500">
                    This section is under development. Check back soon to see contributions.
                  </p>
                </div>
              </TabsContent>
              
              {/* Activity Tab */}
              <TabsContent value="activity">
                <h2 className="text-xl font-semibold mb-4">Activity Feed</h2>
                {user.activity.length > 0 ? (
                  <div className="space-y-4">
                    {user.activity.map((item, index) => (
                      <Card key={index} className="border-boulder-stone-200">
                        <CardContent className="p-4">
                          <div className="flex gap-3">
                            <div className="mt-1">
                              {getActivityIcon(item.type)}
                            </div>
                            <div>
                              <h3 className="font-medium">{item.title}</h3>
                              <p className="text-sm text-boulder-stone-600">{item.description}</p>
                              <div className="flex flex-wrap gap-3 mt-2 text-xs text-boulder-stone-500">
                                {item.problemTitle && (
                                  <span>Problem: <a href={`/problems/${item.problemId}`} className="text-boulder-teal-600 hover:underline">{item.problemTitle}</a></span>
                                )}
                                <span>{formatActivityDate(item.date)}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <h3 className="text-xl font-medium mb-2">No activity yet</h3>
                    <p className="text-boulder-stone-500">
                      This user hasn't recorded any activity yet.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* Settings Tab - Only visible if it's the user's own profile */}
              {isOwnProfile && (
                <TabsContent value="settings">
                  <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Map Visibility</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                          <Switch id="map-visibility" checked={user.mapOptIn} />
                          <Label htmlFor="map-visibility">Show me on the P-P-P Map</Label>
                        </div>
                        
                        <div className="text-sm text-boulder-stone-500">
                          <p className="mb-1">
                            When enabled, you'll appear on the People-Problems-Projects Map. Only Contributors and Curators can opt in.
                          </p>
                          <p>
                            Your location is shown as a general area and not your exact location.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center py-12 bg-white rounded-lg">
                    <h3 className="text-xl font-medium mb-2">More Settings Coming Soon</h3>
                    <p className="text-boulder-stone-500">
                      Additional profile settings will be available soon.
                    </p>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
