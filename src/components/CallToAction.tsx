
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-boulder-teal-500 to-boulder-sky-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Build a Better Boulder?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Join our collaborative community of problem solvers, innovators, and civic-minded residents working to make Boulder even better.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-boulder-teal-600 hover:bg-boulder-teal-50">
            <Link to="/">
              Sign In with GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
