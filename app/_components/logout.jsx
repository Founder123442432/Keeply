"use client";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../_firebase/config";

export default function LogOutC() {
  async function signout() {
    if (confirm("Are you sure you want to sign out?")) {
      localStorage.removeItem("userData");
      await signOut(auth);
    }
  }
  return (
    <button
      onClick={signout}
      className="cursor-pointer absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center space-x-2"
    >
      <LogOut size={20} />
      <span>Sign Out</span>
    </button>
  );
}
