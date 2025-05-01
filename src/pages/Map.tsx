
import { useState } from "react";
import Layout from "@/components/Layout";
import PPPMap from "@/components/PPPMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Lightbulb, Hammer } from "lucide-react";

// Mock data for map insights
const problemsData = [
  { id: 1, name: "Urban Mobility & Transportation", connections: 8 },
  { id: 2, name: "Affordable Housing Solutions", connections: 6 },
  { id: 3, name: "Sustainable Water Management", connections: 5 },
];

const contributorsData = [
  { id: 1, name: "Jane Doe", problems: 4, projects: 2 },
  { id: 2, name: "Alex Johnson", problems: 3, projects: 1 },
  { id: 3, name: "Sam Wilson", problems: 2, projects: 2 },
];

const peopleData = [
  { id: 1, name: "Jane Doe", role: "Contributor", avatar: "JD" },
  { id: 2, name: "John Smith", role: "Contributor", avatar: "JS" },
  { id: 3, name: "Alex Johnson", role: "Curator", avatar: "AJ" },
  { id: 4, name: "Sam Wilson", role: "Contributor", avatar: "SW" },
];

const Map = () => {
  const [activeTab, setActiveTab] = useState("map");

  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">People-Problems-Projects Map</h1>
            <p className="text-boulder-stone-600">
              Explore the network of people, problems, and projects in the Boulder community.
              See how they're connected and identify opportunities for collaboration.
            </p>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="map" className="mb-6" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="map">Interactive Map</TabsTrigger>
              <TabsTrigger value="people">People</TabsTrigger>
              <TabsTrigger value="connections">Connections</TabsTrigger>
            </TabsList>
            
            <TabsContent value="map" className="pt-6">
              <div className="bg-boulder-stone-50 p-4 rounded-lg mb-6">
                <div className="flex gap-4 items-center">
                  <div className="bg-boulder-teal-100 rounded-full p-2 text-boulder-teal-600">
                    <MapPin size={20} />
                  </div>
                  <p className="text-boulder-stone-600">
                    This interactive map shows the connections between people, problems, and projects in Boulder.
                    Click on any node to see its connections and details.
                  </p>
                </div>
              </div>
              
              <div className="h-[600px] border border-boulder-stone-200 rounded-lg">
                <PPPMap />
              </div>
            </TabsContent>
            
            <TabsContent value="people" className="pt-6">
              <div className="bg-boulder-stone-50 p-4 rounded-lg mb-6">
                <div className="flex gap-4 items-center">
                  <div className="bg-boulder-sky-100 rounded-full p-2 text-boulder-sky-600">
                    <Users size={20} />
                  </div>
                  <p className="text-boulder-stone-600">
                    Contributors and Curators who have opted into the P-P-P Map. These community members
                    are actively working on problems and projects.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {peopleData.map((person) => (
                  <Card key={person.id} className="boulder-card">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-boulder-sky-100 text-boulder-sky-500 flex items-center justify-center font-medium">
                          {person.avatar}
                        </div>
                        <div>
                          <h3 className="font-medium">{person.name}</h3>
                          <p className="text-sm text-boulder-stone-500">{person.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
                  Join the Map
                </Button>
                <p className="text-xs text-boulder-stone-500 mt-2">
                  Contributors and Curators can opt in to appear on the map
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="connections" className="pt-6">
              <div className="bg-boulder-stone-50 p-4 rounded-lg mb-6">
                <div className="flex gap-4 items-center">
                  <div className="bg-boulder-coral-100 rounded-full p-2 text-boulder-coral-600">
                    <Lightbulb size={20} />
                  </div>
                  <p className="text-boulder-stone-600">
                    See how people, problems and projects are interconnected in the Boulder community.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Lightbulb size={18} className="text-boulder-coral-500" />
                      Top Connected Problems
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {problemsData.map((problem) => (
                        <li key={problem.id} className="flex justify-between border-b pb-2 last:border-0">
                          <Link to={`/problems/${problem.id}`} className="text-boulder-teal-600 hover:underline">
                            {problem.name}
                          </Link>
                          <Badge variant="outline" className="bg-boulder-teal-50 border-boulder-teal-200">
                            {problem.connections} connections
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Users size={18} className="text-boulder-sky-500" />
                      Most Active Contributors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {contributorsData.map((contributor) => (
                        <li key={contributor.id} className="flex justify-between border-b pb-2 last:border-0">
                          <span>{contributor.name}</span>
                          <Badge variant="outline" className="bg-boulder-sky-50 border-boulder-sky-200">
                            {contributor.problems} problems, {contributor.projects} projects
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-boulder-stone-600 mb-3">
                    Want to see yourself on this map?
                  </p>
                  <Button asChild className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
                    <Link to="/people">
                      Join the Community
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Map;
