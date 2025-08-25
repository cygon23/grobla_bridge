import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    
    try {
      // Using EmailJS credentials from Supabase secrets
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      form.current.reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: "Please try again or contact us directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
        title='Get in Touch'
        subtitle='Ready to make a difference? Contact us to learn more about our programs, partnership opportunities, or how you can get involved in building sustainable futures for every community.'
      />

      {/* Contact Methods */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className='card-feature text-center hover-lift relative z-10'>
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow relative z-10`}>
                  <info.icon className='h-10 w-10 text-white' />
                </div>
                <h3 className='text-xl font-poppins font-semibold mb-3 text-foreground relative z-10'>
                  {info.title}
                </h3>
                <p className='text-lg font-medium text-primary mb-2 relative z-10 break-words'>
                  {info.details}
                </p>
                <p className='text-muted-foreground text-sm relative z-10'>
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className='py-16 section-nature'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='bg-card border border-border/20 rounded-3xl p-8 shadow-medium relative'>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none'></div>
              <h3 className='text-2xl font-poppins font-bold text-gradient-primary mb-6 relative z-10'>
                Send us a Message
              </h3>
              <form
                ref={form}
                onSubmit={handleSubmit}
                className='space-y-6 relative z-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      First Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      required
                      className='w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300'
                      placeholder='John'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='last_name'
                      required
                      className='w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300'
                      placeholder='Doe'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300'
                    placeholder='john.doe@example.com'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Subject
                  </label>
                  <select
                    name='subject'
                    required
                    className='w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300'>
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Volunteer Interest</option>
                    <option>Program Information</option>
                    <option>Media & Press</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    rows={6}
                    required
                    className='w-full px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300'
                    placeholder='Tell us how we can help you...'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`btn-hero w-full group relative overflow-hidden ${
                    isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                  } ${isSubmitted ? "bg-green-600 hover:bg-green-700" : ""}`}>
                  <span
                    className={`flex items-center justify-center transition-all duration-300 ${
                      isSubmitted ? "translate-y-0" : "translate-y-0"
                    }`}>
                    {isSubmitting ? (
                      <>
                        <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2' />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className='mr-2 h-5 w-5' />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className='ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300' />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className='scroll-fade'>
              <div className='bg-card border border-border/20 rounded-3xl p-8 shadow-medium h-full min-h-[500px] flex flex-col justify-center items-center text-center relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-3xl pointer-events-none'></div>
                <MapPin className='h-16 w-16 text-primary/20 mb-4 relative z-10' />
                <h3 className='text-xl font-poppins font-semibold text-foreground mb-4 relative z-10'>
                  Our Global Presence
                </h3>
                <p className='text-muted-foreground mb-6 relative z-10'>
                  With offices and partners around the world, we're always close
                  to the communities we serve.
                </p>
                <button className='btn-hero-outline relative z-10'>
                  View All Locations
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-4xl font-poppins font-bold text-gradient-primary mb-12 text-center'>
            Our Global Offices
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {offices.map((office, index) => (
              <div
                key={office.region}
                className='card-feature hover-lift relative'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl pointer-events-none'></div>
                <h4 className='text-lg font-poppins font-semibold text-primary mb-2 relative z-10'>
                  {office.region}
                </h4>
                <h5 className='text-xl font-medium text-foreground mb-4 relative z-10'>
                  {office.city}
                </h5>

                <div className='space-y-3 text-sm text-muted-foreground relative z-10'>
                  <div className='flex items-start'>
                    <MapPin className='h-4 w-4 mt-0.5 mr-2 text-primary flex-shrink-0' />
                    <span>{office.address}</span>
                  </div>
                  <div className='flex items-center'>
                    <Phone className='h-4 w-4 mr-2 text-primary flex-shrink-0' />
                    <span>{office.phone}</span>
                  </div>
                  <div className='flex items-center'>
                    <Mail className='h-4 w-4 mr-2 text-primary flex-shrink-0' />
                    <span className='text-primary hover:text-primary-glow transition-colors duration-300 cursor-pointer'>
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
      <section className='py-16 section-trust'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-card border border-border/20 rounded-3xl p-8 shadow-medium text-center relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl pointer-events-none'></div>
            <MessageSquare className='h-16 w-16 text-primary mx-auto mb-6 relative z-10' />
            <h3 className='text-3xl font-poppins font-bold text-gradient-primary mb-6 relative z-10'>
              Need Immediate Assistance?
            </h3>
            <p className='text-muted-foreground mb-8 relative z-10'>
              Our AI assistant is here to help answer your questions 24/7. Get
              instant support and information about our programs and
              initiatives.
            </p>
            <button className='btn-hero relative z-10'>
              Chat with Our Assistant
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;