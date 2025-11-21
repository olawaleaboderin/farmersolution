import React from "react";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-blue-100">
      <div className="w-96 bg-white border border-gray-200 rounded-3xl shadow-xl p-6 flex flex-col">
        
        {/* App Header */}
        <div className="h-14 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl mb-5 font-bold text-xl shadow">
          CropAdvisor
        </div>

        {/* Input Section */}
        <div className="flex-1 overflow-auto space-y-3">
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input className="w-full border rounded px-2 py-1 mt-1" placeholder="e.g., Tamale, Ghana" />
          </div>

          <div>
            <label className="block text-sm font-medium">Season</label>
            <select className="w-full border rounded px-2 py-1 mt-1">
              <option>Rainy</option>
              <option>Dry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Crop</label>
            <select className="w-full border rounded px-2 py-1 mt-1">
              <option>Maize</option>
              <option>Rice</option>
              <option>Sorghum</option>
              <option>Cowpea</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Maturity Group</label>
            <select className="w-full border rounded px-2 py-1 mt-1">
              <option>Early</option>
              <option>Medium</option>
              <option>Late</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Soil Type</label>
            <select className="w-full border rounded px-2 py-1 mt-1">
              <option>Sandy</option>
              <option>Loam</option>
              <option>Clay</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Soil Fertility</label>
            <select className="w-full border rounded px-2 py-1 mt-1">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Rainfall Pattern</label>
            <select className="w-full border rounded px-2 py-1 mt-1">
              <option>Low / Erratic</option>
              <option>Moderate</option>
              <option>High</option>
            </select>
          </div>

          <button className="w-full py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors mt-3">
            Recommend Variety
          </button>
        </div>

        {/* Top Recommendation Section */}
        <div className="mt-5 p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
          <div className="text-lg font-semibold mb-3">Top Recommendation</div>
          <table className="table-auto w-full text-sm text-left">
            <tbody>
              <tr>
                <td className="font-medium px-2 py-1">Variety Name</td>
                <td className="px-2 py-1">SAMMAZ-29</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-medium px-2 py-1">Crop</td>
                <td className="px-2 py-1">Maize</td>
              </tr>
              <tr>
                <td className="font-medium px-2 py-1">Maturity Group</td>
                <td className="px-2 py-1">Medium</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-medium px-2 py-1">Expected Yield</td>
                <td className="px-2 py-1">3.6 t/ha</td>
              </tr>
              <tr>
                <td className="font-medium px-2 py-1">Drought Tolerance</td>
                <td className="px-2 py-1">Yes</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-medium px-2 py-1">Soil Fertility</td>
                <td className="px-2 py-1">Low-N tolerant</td>
              </tr>
              <tr>
                <td className="font-medium px-2 py-1">Disease Resistance</td>
                <td className="px-2 py-1">Moderate</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="font-medium px-2 py-1">Notes</td>
                <td className="px-2 py-1">Suitable for low-N soils</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-xs text-gray-400 mt-3 text-center">v0.1 — Prototype</div>
      </div>
    </div>
  );
}

