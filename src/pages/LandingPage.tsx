
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle, Github } from "lucide-react";

const LandingPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Please enter your email",
        description: "We need your email to keep you updated!",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // This is handled by the form submission to Beehiiv
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      toast({
        title: "You've been subscribed!",
        description: "Thanks for joining the Boulder.Builders community.",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-boulder-teal-50/30 flex-grow flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 network-lines opacity-75 z-0"></div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block mb-2 px-4 py-1.5 bg-boulder-teal-50 text-boulder-teal-600 rounded-full text-sm font-medium">
                Coming Soon
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold gradient-text">
                Build a Better Boulder, Together
              </h1>
              
              <p className="text-lg md:text-xl text-boulder-stone-700 max-w-2xl">
                A community platform connecting people, problems, and projects to foster innovation and collaboration in Boulder, Colorado.
              </p>
              
              <div className="pt-4">
                {isSubscribed ? (
                  <div className="flex items-center text-boulder-teal-600 gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Thanks for subscribing!</span>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md"
                    action="https://newsletter.wovenweb.beehiiv.com/subscribe"
                    method="POST"
                    target="_blank"
                  >
                    <input type="hidden" name="referring_site" value="boulder.builders" />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      className="flex-grow"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button 
                      type="submit" 
                      className="bg-boulder-teal-500 hover:bg-boulder-teal-600 whitespace-nowrap"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Get Updates"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                )}
                <p className="text-sm text-boulder-stone-500 mt-3">
                  Subscribe to our newsletter to be the first to know when we launch.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://github.com/Woven-Web/Boulder.Builders" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-boulder-stone-600 hover:text-boulder-teal-600 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>Follow on GitHub</span>
                </a>
                <a 
                  href="https://wovenweb.beehiiv.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-boulder-stone-600 hover:text-boulder-teal-600 transition-colors"
                >
                  <span>Read Woven Web Newsletter</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white shadow-xl rounded-xl p-6 boulder-card">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* People */}
                  <div className="p-6 rounded-lg bg-boulder-sky-50 border border-boulder-sky-100">
                    <div className="w-12 h-12 rounded-full bg-boulder-sky-100 text-boulder-sky-600 flex items-center justify-center mb-4 mx-auto">
                      <span className="font-heading font-bold text-lg">P</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-center">People</h3>
                    <p className="text-boulder-stone-600 text-sm text-center">
                      Connect with diverse community members who share your passion for improving Boulder.
                    </p>
                  </div>
                  
                  {/* Problems */}
                  <div className="p-6 rounded-lg bg-boulder-coral-50 border border-boulder-coral-100">
                    <div className="w-12 h-12 rounded-full bg-boulder-coral-100 text-boulder-coral-600 flex items-center justify-center mb-4 mx-auto">
                      <span className="font-heading font-bold text-lg">P</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-center">Problems</h3>
                    <p className="text-boulder-stone-600 text-sm text-center">
                      Identify and discuss challenges or opportunities that matter to our Boulder community.
                    </p>
                  </div>
                  
                  {/* Projects */}
                  <div className="p-6 rounded-lg bg-boulder-green-50 border border-boulder-green-100">
                    <div className="w-12 h-12 rounded-full bg-boulder-green-100 text-boulder-green-600 flex items-center justify-center mb-4 mx-auto">
                      <span className="font-heading font-bold text-lg">P</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2 text-center">Projects</h3>
                    <p className="text-boulder-stone-600 text-sm text-center">
                      Collaborate on solutions and initiatives that make a real impact on our community.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 rounded-lg bg-boulder-stone-50 border border-boulder-stone-100">
                  <h3 className="font-heading font-semibold text-lg mb-4 text-center">
                    What's Coming in Boulder.Builders
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-boulder-teal-100 text-boulder-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <p className="text-sm text-boulder-stone-700">
                        <span className="font-medium">Problem Discovery:</span> Post, discuss, and identify community challenges
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-boulder-teal-100 text-boulder-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <p className="text-sm text-boulder-stone-700">
                        <span className="font-medium">Collaboration:</span> Contribute ideas, research, and designs to approved problems
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-boulder-teal-100 text-boulder-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <p className="text-sm text-boulder-stone-700">
                        <span className="font-medium">Project Formation:</span> Create and join projects emerging from problem discussions
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-boulder-teal-100 text-boulder-teal-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium">4</span>
                      </div>
                      <p className="text-sm text-boulder-stone-700">
                        <span className="font-medium">Community Connection:</span> Events calendar and P-P-P interactive map
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-boulder-stone-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-boulder-teal-500 text-white font-heading font-bold text-lg">
                B
              </div>
              <span className="font-heading font-bold text-lg">
                boulder<span className="text-boulder-teal-500">.builders</span>
              </span>
            </div>
            
            <p className="text-sm text-boulder-stone-500">
              &copy; {new Date().getFullYear()} boulder.builders. Built with ❤️ in Boulder, Colorado.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Woven-Web/Boulder.Builders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-boulder-stone-600 hover:text-boulder-teal-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
