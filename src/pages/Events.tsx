
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

// Mock data for events
const eventsData = [
  {
    id: 1,
    name: "Boulder Creek Cleanup Day",
    description: "Join us for a community cleanup of Boulder Creek. Supplies and refreshments provided.",
    date: "2025-05-15T10:00:00",
    location: "Boulder Creek Path (9th to Folsom)",
    organizer: "Boulder Waterways Initiative",
    attendees: 12,
    relatedProblem: "Water Quality",
    status: "APPROVED"
  },
  {
    id: 2,
    name: "Housing Solutions Workshop",
    description: "Collaborative workshop to brainstorm innovative approaches to affordable housing in Boulder.",
    date: "2025-05-20T18:00:00",
    location: "Boulder Public Library, Main Branch",
    organizer: "Housing Coalition",
    attendees: 8,
    relatedProblem: "Affordable Housing",
    status: "APPROVED"
  },
  {
    id: 3,
    name: "Solar Co-op Information Session",
    description: "Learn about joining Boulder's community solar cooperative and the benefits of shared solar.",
    date: "2025-05-25T12:00:00",
    location: "Virtual (Zoom)",
    organizer: "Community Solar Gardens Project",
    attendees: 15,
    relatedProject: "Community Solar Gardens",
    status: "APPROVED"
  },
  {
    id: 4,
    name: "Rental Rights App Testing",
    description: "Help test and provide feedback on the new Rental Rights App before public launch.",
    date: "2025-06-05T17:30:00",
    location: "Rayback Collective",
    organizer: "Rental Rights App Team",
    attendees: 6,
    relatedProject: "Rental Rights App",
    status: "PENDING"
  },
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Filter events based on search query
  const filteredEvents = eventsData.filter(event => {
    return event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           (event.relatedProblem && event.relatedProblem.toLowerCase().includes(searchQuery.toLowerCase())) ||
           (event.relatedProject && event.relatedProject.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <Layout>
      {/* Header */}
      <section className="bg-boulder-teal-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">Community Events</h1>
            <p className="text-boulder-stone-600 mb-6">
              Join in-person and virtual events to collaborate, learn, and take action on local challenges.
            </p>
            <Button className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
              Submit an Event
            </Button>
          </div>
        </div>
      </section>
      
      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Search */}
          <div className="mb-8 flex items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-boulder-stone-400" size={18} />
              <Input
                type="search"
                placeholder="Search events..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          {/* Events List */}
          <div className="space-y-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="boulder-card">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <CardTitle className="text-xl">{event.name}</CardTitle>
                    <Badge variant="outline" className={
                      event.status === "APPROVED" 
                        ? "bg-boulder-green-50 text-boulder-green-600 border-boulder-green-200"
                        : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
                    }>
                      {event.status === "APPROVED" ? "Approved" : "Pending Approval"}
                    </Badge>
                  </div>
                  <CardDescription className="text-boulder-stone-500">
                    {formatDate(event.date)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="text-boulder-stone-600 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {event.relatedProblem && (
                          <Badge variant="secondary" className="bg-boulder-coral-50 text-boulder-coral-600 border-none">
                            Related Problem: {event.relatedProblem}
                          </Badge>
                        )}
                        {event.relatedProject && (
                          <Badge variant="secondary" className="bg-boulder-green-50 text-boulder-green-600 border-none">
                            Related Project: {event.relatedProject}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-boulder-stone-700">Location</h4>
                        <p className="text-sm text-boulder-stone-600">{event.location}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-boulder-stone-700">Organizer</h4>
                        <p className="text-sm text-boulder-stone-600">{event.organizer}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-boulder-stone-700">Attendees</h4>
                        <p className="text-sm text-boulder-stone-600">{event.attendees} people attending</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <Button variant="outline" className="text-boulder-teal-600 border-boulder-teal-200 hover:bg-boulder-teal-50">
                    RSVP to Event
                  </Button>
                  <Link 
                    to={`/events/${event.id}`} 
                    className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium flex items-center"
                  >
                    View details →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-boulder-stone-500">
                Try adjusting your search or submit a new event.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
