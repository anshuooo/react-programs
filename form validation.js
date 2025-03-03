import { useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email");
    } else {
      setError("");
      alert("Submitted successfully!");
    }
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input className="border p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 ml-2">Submit</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
