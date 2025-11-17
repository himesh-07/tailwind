


   export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login
        </h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center">
          <hr className="flex-1" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-1" />
        </div>

        {/* Google Login Button */}
        <button className="w-full py-2 border rounded-lg flex justify-center items-center gap-2 hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            className="w-5 h-5"
            alt="google"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

