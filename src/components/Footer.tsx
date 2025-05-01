
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-boulder-stone-50 border-t border-boulder-stone-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-boulder-teal-500 text-white font-heading font-bold text-lg">
                B
              </div>
              <span className="font-heading font-bold text-lg">
                boulder<span className="text-boulder-teal-500">.builders</span>
              </span>
            </Link>
            <p className="text-sm text-boulder-stone-600 max-w-md">
              A community platform fostering collaboration on local challenges and opportunities in Boulder, Colorado.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-3 text-boulder-stone-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/problems" className="text-boulder-stone-600 hover:text-boulder-teal-600">Problems</Link>
              </li>
              <li>
                <Link to="/projects" className="text-boulder-stone-600 hover:text-boulder-teal-600">Projects</Link>
              </li>
              <li>
                <Link to="/map" className="text-boulder-stone-600 hover:text-boulder-teal-600">P-P-P Map</Link>
              </li>
              <li>
                <Link to="/events" className="text-boulder-stone-600 hover:text-boulder-teal-600">Events</Link>
              </li>
              <li>
                <Link to="/about" className="text-boulder-stone-600 hover:text-boulder-teal-600">About</Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-heading font-semibold mb-3 text-boulder-stone-800">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/code-of-conduct" className="text-boulder-stone-600 hover:text-boulder-teal-600">Code of Conduct</Link>
              </li>
              <li>
                <Link to="/faq" className="text-boulder-stone-600 hover:text-boulder-teal-600">FAQ</Link>
              </li>
              <li>
                <a href="https://github.com/" className="text-boulder-stone-600 hover:text-boulder-teal-600">GitHub Repo</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-boulder-stone-200 text-center">
          <p className="text-sm text-boulder-stone-500">
            &copy; {new Date().getFullYear()} boulder.builders. Built with ❤️ in Boulder, Colorado.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
