import React from 'react';

const Goals = () => {
  return (
    <div className="container mx-auto mt-20 p-6">
      <h1 className="text-3xl font-bold mb-6">Financial Goals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Short-term Goals */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Short-term Goals</h2>
          <div className="space-y-4">
            <div className="bg-slate-700 p-4 rounded">
              <h3 className="font-medium mb-2">Emergency Fund</h3>
              <div className="w-full bg-slate-600 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-sm mt-2">₹70,000 / ₹100,000</p>
            </div>
            <div className="bg-slate-700 p-4 rounded">
              <h3 className="font-medium mb-2">New Laptop</h3>
              <div className="w-full bg-slate-600 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <p className="text-sm mt-2">₹40,000 / ₹100,000</p>
            </div>
          </div>
        </div>

        {/* Mid-term Goals */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Mid-term Goals</h2>
          <div className="space-y-4">
            <div className="bg-slate-700 p-4 rounded">
              <h3 className="font-medium mb-2">Car Down Payment</h3>
              <div className="w-full bg-slate-600 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <p className="text-sm mt-2">₹150,000 / ₹500,000</p>
            </div>
            <div className="bg-slate-700 p-4 rounded">
              <h3 className="font-medium mb-2">Higher Education</h3>
              <div className="w-full bg-slate-600 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <p className="text-sm mt-2">₹200,000 / ₹1,000,000</p>
            </div>
          </div>
        </div>

        {/* Long-term Goals */}
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Long-term Goals</h2>
          <div className="space-y-4">
            <div className="bg-slate-700 p-4 rounded">
              <h3 className="font-medium mb-2">Retirement Fund</h3>
              <div className="w-full bg-slate-600 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
              </div>
              <p className="text-sm mt-2">₹1,500,000 / ₹10,000,000</p>
            </div>
            <div className="bg-slate-700 p-4 rounded">
              <h3 className="font-medium mb-2">House Down Payment</h3>
              <div className="w-full bg-slate-600 rounded-full h-2.5">
                <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
              </div>
              <p className="text-sm mt-2">₹500,000 / ₹5,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
