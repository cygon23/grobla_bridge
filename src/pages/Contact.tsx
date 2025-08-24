import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@globalbringingcenter.org',
      description: 'Get in touch for general inquiries',
      color: 'from-primary to-primary-glow',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+255 123 456 789',
      description: 'Available Monday to Friday, 8 AM - 5 PM EAT',
      color: 'from-secondary to-trust',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Tanzania Headquarters',
      description: 'Dar es Salaam, Tanzania',
      color: 'from-nature to-primary',
    },
  ];

  const offices = [
    {
      region: "East Africa",
      city: "Dar es Salaam, Tanzania",
      address: "NGO Registration: 00NGO/R/7452",
      phone: "+255 123 456 789",
      email: "info@globalbringingcenter.org",
    },
    {
      region: "Global Outreach",
      city: "Digital Operations",
      address: "Online Collaboration Platform",
      phone: "+255 123 456 789",
      email: "glb@globalbringingcenter.org",
    },
    {
      region: "Partnership Hub",
      city: "Regional Networks",
      address: "Community Partner Centers",
      phone: "+255 123 456 789",
      email: "par@globalbringingcenter.org",
    },
    {
      region: "Innovation Center",
      city: "Development Programs",
      address: "Sustainable Development Hub",
      phone: "+255 123 456 789",
      email: "inn@globalbringingcenter.org",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero 
        title="Get in Touch"
        subtitle="Ready to make a difference? Contact us to learn more about our programs, partnership opportunities, or how you can get involved in building sustainable futures for every community."
      />

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={info.title} className="card-feature text-center hover-lift scroll-fade">
                <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                  <info.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-3 text-foreground">
                  {info.title}
                </h3>
                <p className="text-lg font-medium text-primary mb-2">
                  {info.details}
                </p>
                <p className="text-muted-foreground text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 section-nature">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-elevated scroll-fade">
              <h3 className="text-2xl font-poppins font-bold text-gradient-primary mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Volunteer Interest</option>
                    <option>Program Information</option>
                    <option>Media & Press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="btn-hero w-full group">
                  Send Message
                  <Send className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="scroll-fade">
              <div className="card-elevated h-full min-h-[500px] flex flex-col justify-center items-center text-center">
                <MapPin className="h-16 w-16 text-primary/20 mb-4" />
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-4">
                  Our Global Presence
                </h3>
                <p className="text-muted-foreground mb-6">
                  With offices and partners around the world, we're always close to the 
                  communities we serve.
                </p>
                <button className="btn-hero-outline">
                  View All Locations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-poppins font-bold text-gradient-primary mb-12 text-center">
            Our Global Offices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={office.region} className="card-feature hover-lift scroll-fade">
                <h4 className="text-lg font-poppins font-semibold text-primary mb-2">
                  {office.region}
                </h4>
                <h5 className="text-xl font-medium text-foreground mb-4">
                  {office.city}
                </h5>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mt-0.5 mr-2 text-primary flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                    <span className="text-primary hover:text-primary-glow transition-colors duration-300 cursor-pointer">
                      {office.email}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot CTA */}
      <section className="py-16 section-trust">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated text-center">
            <MessageSquare className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-poppins font-bold text-gradient-primary mb-6">
              Need Immediate Assistance?
            </h3>
            <p className="text-muted-foreground mb-8">
              Our AI assistant is here to help answer your questions 24/7. 
              Get instant support and information about our programs and initiatives.
            </p>
            <button className="btn-hero">
              Chat with Our Assistant
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;