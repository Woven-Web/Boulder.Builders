
import { Button } from "@/components/ui/button";

const JoinCTA = () => {
  return (
    <div className="mt-12 bg-boulder-teal-50 rounded-lg p-6 text-center">
      <h3 className="text-xl font-medium mb-2">Join the Community</h3>
      <p className="text-boulder-stone-600 mb-4">
        Want to be featured on this page? Sign in with GitHub and start contributing to problems and projects.
      </p>
      <Button className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
        Sign In with GitHub
      </Button>
    </div>
  );
};

export default JoinCTA;
