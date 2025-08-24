import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  Heart,
  Star,
  Quote,
  MapPin,
  Calendar
} from 'lucide-react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    lives: 0,
    countries: 0,
    programs: 0,
    volunteers: 0
  });

  const achievements = [
    {
      icon: Users,
      number: "50+",
      label: "Lives Impacted",
      description: "People directly benefited from our programs",
      target: 50000,
    },
    {
      icon: Globe,
      number: "2+",
      label: "Countries Reached",
      description: "Nations where we've implemented projects",
      target: 15,
    },
    {
      icon: Award,
      number: "10+",
      label: "Programs Completed",
      description: "Successful initiatives launched and completed",
      target: 100,
    },
    {
      icon: Heart,
      number: "20+",
      label: "Active Volunteers",
      description: "Dedicated volunteers worldwide",
      target: 500,
    },
  ];

  const testimonials = [
    {
      quote: "Global Bridging Center transformed our community's approach to education. The impact is remarkable.",
      author: "Sarah Mwangi",
      position: "Community Leader",
      location: "Nairobi, Kenya",
      image: "/src/assets/carousel1.jpg"
    },
    {
      quote: "Through their programs, I gained skills that changed my life and my family's future forever.",
      author: "Abdul Rahman",
      position: "Program Beneficiary",
      location: "Lagos, Nigeria",
      image: "/src/assets/carousel2.jpg"
    },
    {
      quote: "The partnership approach ensures sustainable development that truly serves local needs.",
      author: "Dr. Maria Santos",
      position: "Development Expert",
      location: "Manila, Philippines",
      image: "/src/assets/carousel3.jpg"
    }
  ];

  const milestones = [
    "2020: Founded with a vision to bridge global communities",
    "2021: Launched first education program in East Africa",
    "2022: Expanded to 5 countries with 10+ active programs",
    "2023: Reached 25,000+ beneficiaries across our initiatives",
    "2024: Celebrating 50,000+ lives impacted worldwide"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate counters
            achievements.forEach((achievement, index) => {
              const increment = achievement.target / 50;
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= achievement.target) {
                  current = achievement.target;
                  clearInterval(timer);
                }
                setCounters(prev => ({
                  ...prev,
                  [index === 0 ? 'lives' : index === 1 ? 'countries' : index === 2 ? 'programs' : 'volunteers']: Math.floor(current)
                }));
              }, 20);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('impact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact-section" className="py-16 lg:py-24 section-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`scroll-trigger ${isVisible ? 'in-view' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-secondary mr-2" />
              <span className="text-sm font-medium text-secondary">Our Results</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-6">
              Impact & <span className="text-gradient-secondary">Achievements</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Measurable results and inspiring stories that showcase the transformative power of our collective efforts.
            </p>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const currentValue = index === 0 ? counters.lives : 
                               index === 1 ? counters.countries : 
                               index === 2 ? counters.programs : 
                               counters.volunteers;
            
            return (
              <div
                key={achievement.label}
                className={`card-feature text-center scroll-trigger ${isVisible ? 'in-view' : ''} group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {index === 0 ? `${(currentValue / 1000).toFixed(0)}K+` :
                   index === 2 ? `${currentValue}+` :
                   `${currentValue}+`}
                </div>
                
                <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
                  {achievement.label}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className={`scroll-trigger ${isVisible ? 'in-view' : ''} mb-20`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Stories of <span className="text-gradient-primary">Transformation</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real voices from the communities we serve, sharing their experiences and the impact of our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`card-interactive scroll-trigger ${isVisible ? 'in-view' : ''} group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <Quote className="w-8 h-8 text-primary/50 mb-4" />
                  
                  <blockquote className="text-foreground italic leading-relaxed mb-6 flex-1">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="flex items-center text-xs text-primary">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline of Achievements */}
        <div className={`scroll-trigger ${isVisible ? 'in-view' : ''}`}>
          <div className="section-highlight rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full translate-y-12 -translate-x-12" />
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 mb-6">
                  <Calendar className="w-5 h-5 text-primary mr-3" />
                  <span className="text-sm font-semibold text-primary">Journey of Impact</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6">
                  Our <span className="text-gradient-primary">Transformative</span> Journey
                </h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  From a vision to reality - witness the milestones that shaped our mission to bridge communities worldwide
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center scroll-trigger ${isVisible ? 'in-view' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-4 h-4 bg-primary rounded-full mr-6 flex-shrink-0" />
                  <div className="flex-1 border-l border-border/30 pl-6 pb-6 last:border-l-0">
                    <p className="text-foreground font-medium leading-relaxed">
                      {milestone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;