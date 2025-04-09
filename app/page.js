import { Search, Bell, User } from "lucide-react";
import { useContext } from "react";
import { Provider } from "./_context/appcontext";
import Sidebar from "./_components/sidebar";
import NoUserProtection from "./_clientProtextion/NoUserProtection";
import CategoryCard from "./_components/categoryCard";
import Header from "./_components/header";

export default function Page() {
  return (
    <NoUserProtection>
      <div className="flex min-h-screen bg-gray-900  ">
        <Sidebar />
        <div className="w-full">
          {/* <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white dark:bg-gray-800 shadow-sm">
            <div className=" w-full">
          <Search
            size={18}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 pr-4 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-300"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell size={20} className="text-gray-500 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
              <User size={16} />
            </div>
          </div>
        </div>
      </header> */}

          <main className="p-6">
            <Header />

            <CategoryCard />
          </main>
        </div>
      </div>
    </NoUserProtection>
  );
}
