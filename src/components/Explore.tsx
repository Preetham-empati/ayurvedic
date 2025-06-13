/*import React from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';

export default function Explore() {
  const categories = [
    "Respiratory Health",
    "Digestive Health",
    "Immune Support",
    "Stress Relief",
    "Joint Health",
    "Skin Care"
  ];

  const plants = [
    {
      name: "Tulsi",
      category: "Respiratory Health",
      image: "https://th.bing.com/th/id/R.55ca6430f23ee507257c8d7151468a5c?rik=b14v3uHz2OGgqA&riu=http%3a%2f%2fayurvedicmagazine.com%2fwp-content%2fuploads%2f2016%2f01%2ftulsi.jpg&ehk=qVpd%2fevGjMtejYzTykWBWAzMoqyolPV%2fceALBHK1CTA%3d&risl=&pid=ImgRaw&r=0",
      description: "Holy Basil - A sacred plant with numerous health benefits"
    },
    {
      name: "Ashwagandha",
      category: "Stress Relief",
      image: "https://www.naturebring.com/wp-content/uploads/2020/08/Ashagandha-0223-640x573.jpg",
      description: "An adaptogenic herb known for reducing stress and anxiety"
    },
    {
      name: "Neem",
      category: "Skin Care",
      image: "https://wallpapercave.com/wp/wp10488866.jpg",
      description: "Natural antiseptic with powerful healing properties"
    },

    {
      name: "Aloe vera",
      price: 1.99,
      image: "https://www.bloomspace.com.au/wp-content/uploads/aloe-vera-feat-1.jpeg",
      description: "Smooth skin used in traditional Ayurveda."
    },
    {
      name: "Turmeric",
      price: 3.99,
      image: "https://t4.ftcdn.net/jpg/06/20/01/17/360_F_620011714_QAOaDRIzDyz6rSRA9MV6nhckhJdBW0rs.jpg",
      description: "Reduces inflammation used in traditional Ayurveda."
    },
    {
      name: "Rosemary",
      price: 6.99,
      image: "https://vgrgardens.com/wp-content/uploads/2024/08/Screenshot-2024-08-22-144950.png",
      description: "Stimulating hair growth used in traditional Ayurveda."
    },
    {
      name: "Amla",
      price: 3.99,
      image: "https://dms.mydukaan.io/original/jpeg/media/ec2d918b-b123-4fed-9196-dff668ddec8c.png",
      description: "To strength immune system used in traditional Ayurveda."
    },
    {
      name: "Cinnamon",
      price: 1.99,
      image: "https://howtogroweverything.com/wp-content/uploads/cinnamon_plant_outside_1_557308df-0782-47ef-8644-f60bd6306428-300x300.png",
      description: "Digestive and respiratory system used in traditional Ayurveda."
    },
    {
      name: "Jatamansi",
      price: 1.99,
      image: "https://ultrainternational.com/wp-content/uploads/2023/08/Untitled-design-2023-08-29T085510.592.png",
      description: "Promotes relaxation used in traditional Ayurveda."
    },
    {
      name: "Sandalwood",
      price: 8.99,
      image: "https://www.chandigarhayurvedcentre.com/wp-content/uploads/2020/10/Chandan.jpg",
      description: "Skin care support used in traditional Ayurveda."
    },
    {
      name: "Manjistha",
      price: 3.99,
      image: "https://preservawellness.com/cdn/shop/articles/Manjistha.jpg?v=1667985794",
      description: "Menstrual health support used in traditional Ayurveda."
    },
    {
      name: "Betel",
      price: 2.99,
      image: "https://admin.thegreenyard.in/uploads/product_images/1811834186-Betel-Plant-with-Moss-Stick.jpg",
      description: "Digestive and respiratory system used in traditional Ayurveda."
    },
    {
      name: "Cactus",
      price: 3.99,
      image: "https://hips.hearstapps.com/hmg-prod/images/thimble-cactus-royalty-free-image-1695063544.jpg",
      description: "Bloodsugar control system used in traditional Ayurveda."
    }



  ];

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Explore Medicinal Plants</h1>
          <p className="text-xl text-center text-gray-600">
            Discover the healing properties of traditional Ayurvedic herbs
          </p>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Filter className="h-5 w-5 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">{plant.name}</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {plant.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <button className="flex items-center text-green-600 hover:text-green-700">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}*/
import { useState } from 'react';
import { Search, Filter, BookOpen, X } from 'lucide-react';

