
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-boulder-teal-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 network-lines opacity-75 z-0"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-boulder-teal-50 text-boulder-teal-600 rounded-full text-sm font-medium animate-fade-in">
            Community-driven problem solving
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 gradient-text animate-scale-in">
            Build a Better Boulder, Together
          </h1>
          
          <p className="text-lg md:text-xl text-boulder-stone-700 mb-8 max-w-2xl mx-auto">
            Collaborate on local challenges, share ideas, and connect with others to create innovative solutions for our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
              <Link to="/problems">
                Explore Problems <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-boulder-teal-200 text-boulder-teal-700 hover:bg-boulder-teal-50 hover:text-boulder-teal-700">
              <Link to="/about">
                Learn How It Works
              </Link>
            </Button>
          </div>
          
          <div className="mt-16">
            <p className="text-boulder-stone-500 mb-4 text-sm">The three pillars of our community</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* People */}
              <div className="p-6 boulder-card">
                <div className="w-12 h-12 rounded-full bg-boulder-sky-100 text-boulder-sky-600 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-heading font-bold text-lg">P</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">People</h3>
                <p className="text-boulder-stone-600 text-sm">
                  Connect with diverse community members who share your passion for improving Boulder.
                </p>
              </div>
              
              {/* Problems */}
              <div className="p-6 boulder-card">
                <div className="w-12 h-12 rounded-full bg-boulder-coral-100 text-boulder-coral-600 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-heading font-bold text-lg">P</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Problems</h3>
                <p className="text-boulder-stone-600 text-sm">
                  Identify and discuss challenges or opportunities that matter to our Boulder community.
                </p>
              </div>
              
              {/* Projects */}
              <div className="p-6 boulder-card">
                <div className="w-12 h-12 rounded-full bg-boulder-green-100 text-boulder-green-600 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-heading font-bold text-lg">P</span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Projects</h3>
                <p className="text-boulder-stone-600 text-sm">
                  Collaborate on solutions and initiatives that make a real impact on our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
