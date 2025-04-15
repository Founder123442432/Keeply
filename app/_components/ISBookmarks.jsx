"use client";
import { Search } from "lucide-react";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import { Provider } from "../_context/appcontext";
import { BookX } from "lucide-react";
import BookmarkCard from "./bookmarkCard";
export default function IsBookmarks() {
  const [search, setSearch] = useState("");

  const params = useParams();
  const { Bookmarks } = useContext(Provider);
  const category = Bookmarks?.filter((Bm) => Bm.category === params.category);
  return (
    <div className="w-full  min-h-screen">
      {category?.length === 0 ? (
        <div className="min-h-screen  flex justify-center items-center">
          {" "}
          <p className="text-2xl text-gray-500 font-bold flex flex-col justify-center items-center">
            Oh, it seams there are No Bookmarks found
            <BookX size={50} className="mt-5" />
          </p>{" "}
        </div>
      ) : (
        <>
          <h1 className="py-1 text-2xl my-4 w-auto ml-5 text-gray-300 font-bold ">
            All Bookmarks Related To: "{params.category} ..."
          </h1>
          <div className="w-full mr-70 flex items-center   relative">
            <Search
              className=" absolute left-10 top-4  text-gray-400"
              size={30}
            />
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="search Bookmarks"
              className="w-full ml-5 pl-15 bg-gray-600 h-15 mb-5 border-white focus:border-2 outline-0 "
            />
          </div>

          <BookmarkCard search={search} />
        </>
      )}
    </div>
  );
}
