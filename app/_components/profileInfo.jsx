"use client";
import { useContext } from "react";
import { Provider } from "../_context/appcontext";

export default function ProfileInfo() {
  const { userData } = useContext(Provider);
  return (
    <div className="ml-8 mt-24 text-center">
      <h1 className="text-3xl font-bold">
        {" "}
        {`${userData?.firstName || "N/A"} ${userData?.lastName || "N/A"}`}{" "}
      </h1>
      <p className="text-gray-200 text-lg">{userData?.email || "N/A"} </p>
    </div>
  );
}
