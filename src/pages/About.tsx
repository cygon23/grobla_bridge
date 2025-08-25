import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { Users, Target, Heart, Award } from 'lucide-react';

import kingu from "../assets/team/kingu.png";
import marium from "../assets/team/mariam.jpg";
import seyg from "../assets/team/seyg.png";
import pass from "../assets/team/pass.png";

const About = () => {
  const team = [
    {
      name: "Masouz Kingu",
      role: "Executive Director",
      image: kingu,
      bio: "Leading global initiatives with 15+ years in international development.",
    },
    {
      name: "Marium Mboya",
      role: "Community Engagement and Programs Lead",
      image: marium,
      bio: "Expertise in sustainable development and community engagement.",
    },
    {
      name: "Sigyfrid Masawe",
      role: "Secretary General",
      image: seyg,
      bio: "Passionate educator with focus on inclusive learning opportunities.",
    },
    {
      name: "Godfrey Gozberty",
      role: "Technical Lead",
      image: pass,
      bio: "Turn ideas into real solution to empower community.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        title='About GBCSD'
        subtitle='Dedicated to fostering global collaboration and driving sustainable development since 2020, formally registered in Tanzania as a Non-Governmental Organization 00NGO/R/7452 in 2024.'
      />

      {/* Story Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div className='scroll-fade'>
              <h2 className='text-3xl lg:text-4xl font-poppins font-bold mb-6 text-gradient-nature'>
                Our Story
              </h2>
              <div className='space-y-4 text-muted-foreground leading-relaxed'>
                <p>
                  Founded in 2020, Global Bridging Center for Shared Development
                  (GBCSD) emerged from a powerful vision to foster
                  collaboration, innovation, and sustainability across the
                  globe. We unite diverse voices and expertise to tackle today's
                  most pressing challenges.
                </p>
                <p>
                  Formally registered as a Non-Governmental Organization in
                  Tanzania (00NGO/R/7452) in 2024, we are dedicated to
                  empowering communities and driving inclusive progress that
                  benefits both present and future generations.
                </p>
                <p>
                  At GBCSD, we empower individuals and communities by working
                  with governments, civil societies and other stakeholders
                  through collaboration and innovation to address global
                  challenges and promote sustainable development worldwide.
                </p>
              </div>
            </div>
            <div className='card-elevated scroll-fade'>
              <div className='grid grid-cols-2 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-primary mb-2'>
                    2020
                  </div>
                  <div className='text-sm text-muted-foreground'>Founded</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-secondary mb-2'>
                    2024
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    NGO Registered
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-nature mb-2'>
                    Global
                  </div>
                  <div className='text-sm text-muted-foreground'>Reach</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-trust mb-2'>
                    Unity
                  </div>
                  <div className='text-sm text-muted-foreground'>Mission</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className='py-16 section-nature'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='card-feature scroll-fade hover-lift'>
              <Target className='h-12 w-12 text-primary mb-6' />
              <h3 className='text-2xl font-poppins font-bold mb-4 text-gradient-primary'>
                Our Vision
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                A world where every community has the resources, knowledge, and
                connections needed to thrive sustainably and contribute to
                global prosperity.
              </p>
            </div>
            <div className='card-feature scroll-fade hover-lift'>
              <Heart className='h-12 w-12 text-secondary mb-6' />
              <h3 className='text-2xl font-poppins font-bold mb-4 text-gradient-primary'>
                Our Mission
              </h3>
              <p className='text-muted-foreground leading-relaxed'>
                To bridge communities across the globe through innovative
                programs that foster education, sustainability, and
                collaborative partnerships for lasting positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16 scroll-fade'>
            <h2 className='text-4xl lg:text-5xl font-poppins font-bold text-gradient-primary mb-6'>
              Meet Our Team
            </h2>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Passionate professionals dedicated to creating positive change in
              communities worldwide.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {team.map((member, index) => (
              <div
                key={member.name}
                className='card-feature text-center hover-lift scroll-fade'>
                <div className='w-32 h-32 bg-gradient-hero rounded-full mx-auto mb-6 shadow-glow flex items-center justify-center overflow-hidden'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover'
                  />
                </div>

                <h4 className='text-xl font-poppins font-semibold mb-2 text-foreground'>
                  {member.name}
                </h4>
                <p className='text-primary font-medium mb-4'>{member.role}</p>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;