

import Home from './components/Home';
import Report from './components/Report';
import Login from './components/Login';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './pages/About';
import Admin from './components/admin';


function App() {
  return (
  
    
    <>
      <BrowserRouter>

        {/* Navbar Should Stay on ALL pages */}
        <nav className="bg-blue-600 shadow-md fixed top-0 left-0 w-full z-50 h-24">
          <h1 className="text-2xl font-bold text-amber-50 absolute top-5 left-4">
            CIVIC SOLVE
          </h1>

          <ul className="hidden md:flex gap-8 text-amber-50 font-medium absolute top-5 right-10 whitespace-nowrap">
            <li className="hover:text-sky-400 cursor-pointer">HOME</li>
            <li className="hover:text-amber-50 cursor-pointer">TRACK REPORT</li>
            <li><Link
                to="/admin"
                className="bg-white text-blue-600 px-4 py-1 rounded-md font-semibold hover:bg-gray-100 duration-200"
              >
                ADMIN
              </Link></li>

            <li>
              <Link
                to="/login"
                className="bg-white text-blue-600 px-4 py-1 rounded-md font-semibold hover:bg-gray-100 duration-200"
              >
                LOGIN
              </Link>
            </li>
          </ul>
        </nav>

        {/* Routing */}
        <div className="pt-28">
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
