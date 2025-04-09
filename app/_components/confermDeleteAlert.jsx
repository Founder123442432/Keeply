"use client";
import { motion } from "framer-motion";
import LoaderItem from "./loaderItem";
export default function DeleteAlert({
  setDeleteAlertSt,
  id,
  DeleteAlertSt,
  deleting,
  onDelete,
}) {
  return (
    <div className="fixed w-full min-h-screen backdrop-blur-3xl top-0 flex justify-center items-center bottom-0 left-0 z-55">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-w-md"
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">
                Delete BookMark
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-sm text-gray-600">
            Are you sure you want to delete this BookMark. you will not be abele
            to get it back
          </p>
        </div>
        <div className="mt-5 flex justify-end space-x-3">
          <button
            onClick={() =>
              setDeleteAlertSt({
                show: false,
                deleteBM: null,
              })
            }
            className="px-4 cursor-pointer py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onDelete(id)}
            className="px-4 w-42 cursor-pointer py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {deleting ? <LoaderItem /> : " Delete BookMark"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
