import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    organization: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Leadership Team', href: '/about#team' },
      { name: 'Impact Reports', href: '/about#impact' },
    ],
    programs: [
      { name: 'Education Initiative', href: '/programs' },
      { name: 'Community Outreach', href: '/programs' },
      { name: 'Sustainability Projects', href: '/programs' },
      { name: 'Global Partnerships', href: '/programs' },
    ],
    resources: [
      { name: 'Latest News', href: '/blog' },
      { name: 'Upcoming Events', href: '/events' },
      { name: 'Get Involved', href: '/contact' },
      { name: 'Volunteer', href: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-muted/30 to-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-2xl">G</span>
              </div>
              <div>
                <h3 className="text-xl font-poppins font-bold text-gradient-primary">
                  Global Bridging Center
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering communities worldwide through education, sustainable development, 
              and global collaboration for a better tomorrow.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@globalbridgingcenter.org</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+2556 789 7618</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>P.O.Box Dar es salaam Tanzania</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-6">Organization</h4>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-6">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-muted/50 hover:bg-primary/10 rounded-lg flex items-center justify-center hover-scale group transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Stay updated:</span>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 text-sm bg-muted/50 border border-border/50 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-r-lg hover:bg-primary-glow transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Global Bridging Center. All rights reserved. Built with ❤️ for global impact.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;