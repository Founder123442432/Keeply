"use client";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { Provider } from "../_context/appcontext";
import LoaderPage from "./loaderpage";
export default function BookmarkCard({ search }) {
  const params = useParams();
  const category = params.category;
  const { Bookmarks } = useContext(Provider);
  const Bookmark = Bookmarks?.filter((Bm) => Bm.category === category);
  const filter = Bookmark?.filter((bm) =>
    bm.name.toLowerCase().startsWith(search.toLowerCase())
  );
  if (!Bookmark) return <LoaderPage />;
  return (
    <div className=" h-fit  w-full flex gap-5 justify-center items- flex-wrap">
      {!search ? (
        Bookmark?.map((item) => (
          <div
            key={item.id}
            className={`w-72 h-40 flex flex-col justify-center gap-2 bg-[#FF00FF] rounded-lg shadow p-2`}
          >
            <div className="flex gap-2">
              <img
                src={item.imageUrl}
                alt=""
                className="bg-purple-200 w-24 h-24 shrink-0 rounded-lg"
              />
              {/* {!imgErrorShow === item.id ? (
             
            ) : (
              <span className="bg-black flex justify-center items-center w-24 h-24 shrink-0 rounded-lg">
                <CameraOff size={30} />
              </span>
            )} */}
              <div className="flex flex-col text-white">
                <span className="font-bold "> {item.name || "N/A"} </span>
                <p className="line-clamp-3 text-sm w-fit">
                  {item.description || "N/A"}
                </p>
              </div>
            </div>
            <a className="w-full" href={item.WebsiteURL} target="_blank">
              <button className="hover:bg-purple-300 cursor-pointer w-full bg-neutral-50 font-bold text-indigo-500 rounded p-2">
                Visit Site
              </button>
            </a>
          </div>
        ))
      ) : (
        <>
          {filter.length == 0 ? (
            <span className="inline-block w-full text-center text-2xl text-gray-400">
              Nothing Found :(
            </span>
          ) : (
            filter.map((item) => (
              <div
                key={item.id}
                className={`w-72 h-40 flex flex-col justify-center gap-2 bg-[#FF00FF] rounded-lg shadow p-2`}
              >
                <div className="flex gap-2">
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="bg-purple-200 w-24 h-24 shrink-0 rounded-lg"
                  />
                  {/* {!imgErrorShow === item.id ? (
       
      ) : (
        <span className="bg-black flex justify-center items-center w-24 h-24 shrink-0 rounded-lg">
          <CameraOff size={30} />
        </span>
      )} */}
                  <div className="flex flex-col text-white">
                    <span className="font-bold "> {item.name || "N/A"} </span>
                    <p className="line-clamp-3 text-sm w-fit">
                      {item.description || "N/A"}
                    </p>
                  </div>
                </div>
                <a className="w-full" href={item.WebsiteURL} target="_blank">
                  <button className="hover:bg-purple-300 cursor-pointer w-full bg-neutral-50 font-bold text-indigo-500 rounded p-2">
                    Visit Site
                  </button>
                </a>
              </div>
            ))
          )}
        </>
      )}
    </div>
  );
}
