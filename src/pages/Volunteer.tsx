import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { 
  Users, 
  Clock, 
  MapPin, 
  GraduationCap, 
  Heart, 
  Globe, 
  Code, 
  Camera,
  PenTool,
  Megaphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Volunteer = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [availability, setAvailability] = useState('');

  const opportunityTypes = [
    {
      icon: Globe,
      title: "Field Work",
      description: "On-ground programs in communities across Africa",
      commitment: "3-12 months",
      location: "Various African countries",
      color: "primary"
    },
    {
      icon: Code,
      title: "Remote/Virtual",
      description: "Support from anywhere using your digital skills",
      commitment: "2-10 hours/week",
      location: "Work from anywhere",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Local Advocacy",
      description: "Promote our mission in your local community",
      commitment: "Flexible",
      location: "Your city/region",
      color: "accent"
    }
  ];

  const skillCategories = [
    {
      category: "Education & Training",
      icon: GraduationCap,
      skills: ["Teaching", "Curriculum Development", "Workshop Facilitation", "Mentoring"]
    },
    {
      category: "Technology",
      icon: Code,
      skills: ["Web Development", "Mobile Apps", "Data Analysis", "IT Support"]
    },
    {
      category: "Communication",
      icon: Megaphone,
      skills: ["Content Writing", "Social Media", "Translation", "Public Speaking"]
    },
    {
      category: "Creative",
      icon: Camera,
      skills: ["Photography", "Graphic Design", "Video Production", "Storytelling"]
    }
  ];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <Layout>
      <PageHero
        title="Become a Volunteer"
        subtitle="Join our global community of changemakers and help build bridges across continents"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Opportunity Types */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground text-center mb-12">
              Choose Your <span className="text-gradient-primary">Impact Path</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {opportunityTypes.map((type) => {
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
                    
                    <p className="text-muted-foreground mb-6">
                      {type.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-primary mr-2" />
                        <span className="text-muted-foreground">Commitment: {type.commitment}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{type.location}</span>
                      </div>
                    </div>
                    
                    <button className={`inline-flex items-center font-medium group-hover:translate-x-1 transition-transform duration-300 ${
                      type.color === 'primary' ? 'text-primary hover:text-primary/80' :
                      type.color === 'secondary' ? 'text-secondary hover:text-secondary/80' :
                      'text-accent hover:text-accent/80'
                    }`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Application Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Form */}
            <div className="card-feature p-8">
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-6">
                Volunteer Application
              </h3>

              <form className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="City, Country"
                  />
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Availability
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['Part-time', 'Full-time', 'Flexible'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setAvailability(option)}
                        className={`p-3 rounded-xl border-2 font-medium transition-all duration-300 ${
                          availability === option
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border bg-background text-foreground hover:border-primary/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Why do you want to volunteer?
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                    placeholder="Tell us about your motivation and what you hope to achieve..."
                  />
                </div>

                <button type="submit" className="w-full btn-hero">
                  Submit Application
                </button>
              </form>
            </div>

            {/* Right Column - Skills */}
            <div>
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-6">
                Your <span className="text-gradient-secondary">Skills</span>
              </h3>
              
              <p className="text-muted-foreground mb-8">
                Select the skills you'd like to contribute. Don't worry if you don't see your exact skill - we welcome all talents!
              </p>

              <div className="space-y-6">
                {skillCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={category.category} className="card-interactive p-6">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary mr-3" />
                        <h4 className="font-poppins font-bold text-foreground">
                          {category.category}
                        </h4>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill) => (
                          <button
                            key={skill}
                            onClick={() => toggleSkill(skill)}
                            className={`flex items-center p-3 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
                              selectedSkills.includes(skill)
                                ? 'border-primary bg-primary/10 text-primary'
                                : 'border-border bg-background text-foreground hover:border-primary/50'
                            }`}
                          >
                            <CheckCircle className={`w-4 h-4 mr-2 ${
                              selectedSkills.includes(skill) ? 'text-primary' : 'text-muted-foreground'
                            }`} />
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {selectedSkills.length > 0 && (
                <div className="section-highlight rounded-2xl p-6 mt-6">
                  <h5 className="font-poppins font-bold text-foreground mb-3">
                    Selected Skills ({selectedSkills.length})
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Volunteer;