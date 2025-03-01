import { useState } from "react";

export default function CascadingDropdown() {
  // Data for countries and their cities
  const countryData = {
    USA: ["New York", "Los Angeles", "Chicago"],
    India: ["Mumbai", "Delhi", "Bangalore"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
  };

  // State to manage country and city
  
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Update city list dynamically when country changes
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    setSelectedCity(""); // Reset city selection
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cascading Dropdowns</h2>

      {/* Country Dropdown */}
      <label className="block text-lg font-semibold mb-2">Select Country:</label>
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="">-- Select Country --</option>
        {Object.keys(countryData).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {/* City Dropdown (Disabled until a country is selected) */}
      <label className="block text-lg font-semibold mb-2">Select City:</label>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        className="w-full p-2 border rounded"
        disabled={!selectedCountry}
      >
        <option value="">-- Select City --</option>
        {selectedCountry &&
          countryData[selectedCountry].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>

      {/* Display Selected Values */}
      {selectedCountry && selectedCity && (
        <p className="mt-4 text-lg">
          🌍 <strong>Country:</strong> {selectedCountry} <br />
          🏙 <strong>City:</strong> {selectedCity}
        </p>
      )}
    </div>
  );
}
