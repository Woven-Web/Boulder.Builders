
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const EventSubmitForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    externalUrl: "",
    relatedProblemId: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name.trim() || !formState.description.trim() || !formState.date || !formState.time || !formState.location.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would submit to an API
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Event Submitted",
        description: "Your event has been submitted for curator approval.",
        variant: "default"
      });
      
      // Reset form
      setFormState({
        name: "",
        description: "",
        date: "",
        time: "",
        location: "",
        externalUrl: "",
        relatedProblemId: ""
      });
    }, 1000);
  };

  // Sample problems for the dropdown
  const problemOptions = [
    { id: "", name: "-- No Related Problem --" },
    { id: "1", name: "Bike Lane Safety" },
    { id: "2", name: "Affordable Housing" },
    { id: "3", name: "Water Quality" },
    { id: "4", name: "Public Transportation" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submit a Community Event</CardTitle>
        <CardDescription>
          Share your event with the Boulder community. All submissions will be reviewed by curators.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Event Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Give your event a clear, descriptive name"
              value={formState.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Event Description *</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe what will happen at your event and why people should attend"
              value={formState.description}
              onChange={handleInputChange}
              className="min-h-[120px]"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formState.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time *</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formState.time}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              name="location"
              placeholder="Physical address or virtual meeting info"
              value={formState.location}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="externalUrl">External Link (Optional)</Label>
            <Input
              id="externalUrl"
              name="externalUrl"
              placeholder="https://example.com/event"
              type="url"
              value={formState.externalUrl}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="relatedProblemId">Related Problem (Optional)</Label>
            <select
              id="relatedProblemId"
              name="relatedProblemId"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              value={formState.relatedProblemId}
              onChange={handleInputChange}
            >
              {problemOptions.map(problem => (
                <option key={problem.id} value={problem.id}>{problem.name}</option>
              ))}
            </select>
            <p className="text-xs text-boulder-stone-500 mt-1">
              Connecting your event to a Problem helps people find relevant events.
            </p>
          </div>
          
          <div className="text-xs text-boulder-stone-500">
            * Required fields
          </div>
          
          <CardFooter className="px-0 pt-6">
            <Button 
              type="submit" 
              className="bg-boulder-teal-500 hover:bg-boulder-teal-600 w-full md:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Event"}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default EventSubmitForm;
