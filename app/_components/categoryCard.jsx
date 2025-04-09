"use client";
import { useContext, useEffect, useState } from "react";
import { Provider } from "../_context/appcontext";
import {
  MapPlus,
  Cpu,
  Pizza,
  ScanHeart,
  Book,
  CircleEllipsis,
  Layers,
  Handshake,
  Drama,
} from "lucide-react";
import Link from "next/link";

export default function CategoryCard() {
  const { Bookmarks } = useContext(Provider);

  const category = [
    "Health",
    "Entertainment",
    "Business",
    "Food",
    "Travel",
    "Technology",
    "Design",
    "Education",
    "Other",
  ];

  const icons = [
    <MapPlus size={25} />,
    <Cpu />,
    <Pizza />,
    <ScanHeart />,
    <Book />,
    <CircleEllipsis />,
    <Layers />,
    <Handshake />,
    <Drama />,
  ];

  function BookmarksCount(category) {
    const length = Bookmarks?.filter((Bm) => Bm.category === category).length;
    return length;
  }

  return (
    <div className="flex  flex-wrap gap-4 justify-center">
      {category?.map((categoryType) => (
        <Link
          key={categoryType}
          href={`/bookmarks/${categoryType}`}
          className="group overflow-hidden w-90 min-w-90  rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 bg-black"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div
                className={`w-12 h-12 rounded-lg  bg-opacity-20 dark:bg-opacity-30 flex items-center justify-center`}
              >
                <div
                  className={`w-6 h-6 rounded-md  flex items-center justify-center text-white`}
                >
                  <div className="transform -rotate-45 ">
                    {categoryType == "Travel" && icons[0]}
                    {categoryType == "Technology" && icons[1]}
                    {categoryType == "Food" && icons[2]}
                    {categoryType == "Health" && icons[3]}
                    {categoryType == "Education" && icons[4]}
                    {categoryType == "Other" && icons[5]}
                    {categoryType == "Design" && icons[6]}
                    {categoryType == "Business" && icons[7]}
                    {categoryType == "Entertainment" && icons[8]}
                  </div>
                </div>
              </div>
              <span
                className={`font-semibold text-lg text-emerald-500  bg-[#1a1a1a] p-3`}
              >
                {BookmarksCount(categoryType) || ""}
              </span>
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {categoryType}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Find Your best {categoryType} websites
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <button className="text-indigo-600 cursor-pointer dark:text-indigo-400 text-sm font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                View details →
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
