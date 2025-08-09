import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import CartDrawer from './Cart/CartDrawer';
import { Menu, ShoppingBag, Search } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AW</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Apple Watch Store</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive(item.path) 
                    ? 'text-black' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <CartDrawer>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </CartDrawer>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AW</span>
                  </div>
                  <span className="font-semibold text-lg">Apple Watch Store</span>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors duration-200 ${
                        isActive(item.path) 
                          ? 'text-black' 
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                  <Button variant="ghost" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                  <CartDrawer>
                    <Button variant="ghost" size="sm" className="relative">
                      <ShoppingBag className="w-4 h-4 mr-2" />
                      Cart
                      {totalItems > 0 && (
                        <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
                          {totalItems}
                        </Badge>
                      )}
                    </Button>
                  </CartDrawer>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;