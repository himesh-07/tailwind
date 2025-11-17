import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <section className="w-full bg-blue-400 text-white py-40 px-10 flex flex-col md:flex-row items-center justify-between ">
        {/* Left Content */}
        <div className="max-w-lg space-y-5">
          <h1 className="text-4xl md:text-4xl font-bold font-mono ">
            Your Eyes On The Street Our Engine For Change
          </h1>

          <p className="text-gray-100 text-lg">stop wishing start reporting</p>

          <button className="bg-green-400 hover:bg-green-500 text-white font-medium px-6 py-3 rounded  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ">
            <Link to="/report">Report a Problem</Link>
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://ik.imagekit.io/zn4au2jftpm5/Apps365/Blog/Civic%20App_m2HfPfZow.webp"
            alt="Civic Reporting"
            className="{w-50}px rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="w-full bg-blue-300 py-16">
        <h2 className="text-center text-4xl font-bold text-blue-600 mb-12">
          How It Works
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

          {/* Box 1 */}
          <div className="bg-white shadow-lg p-8 rounded-xl text-center hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">1. Report</h3>
            <p className="text-gray-700">
              Capture the issue, add details and submit the report instantly.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-lg p-8 rounded-xl text-center hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">2. Review</h3>
            <p className="text-gray-700">
              Your report is reviewed by the responsible department.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white shadow-lg p-8 rounded-xl text-center hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">3. Resolve</h3>
            <p className="text-gray-700">
              The authorities take action and update status in real-time.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-blue-900 text-gray-200 py-10 mt-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-3">Civic Reporter</h3>
            <p className="text-gray-400 text-sm">
              Empowering citizens to report issues and help build better cities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/report" className="hover:text-white">Report an Issue</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">📍 India</p>
            <p className="text-gray-400 text-sm">📩 support@civicsolve.com</p>
          </div>
        </div>

        <div className="text-center text-gray-400 text-xs mt-10">
          © {new Date().getFullYear()} Civic solve — All Rights Reserved.
        </div>
      </footer>

    </>
  );
};

export default Home;

