import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Search, Compass, Sparkles } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const floatingElements = Array.from({ length: 8 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-primary/5 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className={`relative z-10 text-center max-w-2xl mx-auto px-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* 404 Number with Sparkle Effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text animate-pulse">
            404
          </h1>
          <Sparkles className="absolute top-4 right-8 h-8 w-8 text-accent animate-bounce" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute bottom-8 left-12 h-6 w-6 text-primary animate-bounce" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Main Message */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Oops! We couldn't find that page
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            The page you're looking for might have been moved, deleted, or never existed.
          </p>
          <p className="text-sm text-muted-foreground/80 font-mono bg-muted/50 px-3 py-1 rounded-lg inline-block">
            {location.pathname}
          </p>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link 
            to="/" 
            className="btn-hero group px-8 py-4 text-lg"
          >
            <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            Go Home
            <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn-hero-outline group px-8 py-4 text-lg"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
          </button>
        </div>

        {/* Quick Navigation */}
        <div className={`mt-12 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center">
            <Compass className="mr-2 h-4 w-4" />
            Quick Navigation
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { name: 'About', path: '/about' },
              { name: 'Programs', path: '/programs' },
              { name: 'Contact', path: '/contact' },
              { name: 'Events', path: '/events' },
              { name: 'Blog', path: '/blog' },
            ].map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs px-3 py-1 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
