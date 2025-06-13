/*import React from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Plants() {
  const plants = [
    {
      name: "Tulsi (Holy Basil)",
      price: 29.99,
      image: "https://th.bing.com/th/id/R.55ca6430f23ee507257c8d7151468a5c?rik=b14v3uHz2OGgqA&riu=http%3a%2f%2fayurvedicmagazine.com%2fwp-content%2fuploads%2f2016%2f01%2ftulsi.jpg&ehk=qVpd%2fevGjMtejYzTykWBWAzMoqyolPV%2fceALBHK1CTA%3d&risl=&pid=ImgRaw&r=0",
      description: "Sacred plant known for its healing properties and spiritual significance."
    },
    {
      name: "Ashwagandha",
      price: 34.99,
      image: "https://www.naturebring.com/wp-content/uploads/2020/08/Ashagandha-0223-640x573.jpg",
      description: "Adaptogenic herb that helps reduce stress and boost energy levels."
    },
    {
      name: "Brahmi",
      price: 24.99,
      image: "https://www.elephantpassresort.com/wp-content/uploads/2021/08/benefits-of-brahmi-plant.jpg",
      description: "Memory enhancer and brain tonic used in traditional Ayurveda."
    },
    {
      name: "Neem",
      price: 22.99,
      image: "https://wallpapercave.com/wp/wp10488866.jpg",
      description: "Brain tonic used in traditional Ayurveda."
    },
    // Add more plants as needed
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Medicinal Plants Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={plant.image} 
                alt={plant.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{plant.name}</h2>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">${plant.price}</span>
                  <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}*/
/*import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

export default function Plants() {
  const [cart, setCart] = useState<any[]>([]);

  const plants = [
    {
      name: "Tulsi (Holy Basil)",
      price: 29.99,
      image: "https://th.bing.com/th/id/R.55ca6430f23ee507257c8d7151468a5c?rik=b14v3uHz2OGgqA&riu=http%3a%2f%2fayurvedicmagazine.com%2fwp-content%2fuploads%2f2016%2f01%2ftulsi.jpg&ehk=qVpd%2fevGjMtejYzTykWBWAzMoqyolPV%2fceALBHK1CTA%3d&risl=&pid=ImgRaw&r=0",
      description: "Sacred plant known for its healing properties and spiritual significance."
    },
    {
      name: "Ashwagandha",
      price: 34.99,
      image: "https://www.naturebring.com/wp-content/uploads/2020/08/Ashagandha-0223-640x573.jpg",
      description: "Adaptogenic herb that helps reduce stress and boost energy levels."
    },
    {
      name: "Brahmi",
      price: 24.99,
      image: "https://www.elephantpassresort.com/wp-content/uploads/2021/08/benefits-of-brahmi-plant.jpg",
      description: "Memory enhancer and brain tonic used in traditional Ayurveda."
    },
    {
      name: "Neem",
      price: 22.99,
      image: "https://wallpapercave.com/wp/wp10488866.jpg",
      description: "Brain tonic used in traditional Ayurveda."
    },
  ];

  const handleAddToCart = (plant: any) => {
    setCart([...cart, plant]);
  };

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
  
       /* <div className="flex justify-end mb-4">
          <div className="flex items-center text-green-700 font-semibold">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart: {cart.length} item{cart.length !== 1 && 's'}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">Medicinal Plants Collection</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={plant.image} 
                alt={plant.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{plant.name}</h2>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">${plant.price}</span>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}*/
