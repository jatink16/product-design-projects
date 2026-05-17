import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="bg-white/40 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-12 shadow-lg">
          <h1 className="font-serif text-9xl mb-4">404</h1>
          <h2 className="text-3xl mb-4">Lost in Time</h2>
          <p className="text-gray-600 mb-8 text-lg">
            This page doesn't exist. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-all rounded-lg shadow-lg inline-flex items-center gap-2">
                <Home className="w-5 h-5" />
                Go to Homepage
              </button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="bg-white/60 backdrop-blur-md border-2 border-black/20 px-6 py-3 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg rounded-lg inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
