"use client";
import { AlertTriangle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const route = useRouter();
  function goHome() {
    route.push("/");
  }
  function Goback() {
    route.back();
  }
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-5">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <AlertTriangle size={72} className="text-yellow-500" />
        </div>

        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-gray-100 mb-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved to another
          URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={goHome}
            className="px-6 cursor-pointer py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Go Home
          </button>

          <button
            onClick={Goback}
            className="px-6 cursor-pointer py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors shadow-sm"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
