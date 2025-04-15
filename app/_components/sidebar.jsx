"use client";
import { useContext } from "react";
import { Provider } from "../_context/appcontext";

import {
  Home,
  Folder,
  User,
  MessageSquare,
  BarChart2,
  Settings,
  ChevronLeft,
  Plus,
} from "lucide-react";
import AddbokmarkForm from "./addBookmarForm";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../_firebase/config";
import { GetUserData } from "../_actions/actions";
import { usePathname } from "next/navigation";
import Logo from "./logo";
const navItems = [
  { id: 1, name: "Home", icon: <Home size={20} />, link: "/" },
  {
    id: 2,
    name: "Managment",
    icon: <Folder size={20} />,
    link: "/Managment",
  },
  { id: 3, name: "Profile", icon: <User size={20} />, link: "/Profile" },
  {
    id: 4,
    name: "about",
    icon: <MessageSquare size={20} />,
    link: "/about",
  },
  { id: 5, name: "Contact", icon: <BarChart2 size={20} />, link: "" },
  { id: 6, name: "Settings", icon: <Settings size={20} />, link: "" },
];
export default function Sidebar() {
  const path = usePathname();
  const pathName = path == "/" ? "Home" : path;

  const {
    isSidebarCollapsed,
    setSidebarCollapsed,
    setShowAddBookmarkForm,
    ShowAddBookmarkForm,
  } = useContext(Provider);
  const [user] = useAuthState(auth);

  return (
    <div
      className={`inset-y-0 relative   left-0 z-20 flex flex-col transition-all duration-300 bg-black shadow-lg ${
        isSidebarCollapsed ? "w-20" : "w-80 sm:fixed lg:static"
      }`}
    >
      <div
        className={`flex items-center justify-between h-16 px-4 border-b border-gray-100 dark:border-gray-700`}
      >
        {!isSidebarCollapsed && <Logo />}
        <button
          onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
          className="p-1.5 cursor-pointer rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-300"
        >
          <ChevronLeft
            className={`${
              isSidebarCollapsed ? "rotate-180" : ""
            } transition-all  duration-75`}
            size={18}
          />
        </button>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <Link key={item.id} href={item.link}>
            <button
              className={`flex cursor-pointer items-center w-full px-3 py-2.5 rounded-lg transition-all duration-200 
            ${
              pathName.includes(item.name)
                ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            >
              <span
                className={`${
                  pathName.includes(item.name)
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {item.icon}
              </span>
              {!isSidebarCollapsed && <span className="ml-3">{item.name}</span>}
            </button>
          </Link>
        ))}
      </nav>

      {!isSidebarCollapsed && (
        <div className="p-4 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={() => setShowAddBookmarkForm(true)}
            className="flex cursor-pointer items-center justify-center w-full py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            <Plus size={18} className="mr-2" />
            New Bookmark
          </button>
        </div>
      )}
      {ShowAddBookmarkForm && <AddbokmarkForm />}
    </div>
  );
}
