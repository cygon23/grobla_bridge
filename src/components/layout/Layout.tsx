import { ReactNode, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Chatbot from '@/components/ui/chatbot';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    // Enhanced scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all scroll trigger elements
    const scrollElements = document.querySelectorAll('.scroll-trigger, .scroll-trigger-left, .scroll-trigger-right, .scroll-trigger-scale, .scroll-fade');
    scrollElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;