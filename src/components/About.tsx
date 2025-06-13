import React from 'react';
import { Leaf } from 'lucide-react';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Leaf className="h-12 w-12 text-green-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-800">About PlantPal</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to PlantPal, your digital companion for all things plant-related. We're passionate about helping people connect with nature and grow their own green spaces, whether they're experienced gardeners or just starting their plant journey.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            We believe that everyone should have the opportunity to experience the joy of growing and nurturing plants. Our platform provides the tools, knowledge, and community support to make plant care accessible and enjoyable for all.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Plant identification and care guides</li>
            <li>Community support and knowledge sharing</li>
            <li>Personal plant collection management</li>
            <li>Expert advice and tips</li>
          </ul>
          
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
            <p className="text-gray-700">
              Connect with fellow plant enthusiasts, share your experiences, and learn from others. Together, we can create a thriving ecosystem of plant lovers and gardening experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;