"use client";

import { useContext, useState } from "react";
import { Provider } from "../_context/appcontext";
import UpdateForm from "./UpdateForm";
import LoaderPage from "./loaderpage";
import { deleteDocument } from "../_actions/actions";
import { toast } from "react-toastify";
import DeleteAlert from "./confermDeleteAlert";

export default function ManageCard() {
  const { Bookmarks } = useContext(Provider);
  const [updateForm, setupdateForm] = useState(null);
  const [DeleteAlertSt, setDeleteAlertSt] = useState({
    show: false,
    deleteBM: null,
    deleting: false,
  });
  function openDeleteDialog(id) {
    setDeleteAlertSt({ show: true, deleteBM: id });
  }

  async function DeleteBookmark(id) {
    setDeleteAlertSt({ ...DeleteAlertSt, deleting: true });
    const res = await deleteDocument(id);
    setDeleteAlertSt({ ...DeleteAlertSt, deleting: false });

    if (res.success) {
      toast.success(res.message);
      window.location.reload();
    } else {
      toast.error(res.message);
    }

    setDeleteAlertSt({ show: false, deleteBM: null, deleting: false });
  }
  if (Bookmarks?.length == 0)
    return (
      <div className="flex justify-center items-center  min-h-100 text-gray-500">
        <h1 className="text-lg ">No Bookmarks Found :( </h1>
      </div>
    );
  if (!Bookmarks) return <LoaderPage />;

  return (
    <div className="flex gap-5 flex-wrap ml-5">
      {Bookmarks?.map((card) => (
        <div
          key={card.id}
          className="flex flex-col bg-white w-72 min-h-48 rounded-md py-4 px-6 border"
        >
          <h2 className="text-center font-bold text-xl text-[#3d81f5] pb-2">
            {card.category}
          </h2>
          <h3 className="text-base font-semibold text-gray-900">{card.name}</h3>
          <p className="text-sm text-gray-500 py-3">{card.description}</p>

          <div className="flex justify-around items-center py-3">
            <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
              <button
                onClick={() => setupdateForm(card.id)}
                className="font-semibold text-sm flex items-center justify-between w-15   cursor-pointer text-green-700"
              >
                <svg
                  className="w-6 stroke-green-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit
              </button>
            </div>
            <div className="flex gap-2 text-gray-600 hover:scale-110 duration-200 hover:cursor-pointer">
              <button
                onClick={() => openDeleteDialog(card.id)}
                className="font-semibold text-sm flex items-center justify-between w-18    cursor-pointer text-red-700"
              >
                <svg
                  className="w-6 stroke-red-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                Delete
              </button>
            </div>
          </div>
          {DeleteAlertSt.show && (
            <DeleteAlert
              deleting={DeleteAlertSt.deleting}
              setDeleteAlertSt={setDeleteAlertSt}
              id={DeleteAlertSt.deleteBM}
              DeleteAlertSt={DeleteAlertSt}
              onDelete={DeleteBookmark}
            />
          )}
          {updateForm === card.id && (
            <UpdateForm id={updateForm} setupdateForm={setupdateForm} />
          )}
        </div>
      ))}
    </div>
  );
}
