import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  Mail, 
  ArrowRight,
  Globe,
  Handshake,
  MessageSquare,
  ExternalLink,
  Calendar
} from 'lucide-react';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);

  const actionCards = [
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Support our mission with a financial contribution that directly impacts communities in need.",
      action: "Donate Now",
      color: "primary",
      highlight: "Every dollar counts"
    },
    {
      icon: Users,
      title: "Become a Volunteer",
      description: "Join our team of dedicated volunteers and contribute your skills to meaningful projects worldwide.",
      action: "Join Us",
      color: "secondary",
      highlight: "Skills-based volunteering"
    },
    {
      icon: Mail,
      title: "Stay Connected",
      description: "Subscribe to our newsletter for updates on programs, impact stories, and opportunities to get involved.",
      action: "Subscribe",
      color: "accent",
      highlight: "Monthly updates"
    }
  ];

  const platforms = [
    {
      name: "Fahari Platform",
      description: "Connect with African development initiatives",
      icon: Globe,
      link: "#",
      featured: true,
    },
    {
      name: "Jamii Forum",
      description: "Join community discussions and forums",
      icon: MessageSquare,
      link: "https://www.jamiiforums.com/",
      featured: true,
    },
    {
      name: "Career Platform",
      description: "Explore collaboration opportunities",
      icon: Handshake,
      link: "https://careernamimi.org/",
      featured: true,
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

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='cta-section' className='py-16 lg:py-24 section-clean'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main CTA Header */}
        <div className='text-center mb-16'>
          <div className={`scroll-trigger ${isVisible ? "in-view" : ""}`}>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
              <Heart className='w-4 h-4 text-primary mr-2' />
              <span className='text-sm font-medium text-primary'>
                Take Action
              </span>
            </div>

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-6'>
              Join Our <span className='text-gradient-primary'>Movement</span>
            </h2>

            <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Be part of the change you want to see. Choose how you'd like to
              contribute to building bridges across communities worldwide.
            </p>
          </div>
        </div>

        {/* Action Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
          {actionCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.title}
                className={`card-feature hover-lift scroll-trigger ${
                  isVisible ? "in-view" : ""
                } group relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Background Pattern */}
                <div className='absolute top-0 right-0 w-24 h-24 opacity-5'>
                  <IconComponent className='w-full h-full' />
                </div>

                <div className='relative z-10'>
                  {/* Icon & Highlight */}
                  <div className='flex items-center justify-between mb-6'>
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        card.color === "primary"
                          ? "bg-primary text-primary-foreground"
                          : card.color === "secondary"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-accent text-accent-foreground"
                      } group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className='w-7 h-7' />
                    </div>

                    <div
                      className={`text-xs px-3 py-1 rounded-full ${
                        card.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : card.color === "secondary"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-accent/10 text-accent"
                      } font-medium`}>
                      {card.highlight}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className='text-xl md:text-2xl font-poppins font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300'>
                    {card.title}
                  </h3>

                  <p className='text-muted-foreground leading-relaxed mb-8'>
                    {card.description}
                  </p>

                  {/* Action Button */}
                  <Link
                    to={
                      card.title === "Make a Donation"
                        ? "/donate"
                        : card.title === "Become a Volunteer"
                        ? "/volunteer"
                        : "/newsletter"
                    }
                    className={`inline-flex items-center font-semibold px-6 py-3 rounded-xl group-hover:translate-x-1 transition-all duration-300 ${
                      card.color === "primary"
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : card.color === "secondary"
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        : "bg-accent text-accent-foreground hover:bg-accent/90"
                    } shadow-medium hover:shadow-large`}>
                    {card.action}
                    <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300' />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Connections */}
        <div className={`scroll-trigger ${isVisible ? "in-view" : ""} mb-16`}>
          <div className='section-highlight rounded-3xl p-8 md:p-12'>
            <div className='text-center mb-12'>
              <h3 className='text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4'>
                Collabolative{" "}
                <span className='text-gradient-secondary'>Platforms</span>
              </h3>
              <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                Join our community on various platforms to stay engaged, share
                ideas, and collaborate on development initiatives.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {platforms.map((platform, index) => {
                const IconComponent = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.link}
                    className={`card-interactive scroll-trigger ${
                      isVisible ? "in-view" : ""
                    } group relative ${
                      platform.featured ? "border-primary/30" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}>
                    {platform.featured && (
                      <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                        <div className='bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium'>
                          Featured
                        </div>
                      </div>
                    )}

                    <div className='flex items-center mb-4'>
                      <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300'>
                        <IconComponent className='w-6 h-6 text-primary' />
                      </div>
                      <div className='flex-1'>
                        <h4 className='font-poppins font-bold text-foreground group-hover:text-primary transition-colors duration-300'>
                          {platform.name}
                        </h4>
                        <ExternalLink className='w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors duration-300' />
                      </div>
                    </div>

                    <p className='text-muted-foreground text-sm'>
                      {platform.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          className={`text-center scroll-trigger ${
            isVisible ? "in-view" : ""
          }`}>
          <div className='max-w-2xl mx-auto'>
            <h3 className='text-2xl md:text-3xl font-poppins font-bold text-foreground mb-4'>
              Stay Informed, Stay Involved
            </h3>
            <p className='text-muted-foreground mb-8'>
              Get monthly updates on our programs, impact stories, and
              opportunities to make a difference.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-1 px-4 py-3 rounded-xl border border-border/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary'
              />
              <button className='btn-hero whitespace-nowrap'>
                Subscribe
                <Mail className='ml-2 h-4 w-4' />
              </button>
            </div>

            <p className='text-xs text-muted-foreground mt-4'>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;