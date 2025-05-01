
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Mock authentication state (would be replaced with actual auth later)
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    // Mock login with GitHub
    console.log('Initiating GitHub authentication...');
    // In a real implementation, this would redirect to GitHub OAuth
    setTimeout(() => {
      setIsAuthenticated(true);
      setUser({
        username: 'boulderuser',
        avatar: 'https://github.com/github.png',
        role: 'COMMUNITY'
      });
    }, 500);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, login, logout } = useAuth();
  
  const navLinks = [
    { name: 'Problems', path: '/problems' },
    { name: 'Projects', path: '/projects' },
    { name: 'People', path: '/people' },
    { name: 'Map', path: '/map' },
    { name: 'Calendar', path: '/events' },
    { name: 'About', path: '/about' },
  ];

  // For mobile, we keep Home in the navigation
  const mobileNavLinks = [
    { name: 'Home', path: '/' },
    ...navLinks
  ];

  // Add user-specific links if authenticated
  if (isAuthenticated) {
    mobileNavLinks.push(
      { name: 'My Contributions', path: '/my-contributions' }
    );
    
    // Add curator dashboard link if user has curator role
    if (user && user.role === 'CURATOR') {
      mobileNavLinks.push(
        { name: 'Curation Dashboard', path: '/curation' }
      );
    }
  }

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

        {/* Desktop Navigation */}
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

        {/* Auth Button */}
        <div className="hidden md:flex items-center gap-2">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              {user && user.role === 'CURATOR' && (
                <Link to="/curation" className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive('/curation')
                    ? "bg-boulder-teal-50 text-boulder-teal-600"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                )}>
                  Curation Dashboard
                </Link>
              )}
              <Link to="/my-contributions" className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive('/my-contributions')
                  ? "bg-boulder-teal-50 text-boulder-teal-600"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              )}>
                My Contributions
              </Link>
              <Link to={`/profile/${user?.username}`} className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-boulder-teal-100 flex items-center justify-center overflow-hidden">
                  {user?.avatar ? (
                    <img src={user.avatar} alt={user.username} className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-boulder-teal-500 font-medium text-sm">
                      {user?.username?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
              </Link>
              <Button 
                variant="ghost" 
                onClick={logout}
                className="text-boulder-stone-600 hover:text-boulder-stone-800 hover:bg-boulder-stone-50"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              className="border-boulder-teal-200 text-boulder-teal-700 hover:bg-boulder-teal-50 hover:text-boulder-teal-700"
              onClick={login}
            >
              <Github className="h-4 w-4 mr-2" />
              Sign In with GitHub
            </Button>
          )}
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

      {/* Mobile Menu */}
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
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="h-8 w-8 rounded-full bg-boulder-teal-100 flex items-center justify-center overflow-hidden">
                      {user?.avatar ? (
                        <img src={user.avatar} alt={user?.username} className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-boulder-teal-500 font-medium text-sm">
                          {user?.username?.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <Link 
                      to={`/profile/${user?.username}`}
                      className="text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View Profile
                    </Link>
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="w-full text-boulder-stone-600 hover:text-boulder-stone-800 hover:bg-boulder-stone-50"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  className="w-full border-boulder-teal-200 text-boulder-teal-700 hover:bg-boulder-teal-50 hover:text-boulder-teal-700"
                  onClick={() => {
                    login();
                    setIsOpen(false);
                  }}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Sign In with GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
