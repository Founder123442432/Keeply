"use client";
import { useRouter } from "next/navigation";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../_firebase/config";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import LoaderItem from "./loaderItem";
export default function SignupFormEl() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function addUserAction(e) {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    )
      return setError("All fields are required");
    if (formData.password.length < 6)
      return setError("Password must be at least 6 characters long");
    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    )
      return setError("Invalid email format");

    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      await userData(userCredential.user.uid);
      setLoading(false);
      router.push("/login");
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  }
  async function userData(uid) {
    try {
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        uid,
      });
      console.log("data-added");
    } catch (err) {
      console.log(err);
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={addUserAction} className="space-y-6">
      <div className="grid text-black  grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First name
          </label>
          <div className="mt-1">
            <input
              id="firstName"
              name="firstName"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              type="text"
              autoComplete="given-name"
              className={`block w-full text-black  rounded-md border shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last name
          </label>
          <div className="mt-1">
            <input
              id="lastName"
              name="lastName"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              type="text"
              autoComplete="family-name"
              className={`block text-black  w-full rounded-md border  shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-gray-700  text-sm font-medium "
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            autoComplete="email"
            className={`block w-full ${
              error.includes("email") && "border-red-500"
            }  text-black  rounded-md border  shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1 relative">
          <input
            id="password"
            name="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            className={`block w-full  ${
              error.includes("password") && "border-red-500"
            } text-black  rounded-md border  shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 sm:text-sm`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-500"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Eye className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        {error && <p className="mt-3 text-xs text-red-500 ">{error}</p>}
      </div>

      <div>
        <button
          disabled={loading}
          type="submit"
          className="w-full cursor-pointer disabled:bg-gray-500 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? <LoaderItem /> : "Sign up"}
        </button>
      </div>
    </form>
  );
}
