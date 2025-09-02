import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Shield, 
  Clock, 
  Users, 
  Car, 
  MessageCircle,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Dealer",
      description: "Verified vehicles with complete documentation and quality assurance"
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock support for all your automotive needs"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Professional staff with years of experience in luxury automobiles"
    },
    {
      icon: Car,
      title: "Premium Brands",
      description: "Mercedes-Benz, Lexus, Toyota and other luxury vehicle brands"
    }
  ];

  const featuredCars = [
    {
      name: "Lexus RX 350",
      year: "2018",
      price: "₦15,500,000",
      image: "/lovable-uploads/a420dcef-3960-410a-9b3b-94a37253b511.png",
      features: ["Navigation", "Sunroof", "Leather Seats"]
    },
    {
      name: "Mercedes-Benz GLC",
      year: "2017", 
      price: "₦22,000,000",
      image: "/lovable-uploads/986ce53b-ea3e-42a8-bdb4-36ca1311821d.png",
      features: ["AWD", "Premium Interior", "Advanced Safety"]
    },
    {
      name: "Toyota Avalon",
      year: "2015",
      price: "₦8,200,000", 
      image: "/lovable-uploads/29459ddc-616c-463c-9f7b-f14ac2a23b73.png",
      features: ["Premium Sound", "Heated Seats", "Bluetooth"]
    }
  ];

  const testimonials = [
    {
      name: "Adebayo Johnson",
      location: "Lagos, Nigeria",
      rating: 5,
      comment: "Excellent service! Got my dream Mercedes-Benz with complete documentation. Highly recommended!"
    },
    {
      name: "Fatima Abdul",
      location: "Abuja, Nigeria", 
      rating: 5,
      comment: "Professional team, fair pricing, and smooth transaction. Will definitely return for my next car."
    },
    {
      name: "Chidi Okonkwo",
      location: "Port Harcourt, Nigeria",
      rating: 5,
      comment: "24/7 support is amazing. They helped me even on weekends. Great experience overall!"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-navy/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Your Trusted Partner in{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Premium Automobiles
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Discover luxury pre-owned vehicles from Mercedes-Benz, Lexus, Toyota and more. 
                Based in Ijebu Ode with 24/7 service across Nigeria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" asChild>
                  <a href="https://wa.me/2348162416994" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp Now
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy" asChild>
                  <Link to="/inventory">
                    View Inventory
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-left">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/a420dcef-3960-410a-9b3b-94a37253b511.png" 
                  alt="Premium Lexus SUV"
                  className="w-full h-auto rounded-2xl shadow-elegant animate-float"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-silver/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Merlin Auto Cars?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional service and quality vehicles that exceed your expectations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
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

      {/* Featured Cars */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Vehicles
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our handpicked selection of premium automobiles
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-card transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-orange text-white">
                    {car.year}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {car.name}
                  </h3>
                  <p className="text-2xl font-bold text-orange mb-4">
                    {car.price}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {car.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="whatsapp" className="w-full" asChild>
                    <a 
                      href={`https://wa.me/2348162416994?text=${encodeURIComponent(`Hi! I'm interested in the ${car.name}. Can you provide more details?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Inquire Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/inventory">
                View All Vehicles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from satisfied customers across Nigeria
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange text-orange" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  </div>
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
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who found their perfect vehicle with us. 
            Contact us today for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/2348162416994" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Search
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
