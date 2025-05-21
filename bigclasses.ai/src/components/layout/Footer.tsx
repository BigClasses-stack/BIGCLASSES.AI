import React from "react";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  // Function to open Google Maps with exact coordinates for Madhapur, Hyderabad
  const openMapLocation = () => {
    // Google Maps URL with exact coordinates (latitude, longitude)
    const mapUrl = "https://www.google.com/search?q=17.450491718845207%2C+78.38705545303921&oq=17.450491718845207%2C+78.38705545303921&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYQDIGCAMQRRg9MgYIBBBFGDzSAQgyNjEyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"; // Coordinates for Madhapur, Hyderabad
    // Open the map in a new tab
    window.open(mapUrl, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto">
        {/* Wave separator */}
        <div className="w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
            className="relative block w-full h-[60px] rotate-180">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-gray-50"></path>
          </svg>
        </div>

        {/* Main footer content */}
        <div className="px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              {/* Updated logo path */}
              <div className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg inline-block">
                <img 
                  src="\lovable-uploads\Big_Classes_LOGO-removebg-preview.png" 
                  alt="BigClasses.AI Logo" 
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming education through AI-powered learning experiences that adapt to your unique needs.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-primary/20 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 relative before:content-[''] before:absolute before:w-12 before:h-1 before:-bottom-2 before:bg-primary">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Courses", "Features", "Testimonials"].map((text, idx) => (
                <li key={idx}>
                  <a href={`#${text.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="mr-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 relative before:content-[''] before:absolute before:w-12 before:h-1 before:-bottom-2 before:bg-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                {/* Make the map icon clickable */}
                <MapPin 
                  className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1 cursor-pointer hover:text-white" 
                  onClick={openMapLocation}
                />
                {/* Make the address text clickable */}
                <span 
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors"
                  onClick={openMapLocation}
                >
                  Madhapur, Hyderabad, 500081
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919666717099" className="text-gray-400 hover:text-white transition-colors">
                  +91 9666717099
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:Info@bigclasses.ai" className="text-gray-400 hover:text-white transition-colors">
                  Info@bigclasses.ai
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 relative before:content-[''] before:absolute before:w-12 before:h-1 before:-bottom-2 before:bg-primary">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest courses and AI learning tips.</p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 focus:border-primary text-white"
              />
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Subscribe Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 py-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BigClasses.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;