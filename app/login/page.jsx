import Link from "next/link";
import LogInform from "../_components/logInform";
import Logo from "../_components/logo";
import UserIxist from "../_clientProtextion/userIxist";
export const metadata = {
  title: "log in",
};

export default function Login() {
  return (
    // <UserIxist>
    <div className="backdrop-blur-3xl flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex justify-center mx-auto">
          <Logo />
        </div>

        <LogInform />

        <div className="flex items-center text-sm justify-between mt-4">
          <button className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></button>
          or creat an account
          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <Link
            className="flex cursor-pointer items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
            href="/signup"
          >
            <button type="button">
              <span className=" mx-2 cursor-pointer sm:inline">
                Creat an account
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
    // </UserIxist>
  );
}
