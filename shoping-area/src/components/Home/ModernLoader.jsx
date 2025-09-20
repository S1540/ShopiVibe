import { useState, useEffect } from "react";
function ModernLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    // 2 seconds baad zoom out animation start karo
    const timer1 = setTimeout(() => {
      setIsZooming(true);
    }, 2000);

    // Zoom animation complete hone ke baad loader hide karo
    const timer2 = setTimeout(() => {
      setIsVisible(false);
    }, 2800); // 2s + 0.8s animation time

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-in-out ${
        isZooming ? "scale-150 opacity-0" : "scale-100 opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-gradient-to-br from-violet-600/30 via-purple-600/40 to-indigo-600/30"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/20 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-400/25 rounded-full animate-bounce blur-lg delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-cyan-400/15 rounded-full animate-pulse blur-2xl delay-500"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-orange-400/20 rounded-full animate-bounce blur-xl delay-700"></div>

        {/* Moving Particles */}
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/60 rounded-full animate-ping delay-100"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300/80 rounded-full animate-ping delay-300"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-pink-300/50 rounded-full animate-ping delay-500"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center">
        {/* Logo Text */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Shop
            </span>
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse delay-300">
              Vibe
            </span>
          </h1>

          {/* Animated Underline */}
          <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full">
            <div className="h-full bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex flex-col items-center space-y-6">
          {/* Spinning Loader */}
          <div className="relative">
            <div className="w-16 h-16 border-4 border-white/30 border-t-yellow-400 border-r-pink-400 rounded-full animate-spin"></div>
            <div className="absolute inset-2 w-12 h-12 border-4 border-transparent border-t-cyan-400 border-l-purple-400 rounded-full animate-spin animate-reverse"></div>
            <div className="absolute inset-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>

          {/* Loading Text */}
          <div className="text-white/80 text-lg font-medium tracking-widest">
            <span className="inline-block animate-bounce delay-0">L</span>
            <span className="inline-block animate-bounce delay-100">O</span>
            <span className="inline-block animate-bounce delay-200">A</span>
            <span className="inline-block animate-bounce delay-300">D</span>
            <span className="inline-block animate-bounce delay-400">I</span>
            <span className="inline-block animate-bounce delay-500">N</span>
            <span className="inline-block animate-bounce delay-600">G</span>
            <span className="ml-2 animate-pulse">...</span>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 rounded-full animate-pulse transform origin-left">
              <div className="h-full bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-12 text-white/60 text-sm font-light tracking-wider animate-pulse">
          Welcome to the future of shopping
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-2 border-yellow-400/30 rounded-full animate-spin-slow"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-2 border-pink-400/30 rounded-full animate-spin-slow animate-reverse"></div>
      <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-cyan-400/30 rounded-full animate-spin-slow delay-300"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-purple-400/30 rounded-full animate-spin-slow animate-reverse delay-500"></div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes animate-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }

        .animate-reverse {
          animation: animate-reverse 2s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
export default ModernLoader;
