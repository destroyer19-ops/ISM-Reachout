import React, { useState } from 'react';

const SponsorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
        <div className="p-6">
          <h2 className="text-xl font-bold text-center mb-4">SPONSOR REACHOUTWORLD DAY</h2>
          <p className="text-sm text-center mb-6">
            Thank you for your decision to sponsor the largest soulwinning REACHOUTWORLD DAY the world has ever seen. Let's get to know you.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">What are your fullnames?</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Fullnames"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address?</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Please Add your Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Home Address, or street Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">How Many Will be Participating With You (Optional)</label>
              <input
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="How Many eg. 5"
              />
            </div>
            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                PROCEED
              </button>
            </div>
            <button
              onClick={onClose}
              className="w-full mt-2 bg-gray-300 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              CLOSE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
//       >
//         Open Modal
//       </button>
//       <SponsorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// };

export default SponsorModal;
