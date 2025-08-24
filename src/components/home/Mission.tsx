import { GraduationCap, Leaf, Handshake, Target } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: GraduationCap,
      title: 'Education Empowerment',
      description: 'Providing quality educational opportunities and resources to underserved communities worldwide.',
      color: 'primary',
    },
    {
      icon: Leaf,
      title: 'Sustainable Development',
      description: 'Creating lasting environmental and social impact through innovative sustainability initiatives.',
      color: 'secondary',
    },
    {
      icon: Handshake,
      title: 'Global Partnerships',
      description: 'Building bridges between communities, organizations, and governments for collaborative solutions.',
      color: 'accent',
    },
    {
      icon: Target,
      title: 'Targeted Impact',
      description: 'Focusing our efforts where they matter most to create measurable, lasting positive change.',
      color: 'primary',
    },
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-gradient-primary mb-6">
            Our Mission & Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe in the power of connection, education, and sustainable action to transform 
            communities and create a more equitable world for all.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="card-elevated text-center mb-16 scroll-fade">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-poppins font-semibold mb-6 text-gradient-nature">
              "To bridge communities across the globe through innovative programs that foster 
              education, sustainability, and collaborative partnerships for lasting positive impact."
            </h3>
            <p className="text-lg text-muted-foreground">
              Every action we take is guided by our commitment to empowerment, inclusion, and 
              the belief that together we can solve the world's most pressing challenges.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="card-feature text-center group scroll-fade hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-20 h-20 bg-${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-glow transition-all duration-500`}>
                <value.icon className="h-10 w-10 text-white" />
              </div>
              
              <h4 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                {value.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 scroll-fade">
          <div className="card-elevated inline-block">
            <h3 className="text-2xl font-poppins font-semibold mb-4 text-gradient-primary">
              Ready to Make an Impact?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join our global community of changemakers and help us bridge the gap to a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Get Involved
              </button>
              <button className="btn-hero-outline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;