export default function Explore() {
  const categories = [
    'Respiratory Health',
    'Digestive Health',
    'Immune Support',
    'Stress Relief',
    'Joint Health',
    'Skin Care',
  ];

  const plants = [
    {
      Name: 'Tulsi',
      category: 'Respiratory Health',
      image:
        'https://th.bing.com/th/id/R.55ca6430f23ee507257c8d7151468a5c?rik=b14v3uHz2OGgqA&riu=http%3a%2f%2fayurvedicmagazine.com%2fwp-content%2fuploads%2f2016%2f01%2ftulsi.jpg&ehk=qVpd%2fevGjMtejYzTykWBWAzMoqyolPV%2fceALBHK1CTA%3d&risl=&pid=ImgRaw&r=0',
      description: 'Holy Basil - A sacred plant with numerous health benefits. Tulsi is a highly reversed herb known for its numerous medicinal and spiritual properties, It is often used as a remedy for cold,cough and general detoxification, and is also an important herb for maintaining mental and physical health.',
    },
    {
      name: 'Ashwagandha',
      category: 'Stress Relief',
      image: 'https://www.naturebring.com/wp-content/uploads/2020/08/Ashagandha-0223-640x573.jpg',
      description: 'An adaptogenic herb known for reducing stress and anxiety,. Ashwagandha is often used to treat conditions like fatigue, and nervous disorder, as well as enhance strength and endurance.',
    },
    {
      name:'Neem',
      category: 'Skin Care',
      image: 'https://wallpapercave.com/wp/wp10488866.jpg',
      description: 'Natural antiseptic with powerful healing properties. Neem is commonly used in oils, powders, and pastes it promotes overall health and well being, particularly for its purifying effects on body and skin.',
    },
    {
      name: 'Aloe vera',
      category: 'Skin Care',
      image: 'https://www.bloomspace.com.au/wp-content/uploads/aloe-vera-feat-1.jpeg',
      description: 'Smoothes skin and promotes healing. Aloe vera is commonly used in the form of fresh jel, powder or as akey ingredient in various auruvedic formulation like turmel or honey for enhance therapeutic effects particularly for skincare and digestive health.',
    },
    {
      name: 'Turmeric',
      category: 'Immune Support',
      image: 'https://t4.ftcdn.net/jpg/06/20/01/17/360_F_620011714_QAOaDRIzDyz6rSRA9MV6nhckhJdBW0rs.jpg',
      description: 'Reduces inflammation and supports immunity.Turmeric is used in various forms such as powder paste and oil, either internally or externally especially in digestive and joint health treatments',
    },
    {
      name: 'Rosemary',
      category: 'Joint Health',
      image: 'https://vgrgardens.com/wp-content/uploads/2024/08/Screenshot-2024-08-22-144950.png',
      description: 'Stimulates hair growth and supports memory.',
    },
    {
      name: 'Amla',
      category: 'Immune Support',
      image: 'https://dms.mydukaan.io/original/jpeg/media/ec2d918b-b123-4fed-9196-dff668ddec8c.png',
      description: 'Boosts immunity and improves digestion.',
    },
    {
      name: 'Cinnamon',
      category: 'Digestive Health',
      image: 'https://howtogroweverything.com/wp-content/uploads/cinnamon_plant_outside_1_557308df-0782-47ef-8644-f60bd6306428-300x300.png',
      description: 'Supports digestion and respiratory health.',
    },
    {
      name: 'Jatamansi',
      category: 'Stress Relief',
      image: 'https://ultrainternational.com/wp-content/uploads/2023/08/Untitled-design-2023-08-29T085510.592.png',
      description: 'Promotes relaxation and mental clarity.',
    },
    {
      name: 'Sandalwood',
      category: 'Skin Care',
      image: 'https://www.chandigarhayurvedcentre.com/wp-content/uploads/2020/10/Chandan.jpg',
      description: 'Soothes skin and supports complexion.',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPlant, setSelectedPlant] = useState(null);

    const filteredPlants = plants.filter((plant) => {
    const matchesSearch = '{plant.name.tolowerCase().includes(searchTerm.toLowerCase())}';
    const matchesCategory = selectedCategory ? plant.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Explore Medicinal Plants</h1>
          <p className="text-xl text-gray-600">
            Discover the healing properties of traditional Ayurvedic herbs
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Filter className="h-5 w-5 mr-2" />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Plant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlants.map((plant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={plant.image} alt={plant.Name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold">{plant.Name}</h2>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {plant.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <button
                  onClick="{(e) =>setSelected Plant(plant)}"
                  className="flex items-center text-green-600 hover:text-green-700"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPlant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelectedPlant(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src="{selectedPlant.image}"
              alt="{selectedPlant.Name}"
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedPlant}</h2>
            <p className="text-sm text-green-700 font-medium mb-2">{selectedPlant}</p>
            <p className="text-gray-700">{selectedPlant}</p>
          </div>
        </div>
      )}
    </div>
  );
}
