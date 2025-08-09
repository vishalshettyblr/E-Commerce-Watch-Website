import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { aboutData } from '../data/mock';
import { Target, Users, Award, Lightbulb, Heart, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50M+', label: 'Happy Customers' },
    { number: '8', label: 'Years of Innovation' },
    { number: '99%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const timeline = [
    {
      year: '2015',
      title: 'Apple Watch Launch',
      description: 'The first Apple Watch revolutionizes wearable technology'
    },
    {
      year: '2018',
      title: 'Health Focus',
      description: 'Introduction of ECG and fall detection features'
    },
    {
      year: '2020',
      title: 'Blood Oxygen',
      description: 'Advanced health monitoring with blood oxygen sensing'
    },
    {
      year: '2023',
      title: 'Series 9',
      description: 'Latest generation with Double Tap and S9 chip'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-black text-white">Our Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Redefining What's Possible
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {aboutData.story}
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=300&fit=crop"
                  alt="Apple Watch 1"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=400&h=300&fit=crop"
                  alt="Apple Watch 2"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&h=300&fit=crop"
                  alt="Apple Watch 3"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=300&fit=crop"
                  alt="Apple Watch 4"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-gray-900 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {aboutData.mission}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that drive everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.values.map((value, index) => {
              const icons = [Lightbulb, Heart, Award];
              const Icon = icons[index];
              
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-2xl mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Innovation Timeline</h2>
            <p className="text-xl text-gray-600">Key milestones in Apple Watch evolution</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 md:left-1/2 md:-ml-0.5"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-white border-0 shadow-lg">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-gray-900 text-white">{item.year}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-4 w-3 h-3 bg-gray-900 rounded-full md:left-1/2 md:-ml-1.5"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the visionaries behind our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=400&h=400&fit=crop",
                description: "Leading innovation in wearable technology for over 10 years"
              },
              {
                name: "Michael Rodriguez",
                role: "Head of Design",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
                description: "Award-winning designer with passion for user-centered experiences"
              },
              {
                name: "Dr. Lisa Wang",
                role: "VP of Health Technologies",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
                description: "Pioneer in health monitoring and biometric sensor integration"
              }
            ].map((member, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;