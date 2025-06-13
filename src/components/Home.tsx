/*import React from 'react';
import { Leaf, Search, Users, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50">
      
      <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">
                Discover the Power of Ayurvedic Herbs
              </h1>
              <p className="text-xl mb-8">
                Explore our comprehensive guide to medicinal plants and their traditional uses in Ayurveda
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </div>

  
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Explore Plants</h3>
              <p className="text-gray-600">
                Discover detailed information about various Ayurvedic herbs and their benefits
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join Community</h3>
              <p className="text-gray-600">
                Connect with herb enthusiasts and share your knowledge
              </p>
            </div>
            <div className="text-center p-6">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learn More</h3>
              <p className="text-gray-600">
                Access comprehensive guides about traditional Ayurvedic practices
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Medicinal Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tulsi",
                image: "https://th.bing.com/th/id/R.55ca6430f23ee507257c8d7151468a5c?rik=b14v3uHz2OGgqA&riu=http%3a%2f%2fayurvedicmagazine.com%2fwp-content%2fuploads%2f2016%2f01%2ftulsi.jpg&ehk=qVpd%2fevGjMtejYzTykWBWAzMoqyolPV%2fceALBHK1CTA%3d&risl=&pid=ImgRaw&r=0",
                description: "Holy Basil - Known for its healing properties"
              },
              {
                name: "Neem",
                image: "https://wallpapercave.com/wp/wp10488866.jpg",
                description: "Natural antiseptic and immune booster"
              },
              {
                name: "Ashwagandha",
                image: "https://www.naturebring.com/wp-content/uploads/2020/08/Ashagandha-0223-640x573.jpg",
                description: "Stress relief and energy enhancement"
              }
            ].map((plant, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                  <p className="text-gray-600">{plant.description}</p>
                  <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}*/
import React, { useState } from 'react';
import { Leaf, Search, Users, BookOpen } from 'lucide-react';

export default function Home() {
  // State for controlling the selected plant and the modal display
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Array of plants with additional detailed description
  const plants = [
    {
      name: "Tulsi",
      image: "https://th.bing.com/th/id/R.55ca6430f23ee507257c8d7151468a5c?rik=b14v3uHz2OGgqA&riu=http%3a%2f%2fayurvedicmagazine.com%2fwp-content%2fuploads%2f2016%2f01%2ftulsi.jpg&ehk=qVpd%2fevGjMtejYzTykWBWAzMoqyolPV%2fceALBHK1CTA%3d&risl=&pid=ImgRaw&r=0",
      description: "Holy Basil - Known for its healing properties",
      detailedDescription: "Tulsi, also known as Holy Basil, has been used in Ayurvedic medicine for centuries. It is traditionally believed to help combat stress, boost immunity, and promote longevity."
    },
    {
      name: "Neem",
      image: "https://wallpapercave.com/wp/wp10488866.jpg",
      description: "Natural antiseptic and immune booster",
      detailedDescription: "Neem is celebrated for its potent antibacterial, antiviral, and antifungal properties. It is commonly used in natural remedies for skin care, dental health, and overall detoxification."
    },
    {
      name: "Ashwagandha",
      image: "https://www.naturebring.com/wp-content/uploads/2020/08/Ashagandha-0223-640x573.jpg",
      description: "Stress relief and energy enhancement",
      detailedDescription: "Ashwagandha is a revered herb in Ayurvedic practice, known for its adaptogenic properties. It may help reduce stress, improve sleep quality, and boost energy levels."
    }
  ];

  // Function to handle the Learn More button click
  const handleLearnMore = (plant: React.SetStateAction<null>) => {
    setSelectedPlant(plant);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedPlant(null);
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">
                Discover the Power of Ayurvedic Herbs
              </h1>
              <p className="text-xl mb-8">
                Explore our comprehensive guide to medicinal plants and their traditional uses in Ayurveda
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Explore Plants</h3>
              <p className="text-gray-600">
                Discover detailed information about various Ayurvedic herbs and their benefits
              </p>
            </div>
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Join Community</h3>
              <p className="text-gray-600">
                Connect with herb enthusiasts and share your knowledge
              </p>
            </div>
            <div className="text-center p-6">
              <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learn More</h3>
              <p className="text-gray-600">
                Access comprehensive guides about traditional Ayurvedic practices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Plants Section */}
      <div className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Medicinal Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plants.map((plant, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                  <p className="text-gray-600">{plant.description}</p>
                  <button
                    onClick={() => handleLearnMore(plant)}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Detailed Description */}
      {selectedPlant && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <div className="bg-white rounded-lg shadow-lg z-10 max-w-lg mx-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedPlant.name}</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            //<img src={selectedPlant.image} alt={selectedPlant.name} className="w-full h-48 object-cover rounded mb-4"/>//
            <p className="text-gray-700">{selectedPlant.detailed.Description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
