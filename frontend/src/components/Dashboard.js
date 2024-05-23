import React from "react";

export default function Dashboard() {
  const handleLogout = async () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
