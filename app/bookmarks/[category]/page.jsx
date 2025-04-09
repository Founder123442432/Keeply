import NoUserProtection from "@/app/_clientProtextion/NoUserProtection";
import BookmarkCard from "../../_components/bookmarkCard";
import Sidebar from "../../_components/sidebar";
import IsBookmarks from "@/app/_components/ISBookmarks";
export const metadata = {
  title: "Bookmarks",
};
export default function Bookmarks({ params }) {
  return (
    <NoUserProtection>
      <div className="flex bg-slate-900 w-full min-h-screen">
        <Sidebar />
        <IsBookmarks />
      </div>
    </NoUserProtection>
  );
}
