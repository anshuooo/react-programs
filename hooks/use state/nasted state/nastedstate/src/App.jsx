import { useState } from "react";

export default function NestedStateManagement() {
  // State to manage the list of items
  const [items, setItems] = useState([
    { id: 1, title: "Item 1", description: "Description 1" },
    { id: 2, title: "Item 2", description: "Description 2" },
  ]);

  // Function to update a specific item
  const handleChange = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Nested State Management</h2>
      {items.map((item) => (
        <div key={item.id} className="mb-4 p-4 border rounded">
          <input
            type="text"
            value={item.title}
            onChange={(e) => handleChange(item.id, "title", e.target.value)}
            className="w-full p-2 border rounded mb-2"
            placeholder="Title"
          />
          <textarea
            value={item.description}
            onChange={(e) =>
              handleChange(item.id, "description", e.target.value)
            }
            className="w-full p-2 border rounded"
            placeholder="Description"
          />
        </div>
      ))}
    </div>
  );
}
