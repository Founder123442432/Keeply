"use client";

import { createContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../_firebase/config";
import GetBookmarks from "../_lib/getBookmarks";
import { useAuthState } from "react-firebase-hooks/auth";

export const Provider = createContext();
export default function AppContextProvider({ children }) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [ShowAddBookmarkForm, setShowAddBookmarkForm] = useState(false);
  const [userData, setUserData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("userData")) || null;
    } catch {
      return null;
    }
  });
  const [Bookmarks, setBookmarks] = useState(null);
  const [user] = useAuthState(auth);
  useEffect(() => {
    async function loadBookmarks() {
      try {
        const data = await GetBookmarks(user?.uid);
        setBookmarks(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadBookmarks();
  }, [user?.uid]);

  async function GetUserData(uid) {
    try {
      const userDocRef = doc(db, "users", uid);
      const docSnap = await getDoc(userDocRef);
      setUserData(docSnap.data());
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);
  return (
    <Provider
      value={{
        isSidebarCollapsed,
        setSidebarCollapsed,
        ShowAddBookmarkForm,
        setShowAddBookmarkForm,
        GetUserData,
        userData,
        setUserData,
        Bookmarks,
      }}
    >
      {children}
    </Provider>
  );
}
