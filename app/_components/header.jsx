"use client";
import { useContext } from "react";
import { Provider } from "../_context/appcontext";

export default function Header() {
  const { userData } = useContext(Provider);
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        Welcome back, {userData?.firstName}
      </h1>
      <p className=" my-4 text-gray-300">
        are You ready to visit your favorite websites?
      </p>
    </div>
  );
}
