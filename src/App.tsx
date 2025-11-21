import React from "react";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-64 h-[520px] bg-white border border-gray-200 rounded-2xl shadow-lg p-4 flex flex-col">
        
        <div className="h-12 flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl mb-3 font-semibold">
          CropAdvisor
        </div>

        <div className="flex-1 overflow-auto">
          <label className="text-sm font-medium">Location</label>
          <input className="w-full border rounded px-2 py-1 mb-2" placeholder="e.g., Tamale, Ghana" />

          <label className="text-sm font-medium">Season</label>
          <select className="w-full border rounded px-2 py-1 mb-2">
            <option>Rainy</option>
            <option>Dry</option>
          </select>

          <label className="text-sm font-medium">Crop</label>
          <select className="w-full border rounded px-2 py-1 mb-2">
            <option>Maize</option>
            <option>Rice</option>
            <option>Sorghum</option>
            <option>Cowpea</option>
          </select>

          <label className="text-sm font-medium">Maturity Group</label>
          <select className="w-full border rounded px-2 py-1 mb-2">
            <option>Early</option>
            <option>Medium</option>
            <option>Late</option>
          </select>

          <label className="text-sm font-medium">Soil Type</label>
          <select className="w-full border rounded px-2 py-1 mb-2">
            <option>Sandy</option>
            <option>Loam</option>
            <option>Clay</option>
          </select>

          <label className="text-sm font-medium">Soil Fertility</label>
          <select className="w-full border rounded px-2 py-1 mb-2">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <label className="text-sm font-medium">Rainfall Pattern</label>
          <select className="w-full border rounded px-2 py-1 mb-3">
            <option>Low / Erratic</option>
            <option>Moderate</option>
            <option>High</option>
          </select>

          <button className="w-full py-2 rounded-xl bg-green-500 text-white font-semibold mb-3 hover:bg-green-600 transition-colors">
            Recommend Variety
          </button>

          <div className="mt-4 p-3 bg-gray-50 border rounded-lg shadow-sm">
            <div className="text-sm text-gray-500">Top Recommendation</div>
            <div className="text-lg font-semibold">SAMMAZ-29</div>
            <div className="text-sm text-gray-600">Crop: Maize • Maturity: Medium</div>
            <div className="mt-2 text-sm">Expected yield: <span className="font-semibold">3.6 t/ha</span></div>
            <div className="mt-2 text-xs text-gray-500">Notes: Drought tolerant. Suitable for low-N soils.</div>
          </div>
        </div>

        <div className="text-xs text-gray-400 mt-3 text-center">v0.1 — Prototype</div>
      </div>
    </div>
  );
}

