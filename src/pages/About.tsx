import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Dealer",
      description: "Verified and certified automobiles with complete documentation"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Thorough inspection and quality checks on all vehicles"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated customer service and personalized attention"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your automotive needs"
    }
  ];

  const values = [
    "Transparency in all transactions",
    "Quality vehicles at fair prices",
    "Professional and honest service",
    "Complete documentation support",
    "After-sales service and support",
    "Wide selection of premium brands"
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              About Merlin Auto Cars
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in-up">
              Your trusted partner in premium automobile trading since our establishment
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Merlin Auto Cars was founded with a vision to revolutionize the automobile trading 
                  experience in Nigeria. Based in the historic city of Ijebu Ode, Ogun State, we have 
                  built our reputation on trust, quality, and exceptional customer service.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We specialize in premium pre-owned vehicles from renowned brands like Mercedes-Benz, 
                  Lexus, Toyota, and more. Our team of experienced professionals ensures that every 
                  vehicle meets our strict quality standards before being offered to our valued customers.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="https://wa.me/2348162416994" target="_blank" rel="noopener noreferrer">
                    Get in Touch
                  </a>
                </Button>
              </div>
              <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange flex-shrink-0" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to excellence and customer satisfaction makes us the preferred choice for premium automobiles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Car?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Browse our extensive inventory or contact us directly for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/inventory">View Our Inventory</a>
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/2348162416994" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;