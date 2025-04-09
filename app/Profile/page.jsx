import NoUserProtection from "../_clientProtextion/NoUserProtection";
import LogOutC from "../_components/logout";
import ProfileInfo from "../_components/profileInfo";
import Sidebar from "../_components/sidebar";
import { UserCircle } from "lucide-react";
export const metadata = {
  title: "Profile",
};
export default function ProfilePage() {
  return (
    <NoUserProtection>
      <div className="flex min-h-screen bg-gray-900 w-full  ">
        <Sidebar />
        <div className="bg-gray-700 min-h-screen w-full">
          {/* Banner Section */}
          <div className="relative h-80 bg-[#D27D9D] ">
            {/* Profile Picture - Positioned Absolutely */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 border-4 border-white rounded-full bg-gray-200 w-36 h-36 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all z-10">
              <UserCircle className="text-black" size={128} />
            </div>

            <LogOutC />
          </div>

          <ProfileInfo />
        </div>
      </div>
    </NoUserProtection>
  );
}
