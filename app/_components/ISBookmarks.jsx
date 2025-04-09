"use client";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { Provider } from "../_context/appcontext";
import { BookX } from "lucide-react";
import BookmarkCard from "./bookmarkCard";
export default function IsBookmarks() {
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

          <BookmarkCard />
        </>
      )}
    </div>
  );
}