/*import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';

export default function Plants() {
  const [cart, setCart] = useState<{ name: string, price: number, quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const plants = [
    {
      name: "Tulsi (Holy Basil)",
      price: 2.99,
      image: "https://th.bing.com/th/id/R.55ca6430f23ee507257c8d7151468a5c?rik=b14v3uHz2OGgqA&riu=http%3a%2f%2fayurvedicmagazine.com%2fwp-content%2fuploads%2f2016%2f01%2ftulsi.jpg&ehk=qVpd%2fevGjMtejYzTykWBWAzMoqyolPV%2fceALBHK1CTA%3d&risl=&pid=ImgRaw&r=0",
      description: "Sacred plant known for its healing properties and spiritual significance."
    },
    {
      name: "Ashwagandha",
      price: 4.99,
      image: "https://www.naturebring.com/wp-content/uploads/2020/08/Ashagandha-0223-640x573.jpg",
      description: "Adaptogenic herb that helps reduce stress and boost energy levels."
    },
    {
      name: "Brahmi",
      price: 3.99,
      image: "https://www.elephantpassresort.com/wp-content/uploads/2021/08/benefits-of-brahmi-plant.jpg",
      description: "Memory enhancer and brain tonic used in traditional Ayurveda."
    },
    {
      name: "Neem",
      price: 2.99,
      image: "https://wallpapercave.com/wp/wp10488866.jpg",
      description: "Treats skin condition used in traditional Ayurveda."
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

  const handleAddToCart = (plant: { name: string, price: number }) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.name === plant.name);
      if (existingItem) {
        return prev.map(item =>
          item.name === plant.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (nameToRemove: string) => {
    setCart(cart.filter(item => item.name !== nameToRemove));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">

        
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-700">Medicinal Plants Collection</h1>
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={plant.image} 
                alt={plant.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{plant.name}</h2>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">${plant.price}</span>
                  <button
                    onClick={() => handleAddToCart({ name: plant.name, price: plant.price })}
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
              <button
                onClick={() => setIsCartOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
              >
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <ul className="divide-y divide-gray-200 mb-4">
                  {cart.map((item, index) => (
                    <li key={index} className="py-2 flex justify-between items-center">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-medium">
                          ${ (item.price * item.quantity).toFixed(2) }
                        </div>
                        <button
                          onClick={() => handleRemoveFromCart(item.name)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {cart.length > 0 && (
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="font-semibold text-lg">Total:</span>
                  <span className="text-green-700 font-bold text-xl">${totalPrice.toFixed(2)}</span>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}*/
import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';

