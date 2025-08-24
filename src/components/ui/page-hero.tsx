import { useState, useEffect } from 'react';
import carousel1 from '@/assets/carousel1.jpg';
import carousel2 from '@/assets/carousel2.jpg';
import carousel3 from '@/assets/carousel3.jpg';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundType?: 'carousel' | 'gradient';
}

const PageHero = ({ title, subtitle, backgroundType = 'carousel' }: PageHeroProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [carousel1, carousel2, carousel3];

  useEffect(() => {
    setIsVisible(true);
    
    if (backgroundType === 'carousel') {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [backgroundType]);

  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden page-content">
      {/* Background */}
      {backgroundType === 'carousel' ? (
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1500 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`GBCSD ${title} Background ${index + 1}`}
                  className="w-full h-full object-cover hero-parallax"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/85"></div>
          <div className="absolute inset-0 bg-gradient-hero opacity-40"></div>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
      )}

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-16 w-20 h-20 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-gradient-primary mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;