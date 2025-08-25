import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  Lightbulb, 
  Globe, 
  Heart, 
  ArrowRight,
  BookOpen,
  Handshake,
  Leaf
} from 'lucide-react';

import c1 from "../../assets/programs/capacity.png";
import c2 from "../../assets/programs/community heath.jpeg";
import c3 from "../../assets/programs/communityHand.jpeg";
import c4 from "../../assets/programs/globalchnage.jpeg";
import c5 from "../../assets/programs/innovation.jpeg";
import c6 from "../../assets/programs/partiners.jpeg";

const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);

  const programs = [
    {
      icon: GraduationCap,
      title: "Education & Capacity Building",
      description:
        "Empowering communities through skill development, literacy programs, and vocational training initiatives.",
      image: c1,
      impact: "120+ Students Trained",
      color: "primary",
    },
    {
      icon: Globe,
      title: "Global Development Partnerships",
      description:
        "Building strategic alliances for sustainable development projects across Africa and beyond.",
      image: c6,
      impact: "10+ Partnerships Formed",
      color: "secondary",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description:
        "Leveraging technology to create solutions for healthcare, agriculture, and education challenges.",
      image: c5,
      impact: "15+ Tech Solutions",
      color: "accent",
    },
    {
      icon: Heart,
      title: "Community Health",
      description:
        "Improving healthcare access and promoting wellness through community-based health programs.",
      image: c2,
      impact: "200+ Lives Improved",
      color: "primary",
    },
    {
      icon: Leaf,
      title: "Environmental Sustainability",
      description:
        "Promoting eco-friendly practices and climate resilience in rural and urban communities.",
      image: c4,
      impact: "10+ Green Projects",
      color: "secondary",
    },
    {
      icon: Handshake,
      title: "Economic Empowerment",
      description:
        "Supporting entrepreneurship, microfinance, and livelihood improvement initiatives.",
      image: c3,
      impact: "30+ Entrepreneurs",
      color: "accent",
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

    const section = document.getElementById("programs-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='programs-section' className='py-16 lg:py-24 section-clean'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className={`scroll-trigger ${isVisible ? "in-view" : ""}`}>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6'>
              <BookOpen className='w-4 h-4 text-primary mr-2' />
              <span className='text-sm font-medium text-primary'>Our Work</span>
            </div>

            <h2 className='text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-6'>
              Programs &{" "}
              <span className='text-gradient-primary'>Initiatives</span>
            </h2>

            <p className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
              Discover our comprehensive programs designed to create lasting
              impact across education, development, innovation, and community
              empowerment.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.title}
                className={`card-feature hover-lift scroll-trigger ${
                  isVisible ? "in-view" : ""
                } group`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Program Image */}
                <div className='relative overflow-hidden rounded-2xl mb-6 h-48'>
                  <img
                    src={program.image}
                    alt={program.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                      program.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : program.color === "secondary"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    } shadow-medium`}>
                    <IconComponent className='w-6 h-6' />
                  </div>
                  <div className='absolute bottom-4 left-4 text-white'>
                    <div className='text-sm font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm'>
                      {program.impact}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='flex flex-col h-full'>
                  <h3 className='text-xl md:text-2xl font-poppins font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300'>
                    {program.title}
                  </h3>

                  <p className='text-muted-foreground leading-relaxed mb-6 flex-1'>
                    {program.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center scroll-trigger ${
            isVisible ? "in-view" : ""
          }`}>
          <div className='section-highlight rounded-3xl p-8 md:p-12'>
            <h3 className='text-2xl md:text-3xl font-poppins font-bold text-foreground mb-4'>
              Ready to Make a Difference?
            </h3>
            <p className='text-muted-foreground mb-8 max-w-2xl mx-auto'>
              Join us in creating positive change. Explore our full range of
              programs and discover how you can contribute to our mission.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
              <Link to='/programs' className='btn-hero'>
                View All Programs
              </Link>
              <Link to='/contact' className='btn-hero-outline'>
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;