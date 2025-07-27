import React from "react";
import { useAuth } from "../../../../client/src/hooks/useAuth";

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user?.name || "User"}!</h1>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;