
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Calendar, MapPin, Users, Link2 } from "lucide-react";

// Mock data for a specific event
const eventData = {
  id: 1,
  name: "Boulder Creek Cleanup Day",
  description: "Join us for a community cleanup of Boulder Creek. We'll be removing trash and debris from the creek and surrounding areas. Supplies and refreshments will be provided for all volunteers. This is part of our ongoing effort to improve water quality and habitat in Boulder's waterways.",
  date: "2025-05-15T10:00:00",
  endTime: "2025-05-15T13:00:00",
  location: "Boulder Creek Path (9th to Folsom)",
  locationCoords: { lat: 40.014984, lng: -105.276302 },
  organizer: "Boulder Waterways Initiative",
  organizerProfile: "waterways",
  attendees: [
    { username: "riverkeeper", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    { username: "ecofriend", avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
    { username: "greenthumb", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
    { username: "naturelover", avatar: "https://randomuser.me/api/portraits/men/67.jpg" }
  ],
  relatedProblem: {
    id: 3,
    title: "Water Quality",
    status: "APPROVED"
  },
  externalUrl: "https://boulderwatershed.org/events",
  status: "APPROVED"
};

const EventDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isRSVPed, setIsRSVPed] = useState(false);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleRSVP = () => {
    // In a real app, this would send the RSVP to an API
    setIsRSVPed(!isRSVPed);
    
    toast({
      title: isRSVPed ? "RSVP Canceled" : "RSVP Confirmed",
      description: isRSVPed 
        ? "You've been removed from the attendee list." 
        : "You've been added to the attendee list.",
      variant: "default"
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/events" className="flex items-center text-boulder-teal-600 hover:text-boulder-teal-700">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Events</span>
          </Link>
        </div>
        
        {/* Event Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <CardTitle className="text-2xl mb-2">{eventData.name}</CardTitle>
                <CardDescription className="text-boulder-stone-500 text-base mb-2">
                  {formatDate(eventData.date)}
                  {eventData.endTime && ` - ${formatDate(eventData.endTime).split(', ')[3]}`}
                </CardDescription>
              </div>
              <Badge variant="outline" className={
                eventData.status === "APPROVED" 
                  ? "bg-boulder-green-50 text-boulder-green-600 border-boulder-green-200"
                  : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
              }>
                {eventData.status === "APPROVED" ? "Approved" : "Pending Approval"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-lg font-medium mb-4">About This Event</h3>
                <p className="text-boulder-stone-600 mb-6 whitespace-pre-line">{eventData.description}</p>
                
                {eventData.relatedProblem && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-2">Related Problem</h3>
                    <Link 
                      to={`/problems/${eventData.relatedProblem.id}`}
                      className="inline-block"
                    >
                      <Badge variant="outline" className="bg-boulder-coral-50 text-boulder-coral-600 border-boulder-coral-200 text-sm py-1.5 px-3">
                        {eventData.relatedProblem.title}
                      </Badge>
                    </Link>
                  </div>
                )}
              </div>
              <div className="space-y-6">
                <Card className="bg-boulder-stone-50">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-boulder-stone-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Date & Time</h4>
                          <p className="text-sm text-boulder-stone-600">
                            {formatDate(eventData.date)}
                          </p>
                          {eventData.endTime && (
                            <p className="text-sm text-boulder-stone-600">
                              Ends at {formatDate(eventData.endTime).split(', ')[3]}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-boulder-stone-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Location</h4>
                          <p className="text-sm text-boulder-stone-600">
                            {eventData.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-boulder-stone-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Organizer</h4>
                          <Link 
                            to={`/profile/${eventData.organizerProfile}`}
                            className="text-sm text-boulder-teal-600 hover:text-boulder-teal-700"
                          >
                            {eventData.organizer}
                          </Link>
                        </div>
                      </div>
                      {eventData.externalUrl && (
                        <div className="flex items-start gap-3">
                          <Link2 className="h-5 w-5 text-boulder-stone-500 mt-0.5" />
                          <div>
                            <h4 className="font-medium text-sm">External Link</h4>
                            <a 
                              href={eventData.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-boulder-teal-600 hover:text-boulder-teal-700"
                            >
                              Visit Website
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-6">
                      <Button
                        className={isRSVPed 
                          ? "w-full bg-boulder-stone-200 text-boulder-stone-700 hover:bg-boulder-stone-300"
                          : "w-full bg-boulder-teal-500 hover:bg-boulder-teal-600"
                        }
                        onClick={handleRSVP}
                      >
                        {isRSVPed ? "Cancel RSVP" : "RSVP to Event"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Attendees Section */}
        <div className="mb-8">
          <h2 className="text-xl font-heading font-bold mb-6">Attendees ({eventData.attendees.length})</h2>
          <div className="flex flex-wrap gap-4">
            {eventData.attendees.map((attendee, index) => (
              <Link 
                to={`/profile/${attendee.username}`} 
                key={index} 
                className="flex flex-col items-center gap-2 p-3 rounded-md hover:bg-boulder-stone-50 transition-colors"
              >
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img 
                    src={attendee.avatar} 
                    alt={attendee.username} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{attendee.username}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
