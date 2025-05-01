
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Problems', path: '/problems' },
    { name: 'Projects', path: '/projects' },
    { name: 'People', path: '/people' },
    { name: 'Map', path: '/map' }, // Add Map link
    { name: 'Calendar', path: '/events' },
    { name: 'About', path: '/about' },
  ];

  // For mobile, we keep Home in the navigation
  const mobileNavLinks = [
    { name: 'Home', path: '/' },
    ...navLinks
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-boulder-teal-500 text-white font-heading font-bold text-xl">
            B
          </div>
          <span className="hidden sm:block font-heading font-bold text-xl">
            boulder<span className="text-boulder-teal-500">.builders</span>
          </span>
        </Link>

        {/* Desktop Navigation - Home removed */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive(link.path) 
                  ? "bg-boulder-teal-50 text-boulder-teal-600" 
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Button (Placeholder for GitHub Auth) */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" className="border-boulder-teal-200 text-boulder-teal-700 hover:bg-boulder-teal-50 hover:text-boulder-teal-700">
            Sign In with GitHub
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu - Keeps Home in the navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b animate-fade-in">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md",
                  isActive(link.path)
                    ? "bg-boulder-teal-50 text-boulder-teal-600"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 mb-2">
              <Button variant="outline" className="w-full border-boulder-teal-200 text-boulder-teal-700 hover:bg-boulder-teal-50 hover:text-boulder-teal-700">
                Sign In with GitHub
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
