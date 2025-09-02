import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryImages = [
    {
      id: 1,
      url: "/lovable-uploads/a420dcef-3960-410a-9b3b-94a37253b511.png",
      title: "Lexus RX 350 - Premium SUV",
      category: "lexus",
      description: "Elegant design meets performance"
    },
    {
      id: 2,
      url: "/lovable-uploads/92fd4686-f0d4-4dfc-9962-55db2c45efb3.png",
      title: "Toyota Avalon - Executive Sedan",
      category: "toyota",
      description: "Comfort and reliability redefined"
    },
    {
      id: 3,
      url: "/lovable-uploads/5f6d0790-9cea-4899-a3e3-30caf1595895.png",
      title: "Lexus GX 460 - Luxury SUV",
      category: "lexus",
      description: "Adventure meets luxury"
    },
    {
      id: 4,
      url: "/lovable-uploads/c871a8a2-0e37-462a-9794-48441d35a9df.png",
      title: "Toyota Camry - Reliable Sedan",
      category: "toyota",
      description: "The perfect daily driver"
    },
    {
      id: 5,
      url: "/lovable-uploads/29459ddc-616c-463c-9f7b-f14ac2a23b73.png",
      title: "Toyota Avalon - Premium Interior",
      category: "toyota",
      description: "Crafted for excellence"
    },
    {
      id: 6,
      url: "/lovable-uploads/986ce53b-ea3e-42a8-bdb4-36ca1311821d.png",
      title: "Mercedes-Benz GLC 300",
      category: "mercedes",
      description: "German engineering at its finest"
    },
    {
      id: 7,
      url: "/lovable-uploads/10c2bf75-cc56-4945-87ff-ca322fe51283.png",
      title: "Mercedes-Benz ML 350",
      category: "mercedes",
      description: "Power and prestige combined"
    },
    {
      id: 8,
      url: "/lovable-uploads/cae621ca-9ad8-4749-a6cb-08fa532b057c.png",
      title: "Toyota Camry - Performance Edition",
      category: "toyota",
      description: "Style meets substance"
    },
    {
      id: 9,
      url: "/lovable-uploads/8a456687-9742-4bf6-91cf-f59d14c5667f.png",
      title: "Mercedes-Benz GLK - Compact Luxury",
      category: "mercedes",
      description: "Compact luxury redefined"
    }
  ];

  const categories = [
    { id: "all", name: "All Vehicles" },
    { id: "mercedes", name: "Mercedes-Benz" },
    { id: "lexus", name: "Lexus" },
    { id: "toyota", name: "Toyota" }
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Vehicle Gallery
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in-up">
              Explore our stunning collection of premium automobiles
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "orange" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-300"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                      <p className="text-gray-200 text-sm mb-4">{image.description}</p>
                      <Button 
                        variant="whatsapp" 
                        size="sm"
                        asChild
                      >
                        <a 
                          href={`https://wa.me/2348162416994?text=${encodeURIComponent(`Hi! I'm interested in the ${image.title}. Can you provide more details?`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Inquire Now
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">50+</div>
                <div className="text-muted-foreground">Vehicles Sold</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">15+</div>
                <div className="text-muted-foreground">Premium Brands</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">98%</div>
                <div className="text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Any of These Vehicles?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Contact us for detailed specifications, pricing, and to schedule a viewing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="/inventory">View Full Inventory</a>
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

export default Gallery;