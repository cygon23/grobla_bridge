import Layout from '@/components/layout/Layout';
import ModernHero from '@/components/home/ModernHero';
import ModernMission from '@/components/home/ModernMission';
import Programs from '@/components/home/Programs';
import Impact from '@/components/home/Impact';
import CallToAction from '@/components/home/CallToAction';
import Partners from '@/components/home/Partners';

const Home = () => {
  return (
    <Layout>
      <ModernHero />
      <ModernMission />
      <Programs />
      <Impact />
      <CallToAction />
      <Partners />
    </Layout>
  );
};

export default Home;