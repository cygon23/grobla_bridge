import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Globe, 
  Award, 
  ArrowRight,
  ExternalLink,
  Handshake
} from 'lucide-react';

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Placeholder partner data - in real app, these would be actual partner logos
  const partners = [
    {
      name: "African Development Bank",
      category: "Financial Partners",
      logo: "/src/assets/carousel1.jpg", // Placeholder
      description: "Supporting sustainable development across Africa",
      website: "#",
      featured: true
    },
    {
      name: "United Nations Foundation",
      category: "International Organizations",
      logo: "/src/assets/carousel2.jpg", // Placeholder
      description: "Global partnerships for development goals",
      website: "#",
      featured: true
    },
    {
      name: "Microsoft Philanthropies",
      category: "Technology Partners",
      logo: "/src/assets/carousel3.jpg", // Placeholder
      description: "Technology solutions for social impact",
      website: "#",
      featured: false
    },
    {
      name: "World Health Organization",
      category: "Health Partners",
      logo: "/src/assets/carousel1.jpg", // Placeholder
      description: "Healthcare access and wellness programs",
      website: "#",
      featured: false
    },
    {
      name: "Education Cannot Wait",
      category: "Education Partners",
      logo: "/src/assets/carousel2.jpg", // Placeholder
      description: "Emergency education response and support",
      website: "#",
      featured: true
    },
    {
      name: "Green Climate Fund",
      category: "Environmental Partners",
      logo: "/src/assets/carousel3.jpg", // Placeholder
      description: "Climate resilience and sustainability",
      website: "#",
      featured: false
    }
  ];

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Partnerships",
      description:
        "Strategic alliances with businesses for sustainable development",
      count: "5+",
    },
    {
      icon: Globe,
      title: "International Organizations",
      description: "Collaborations with global development institutions",
      count: "3+",
    },
    {
      icon: Award,
      title: "Government Agencies",
      description: "Public sector partnerships for policy implementation",
      count: "8+",
    },
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

    const section = document.getElementById('partners-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners-section" className="py-16 lg:py-24 section-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`scroll-trigger ${isVisible ? 'in-view' : ''}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Handshake className="w-4 h-4 text-secondary mr-2" />
              <span className="text-sm font-medium text-secondary">Collaboration</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-6">
              Partners & <span className="text-gradient-secondary">Sponsors</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Working together with leading organizations, institutions, and corporations to amplify our impact and reach communities worldwide.
            </p>
          </div>
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {partnershipTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div
                key={type.title}
                className={`card-feature text-center scroll-trigger ${isVisible ? 'in-view' : ''} group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-secondary" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {type.count}
                </div>
                
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4 group-hover:text-secondary transition-colors duration-300">
                  {type.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Partner Logos Grid */}
        <div className={`scroll-trigger ${isVisible ? 'in-view' : ''} mb-16`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Our Trusted <span className="text-gradient-primary">Partners</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proud to collaborate with organizations that share our vision for global development and positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`card-interactive scroll-trigger ${isVisible ? 'in-view' : ''} group relative ${
                  partner.featured ? 'border-secondary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {partner.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full font-medium">
                      Featured Partner
                    </div>
                  </div>
                )}

                {/* Partner Logo */}
                <div className="relative overflow-hidden rounded-xl mb-4 h-32 bg-muted/50">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-background/80 group-hover:bg-background/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Building2 className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">
                        {partner.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partner Info */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-poppins font-bold text-foreground group-hover:text-secondary transition-colors duration-300 mb-1">
                      {partner.name}
                    </h4>
                    <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full inline-block">
                      {partner.category}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors duration-300 ml-2 flex-shrink-0" />
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Partnership Call to Action */}
        <div className={`text-center scroll-trigger ${isVisible ? 'in-view' : ''}`}>
          <div className="section-highlight rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Become a Partner
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our network of partners and help us create sustainable development solutions that transform communities worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-hero">
                Partnership Opportunities
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <Link to="/about" className="btn-hero-outline">
                Learn More About Us
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>For partnership inquiries, contact us at: <span className="text-primary font-medium">partnerships@globalbridging.org</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;