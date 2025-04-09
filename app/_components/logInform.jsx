"use client";
import { Eye, EyeOff } from "lucide-react";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../_firebase/config";
import { useRouter } from "next/navigation";
import LoaderItem from "./loaderItem";
import { Provider } from "../_context/appcontext";
export default function LogInform() {
  const { GetUserData, userData } = useContext(Provider);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function Login_fn(e) {
    e.preventDefault();
    if (!formData.email || !formData.password)
      return setError("All fields are required");
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setLoading(false);
      await GetUserData(userCredential.user.uid);

      router.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err.message);
    }
  }
  return (
    <form onSubmit={Login_fn} className="mt-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm text-gray-800 dark:text-gray-200"
        >
          Email
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          name="email"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Password
          </label>
          <span className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
            Forget Password?
          </span>
        </div>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="block w-full pl-4 pr-8 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute cursor-pointer top-3 right-2 transform "
          >
            {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <button
          disabled={loading}
          className="w-full disabled:bg-gray-400 cursor-pointer bg-amber-400 px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
        >
          {loading ? <LoaderItem /> : " Sign In"}
        </button>
        <p className="text-red-500 mt-2 text-sm">{error} </p>
      </div>
    </form>
  );
}
