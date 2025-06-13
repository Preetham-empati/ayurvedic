/*import React from 'react';
import { MessageSquare, Users, Share2 } from 'lucide-react';

export default function Community() {
  const discussions = [
    {
      title: "Growing Tulsi at Home",
      author: "HerbLover",
      replies: 23,
      views: 156,
      lastActive: "2 hours ago"
    },
    {
      title: "Best practices for Neem cultivation",
      author: "GreenThumb",
      replies: 15,
      views: 98,
      lastActive: "5 hours ago"
    },
    {
      title: "Ashwagandha benefits discussion",
      author: "AyurvedaExpert",
      replies: 45,
      views: 234,
      lastActive: "1 hour ago"
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Herbal Community</h1>
          <p className="text-xl text-gray-600">Join the discussion with fellow herb enthusiasts</p>
        </div>n

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">13</h3>
            <p className="text-gray-600">Active Members</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5</h3>
            <p className="text-gray-600">Discussions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Share2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">15</h3>
            <p className="text-gray-600">Shared Experiences</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
          </div>
          <div className="divide-y">
            {discussions.map((discussion, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition duration-150">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-2">{discussion.title}</h3>
                    <p className="text-sm text-gray-600">Started by {discussion.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{discussion.replies} replies • {discussion.views} views</p>
                    <p className="text-sm text-gray-500">Last active {discussion.lastActive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
            Start New Discussion
          </button>
        </div>
      </div>
    </div>
  );
}*/
/*import React, { useState } from 'react';
import { MessageSquare, Users, Share2 } from 'lucide-react';
import Modal from './Modal';

export default function Community() {
  const [discussions, setDiscussions] = useState([
    { title: "Growing Tulsi at Home", author: "HerbLover", replies: 23, views: 156, lastActive: "2 hours ago" },
    { title: "Best practices for Neem cultivation", author: "GreenThumb", replies: 15, views: 98, lastActive: "5 hours ago" },
    { title: "Ashwagandha benefits discussion", author: "AyurvedaExpert", replies: 45, views: 234, lastActive: "1 hour ago" }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({ title: '', author: '' });

  const handleCreateDiscussion = () => {
    if (newDiscussion.title && newDiscussion.author) {
      setDiscussions([
        { ...newDiscussion, replies: 0, views: 0, lastActive: "just now" },
        ...discussions
      ]);
      setModalOpen(false);
      setNewDiscussion({ title: '', author: '' });
    }
  };

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Herbal Community</h1>
          <p className="text-xl text-gray-600">Join the discussion with fellow herb enthusiasts</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">1,234</h3>
            <p className="text-gray-600">Active Members</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5,678</h3>
            <p className="text-gray-600">Discussions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Share2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">10,234</h3>
            <p className="text-gray-600">Shared Experiences</p>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
          </div>
          <div className="divide-y">
            {discussions.map((d, i) => (
              <div key={i} className="p-6 hover:bg-gray-50 transition duration-150">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-2">{d.title}</h3>
                    <p className="text-sm text-gray-600">Started by {d.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{d.replies} replies • {d.views} views</p>
                    <p className="text-sm text-gray-500">Last active {d.lastActive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="mt-8 text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700"
          >
            Start New Discussion
          </button>
        </div>

        
        {modalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <h2 className="text-2xl font-bold mb-4">Start New Discussion</h2>
            <input
              placeholder="Title"
              className="w-full mb-4 px-4 py-2 border rounded"
              value={newDiscussion.title}
              onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
            />
            <input
              placeholder="Your name"
              className="w-full mb-4 px-4 py-2 border rounded"
              value={newDiscussion.author}
              onChange={(e) => setNewDiscussion({ ...newDiscussion, author: e.target.value })}
            />
            <button
              onClick={handleCreateDiscussion}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Post
            </button>
          </Modal>
        )}
      </div>
    </div>
  );
}*/
import React, { useState } from 'react';
import { MessageSquare, Users, Share2 } from 'lucide-react';

export default function Community() {
  const [discussions, setDiscussions] = useState([
    {
      title: "Growing Tulsi at Home",
      author: "HerbLover",
      replies: 0,
      views: 10,
      lastActive: "2 hours ago"
    },
    {
      title: "Best practices for Neem cultivation",
      author: "GreenThumb",
      replies: 1,
      views: 5,
      lastActive: "5 hours ago"
    },
    {
      title: "Ashwagandha benefits discussion",
      author: "AyurvedaExpert",
      replies: 3,
      views: 3,
      lastActive: "1 hour ago"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', author: '' });

  const handlePostDiscussion = () => {
    if (!formData.title || !formData.author) return;

    setDiscussions([
      {
        title: formData.title,
        author: formData.author,
        replies: 0,
        views: 0,
        lastActive: 'just now',
      },
      ...discussions
    ]);

    setFormData({ title: '', author: '' });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-green-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Herbal Community</h1>
          <p className="text-xl text-gray-600">Join the discussion with fellow herb enthusiasts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">13</h3>
            <p className="text-gray-600">Active Members</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <MessageSquare className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">5</h3>
            <p className="text-gray-600">Discussions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Share2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">15</h3>
            <p className="text-gray-600">Shared Experiences</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
          </div>
          <div className="divide-y">
            {discussions.map((discussion, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition duration-150">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-2">{discussion.title}</h3>
                    <p className="text-sm text-gray-600">Started by {discussion.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{discussion.replies} replies • {discussion.views} views</p>
                    <p className="text-sm text-gray-500">Last active {discussion.lastActive}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
            onClick={() => setShowModal(true)}
          >
            Start New Discussion
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
              <button
                className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4">Start New Discussion</h2>
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full mb-4 px-4 py-2 border rounded"
              />
              <input
                type="text"
                placeholder="Your name"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full mb-4 px-4 py-2 border rounded"
              />
              <button
                onClick={handlePostDiscussion}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Post
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
