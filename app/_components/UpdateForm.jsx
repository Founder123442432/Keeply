"use client";
import FormSubmitButton from "./formSubmitButton";
import { Camera } from "lucide-react";
import useStopScrolling from "../_customHooks/stopscrolling";
import { updateDocument } from "../_actions/actions";
import { toast } from "react-toastify";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "Technology",
  "Design",
  "Business",
  "Entertainment",
  "Education",
  "Health",
  "Travel",
  "Food",
  "Other",
];
export default function UpdateForm({ setupdateForm, id }) {
  const [imgUrl, setimgUrl] = useState(null);
  const [DSlength, setDSlength] = useState("");

  useStopScrolling();

  const handleUpdate = async (formData) => {
    const response = await updateDocument(formData);
    if (response.success) {
      toast.success(response.message);
      setupdateForm(null);
      window.location.reload();
    } else {
      toast.error(response.message);
    }
  };
  return (
    <div className="min-h-screen    overflow-y-scroll fixed top-0 left-0   z-200 w-full  backdrop-blur-3xl flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="w-full max-w-md -mb-20 h-screen relative"
      >
        <button
          onClick={() => setupdateForm(null)}
          className="absolute top-4 right-4 w-7 h-7 cursor-pointer flex items-center justify-center rounded-full  bg-red-500"
        >
          X
        </button>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Update This Bookmark
            </h2>
          </div>

          <form action={handleUpdate}>
            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full text-black px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="Enter bookmark title"
              />
            </div>
            {/* hidden id */}
            <div className="mb-6">
              <input
                type="hidden"
                id="id"
                defaultValue={id}
                name="id"
                className={`w-full  text-black px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="id"
              />
            </div>
            {/* URL Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Website URL
              </label>
              <input
                type="text"
                id="name"
                name="Website_URL"
                className={`w-full text-black px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="https://BookmarkEx.com/"
              />
            </div>
            {/* Category Dropdown */}
            <div className="mb-6">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className={`w-full text-gray-900  px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white`}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Image URL Field */}
            <div className="mb-6">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                onChange={(e) => setimgUrl(e.target.value)}
                name="imageUrl"
                className={`w-full text-black px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="https://example.com/image.jpg"
              />
              <span className="text-xs text-gray-500 mt-5 inline-block">
                copy the website"s image url (optional)
              </span>
              {/* Image Preview */}

              {imgUrl ? (
                <div className="mt-3 relative">
                  <img
                    src={imgUrl}
                    onError={() => setimgUrl("")}
                    alt="Preview"
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="mt-3 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <Camera size={32} className="mx-auto mb-2" />
                    <p className="text-sm">Image preview will appear here</p>
                  </div>
                </div>
              )}
            </div>

            {/* Description Field */}
            <div className="mb-8">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                maxLength={60}
                id="description"
                name="description"
                rows="4"
                value={DSlength}
                onChange={(e) => setDSlength(e.target.value)}
                className={`w-full text-black px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                placeholder="What's this bookmark about?"
              />
              <span className="text-xs w-full text-gray-500 flex justify-end">
                {60 - DSlength.length} characters left
              </span>
            </div>

            {/* Submit Button */}
            <FormSubmitButton />
          </form>
        </div>
      </motion.div>
    </div>
  );
}
