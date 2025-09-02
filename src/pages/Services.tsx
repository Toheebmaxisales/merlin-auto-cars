import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Car, 
  FileText, 
  Shield, 
  Wrench, 
  CreditCard, 
  Truck, 
  Clock, 
  Users 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Vehicle Sales",
      description: "Premium pre-owned luxury vehicles from trusted brands like Mercedes-Benz, Lexus, and Toyota",
      features: ["Quality inspected vehicles", "Competitive pricing", "Wide selection", "Verified documentation"]
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete assistance with all paperwork and legal requirements for vehicle ownership transfer",
      features: ["Title transfer", "Registration assistance", "Insurance guidance", "Legal compliance"]
    },
    {
      icon: Shield,
      title: "Vehicle Inspection",
      description: "Thorough pre-purchase inspection to ensure quality and reliability of every vehicle",
      features: ["Mechanical inspection", "Body condition check", "Electronics testing", "Performance evaluation"]
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Professional maintenance and repair services to keep your vehicle in optimal condition",
      features: ["Routine maintenance", "Diagnostic services", "Parts replacement", "Warranty support"]
    },
    {
      icon: CreditCard,
      title: "Financing Options",
      description: "Flexible payment plans and financing solutions to make your dream car more affordable",
      features: ["Installment plans", "Bank partnerships", "Trade-in options", "Flexible terms"]
    },
    {
      icon: Truck,
      title: "Delivery Service",
      description: "Safe and secure vehicle delivery to your preferred location across Nigeria",
      features: ["Nationwide delivery", "Insured transport", "Door-to-door service", "Real-time tracking"]
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your automotive needs and emergencies",
      features: ["Emergency assistance", "Technical support", "Customer service", "Consultation"]
    },
    {
      icon: Users,
      title: "Trade-In Services",
      description: "Fair evaluation and trade-in services for your current vehicle towards a new purchase",
      features: ["Fair market valuation", "Quick assessment", "Hassle-free process", "Immediate quotes"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in-up">
              Comprehensive automotive solutions tailored to meet all your vehicle needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-orange rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Service Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A streamlined approach to ensure the best experience for our customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "Initial discussion about your needs and preferences" },
                { step: "02", title: "Selection", description: "Browse our inventory or request specific vehicles" },
                { step: "03", title: "Inspection", description: "Thorough vehicle inspection and documentation review" },
                { step: "04", title: "Completion", description: "Finalize paperwork and arrange delivery or pickup" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Contact us today to discuss your automotive needs and discover how we can help you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Get a Quote</a>
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

export default Services;