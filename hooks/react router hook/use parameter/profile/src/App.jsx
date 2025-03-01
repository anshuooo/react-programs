import React, { useState } from "react";

function EditableList() {
  // Define the initial state as an array of objects
  const [items, setItems] = useState([
    { id: 1, title: "Item 1", description: "Description for item 1" },
    { id: 2, title: "Item 2", description: "Description for item 2" },
  ]);

  // Function to handle input changes (title or description)
  const handleChange = (id, field, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div>
      <h1>Editable List</h1>
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            value={item.title}
            onChange={(e) => handleChange(item.id, "title", e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={item.description}
            onChange={(e) =>
              handleChange(item.id, "description", e.target.value)
            }
            placeholder="Description"
            rows="3"
          />
        </div>
      ))}
      <button
        onClick={() =>
          setItems((prevItems) => [
            ...prevItems,
            { id: Date.now(), title: "", description: "" },
          ])
        }
      >
        Add New Item
      </button>
    </div>
  );
}

export default EditableList;
