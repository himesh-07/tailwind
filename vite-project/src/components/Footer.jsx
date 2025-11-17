import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Civic Solve</h2>
          <p className="text-gray-400">
            Promoting civic responsibility and encouraging communities to act with awareness and respect.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@civicsolve.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2025 Civic Solve. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
