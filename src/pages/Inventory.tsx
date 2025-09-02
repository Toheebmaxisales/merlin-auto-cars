import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Fuel, Settings, Calendar } from "lucide-react";

const Inventory = () => {
  // Sample car data - in a real app, this would come from an API
  const cars = [
    {
      id: 1,
      name: "Lexus RX 350",
      year: "2018",
      price: "₦15,500,000",
      image: "/lovable-uploads/a420dcef-3960-410a-9b3b-94a37253b511.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "45,000 km",
      features: ["Leather Seats", "Navigation", "Sunroof", "Backup Camera"]
    },
    {
      id: 2,
      name: "Toyota Avalon",
      year: "2015",
      price: "₦8,200,000",
      image: "/lovable-uploads/92fd4686-f0d4-4dfc-9962-55db2c45efb3.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "78,000 km",
      features: ["Premium Sound", "Heated Seats", "Alloy Wheels", "Bluetooth"]
    },
    {
      id: 3,
      name: "Lexus GX 460",
      year: "2016",
      price: "₦18,750,000",
      image: "/lovable-uploads/5f6d0790-9cea-4899-a3e3-30caf1595895.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "62,000 km",
      features: ["4WD", "Third Row", "Premium Audio", "Keyless Entry"]
    },
    {
      id: 4,
      name: "Toyota Camry",
      year: "2014",
      price: "₦6,800,000",
      image: "/lovable-uploads/c871a8a2-0e37-462a-9794-48441d35a9df.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "95,000 km",
      features: ["Cruise Control", "Power Windows", "AC", "ABS"]
    },
    {
      id: 5,
      name: "Mercedes-Benz GLC 300",
      year: "2017",
      price: "₦22,000,000",
      image: "/lovable-uploads/986ce53b-ea3e-42a8-bdb4-36ca1311821d.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "48,000 km",
      features: ["AWD", "Panoramic Roof", "Premium Interior", "Advanced Safety"]
    },
    {
      id: 6,
      name: "Mercedes-Benz ML 350",
      year: "2016",
      price: "₦19,500,000",
      image: "/lovable-uploads/10c2bf75-cc56-4945-87ff-ca322fe51283.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "55,000 km",
      features: ["4MATIC", "Navigation", "Premium Package", "Harman Kardon"]
    },
    {
      id: 7,
      name: "Lexus ES 350",
      year: "2012",
      price: "₦7,800,000",
      image: "/lovable-uploads/c448e107-dbbb-438a-a0c3-fa8369869118.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "125,000 km",
      features: ["Leather Interior", "Premium Sound", "Automatic Climate", "Alloy Wheels"]
    },
    {
      id: 8,
      name: "Toyota Avalon Limited",
      year: "2016",
      price: "₦12,500,000",
      image: "/lovable-uploads/a05fb795-6b44-4234-8787-58563a08313a.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "68,000 km",
      features: ["Premium Leather", "JBL Sound", "Navigation", "Heated Seats"]
    },
    {
      id: 9,
      name: "Toyota Highlander",
      year: "2018",
      price: "₦16,200,000",
      image: "/lovable-uploads/6ded1d45-cbc6-4512-a3f0-f9f641aa477a.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "52,000 km",
      features: ["AWD", "Third Row", "Safety Sense", "Premium Audio"]
    },
    {
      id: 10,
      name: "Toyota Camry SE",
      year: "2013",
      price: "₦5,900,000",
      image: "/lovable-uploads/6dfd4033-c52d-41ad-8eb1-5ff7a5c381ba.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "112,000 km",
      features: ["Sport Package", "Alloy Wheels", "Fog Lights", "Power Seats"]
    },
    {
      id: 11,
      name: "Mercedes-Benz GLE 43 AMG",
      year: "2019",
      price: "₦28,500,000",
      image: "/lovable-uploads/279aa306-c3b0-4391-b6d2-57e66ca04176.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "35,000 km",
      features: ["AMG Performance", "Air Suspension", "Premium Interior", "Bang & Olufsen"]
    },
    {
      id: 12,
      name: "Lexus ES 350",
      year: "2014",
      price: "₦9,200,000",
      image: "/lovable-uploads/f4067959-0f12-491e-a27f-92dd8aa8cec4.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "89,000 km",
      features: ["Mark Levinson Audio", "Navigation", "Backup Camera", "Heated Seats"]
    },
    {
      id: 13,
      name: "Lexus RX 350",
      year: "2009",
      price: "₦6,500,000",
      image: "/lovable-uploads/fa32b0be-600e-423e-a394-9a13ce06f326.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "165,000 km",
      features: ["AWD", "Premium Audio", "Power Tailgate", "Leather Seats"]
    },
    {
      id: 14,
      name: "Toyota Camry",
      year: "2011",
      price: "₦4,800,000",
      image: "/lovable-uploads/cbb77027-12dd-4b7b-bf9c-1659bce20ae0.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "138,000 km",
      features: ["Power Windows", "AC", "CD Player", "Cruise Control"]
    },
    {
      id: 15,
      name: "Lexus RX 350",
      year: "2010",
      price: "₦7,200,000",
      image: "/lovable-uploads/f9cd6af8-e7a8-4816-b465-dd638a013d46.png",
      fuel: "Petrol",
      transmission: "Automatic",
      mileage: "148,000 km",
      features: ["AWD", "Premium Package", "Navigation", "Backup Camera"]
    }
  ];

  const handleWhatsAppInquiry = (carName: string) => {
    const message = `Hi! I'm interested in the ${carName}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/2348162416994?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Premium Inventory
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in-up">
              Discover our carefully selected collection of luxury pre-owned vehicles
            </p>
          </div>
        </section>

        {/* Inventory Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <Card key={car.id} className="overflow-hidden hover:shadow-card transition-shadow duration-300 group">
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
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {car.name}
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Fuel className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{car.fuel}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Settings className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{car.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{car.mileage}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {car.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {car.features.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{car.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button 
                      variant="whatsapp" 
                      className="w-full"
                      onClick={() => handleWhatsAppInquiry(car.name)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Inquire on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Don't See What You're Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're constantly adding new vehicles to our inventory. Contact us with your specific requirements and we'll help you find the perfect car.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/2348162416994" target="_blank" rel="noopener noreferrer">
                Contact Us for Special Requests
              </a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Inventory;