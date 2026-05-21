"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "@heroui/react";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { FaBars, FaTimes, FaLightbulb, FaUserAstronaut } from "react-icons/fa";
import ThemeToggler from "@/lib/ThemeToggler";

const NavbarPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // hide navbar on scroll down
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { data: session } = authClient.useSession?.() || {};
  const user = session?.user;

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/ideas", label: "Ideas" },
    { path: "/add-idea", label: "Add Idea", auth: true },
    { path: "/my-ideas", label: "My Ideas", auth: true },
    { path: "/my-interactions", label: "Interactions", auth: true },
  ];

  const handleLogout = async () => {
    await authClient.signOut();

    setOpen(false);
    setMobileMenu(false);

    toast.success("Logout successful");
    router.push("/");
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-500 ${
        showNavbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-[140%] opacity-0"
      }`}
    >
      <nav className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#060816]/70 backdrop-blur-2xl shadow-[0_10px_60px_rgba(0,0,0,0.45)]">
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-violet-500/5 pointer-events-none" />

        <div className="relative px-5 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <FaLightbulb className="text-black text-lg" />
            </div>

            <div>
              <h1 className="text-xl lg:text-2xl font-black tracking-tight text-white">
                IdeaVault
              </h1>

              <p className="text-[10px] uppercase tracking-[4px] text-slate-400">
                Creative Hub
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems
              .filter((item) => (item.auth ? user : true))
              .map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    pathname === item.path
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
                      pathname === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3 relative">
            {/* Theme */}
            <div className="hidden sm:block">
              <ThemeToggler />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>

            {/* User */}
            {user ? (
              <div className="relative">
                <button onClick={() => setOpen(!open)} className="relative">
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#060816] z-10" />

                  <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500">
                    <Avatar className="w-11 h-11 border-2 border-[#060816]">
                      <Avatar.Image
                        alt="User"
                        src={
                          user?.image ||
                          "https://img.heroui.chat/image/avatar?w=200&h=200&u=3"
                        }
                      />

                      <Avatar.Fallback>U</Avatar.Fallback>
                    </Avatar>
                  </div>
                </button>

                {/* Dropdown */}
                {open && (
                  <div className="absolute right-0 top-16 w-56 rounded-2xl border border-white/10 bg-[#0b1020]/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
                    <div className="p-4 border-b border-white/10">
                      <h2 className="text-sm font-semibold text-white">
                        {user?.name || "User"}
                      </h2>

                      <p className="text-xs text-slate-400 truncate">
                        {user?.email}
                      </p>
                    </div>

                    <div className="p-2">
                      <Link
                        href="/profile"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-300 hover:bg-white/5 transition"
                      >
                        <FaUserAstronaut />
                        Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400 hover:bg-red-500/10 transition"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-5 py-2.5 rounded-2xl border border-white/10 bg-white/5 text-sm text-slate-200 hover:bg-white/10 transition"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="px-5 py-2.5 rounded-2xl bg-white text-black text-sm font-semibold hover:scale-[1.03] transition"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="lg:hidden px-4 pb-4">
            <div className="rounded-3xl border border-white/10 bg-[#0b1020]/95 backdrop-blur-2xl p-4 flex flex-col gap-2">
              {menuItems
                .filter((item) => (item.auth ? user : true))
                .map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                      pathname === item.path
                        ? "bg-white text-black"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

              {!user && (
                <div className="flex flex-col gap-2 pt-3">
                  <Link
                    href="/login"
                    onClick={() => setMobileMenu(false)}
                    className="px-4 py-3 text-center rounded-2xl border border-white/10 bg-white/5 text-slate-200"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setMobileMenu(false)}
                    className="px-4 py-3 text-center rounded-2xl bg-white text-black font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavbarPage;
