
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-boulder-stone-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-boulder-teal-100">
          <span className="font-heading font-bold text-3xl text-boulder-teal-600">404</span>
        </div>
        <h1 className="text-3xl font-heading font-bold mb-4 text-boulder-stone-900">Page not found</h1>
        <p className="text-lg text-boulder-stone-600 mb-6">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Button asChild className="bg-boulder-teal-500 hover:bg-boulder-teal-600">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
