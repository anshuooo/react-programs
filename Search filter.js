import { useState } from "react";

const data = ["Apple", "Banana", "Cherry", "Date", "Grapes"];

export default function SearchFilter() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-4">
      <input className="border p-2" type="text" placeholder="Search..." onChange={(e) => setQuery(e.target.value.toLowerCase())} />
      <ul className="mt-4">
        {data.filter(item => item.toLowerCase().includes(query)).map((item, index) => (
          <li key={index} className="p-2 border-b">{item}</li>
        ))}
      </ul>
    </div>
  );
}
