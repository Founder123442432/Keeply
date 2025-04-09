import Link from "next/link";
import Sidebar from "../_components/sidebar";

export default function About() {
  return (
    <div className="flex min-h-screen bg-gray-900 w-full ">
      <Sidebar />
      <div className="bg-slate-50 min px-4 w-full -h-screen text-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header Section */}
          <header className="text-center py-8">
            <h1 className="text-4xl font-bold text-indigo-600 mb-2">Keeply</h1>
            <p className="text-xl text-gray-600 mb-4">
              The smarter way to organize your web
            </p>
            <span className="bg-indigo-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Version 1.0.0
            </span>
          </header>

          <div className="grid md:grid-cols-2 gap-12 my-12">
            <div className="text-lg">
              <h2 className="text-2xl font-bold mb-4">About Keeply</h2>
              <p className="mb-4">
                Welcome to Keeply, your modern solution for bookmark management.
                We created Keeply because we believe that your online
                discoveries deserve better organization.
              </p>
              <p className="mb-4">
                In the vast ocean of online content, keeping track of valuable
                resources can be challenging. Keeply transforms how you save and
                organize websites, making your digital life simpler and more
                productive.
              </p>
              <p className="mb-4">
                Our mission is to help you build your personal knowledge base,
                one bookmark at a time. With powerful categorization, intuitive
                search, and seamless synchronization, Keeply puts your bookmarks
                to work for you.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-400 text-white flex items-center justify-center rounded-lg mb-4 text-2xl">
                  📚
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Smart Organization
                </h3>
                <p>
                  Create custom categories and sort your bookmarks in a way that
                  makes sense to you. Find what you need, when you need it.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-400 text-white flex items-center justify-center rounded-lg mb-4 text-2xl">
                  🔄
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Effortless Management
                </h3>
                <p>
                  Easily add, update, or delete bookmarks with our intuitive
                  interface designed for productivity.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-400 text-white flex items-center justify-center rounded-lg mb-4 text-2xl">
                  👤
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Personal Accounts
                </h3>
                <p>
                  Create your account to access your bookmarks from anywhere and
                  keep your digital collection secure.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-400 text-white flex items-center justify-center rounded-lg mb-4 text-2xl">
                  🌐
                </div>
                <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
                <p>
                  Access your bookmarks on any device with our responsive web
                  application designed for modern browsers.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-12 px-6 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-lg my-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to organize your online world?
            </h2>
            <p className="text-lg mb-6">
              You just Joined thousands of users who have transformed how they
              save and access their favorite websites.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
            >
              Navigate Your BookMarks
            </Link>
          </div>

          <footer className="text-center py-8 text-gray-500">
            <p>&copy; 2025 Keeply. All rights reserved.</p>
            <p className="mt-2">Version 1.0.0</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
