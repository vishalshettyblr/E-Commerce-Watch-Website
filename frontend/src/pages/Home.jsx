import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { heroData, appleWatches } from '../data/mock';
import { ArrowRight, Heart, Shield, Zap, Smartphone } from 'lucide-react';

const Home = () => {
  const featuredProducts = appleWatches.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge className="mb-6 bg-black text-white">New Generation</Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {heroData.title}
                <br />
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  {heroData.subtitle}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                {heroData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg">
                    {heroData.ctaText}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-gray-600/20 blur-3xl transform translate-y-8" />
                <img 
                  src={heroData.heroImage}
                  alt="Apple Watch"
                  className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Apple Watch?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of technology, design, and functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Health Monitoring",
                description: "Advanced sensors track your heart rate, ECG, and blood oxygen levels"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safety Features",
                description: "Crash Detection and Emergency SOS keep you protected wherever you go"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "All-Day Battery",
                description: "Up to 18 hours of battery life with fast charging capabilities"
              },
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: "Smart Connectivity",
                description: "Stay connected with calls, messages, and apps right from your wrist"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-2xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Models</h2>
            <p className="text-xl text-gray-600">Discover our most popular Apple Watch models</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.originalPrice > product.price && (
                      <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                        Save ${product.originalPrice - product.price}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors duration-200">{product.name}</h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{product.model}</p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <Link to="/products">
                      <Button className="w-full bg-black hover:bg-gray-800 text-white">
                        Shop Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg" className="px-8 py-3">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to upgrade your wrist?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions who have made Apple Watch an essential part of their daily life.
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
              Shop Apple Watch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;