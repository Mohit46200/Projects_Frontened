import { createContext, useState, useEffect } from "react";

export const Globalcontext = createContext();

const Globalprovider = ({ children }) => {
  const [cart, setCart] = useState(0);

  // ✅ NEW: auth state
  const [user, setUser] = useState(null);

  // ✅ Load token on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("token", data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <Globalcontext.Provider
      value={{ cart, setCart, user, login, logout }}
    >
      {children}
    </Globalcontext.Provider>
  );
};

export default Globalprovider;