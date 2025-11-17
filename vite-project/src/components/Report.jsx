import { useState, useRef } from "react";



export default function Report() {
  const [selectedIssue, setSelectedIssue] = useState("Pothole");
  const [uploadedImage, setUploadedImage] = useState(null);

  // Reference to the hidden file input
  const fileInputRef = useRef(null);

  const issueTypes = [
    "Pothole",
    "Roadside Garbage",
    "Broken Streetlight",
    "Waterlogging",
    "Flood",
    "Illegal Dumping",
    "Illegal Parking",
    "Other",
  ];

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6">

        {/* Header */}
        <h2 className="text-xl font-bold text-center text-purple-700">
          Submit a Report 
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Help improve your community by reporting civic issues
        </p>

        {/* Issue Type Section */}
        <h3 className="font-semibold mb-2">What type of civic issue are you reporting?</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {issueTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedIssue(type)}
              className={`p-3 border rounded-lg text-sm 
              ${selectedIssue === type ? "bg-blue-600 text-white border-blue-600" : "bg-gray-50"}`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Upload Photo */}
        <h3 className="font-semibold mb-2">Upload Photo of the Issue *</h3>

        <div className="grid grid-cols-2 gap-3 mb-6">

          {/* Take Photo UI only (no camera logic added yet) */}
          <div className="border border-dashed rounded-lg p-4 text-center text-sm cursor-pointer">
            <span className="text-gray-600">📷 Take Photo</span>
          </div>

          {/* Upload Photo with file picker */}
          <div
            className="border border-dashed rounded-lg p-4 text-center text-sm cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          >
            <span className="text-gray-600 text-center">⬆ Upload Photo</span>

            {uploadedImage && (
              <p className="text-xs text-green-600 mt-2">
                Selected: {uploadedImage.name}
              </p>
            )}

            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageSelect}
              className="hidden"
            />
          </div>
        </div>

        {/* Location Section */}
        <h3 className="font-semibold mb-2">Location & Leaders Information</h3>

        <div className="bg-gray-50 p-4 rounded-xl border mb-6">
          <p className="font-medium mb-2">Current Location</p>

          <div className="flex gap-3 mb-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm">
              Select on Map
            </button>
            <button className="px-4 py-2 border rounded-md text-sm">Refresh</button>
          </div>

          <p className="text-red-500 text-sm">
            ⚠ Location access denied. Please enable location services to submit reports.
          </p>
        </div>

      

        {/* Local Civic Bodies */}
        <div className="bg-gray-50 p-4 rounded-xl border mb-6">
          <p className="font-medium mb-2">Local Civic Bodies (Optional)</p>

          <select className="w-full border rounded-md px-3 py-2 text-sm">
            <option>Select Civic Body Type</option>
            <option>Municipal</option>
            <option>Panchayat</option>
            <option>Corporation</option>
          </select>
        </div>

        {/* Additional Info */}
        <h3 className="font-semibold mb-2">Additional Information</h3>

        <input
          type="text"
          placeholder="Username (Optional)"
          className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
        />

        <textarea
          rows="4"
          placeholder="Add any additional details about the issue..."
          className="w-full border rounded-md px-3 py-2 mb-4 text-sm"
        />

        <p className="text-gray-400 text-xs mb-6">
          This field is auto-filled based on your issue type and location. You can skip this if not needed.
        </p>

        {/* Submit Button */}
        <button className="w-full py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold">
          Submit Report
        </button>
      </div>
    </div>
  );
}
