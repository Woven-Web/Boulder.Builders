
import Layout from "@/components/Layout";
import PPPMap from "@/components/PPPMap";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Map = () => {
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
          <Tabs defaultValue="map" className="mb-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="map">Interactive Map</TabsTrigger>
              <TabsTrigger value="people">People</TabsTrigger>
              <TabsTrigger value="connections">Connections</TabsTrigger>
            </TabsList>
            
            <TabsContent value="map" className="pt-6">
              <div className="bg-boulder-stone-50 p-4 rounded-lg mb-6">
                <p className="text-boulder-stone-600 text-sm">
                  This interactive map shows the connections between people, problems, and projects in Boulder.
                  Click on any node to see its connections and details.
                </p>
              </div>
              
              <div className="h-[600px]">
                <PPPMap />
              </div>
            </TabsContent>
            
            <TabsContent value="people" className="pt-6">
              <div className="bg-boulder-stone-50 p-4 rounded-lg mb-6">
                <p className="text-boulder-stone-600 text-sm">
                  Contributors and Curators who have opted into the P-P-P Map. These community members
                  are actively working on problems and projects.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Jane Doe', 'John Smith', 'Alex Johnson', 'Sam Wilson'].map((name, index) => (
                  <Card key={index} className="boulder-card">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-boulder-sky-100 text-boulder-sky-500 flex items-center justify-center font-medium">
                          {name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-medium">{name}</h3>
                          <p className="text-sm text-boulder-stone-500">Contributor</p>
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
                <p className="text-boulder-stone-600 text-sm">
                  See how people, problems and projects are interconnected in the Boulder community.
                </p>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Top Connected Problems</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Urban Mobility & Transportation</span>
                        <span className="text-boulder-teal-600 font-medium">8 connections</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Affordable Housing Solutions</span>
                        <span className="text-boulder-teal-600 font-medium">6 connections</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sustainable Water Management</span>
                        <span className="text-boulder-teal-600 font-medium">5 connections</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">Most Active Contributors</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Jane Doe</span>
                        <span className="text-boulder-teal-600 font-medium">4 problems, 2 projects</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Alex Johnson</span>
                        <span className="text-boulder-teal-600 font-medium">3 problems, 1 project</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sam Wilson</span>
                        <span className="text-boulder-teal-600 font-medium">2 problems, 2 projects</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Map;
