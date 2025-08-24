import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { 
  Mail, 
  Globe, 
  Users, 
  Lightbulb, 
  Calendar,
  CheckCircle,
  Bell,
  BookOpen,
  Heart,
  Award
} from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [frequency, setFrequency] = useState('monthly');

  const newsletterTypes = [
    {
      icon: Globe,
      title: "Program Updates",
      description: "Latest news from our global initiatives and community programs",
      frequency: "Monthly",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Impact Stories",
      description: "Inspiring stories from beneficiaries and communities we serve",
      frequency: "Bi-weekly",
      color: "secondary"
    },
    {
      icon: Lightbulb,
      title: "Innovation Insights",
      description: "New technologies and innovative solutions in development work",
      frequency: "Quarterly",
      color: "accent"
    }
  ];

  const interestOptions = [
    "Education & Training",
    "Healthcare Initiatives", 
    "Environmental Projects",
    "Technology Innovation",
    "Community Development",
    "Partnership Opportunities",
    "Volunteer Programs",
    "Research & Data"
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "Exclusive Content",
      description: "Access to detailed reports and case studies not shared elsewhere"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Invitations to webinars, events, and networking opportunities"
    },
    {
      icon: Award,
      title: "Impact Tracking",
      description: "See exactly how your support is making a difference"
    },
    {
      icon: Bell,
      title: "Early Access",
      description: "First to know about new programs and volunteer opportunities"
    }
  ];

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { email, interests, frequency });
  };

  return (
    <Layout>
      <PageHero
        title="Stay Connected"
        subtitle="Get the latest updates on our programs, impact stories, and opportunities to make a difference"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Newsletter Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                Choose Your <span className="text-gradient-primary">Updates</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select the type of content you'd like to receive and stay informed about our mission and impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsletterTypes.map((type) => {
                const IconComponent = type.icon;
                return (
                  <div key={type.title} className="card-feature hover-lift group">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      type.color === 'primary' ? 'bg-primary text-primary-foreground' :
                      type.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                      'bg-accent text-accent-foreground'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-poppins font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {type.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {type.description}
                    </p>
                    
                    <div className="flex items-center text-sm">
                      <Calendar className="w-4 h-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{type.frequency}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subscription Form & Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Form */}
            <div className="card-feature p-8">
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-6">
                Subscribe to Updates
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Frequency */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Email Frequency
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['weekly', 'monthly', 'quarterly'].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFrequency(freq)}
                        className={`p-3 rounded-xl border-2 font-medium transition-all duration-300 capitalize ${
                          frequency === freq
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background text-foreground hover:border-primary/50'
                        }`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Areas of Interest (Optional)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`flex items-center p-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                          interests.includes(interest)
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border bg-background text-foreground hover:border-primary/50'
                        }`}
                      >
                        <CheckCircle className={`w-4 h-4 mr-2 ${
                          interests.includes(interest) ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="w-full btn-hero">
                  Subscribe to Newsletter
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe anytime with one click. 
                  Read our <a href="/privacy" className="text-primary hover:underline">privacy policy</a>.
                </p>
              </form>
            </div>

            {/* Right Column - Benefits */}
            <div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-6">
                Subscriber <span className="text-gradient-secondary">Benefits</span>
              </h3>
              
              <p className="text-muted-foreground mb-8">
                Join over 10,000 subscribers who stay informed about our global impact and get exclusive access to:
              </p>

              <div className="space-y-6">
                {benefits.map((benefit) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={benefit.title} className="card-interactive p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-bold text-foreground mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sample Newsletter */}
              <div className="section-highlight rounded-2xl p-6 mt-8">
                <h4 className="font-poppins font-bold text-foreground mb-3">
                  📧 Sample Newsletter Content
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Monthly program updates from 12 African countries</li>
                  <li>• Success stories from our education initiatives</li>
                  <li>• Upcoming volunteer opportunities and events</li>
                  <li>• Partner spotlight and collaboration news</li>
                  <li>• Technology innovations in development work</li>
                </ul>
                <button className="text-primary hover:underline text-sm mt-3">
                  View sample newsletter →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Newsletter;