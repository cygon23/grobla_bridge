import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { Calendar, User, Tag, Share2, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: 'Transforming Education in Rural Communities: A Year in Review',
    excerpt: 'Discover how our education initiatives have impacted over 10,000 students across 15 countries, bringing quality learning opportunities to the most remote areas.',
    author: 'Dr. Sarah Johnson',
    date: '2024-02-15',
    readTime: '8 min read',
    image: '/api/placeholder/800/400',
    tags: ['Education', 'Impact', 'Community'],
    category: 'Impact Report',
  };

  const blogPosts = [
    {
      title: 'Sustainable Agriculture Practices in Southeast Asia',
      excerpt: 'How our sustainability programs are helping farmers adopt eco-friendly practices while improving yields.',
      author: 'Michael Chen',
      date: '2024-02-10',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      tags: ['Sustainability', 'Agriculture'],
      category: 'Program Update',
    },
    {
      title: 'Building Digital Bridges: Technology for Good',
      excerpt: 'Exploring how digital innovation is connecting communities and creating new opportunities.',
      author: 'Amara Okafor',
      date: '2024-02-08',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      tags: ['Technology', 'Innovation'],
      category: 'Innovation',
    },
    {
      title: 'Youth Leadership Program Graduates 200 New Leaders',
      excerpt: 'Celebrating the achievements of our latest cohort of young changemakers.',
      author: 'Carlos Rivera',
      date: '2024-02-05',
      readTime: '4 min read',
      image: '/api/placeholder/400/250',
      tags: ['Youth', 'Leadership'],
      category: 'Success Story',
    },
    {
      title: 'Partnership Spotlight: Working with Local NGOs',
      excerpt: 'How collaborative partnerships amplify our impact in communities worldwide.',
      author: 'Dr. Sarah Johnson',
      date: '2024-02-01',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      tags: ['Partnerships', 'Collaboration'],
      category: 'Spotlight',
    },
    {
      title: 'Climate Action: Our Carbon Neutral Journey',
      excerpt: 'The steps we\'re taking to achieve carbon neutrality and inspire others to join the movement.',
      author: 'Michael Chen',
      date: '2024-01-28',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      tags: ['Climate', 'Sustainability'],
      category: 'Sustainability',
    },
    {
      title: 'Empowering Women Entrepreneurs in Africa',
      excerpt: 'Supporting female-led businesses through microfinance and mentorship programs.',
      author: 'Amara Okafor',
      date: '2024-01-25',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      tags: ['Women', 'Entrepreneurship'],
      category: 'Empowerment',
    },
  ];

  const categories = ['All', 'Impact Report', 'Program Update', 'Innovation', 'Success Story', 'Spotlight', 'Sustainability', 'Empowerment'];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero 
        title="Blog & News"
        subtitle="Stay updated with the latest insights, stories, and developments from our global community impact initiatives and sustainable development programs."
      />

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-poppins font-bold text-gradient-nature mb-8">Featured Story</h2>
          
          <div className="card-elevated hover-lift scroll-fade cursor-pointer">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Image */}
              <div className="w-full h-64 lg:h-full bg-gradient-section rounded-xl flex items-center justify-center">
                <Calendar className="h-16 w-16 text-primary/20" />
              </div>

              {/* Featured Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <h3 className="text-3xl font-poppins font-bold text-foreground">
                  {featuredPost.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{featuredPost.author}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                  <button className="btn-hero-outline text-sm px-6 py-2">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover-scale hover:bg-primary/10 hover:text-primary"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.title} 
                className="card-feature hover-lift cursor-pointer scroll-fade"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Post Image */}
                <div className="w-full h-48 bg-gradient-section rounded-xl mb-6 flex items-center justify-center">
                  <Calendar className="h-12 w-12 text-primary/20" />
                </div>

                {/* Post Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-poppins font-semibold text-foreground leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-1">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{post.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors duration-300">
                      <Share2 className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 section-trust">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated text-center">
            <h3 className="text-3xl font-poppins font-bold text-gradient-primary mb-6">
              Never Miss an Update
            </h3>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter and stay informed about our latest news, 
              impact stories, and opportunities to get involved.
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

export default Blog;