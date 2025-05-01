
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturedContent from "@/components/FeaturedContent";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorks />
      
      {/* People Preview Section (replacing the Map Preview) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Connect with the Boulder.Builders Community
            </h2>
            <p className="text-boulder-stone-600 mb-8">
              Discover contributors and curators who are actively working on local problems and projects.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-boulder-teal-100 mb-6 flex items-center justify-center">
              <Users className="h-10 w-10 text-boulder-teal-500" />
            </div>
            
            <p className="text-center max-w-lg mb-8">
              Our community includes researchers, designers, developers, community organizers, and more - all collaborating to solve Boulder's challenges.
            </p>
            
            <Button asChild className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
              <Link to="/people">
                Explore People
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <FeaturedContent />
      <CallToAction />
    </Layout>
  );
};

export default Index;