export default function Plants() {
  const [cart, setCart] = useState<{ name: string; price: number; quantity: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deliveryLocation, setDeliveryLocation] = useState('');

  const plants = [
    { name: 'Tulsi (Holy Basil)', price: 39, image: 'https://th.bing.com/th/id/R.55ca6430f23ee507257c8d7151468a5c?rik=b14v3uHz2OGgqA&riu=http%3a%2f%2fayurvedicmagazine.com%2fwp-content%2fuploads%2f2016%2f01%2ftulsi.jpg&ehk=qVpd%2fevGjMtejYzTykWBWAzMoqyolPV%2fceALBHK1CTA%3d&risl=&pid=ImgRaw&r=0', description: 'Sacred plant known for its healing properties and spiritual significance.' },
    { name: 'Ashwagandha', price: 59, image: 'https://www.naturebring.com/wp-content/uploads/2020/08/Ashagandha-0223-640x573.jpg', description: 'Adaptogenic herb that helps reduce stress and boost energy levels.' },
    { name: 'Brahmi', price: 99, image: 'https://www.elephantpassresort.com/wp-content/uploads/2021/08/benefits-of-brahmi-plant.jpg', description: 'Memory enhancer and brain tonic used in traditional Ayurveda. ' },
    { name: 'Neem', price: 49, image: 'https://wallpapercave.com/wp/wp10488866.jpg', description: 'Treats skin condition used in traditional Ayurveda.' },
    { name: 'Aloe vera', price: 39, image: 'https://www.bloomspace.com.au/wp-content/uploads/aloe-vera-feat-1.jpeg', description: 'Smooth skin used in traditional Ayurveda.' },
    { name: 'Turmeric', price: 59, image: 'https://t4.ftcdn.net/jpg/06/20/01/17/360_F_620011714_QAOaDRIzDyz6rSRA9MV6nhckhJdBW0rs.jpg', description: 'Reduces inflammation used in traditional Ayurveda.' },
    { name: 'Rosemary', price: 99, image: 'https://vgrgardens.com/wp-content/uploads/2024/08/Screenshot-2024-08-22-144950.png', description: 'Stimulating hair growth used in traditional Ayurveda.' },
    { name: 'Amla', price: 79, image: 'https://dms.mydukaan.io/original/jpeg/media/ec2d918b-b123-4fed-9196-dff668ddec8c.png', description: 'To strength immune system used in traditional Ayurveda.' },
    { name: 'Cinnamon', price: 99, image: 'https://howtogroweverything.com/wp-content/uploads/cinnamon_plant_outside_1_557308df-0782-47ef-8644-f60bd6306428-300x300.png', description: 'Digestive and respiratory system used in traditional Ayurveda.' },
    { name: 'Jatamansi', price: 99, image: 'https://ultrainternational.com/wp-content/uploads/2023/08/Untitled-design-2023-08-29T085510.592.png', description: 'Promotes relaxation used in traditional Ayurveda.' },
    { name: 'Sandalwood', price: 199, image: 'https://www.chandigarhayurvedcentre.com/wp-content/uploads/2020/10/Chandan.jpg', description: 'Skin care support used in traditional Ayurveda.' },
    { name: 'Manjistha', price: 109, image: 'https://preservawellness.com/cdn/shop/articles/Manjistha.jpg?v=1667985794', description: 'Menstrual health support used in traditional Ayurveda.' },
    { name: 'Betel', price: 150, image: 'https://admin.thegreenyard.in/uploads/product_images/1811834186-Betel-Plant-with-Moss-Stick.jpg', description: 'Digestive and respiratory system used in traditional Ayurveda.' },
    { name: 'Cactus', price: 299, image: 'https://hips.hearstapps.com/hmg-prod/images/thimble-cactus-royalty-free-image-1695063544.jpg', description: 'Blood sugar control used in traditional Ayurveda.' },
  ];

  const handleAddToCart = (plant: { name: string; price: number }) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.name === plant.name);
      if (existingItem) {
        return prev.map((item) => item.name === plant.name ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (nameToRemove: string) => {
    setCart(cart.filter((item) => item.name !== nameToRemove));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-green-700">Medicinal Plants Collection</h1>
          <button onClick={() => setIsCartOpen(true)} className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plants.map((plant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={plant.image} alt={plant.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{plant.name}</h2>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">₹{plant.price}</span>
                  <button onClick={() => handleAddToCart({ name: plant.name, price: plant.price })} className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isCartOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
              <button onClick={() => setIsCartOpen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-red-600">
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

              {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <ul className="divide-y divide-gray-200 mb-4">
                  {cart.map((item, index) => (
                    <li key={index} className="py-2 flex justify-between items-center">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-medium">₹{(item.price * item.quantity).toFixed(2)}</div>
                        <button onClick={() => handleRemoveFromCart(item.name)} className="text-red-500 hover:text-red-700 text-sm">Remove</button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {cart.length > 0 && (
                <div className="flex flex-col gap-2 border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total:</span>
                    <span className="text-green-700 font-bold text-xl">₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    ✅ <strong>Cash on Delivery</strong> available
                  </div>

                  <div className="mt-4">
                    <label className="text-sm text-gray-700 mb-1 font-medium block">📍 Enter Delivery Location:</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                      placeholder="Enter your location (e.g. Jaipur, Rajasthan)"
                      value={deliveryLocation}
                      onChange={(e) => setDeliveryLocation(e.target.value)}
                    />
                  </div>

                  <button
                    onClick={() => {
                      if (deliveryLocation.trim()) {
                        setShowConfirmation(true);
                        setCart([]);
                        setIsCartOpen(false);
                      } else {
                        alert('Please enter your delivery location.');
                      }
                    }}
                    className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {showConfirmation && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full text-center shadow-xl">
              <h2 className="text-2xl font-bold text-green-700 mb-4">🎉 Order Confirmed!</h2>
              <p className="text-gray-700 mb-4">
                Thank you for your purchase! Your order will be delivered soon to{' '}
                <strong>{deliveryLocation}</strong> with <strong>Cash on Delivery</strong>.
              </p>
              <button onClick={() => setShowConfirmation(false)} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}