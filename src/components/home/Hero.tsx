import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Globe, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import carousel1 from '@/assets/carousel1.jpg';
import carousel2 from '@/assets/carousel2.jpg';
import carousel3 from '@/assets/carousel3.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [carousel1, carousel2, carousel3];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate images
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Globe, label: "Countries Reached", value: "2+" },
    { icon: Users, label: "Lives Impacted", value: "201+" },
    { icon: Heart, label: "Active Programs", value: "5+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden page-content">
      {/* Dynamic Background with Stunning Scrolling */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`GBCSD Impact Story ${index + 1}`}
                className="w-full h-full object-cover hero-parallax"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
        <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-16 w-32 h-32 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-trust/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold mb-8 leading-tight">
            <span className="text-gradient-primary">Building</span>
            <br />
            <span className="text-foreground">Sustainable Futures</span>
            <br />
            <span className="text-gradient-nature">For Every Community</span>
          </h1>

          {/* Subtitle - Real GBCSD Content */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            We empower individuals and communities by working with governments, civil societies and 
            other stakeholders through collaboration and innovation to address global challenges and 
            promote sustainable development worldwide.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <Link to="/programs">
              <button className="btn-hero group">
                Explore Our Programs
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            
            <button className="btn-hero-outline group flex items-center">
              <Play className="mr-2 h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
              Watch Our Story
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="card-feature text-center group">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-trust transition-all duration-500">
                  <stat.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-poppins font-bold text-gradient-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;