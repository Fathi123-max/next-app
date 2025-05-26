import React from "react";

interface User {
  id: number;
  name: string;
}

const new_user = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {});
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p> Date: {new Date().toLocaleTimeString()}</p>
      <p>Number of users: {users.length}</p>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default new_user;
