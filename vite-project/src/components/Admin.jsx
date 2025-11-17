import React, { useState } from "react";

export default function Admin() {
  const stats = [
    { label: "Total Reports", value: 13, icon: "📊" },
    { label: "Resolution Rate", value: "8%", icon: "📈" },
    { label: "Resolved", value: 1, icon: "📅" },
    { label: "Active", value: 12, icon: "📍" },
  ];

  const issueBreakdown = [
    { type: "Pothole", count: 6, percent: "46%" },
    { type: "Roadside Garbage", count: 2, percent: "15%" },
    { type: "Illegal Parking", count: 1, percent: "8%" },
    { type: "Illegal Dumping", count: 1, percent: "8%" },
  ];

  const [filter, setFilter] = useState({
    issue: "All Types",
    status: "All Statuses",
    state: "All States",
    date: "All Time",
  });

  const reports = [
    {
      id: "17954679382",
      type: "Illegal Dumping",
      status: "Open",
      by: "Prabhat",
      location: "Ring road-1 Road, bhilai",
      date: "26 Sept 2025, 05:42 pm",
      img: "https://via.placeholder.com/400x200",
    },
    {
      id: "17834884927",
      type: "Pothole",
      status: "Open",
      by: "karan",
      location: "central park, delhi",
      date: "26 Sept 2025, 09:04 pm",
      img: "https://via.placeholder.com/400x200",
    },
    {
      id: "17837412884",
      type: "Roadside Garbage",
      status: "Open",
      by: "Vaishnavi ",
      location: " pune, Maharashtra",
      date: "24 Sept 2025, 04:50 pm",
      img: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-5 md:p-10">
      
      {/* -------- TOP STATS -------- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-5">
            <p className="text-3xl">{stat.icon}</p>
            <h3 className="text-xl font-semibold">{stat.value}</h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* -------- ISSUE BREAKDOWN -------- */}
      <div className="bg-white p-5 shadow rounded-lg mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Issue Type Breakdown</h2>
          <span className="text-green-600 text-sm cursor-pointer">Live Data</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {issueBreakdown.map((issue, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold">{issue.type}</h3>
              <p className="text-xl font-bold">{issue.count}</p>
              <p className="text-gray-500 text-sm">{issue.percent}</p>
            </div>
          ))}
        </div>
      </div>

      {/* -------- FILTERS -------- */}
      <div className="bg-white p-5 shadow rounded-lg mb-8">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            className="p-2 border rounded-md"
            value={filter.issue}
            onChange={(e) => setFilter({ ...filter, issue: e.target.value })}
          >
            <option>All Types</option>
            <option>Pothole</option>
            <option>Illegal Dumping</option>
            <option>Roadside Garbage</option>
          </select>

          <select
            className="p-2 border rounded-md"
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option>All Statuses</option>
            <option>Open</option>
            <option>Resolved</option>
          </select>

          <select
            className="p-2 border rounded-md"
            value={filter.state}
            onChange={(e) => setFilter({ ...filter, state: e.target.value })}
          >
            <option>All States</option>
            <option>Maharashtra</option>
            <option>Chattisgarh</option>
          </select>

          <select
            className="p-2 border rounded-md"
            value={filter.date}
            onChange={(e) => setFilter({ ...filter, date: e.target.value })}
          >
            <option>All Time</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>
      </div>

      {/* -------- REPORT CARDS -------- */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">All Reports ({reports.length} of 13)</h2>
        <span className="text-green-600 text-sm cursor-pointer">Live Updates</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4">
            

            {/* Dummy leader icons */}
            <div className="flex gap-2 mb-3">
              <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="" />
              <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="" />
              <img className="w-10 h-10 rounded-full" src="https://via.placeholder.com/40" alt="" />
            </div>

            {/* Image */}
            <img src={report.img} alt="Issue" className="w-full h-40 object-cover rounded-lg mb-2" />

            {/* Issue Tag */}
            <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs">
              {report.type}
            </span>

            <p className="text-blue-600 text-sm mt-2">📌 Report ID: {report.id}</p>

            <p className="text-gray-700 text-sm mt-3">👤 Reported by: {report.by}</p>
            <p className="text-gray-600 text-sm">📍 {report.location}</p>
            <p className="text-gray-500 text-sm mb-3">🕒 {report.date}</p>

           
          </div>
        ))}
      </div>

    </div>
  );
}
