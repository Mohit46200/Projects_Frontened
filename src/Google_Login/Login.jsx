import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
   
    google.accounts.id.initialize({
      client_id: "347256781647-n12rvq41rtc7eqk1lr8hq77u03vi1niu.apps.googleusercontent.com",
      callback: handleCallback,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleCallback = async (response) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/google",
        {
          credential: response.credential,
        }
      );

      localStorage.setItem("token", res.data.token);

    //   navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      
      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">
            Login with Google
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Access your account securely
          </p>
        </div>

        {/* Google Button */}
        <div className="flex justify-center">
          <div
            id="googleBtn"
            className="w-full flex justify-center py-2 px-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
          ></div>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-600"></div>
          <span className="px-3 text-gray-400 text-xs">OR</span>
          <div className="flex-1 h-px bg-gray-600"></div>
        </div>

        {/* Optional Inputs (future ready UI) */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-300">
            Sign In
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default Login