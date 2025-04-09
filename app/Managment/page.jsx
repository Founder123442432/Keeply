import ManageCard from "../_components/ManageCard";
import Sidebar from "../_components/sidebar";

export const metadata = {
  title: "Bookmarks Managment",
};
export default function ManagmentPage() {
  return (
    <div className="flex min-h-screen bg-gray-900 w-full  ">
      <Sidebar />

      <div className="w-full bg-gray-900 min-h-screen ">
        <h1 className="py-1 text-2xl my-4 w-auto ml-5 text-gray-300 font-bold ">
          Bookmarks Managment
        </h1>

        <ManageCard />
      </div>
    </div>
  );
}
