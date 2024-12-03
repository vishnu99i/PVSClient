// import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center">
      <header className="text-center mb-10">
        <img
          src="/path-to-logo.png" // Replace with actual logo path
          alt="PVS Logo"
          className="h-16 mx-auto"
        />
        <h1 className="text-xl font-semibold text-gray-700 mt-4">Welcome back, Mauro.</h1>
      </header>

      <div className="flex flex-col items-center">
        {/* User Dropdown */}
        <div className="bg-white shadow-lg rounded-lg p-4 mb-6 flex items-center space-x-4">
          <img
            src="/path-to-user-avatar.jpg" // Replace with actual avatar path
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="text-gray-800 font-medium">Mauro M. Smith</p>
            <p className="text-gray-500 text-sm">Marketing Head</p>
          </div>
          <select className="ml-auto border border-gray-300 rounded-md p-2 text-gray-600">
            <option>Switch User</option>
            <option>Mauro M. Smith</option>
          </select>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <OptionCard
            title="Sales"
            icon="📊" // Replace with actual icons or SVGs
          />
          <OptionCard
            title="CRM"
            icon="🤝"
          />
          <OptionCard
            title="Settings"
            icon="⚙️"
          />
        </div>
      </div>
    </div>
  );
};

const OptionCard = ({ title, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-lg font-medium text-gray-700">{title}</h2>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Open
      </button>
    </div>
  );
};

export default Dashboard;