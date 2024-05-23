import React from "react";

export default function TokenPage() {
  const handleLogout = async () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h2>TokenPage</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
