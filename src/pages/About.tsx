
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Boulder.Builders</h1>
            <p className="text-boulder-stone-600">
              Learn how our community platform works and the vision behind connecting people, problems, and projects in Boulder.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="vision" className="mb-12">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-4">
                <TabsTrigger value="vision">Vision</TabsTrigger>
                <TabsTrigger value="model">Model</TabsTrigger>
                <TabsTrigger value="roles">Roles</TabsTrigger>
                <TabsTrigger value="commons">Commons</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vision" className="mt-6 space-y-6">
                <h2 className="text-2xl font-heading font-semibold">Our Vision</h2>
                <p className="text-boulder-stone-600">
                  To foster a more connected, resilient, and innovative Boulder community by providing a dedicated platform for open collaboration on local challenges and opportunities.
                </p>
                <div className="bg-boulder-stone-50 p-6 rounded-lg border border-boulder-stone-200">
                  <h3 className="text-lg font-heading font-semibold mb-4">Boulder.Builders is designed to:</h3>
                  <ul className="space-y-3 text-boulder-stone-600">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Facilitate the identification and discussion of problems and opportunities relevant to Boulder city and county.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Enable diverse community members to contribute ideas, research, designs, and prototypes towards solutions.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Make the ecosystem of people, problems, and emerging projects visible and interconnected.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Support a culture of open collaboration, shared learning, and civic engagement.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Connect people with shared interests and complementary skills to build a better Boulder, together.</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="model" className="mt-6 space-y-6">
                <h2 className="text-2xl font-heading font-semibold">Our P-P-P Model</h2>
                <p className="text-boulder-stone-600">
                  The central organizing principle for Boulder.Builders is the P-P-P Map, which visualizes the ecosystem of People, Problems, and Projects in our community.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="p-6 boulder-card">
                    <div className="w-12 h-12 rounded-full bg-boulder-sky-100 text-boulder-sky-600 flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-lg">P</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">People</h3>
                    <p className="text-boulder-stone-600 text-sm">
                      Opted-in participants (Contributors & Curators) who showcase their involvement, skills, and interests in improving Boulder.
                    </p>
                  </div>
                  
                  <div className="p-6 boulder-card">
                    <div className="w-12 h-12 rounded-full bg-boulder-coral-100 text-boulder-coral-600 flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-lg">P</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Problems</h3>
                    <p className="text-boulder-stone-600 text-sm">
                      Community-identified challenges or inquiries that have been approved for collaborative exploration and solution development.
                    </p>
                  </div>
                  
                  <div className="p-6 boulder-card">
                    <div className="w-12 h-12 rounded-full bg-boulder-green-100 text-boulder-green-600 flex items-center justify-center mb-4">
                      <span className="font-heading font-bold text-lg">P</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Projects</h3>
                    <p className="text-boulder-stone-600 text-sm">
                      Formalized initiatives or solutions that emerge from Problem discussions and involve community collaboration to implement.
                    </p>
                  </div>
                </div>
                
                <div className="bg-boulder-teal-50 p-6 rounded-lg mt-6">
                  <h3 className="font-heading font-semibold text-lg mb-2">Connections</h3>
                  <p className="text-boulder-stone-600">
                    The platform emphasizes and visualizes the relationships between these entities, showing how people connect to problems and projects, how problems lead to projects, and how the community ecosystem functions as an interconnected whole.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="roles" className="mt-6 space-y-6">
                <h2 className="text-2xl font-heading font-semibold">Participation Roles</h2>
                <p className="text-boulder-stone-600">
                  Boulder.Builders has a progression of roles that allows community members to increase their participation and responsibility over time.
                </p>
                
                <div className="space-y-6 mt-6">
                  <div className="p-6 border border-boulder-stone-200 rounded-lg">
                    <h3 className="font-heading font-semibold text-lg mb-2 text-boulder-stone-700">Community (Default Role)</h3>
                    <p className="text-boulder-stone-600 mb-4">
                      Base level after joining via GitHub & agreeing to Code of Conduct.
                    </p>
                    <ul className="space-y-2 text-boulder-stone-600">
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-teal-500"></span>
                        <span>Can Communicate freely</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-teal-500"></span>
                        <span>Can submit Contributions (pending approval)</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-teal-500"></span>
                        <span>Can submit Events (pending approval)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-boulder-stone-200 rounded-lg">
                    <h3 className="font-heading font-semibold text-lg mb-2 text-boulder-sky-600">Contributor (Badge/Status)</h3>
                    <p className="text-boulder-stone-600 mb-4">
                      Granted by Curators based on quality participation.
                    </p>
                    <ul className="space-y-2 text-boulder-stone-600">
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-sky-500"></span>
                        <span>All Community privileges</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-sky-500"></span>
                        <span>Contributions are auto-approved</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-sky-500"></span>
                        <span>Can opt-into the People Map</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 border border-boulder-stone-200 rounded-lg">
                    <h3 className="font-heading font-semibold text-lg mb-2 text-boulder-green-600">Curator (Badge/Status)</h3>
                    <p className="text-boulder-stone-600 mb-4">
                      Assigned admin role for platform stewardship.
                    </p>
                    <ul className="space-y-2 text-boulder-stone-600">
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-green-600"></span>
                        <span>All Contributor privileges</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-green-600"></span>
                        <span>Can perform Curation tasks</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-green-600"></span>
                        <span>Can approve Problems, Contributions, and Events</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-green-600"></span>
                        <span>Can define Projects</span>
                      </li>
                      <li className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-boulder-green-600"></span>
                        <span>Can promote users to Contributor status</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="commons" className="mt-6 space-y-6">
                <h2 className="text-2xl font-heading font-semibold">Open Contribution Commons</h2>
                <p className="text-boulder-stone-600">
                  Boulder.Builders operates on the principle of open collaboration and shared ownership of ideas in the early stages of problem-solving.
                </p>
                
                <div className="bg-boulder-sand-50 p-6 border border-boulder-sand-200 rounded-lg mt-4">
                  <h3 className="font-heading font-semibold text-lg mb-3">The Commons Approach</h3>
                  <p className="text-boulder-stone-600 mb-4">
                    Contributions (ideas, research, mockups, etc.) shared within the "Problem Collaboration" spaces are explicitly understood to be offered under an open license to encourage building upon each other's work without ownership friction in the early stages.
                  </p>
                  <p className="text-boulder-stone-600 mb-4">
                    We use the <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-boulder-teal-600 hover:underline">Creative Commons Attribution-ShareAlike (CC BY-SA 4.0)</a> license by default for contributions.
                  </p>
                  <p className="text-boulder-stone-700 font-medium">
                    Formal Projects emerging from these discussions can adopt their own specific licenses as they move toward implementation.
                  </p>
                </div>
                
                <div className="p-6 border border-boulder-stone-200 rounded-lg mt-4">
                  <h3 className="font-heading font-semibold text-lg mb-3">Benefits of the Commons</h3>
                  <ul className="space-y-3 text-boulder-stone-600">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Encourages free sharing of ideas without fear of "theft"</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Enables building upon others' contributions to create better solutions</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Creates a culture of collaboration rather than competition</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-boulder-teal-100 text-boulder-teal-700 flex items-center justify-center text-sm">✓</span>
                      <span>Ensures attribution and recognition for original contributors</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="border-t border-boulder-stone-200 pt-10 mt-12">
              <h3 className="text-xl font-heading font-semibold mb-4 text-center">Ready to get involved?</h3>
              <p className="text-boulder-stone-600 text-center mb-6">
                Explore problems, contribute your ideas, and connect with other community members who are passionate about improving Boulder.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/problems" className="text-boulder-teal-600 hover:text-boulder-teal-700 font-medium">
                  Explore Problems →
                </a>
                <a href="/projects" className="text-boulder-teal-600 hover:text-boulder-teal-700 font-medium">
                  Browse Projects →
                </a>
                <a href="/map" className="text-boulder-teal-600 hover:text-boulder-teal-700 font-medium">
                  Visit the P-P-P Map →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
