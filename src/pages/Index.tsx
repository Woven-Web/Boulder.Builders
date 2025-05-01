
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturedContent from "@/components/FeaturedContent";
import PPPMap from "@/components/PPPMap";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HowItWorks />
      
      {/* Map Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Explore the Boulder.Builders Network
            </h2>
            <p className="text-boulder-stone-600 mb-8">
              Our interactive P-P-P Map helps visualize the connections between People, Problems, and Projects in our community.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PPPMap />
            
            <div className="text-center mt-6">
              <a href="/map" className="text-boulder-teal-600 hover:text-boulder-teal-700 text-sm font-medium">
                Explore the full interactive map →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedContent />
      <CallToAction />
    </Layout>
  );
};

export default Index;
