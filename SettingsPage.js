import React from "react";

function SettingsPage() {
  return (
    <div className="flex bg-black text-white min-h-screen">
      {/* Left Settings Sidebar */}
      <div className="w-64 bg-gray-900 p-4">
        <h2 className="text-lg font-bold mb-6">Settings</h2>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-gray-400">Edit Profile</li>
          <li className="cursor-pointer hover:text-gray-400">Notifications</li>
          <li className="cursor-pointer hover:text-gray-400">Privacy</li>
          <li className="cursor-pointer hover:text-gray-400">Security</li>
          <li className="cursor-pointer hover:text-gray-400">Ads</li>
          <li className="cursor-pointer hover:text-gray-400">Help</li>
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Edit Profile</h1>
        <div className="mt-6 space-y-6">
          <div>
            <label className="block mb-2 text-gray-400">Website</label>
            <input
              type="text"
              placeholder="Website"
              className="w-full p-2 bg-gray-800 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-400">Bio</label>
            <textarea
              placeholder="Bio"
              maxLength="150"
              className="w-full p-2 bg-gray-800 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-400">Gender</label>
            <select className="w-full p-2 bg-gray-800 rounded">
              <option>Prefer not to say</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
