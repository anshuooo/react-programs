import React from "react";
import { useParams } from "react-router-dom";

const properties = [
  {
    id: "1",
    title: "Luxury Apartment",
    location: "New York, USA",
    price: "450,000",
    description: "A beautiful luxury apartment in the heart of New York.",
    image: "https://via.placeholder.com/600",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,500 sqft",
    contact: "info@realestate.com",
  },
  {
    id: "2",
    title: "Modern Villa",
    location: "Los Angeles, USA",
    price: "750,000",
    description: "A modern villa with a private pool and stunning views.",
    image: "https://via.placeholder.com/600",
    bedrooms: 5,
    bathrooms: 4,
    size: "3,200 sqft",
    contact: "contact@realestate.com",
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === id);

  if (!property) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">Property Not Found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <img src={property.image} alt={property.title} className="w-full h-80 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-xl font-bold text-blue-600 mt-2">${property.price}</p>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Property Details</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
          <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
          <li><strong>Size:</strong> {property.size}</li>
        </ul>
      </div>

      <p className="text-gray-700 mt-4">{property.description}</p>

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <p>Email: <a href={`mailto:${property.contact}`} className="text-blue-500">{property.contact}</a></p>
      </div>
    </div>
  );
};

export default PropertyDetails;
