import React from 'react';

const Profile = () => {
  return (
    <div className="container mx-auto mt-20 p-6">
      <div className="max-w-2xl mx-auto bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <div className="w-32 h-32 mx-auto bg-purple-600 rounded-full flex items-center justify-center text-4xl mb-4">
            JD
          </div>
          <h1 className="text-2xl font-bold">John Doe</h1>
          <p className="text-slate-400">john.doe@example.com</p>
        </div>

        <div className="space-y-6">
          {/* Personal Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400">Full Name</label>
                <p className="font-medium">John Doe</p>
              </div>
              <div>
                <label className="block text-sm text-slate-400">Email</label>
                <p className="font-medium">john.doe@example.com</p>
              </div>
              <div>
                <label className="block text-sm text-slate-400">Phone</label>
                <p className="font-medium">+91 98765 43210</p>
              </div>
              <div>
                <label className="block text-sm text-slate-400">Location</label>
                <p className="font-medium">Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Financial Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Financial Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700 p-4 rounded">
                <label className="block text-sm text-slate-400">Monthly Income</label>
                <p className="font-medium">₹75,000</p>
              </div>
              <div className="bg-slate-700 p-4 rounded">
                <label className="block text-sm text-slate-400">Monthly Expenses</label>
                <p className="font-medium">₹45,000</p>
              </div>
              <div className="bg-slate-700 p-4 rounded">
                <label className="block text-sm text-slate-400">Total Savings</label>
                <p className="font-medium">₹450,000</p>
              </div>
              <div className="bg-slate-700 p-4 rounded">
                <label className="block text-sm text-slate-400">Total Investments</label>
                <p className="font-medium">₹250,000</p>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-slate-700 p-4 rounded">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-slate-400">Add an extra layer of security to your account</p>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                  Enable
                </button>
              </div>
              <div className="flex items-center justify-between bg-slate-700 p-4 rounded">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>
                  <p className="text-sm text-slate-400">Receive updates about your account activity</p>
                </div>
                <button className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-500 transition-colors">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
