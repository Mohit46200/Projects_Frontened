import { useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Globalcontext } from "../GlobalContext/globalcontext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const { login, setLogin, setUserLoginData } = useContext(Globalcontext);

  
  useEffect(() => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if (token && user) {
      setLogin(true)
      setUserLoginData(JSON.parse(user));
    }
  }, [])

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "347256781647-n12rvq41rtc7eqk1lr8hq77u03vi1niu.apps.googleusercontent.com",
      callback: handleCallback,           //when user successfullt clickes on login with
                                          //  google and successfully loged in then this function will be called
    })

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large" }
    )
  }, [])

  const handleCallback = async (response) => {    //in this response there will be response.creedential which is
                                                 //JWT token generateed by google which contains user name,email,picture,etc
    try {
      const res = await axios.post(
        "https://projects-backend-6.onrender.com/auth/google",
        {
          credential: response.credential,
        }
      )

     
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setLogin(true);
      setUserLoginData(res.data.user);

      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  if (login) {
  const handleLogout = () => {
    
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    
    setLogin(false)
    setUserLoginData(null)
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <h1 className="text-black text-xl font-semibold">
        You are logged in
      </h1>

      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  )
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white">
            Login with Google
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Access your account securely
          </p>
        </div>

        <div className="flex justify-center">
          <div id="googleBtn"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;