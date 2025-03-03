import { useState, useEffect } from "react";

export default function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl">User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className="p-2 border-b">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
