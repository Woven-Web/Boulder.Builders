
import Layout from "@/components/Layout";
import EventSubmitForm from "@/components/event/EventSubmitForm";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EventSubmit = () => {
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
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-heading font-bold mb-8">Submit an Event</h1>
          <EventSubmitForm />
        </div>
      </div>
    </Layout>
  );
};

export default EventSubmit;
