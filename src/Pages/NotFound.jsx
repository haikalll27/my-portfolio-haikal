import React from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Compass } from "lucide-react";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#030014] px-[5%]">
    <div className="w-full max-w-md text-center">
      <div className="relative mx-auto mb-8 w-fit">
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-20 blur-2xl" />
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <Compass className="h-10 w-10 text-[#a855f7]" />
        </div>
      </div>

      <h1
        className="mb-3 text-5xl font-bold"
        style={{
          backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      <h2 className="mb-3 text-xl font-semibold text-white">Page not found</h2>
      <p className="mb-8 text-sm leading-relaxed text-gray-400">
        The page you are looking for does not exist or may have been moved.
      </p>

      <Link
        to="/"
        className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
      >
        <HomeIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;
