import { useEffect, useState } from 'react';
import { Target, Heart, Lightbulb, Users, Globe, Leaf } from 'lucide-react';

const ModernMission = () => {
  const [isVisible, setIsVisible] = useState(false);

  const values = [
    {
      icon: Heart,
      title: "Compassionate Impact",
      description: "We approach every initiative with empathy and understanding, ensuring our work creates meaningful, lasting change.",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Global Unity",
      description: "Building bridges across cultures, communities, and continents to foster international cooperation and understanding.",
      color: "secondary"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Excellence",
      description: "Pioneering sustainable solutions through creative thinking, cutting-edge approaches, and unwavering commitment to quality.",
      color: "accent"
    },
    {
      icon: Users,
      title: "Community Empowerment",
      description: "Strengthening local capacities and empowering communities to become agents of their own transformation.",
      color: "primary"
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Integrating sustainable practices in all our initiatives to protect our planet for future generations.",
      color: "secondary"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Measuring success through tangible outcomes and continuous improvement in all our development programs.",
      color: "accent"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('mission-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mission-section" className="py-20 lg:py-32 section-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`scroll-trigger ${isVisible ? 'in-view' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Target className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Our Foundation</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-poppins font-bold text-foreground mb-6">
              Mission & <span className="text-gradient-primary">Values</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded in 2020 with a vision to bridge communities worldwide, we're committed to 
              creating sustainable development solutions that empower, educate, and unite.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`scroll-trigger-scale ${isVisible ? 'in-view' : ''} mb-20`}>
          <div className="section-highlight rounded-3xl p-12 md:p-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-8">
                "To bridge communities across the globe through innovative education, 
                sustainable development, and meaningful partnerships that create lasting positive impact."
              </h3>
              <div className="flex items-center justify-center space-x-4 text-primary font-medium">
                <div className="w-12 h-0.5 bg-primary" />
                <span>Global Bridging Center Mission</span>
                <div className="w-12 h-0.5 bg-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className={`card-interactive scroll-trigger ${isVisible ? 'in-view' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  {/* Icon Header */}
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${
                      value.color === 'primary' ? 'bg-primary text-primary-foreground' :
                      value.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                      'bg-accent text-accent-foreground'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {value.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className={`mt-6 h-1 rounded-full transition-all duration-300 ${
                    value.color === 'primary' ? 'bg-primary/20 group-hover:bg-primary' :
                    value.color === 'secondary' ? 'bg-secondary/20 group-hover:bg-secondary' :
                    'bg-accent/20 group-hover:bg-accent'
                  } transform scale-x-0 group-hover:scale-x-100 origin-left`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 scroll-trigger ${isVisible ? 'in-view' : ''}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a href="/about" className="btn-hero">
              Learn Our Story
            </a>
            <a href="/contact" className="btn-hero-outline">
              Join Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernMission;