import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../_firebase/config";

export default async function GetBookmarks(uid) {
  if (!uid) return [];

  const q = query(collection(db, "bookmarks"), where("uid", "==", uid));

  try {
    const querySnapshot = await getDocs(q);
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return docs;
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}
