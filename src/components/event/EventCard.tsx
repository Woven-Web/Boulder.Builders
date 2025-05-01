
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface EventCardProps {
  id: number;
  name: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  attendees: number;
  status: string;
  relatedProblem?: string;
  relatedProject?: string;
  onRSVP?: () => void;
}

const EventCard = ({
  id,
  name,
  description,
  date,
  location,
  organizer,
  attendees,
  status,
  relatedProblem,
  relatedProject,
  onRSVP
}: EventCardProps) => {
  
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
  
  return (
    <Card className="boulder-card">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <CardTitle className="text-xl">{name}</CardTitle>
          <Badge variant="outline" className={
            status === "APPROVED" 
              ? "bg-boulder-green-50 text-boulder-green-600 border-boulder-green-200"
              : "bg-boulder-sand-50 text-boulder-sand-700 border-boulder-sand-200"
          }>
            {status === "APPROVED" ? "Approved" : "Pending Approval"}
          </Badge>
        </div>
        <CardDescription className="text-boulder-stone-500">
          {formatDate(date)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-boulder-stone-600 mb-4">{description}</p>
            <div className="flex flex-wrap gap-1">
              {relatedProblem && (
                <Badge variant="secondary" className="bg-boulder-coral-50 text-boulder-coral-600 border-none">
                  Related Problem: {relatedProblem}
                </Badge>
              )}
              {relatedProject && (
                <Badge variant="secondary" className="bg-boulder-green-50 text-boulder-green-600 border-none">
                  Related Project: {relatedProject}
                </Badge>
              )}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-boulder-stone-500 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-boulder-stone-700">Location</h4>
                <p className="text-sm text-boulder-stone-600">{location}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="h-4 w-4 text-boulder-stone-500 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-boulder-stone-700">Organizer</h4>
                <p className="text-sm text-boulder-stone-600">{organizer}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="h-4 w-4 text-boulder-stone-500 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-boulder-stone-700">Attendees</h4>
                <p className="text-sm text-boulder-stone-600">{attendees} people attending</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 flex justify-between">
        <Button 
          variant="outline" 
          className="text-boulder-teal-600 border-boulder-teal-200 hover:bg-boulder-teal-50"
          onClick={onRSVP}
        >
          RSVP to Event
        </Button>
        <Link 
          to={`/events/${id}`} 
          className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium flex items-center"
        >
          View details →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
