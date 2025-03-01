import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden max-w-sm transition-transform hover:scale-105">
      <img
        src={
          'fancyhouse.jpg'
        }
        alt={'apna gher'}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-xl font-bold text-blue-600 mt-2">${property.price}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
