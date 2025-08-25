import { useState, useEffect } from 'react';
import { ArrowRight, Play, Globe, Users, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

import carousel1 from "../../assets/carousel1.jpg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";

const ModernHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Building Bridges for",
      highlight: "Global Development",
      description:
        "Empowering communities worldwide through education, sustainable development, and meaningful partnerships.",
      image: carousel1,
    },
    {
      title: "Transforming Lives Through",
      highlight: "Innovation & Collaboration",
      description:
        "Creating lasting impact through strategic programs, innovative solutions, and community-driven initiatives.",
      image: carousel2,
    },
    {
      title: "Fostering Unity for",
      highlight: "Sustainable Future",
      description:
        "Connecting diverse communities to build a more equitable and sustainable world for future generations.",
      image: carousel3,
    },
  ];

  const stats = [
    { icon: Globe, label: "Countries Reached", value: "15+" },
    { icon: Users, label: "Lives Impacted", value: "50,000+" },
    { icon: Award, label: "Programs Launched", value: "100+" },
    { icon: Lightbulb, label: "Innovations Created", value: "25+" },
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Slides */}
      <div className='absolute inset-0 z-0'>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-30" : "opacity-0"
            }`}>
            <img
              src={slide.image}
              alt={`Hero slide ${index + 1}`}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-background/40 to-secondary/20' />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className='absolute inset-0 z-10'>
        <div className='absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full animate-float' />
        <div
          className='absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full animate-float'
          style={{ animationDelay: "2s" }}
        />
        <div
          className='absolute bottom-1/4 left-1/3 w-16 h-16 bg-accent/20 rounded-full animate-float'
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {/* Hero Badge */}
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-scale-in'>
            <Globe className='w-4 h-4 text-primary mr-2' />
            <span className='text-sm font-medium text-primary'>
              Est. 2020 • NGO Registration: 00NGO/R/7452
            </span>
          </div>

          {/* Main Headlines with Animation */}
          <div className='mb-8'>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-poppins font-bold leading-tight mb-4'>
              <span className='block text-foreground animate-slide-in-left'>
                {heroSlides[currentSlide].title}
              </span>
              <span
                className='block text-shimmer animate-slide-in-right'
                style={{ animationDelay: "0.3s" }}>
                {heroSlides[currentSlide].highlight}
              </span>
            </h1>

            <p
              className='text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in'
              style={{ animationDelay: "0.6s" }}>
              {heroSlides[currentSlide].description}
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div
            className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up'
            style={{ animationDelay: "0.9s" }}>
            <Link to='/programs' className='btn-hero group'>
              Explore Our Impact
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
            <button className='btn-hero-outline group flex items-center'>
              <Play className='mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300' />
              Watch Our Story
            </button>
          </div>

          {/* Impact Statistics */}
          <div
            className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-scale-in'
            style={{ animationDelay: "1.2s" }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`card-modern hover-lift group animate-fade-in stagger-${
                  index + 1
                }`}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}>
                <div className='flex flex-col items-center text-center'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors duration-300'>
                    <stat.icon className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-2xl md:text-3xl font-bold text-foreground mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-muted-foreground font-medium'>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2'>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-primary scale-125"
                : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 right-8 animate-bounce-subtle'>
        <div className='w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-primary rounded-full mt-2 animate-pulse' />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;