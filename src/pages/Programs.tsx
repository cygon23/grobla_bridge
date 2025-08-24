import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { GraduationCap, Leaf, Users, Globe, Heart, Lightbulb } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education Initiative',
      description: 'Providing quality educational resources and opportunities to underserved communities.',
      image: '/api/placeholder/400/250',
      stats: { beneficiaries: '25K+', locations: '15 Countries' },
      color: 'primary',
    },
    {
      icon: Leaf,
      title: 'Sustainability Projects',
      description: 'Environmental conservation and sustainable development programs for lasting impact.',
      image: '/api/placeholder/400/250',
      stats: { projects: '50+', impact: 'Carbon Neutral' },
      color: 'secondary',
    },
    {
      icon: Users,
      title: 'Community Outreach',
      description: 'Building stronger communities through local engagement and empowerment programs.',
      image: '/api/placeholder/400/250',
      stats: { communities: '200+', volunteers: '5K+' },
      color: 'accent',
    },
    {
      icon: Globe,
      title: 'Global Partnerships',
      description: 'Connecting organizations worldwide to maximize collaborative impact.',
      image: '/api/placeholder/400/250',
      stats: { partners: '100+', countries: '35' },
      color: 'primary',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Improving healthcare access and promoting wellness in underserved areas.',
      image: '/api/placeholder/400/250',
      stats: { clinics: '30+', patients: '15K+' },
      color: 'secondary',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Lab',
      description: 'Developing cutting-edge solutions to address complex global challenges.',
      image: '/api/placeholder/400/250',
      stats: { innovations: '12', patents: '3' },
      color: 'accent',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero 
        title="Our Programs"
        subtitle="Discover our comprehensive initiatives designed to empower communities, foster innovation, and create lasting positive impact worldwide through sustainable development."
      />

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={program.title} 
                className="card-feature hover-lift group cursor-pointer scroll-fade"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Program Icon */}
                <div className={`w-16 h-16 bg-${program.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow transition-all duration-500`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>

                {/* Program Image Placeholder */}
                <div className="w-full h-48 bg-gradient-section rounded-xl mb-6 flex items-center justify-center">
                  <program.icon className="h-16 w-16 text-primary/20" />
                </div>

                {/* Program Content */}
                <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Program Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                  {Object.entries(program.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full btn-hero text-sm py-2">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 section-trust">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gradient-primary mb-8">
              Our Global Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="card-feature text-center">
                <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                <div className="text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="card-feature text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
              <div className="card-feature text-center">
                <div className="text-4xl font-bold text-accent mb-2">200+</div>
                <div className="text-muted-foreground">Communities</div>
              </div>
              <div className="card-feature text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;