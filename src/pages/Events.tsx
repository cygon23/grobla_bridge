import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Global Education Summit 2024',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'New York, USA',
      type: 'Conference',
      attendees: '500+',
      description: 'Annual summit bringing together educators and policymakers to discuss innovative educational solutions.',
    },
    {
      title: 'Sustainability Workshop Series',
      date: '2024-03-22',
      time: '02:00 PM',
      location: 'Virtual Event',
      type: 'Workshop',
      attendees: '200+',
      description: 'Interactive workshops focused on implementing sustainable practices in local communities.',
    },
    {
      title: 'Community Partners Meetup',
      date: '2024-04-05',
      time: '06:00 PM',
      location: 'London, UK',
      type: 'Meetup',
      attendees: '100+',
      description: 'Networking event for our European partners and stakeholders to share experiences and best practices.',
    },
  ];

  const pastEvents = [
    {
      title: 'Global Impact Conference 2023',
      date: '2023-11-18',
      location: 'Geneva, Switzerland',
      type: 'Conference',
      attendees: '800+',
      description: 'Our largest annual conference showcasing success stories and future initiatives.',
    },
    {
      title: 'Digital Literacy Training',
      date: '2023-10-25',
      location: 'Kenya, Africa',
      type: 'Training',
      attendees: '150+',
      description: 'Comprehensive digital literacy program for educators in rural communities.',
    },
    {
      title: 'Youth Leadership Summit',
      date: '2023-09-12',
      location: 'São Paulo, Brazil',
      type: 'Summit',
      attendees: '300+',
      description: 'Empowering young leaders to drive change in their communities.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero 
        title="Events & Workshops"
        subtitle="Join us for transformative events, workshops, and summits designed to bring communities together and drive meaningful change through collaborative action."
      />

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-poppins font-bold text-gradient-nature mb-12 text-center">
            Upcoming Events
          </h2>
          
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={event.title} className="card-elevated hover-lift scroll-fade">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Date Section */}
                  <div className="lg:col-span-1">
                    <div className="card-feature text-center">
                      <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                      <div className="text-2xl font-bold text-primary mb-2">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm text-muted-foreground mb-1">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center justify-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {event.time}
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-poppins font-semibold text-foreground mb-2">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-primary" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1 text-primary" />
                            {event.attendees} Expected
                          </div>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {event.type}
                          </span>
                        </div>
                      </div>
                      <button className="btn-hero text-sm px-6 py-2">
                        Register Now
                      </button>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 section-nature">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-poppins font-bold text-gradient-primary mb-12 text-center">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={event.title} className="card-feature hover-lift scroll-fade">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    {event.attendees} Attendees
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Newsletter */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated text-center">
            <h3 className="text-3xl font-poppins font-bold text-gradient-primary mb-6">
              Stay Updated on Our Events
            </h3>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive notifications about upcoming events, 
              workshops, and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-muted/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
              <button className="btn-hero px-8">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;