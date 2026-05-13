import { useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { Globalcontext } from "../GlobalContext/globalcontext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const { login, setLogin, setUserLoginData, userLoginData } = useContext(Globalcontext);

  
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

      console.log("google token is ",response.credential)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("user", JSON.stringify(res.data.decoded))
      console.log("created token is", res.data.token)
      console.log("Decoded data is ",res.data.decoded)
      setLogin(true)
      setUserLoginData(res.data.decoded)

      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  }

      if (login) {
        const handleLogout = () => {
          localStorage.removeItem("token")
          localStorage.removeItem("user")

          setLogin(false)
          setUserLoginData(null)
        }

        return (
          <div className="min-h-screen bg-[#faf7f5] flex items-center justify-center px-6">
            <div className="bg-white border border-gray-100 shadow-xl rounded-[36px] p-12 max-w-md w-full text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-[#f8ece8] flex items-center justify-center text-4xl mb-8">
                🌸
              </div>

              <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">
                Welcome Back
              </span>

              <h1 className="mt-5 text-4xl font-serif text-gray-900">
                You are logged in
              </h1>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Your floral account is active and ready to continue shopping beautiful
                bouquets and plants.
              </p>

              <button
                onClick={handleLogout}
                className="mt-10 w-full bg-[#6b1d3a] hover:bg-[#571730] text-white py-4 rounded-full text-lg font-medium shadow-xl transition"
              >
                Logout
              </button>
            </div>
          </div>
        )
      }

      return (
        <div className="min-h-screen bg-[#faf7f5] flex items-center justify-center px-6 py-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-100/30 rounded-full blur-3xl" />

          <div className="relative z-10 bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[40px] overflow-hidden max-w-5xl w-full grid lg:grid-cols-2">
            <div className="hidden lg:flex flex-col justify-between bg-[#6b1d3a] text-white p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 border border-white/10 rounded-full" />
              <div className="absolute bottom-10 left-10 w-32 h-32 border border-white/10 rounded-full" />

              <div>
                <span className="uppercase tracking-[0.3em] text-xs text-white/70">
                  Floom India
                </span>

                <h1 className="mt-6 text-5xl font-serif leading-tight">
                  Flowers crafted for unforgettable moments
                </h1>

                <p className="mt-6 text-white/80 leading-relaxed text-lg">
                  Discover premium floral arrangements, luxury bouquets and elegant
                  gifting experiences designed with love.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                {[
                  "Luxury Bouquets",
                  "Same-day Delivery",
                  "Handcrafted Flowers",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm text-sm border border-white/10"
                  >
                    ✿ {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="text-center">
                <span className="uppercase tracking-[0.3em] text-xs text-[#7b2140]">
                  Secure Access
                </span>

                <h2 className="mt-5 text-5xl font-serif text-gray-900">
                  Login with Google
                </h2>

                <p className="mt-5 text-gray-600 leading-relaxed max-w-md mx-auto">
                  Access your floral account securely and continue shopping your
                  favorite bouquets and plants.
                </p>
              </div>

              <div className="mt-12 bg-[#faf7f5] border border-gray-200 rounded-[28px] p-8 flex justify-center items-center shadow-sm">
                <div id="googleBtn"></div>
              </div>

              <p className="text-center text-sm text-gray-400 mt-8">
                Safe, secure and beautifully simple login experience
              </p>
            </div>
          </div>
        </div>
      )
}

export default Login;