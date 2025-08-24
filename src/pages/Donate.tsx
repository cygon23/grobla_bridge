import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHero from '@/components/ui/page-hero';
import { Heart, CreditCard, Landmark, Smartphone, Shield, Award, Users } from 'lucide-react';

const Donate = () => {
  const [amount, setAmount] = useState('50');
  const [frequency, setFrequency] = useState('monthly');

  const presetAmounts = ['25', '50', '100', '250', '500'];
  
  const donationOptions = [
    {
      icon: Heart,
      title: "General Fund",
      description: "Support all our programs and initiatives across the globe",
      color: "primary"
    },
    {
      icon: Users,
      title: "Education Programs",
      description: "Fund skill development and literacy programs",
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Emergency Response",
      description: "Help communities during crisis and natural disasters",
      color: "accent"
    }
  ];

  const paymentMethods = [
    { icon: CreditCard, name: "Credit/Debit Card", description: "Visa, Mastercard, American Express" },
    { icon: Landmark, name: "Bank Transfer", description: "Direct bank transfer" },
    { icon: Smartphone, name: "Mobile Money", description: "M-Pesa, Airtel Money" }
  ];

  return (
    <Layout>
      <PageHero
        title="Make a Donation"
        subtitle="Your contribution creates lasting impact in communities worldwide"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Donation Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Donation Options */}
            <div>
              <h2 className="text-3xl font-poppins font-bold text-foreground mb-8">
                Choose Your <span className="text-gradient-primary">Impact</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                {donationOptions.map((option) => {
                  const IconComponent = option.icon;
                  return (
                    <div key={option.title} className="card-interactive p-6 cursor-pointer">
                      <div className="flex items-start">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                          option.color === 'primary' ? 'bg-primary text-primary-foreground' :
                          option.color === 'secondary' ? 'bg-secondary text-secondary-foreground' :
                          'bg-accent text-accent-foreground'
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-poppins font-bold text-foreground mb-2">
                            {option.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust Indicators */}
              <div className="section-highlight rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-primary mr-2" />
                  <span className="font-semibold text-foreground">Verified Organization</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  100% of your donation goes directly to programs. Administrative costs are covered separately.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Secure payments powered by industry-leading encryption</span>
                </div>
              </div>
            </div>

            {/* Right Column - Donation Form */}
            <div className="card-feature p-8">
              <h3 className="text-2xl font-poppins font-bold text-foreground mb-6">
                Donation Details
              </h3>

              {/* Frequency Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Donation Frequency
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['monthly', 'one-time'].map((freq) => (
                    <button
                      key={freq}
                      onClick={() => setFrequency(freq)}
                      className={`p-3 rounded-xl border-2 font-medium transition-all duration-300 ${
                        frequency === freq
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-foreground hover:border-primary/50'
                      }`}
                    >
                      {freq === 'monthly' ? 'Monthly' : 'One-time'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Amount (USD)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setAmount(preset)}
                      className={`p-3 rounded-xl border-2 font-medium transition-all duration-300 ${
                        amount === preset
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border bg-background text-foreground hover:border-primary/50'
                      }`}
                    >
                      ${preset}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Custom amount"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Payment Method
                </label>
                <div className="space-y-3">
                  {paymentMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={method.name} className="border border-border rounded-xl p-4 cursor-pointer hover:border-primary/50 transition-colors duration-300">
                        <div className="flex items-center">
                          <IconComponent className="w-5 h-5 text-primary mr-3" />
                          <div className="flex-1">
                            <div className="font-medium text-foreground">{method.name}</div>
                            <div className="text-sm text-muted-foreground">{method.description}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Donate Button */}
              <button className="w-full btn-hero">
                Donate ${amount} {frequency === 'monthly' ? 'Monthly' : 'Now'}
              </button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By donating, you agree to our terms and privacy policy. You can cancel monthly donations anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;