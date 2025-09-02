import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              MERLIN AUTO CARS
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner in premium automobiles. We provide quality pre-owned luxury vehicles with 24/7 service in Ijebu Ode, Ogun State.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-orange transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-orange transition-colors text-sm">
                About Us
              </Link>
              <Link to="/inventory" className="block text-gray-300 hover:text-orange transition-colors text-sm">
                Our Inventory
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-orange transition-colors text-sm">
                Services
              </Link>
              <Link to="/gallery" className="block text-gray-300 hover:text-orange transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-orange transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-orange flex-shrink-0" />
                <span className="text-gray-300">Ijebu Ode, Ogun State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                <a href="tel:+2348162416994" className="text-gray-300 hover:text-orange transition-colors">
                  +234 816 241 6994
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-orange flex-shrink-0" />
                <a href="mailto:bakaremubarak6994@gmail.com" className="text-gray-300 hover:text-orange transition-colors">
                  bakaremubarak6994@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="w-4 h-4 text-orange flex-shrink-0" />
                <span className="text-gray-300">24/7 Service Available</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Subscribe to get updates on new arrivals and special offers.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400"
              />
              <Button variant="orange" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Merlin Auto Cars. All rights reserved. | Designed with excellence for premium automobile trading.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;