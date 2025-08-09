import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Shield,
  Truck,
  RotateCcw
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Apple Watch Series 9', path: '/products' },
      { name: 'Apple Watch Ultra 2', path: '/products' },
      { name: 'Apple Watch SE', path: '/products' },
      { name: 'Apple Watch Nike', path: '/products' },
      { name: 'Compare Models', path: '/products' }
    ],
    support: [
      { name: 'Customer Support', path: '/contact' },
      { name: 'Warranty Info', path: '/contact' },
      { name: 'Shipping & Returns', path: '/contact' },
      { name: 'Size Guide', path: '/contact' },
      { name: 'Tech Specs', path: '/contact' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/about' },
      { name: 'Press', path: '/about' },
      { name: 'Sustainability', path: '/about' },
      { name: 'Investors', path: '/about' }
    ]
  };

  const features = [
    {
      icon: <Truck className="w-5 h-5" />,
      title: 'Free Shipping',
      description: 'On all orders over $99'
    },
    {
      icon: <RotateCcw className="w-5 h-5" />,
      title: '30-Day Returns',
      description: 'Easy returns & exchanges'
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: '2-Year Warranty',
      description: 'Comprehensive coverage'
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: 'Secure Payment',
      description: 'Your data is protected'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Features Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 text-center md:text-left">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold">AW</span>
              </div>
              <span className="font-bold text-xl">Apple Watch Store</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your trusted destination for the latest Apple Watch collection. Experience innovation, health tracking, and premium design on your wrist.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white">Stay Updated</h3>
              <div className="flex space-x-2 max-w-sm">
                <Input 
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-white text-black hover:bg-gray-200 flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-8 space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@applewatchstore.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Cupertino, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © {currentYear} Apple Watch Store. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400 mr-2">We accept:</span>
            <div className="flex space-x-2">
              {['Visa', 'MasterCard', 'PayPal', 'Apple Pay'].map((payment, index) => (
                <div key={index} className="w-8 h-5 bg-gray-800 rounded border border-gray-700 flex items-center justify-center">
                  <span className="text-xs text-gray-400">{payment.slice(0, 2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;