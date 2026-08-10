import { Link, useLocation } from "react-router-dom";
import { Globalcontext } from "../../GlobalContext/globalcontext.jsx";
import { useContext, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", to: "/home" },
  { label: "Flowers", to: "/flower" },
  { label: "Plants", to: "/plant" },
  { label: "Ticket", to: "/ticket" },
];

const Header = () => {
  const { cart, login, userLoginData } =
    useContext(Globalcontext);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b transition-colors duration-300 ${
        scrolled
          ? "border-[#efe3dc] shadow-sm"
          : "border-transparent"
      }`}
    >
      <motion.div
        animate={{
          height: scrolled ? 76 : 96,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex items-center justify-between px-6 lg:px-10"
      >
        {/* LOGO */}
        <motion.h1
          whileHover={{
            letterSpacing: "0.45em",
          }}
          transition={{ duration: 0.35 }}
          className="text-3xl font-serif tracking-[0.35em] text-[#6b1d3a]"
        >
          FLOOM
        </motion.h1>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const active =
              location.pathname === item.to;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative py-2 text-sm uppercase tracking-[0.2em] transition ${
                  active
                    ? "text-[#6b1d3a]"
                    : "text-gray-600 hover:text-[#6b1d3a]"
                }`}
              >
                {item.label}

                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#7b2140] rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* ACCOUNT */}
          <Link
            to="/login"
            className="hidden sm:flex items-center gap-3 bg-[#faf7f5] border border-[#f1e5df] px-4 py-2 rounded-full hover:shadow-md transition"
          >
            {login && userLoginData ? (
              <motion.img
                whileHover={{ scale: 1.08 }}
                src={userLoginData.picture}
                alt="Profile"
                className="h-10 w-10 rounded-full object-cover border border-white shadow"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-[#f8ece8] flex items-center justify-center text-[#6b1d3a]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                  />

                  <path d="M6 20c0-4 12-4 12 0" />
                </svg>
              </div>
            )}

            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                Account
              </p>

              <p className="text-sm text-gray-700 font-medium">
                {login ? "Profile" : "Login"}
              </p>
            </div>
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative flex items-center gap-3 bg-[#6b1d3a] text-white px-5 py-3 rounded-full hover:bg-[#571730] transition shadow-lg"
          >
            <motion.div
              className="relative"
              whileHover={{
                rotate: [0, -8, 8, 0],
              }}
              transition={{ duration: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 6h15l-1.5 9h-13z" />

                <circle
                  cx="9"
                  cy="20"
                  r="1"
                />

                <circle
                  cx="18"
                  cy="20"
                  r="1"
                />
              </svg>

              <AnimatePresence>
                {cart > 0 && (
                  <motion.span
                    key={cart}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      scale: 0,
                      opacity: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                    }}
                    className="absolute -top-3 -right-3 bg-white text-[#6b1d3a] text-[10px] font-bold h-5 min-w-[20px] px-1 rounded-full flex items-center justify-center shadow"
                  >
                    {cart}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            <div className="hidden sm:block">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                Shopping
              </p>

              <p className="text-sm font-medium">
                Basket
              </p>
            </div>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() =>
              setMenuOpen((v) => !v)
            }
            className="md:hidden h-11 w-11 rounded-full bg-[#faf7f5] border border-[#f1e5df] flex items-center justify-center text-[#6b1d3a]"
          >
            <div className="w-4 h-3 relative flex flex-col justify-between">

              {/* TOP */}
              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: 45,
                        y: 5.5,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                className="block h-[1.5px] w-full bg-current origin-center"
              />

              {/* MIDDLE */}
              <motion.span
                animate={
                  menuOpen
                    ? { opacity: 0 }
                    : { opacity: 1 }
                }
                className="block h-[1.5px] w-full bg-current"
              />

              {/* BOTTOM */}
              <motion.span
                animate={
                  menuOpen
                    ? {
                        rotate: -45,
                        y: -5.5,
                      }
                    : {
                        rotate: 0,
                        y: 0,
                      }
                }
                className="block h-[1.5px] w-full bg-current origin-center"
              />

            </div>
          </button>
        </div>
      </motion.div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:hidden overflow-hidden border-t border-[#efe3dc] bg-white/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-1">

              {/* NAV ITEMS */}
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 0,
                          x: -16,
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 1,
                          x: 0,
                        }
                  }
                  transition={{
                    delay: i * 0.06,
                    duration: 0.3,
                  }}
                >
                  <Link
                    to={item.to}
                    className={`block py-3 text-base uppercase tracking-[0.2em] border-b border-[#f4ece8] ${
                      location.pathname ===
                      item.to
                        ? "text-[#6b1d3a]"
                        : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* LOGIN */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        x: -16,
                      }
                }
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }
                transition={{
                  delay:
                    NAV_ITEMS.length * 0.06,
                  duration: 0.3,
                }}
              >
                <Link
                  to="/login"
                  className="block py-3 text-base uppercase tracking-[0.2em] text-gray-600"
                >
                  {login ? "Profile" : "Login"}
                </Link>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;