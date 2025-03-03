import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">{count}</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
