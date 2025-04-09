"use client";

import { useFormStatus } from "react-dom";
import LoaderItem from "./loaderItem";

export default function FormSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed  py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      {pending ? <LoaderItem /> : "Save Bookmark"}
    </button>
  );
}
