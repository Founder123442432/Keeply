"use server";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../_firebase/config";
import { revalidatePath } from "next/cache";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
/* add bookmark */
export async function SetBookmark(formData) {
  const WebsiteName = formData.get("name");
  const imageUrl = formData.get("imageUrl");
  const WebsiteDescription = formData.get("description");
  const category = formData.get("category");
  const WebsiteURL = formData.get("Website_URL");
  const uid = formData.get("uid");

  const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)([^\s]*)?$/;
  if (!WebsiteName || !WebsiteDescription || !category || !WebsiteURL || !uid) {
    return { success: false, message: "All fields are required." };
  }
  if (!WebsiteURL.match(urlPattern)) {
    return { success: false, message: "Invalid URL format." };
  }
  try {
    const docRef = await addDoc(collection(db, "bookmarks"), {
      name: WebsiteName,
      imageUrl: imageUrl,
      description: WebsiteDescription,
      category,
      WebsiteURL,
      uid,
    });

    console.log("Document written with ID: ", docRef.id);
    return { success: true, message: "Bookmark added successfully!" };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { success: false, message: "Failed to add bookmark." };
  }
}
/* update bookmark */
export async function updateDocument(formData) {
  const WebsiteName = formData.get("name");
  const imageUrl = formData.get("imageUrl");
  const WebsiteDescription = formData.get("description");
  const category = formData.get("category");
  const WebsiteURL = formData.get("Website_URL");
  const id = formData.get("id");

  if (!WebsiteName || !WebsiteDescription || !category || !WebsiteURL) {
    return { success: false, message: "All fields are required." };
  }

  try {
    const docRef = doc(db, "bookmarks", id);
    await updateDoc(docRef, {
      name: WebsiteName,
      imageUrl,
      description: WebsiteDescription,
      category,
      WebsiteURL,
    });
    return { success: true, message: "Bookmark updated!" };
  } catch (error) {
    console.error("Update error", error);
    return { success: false, message: "Something went wrong." };
  }
}

/* delete Bookmark */
export async function deleteDocument(id) {
  try {
    const docRef = doc(db, "bookmarks", id);
    await deleteDoc(docRef);
    console.log("Document deleted successfully!");
    return { success: true, message: "Bookmark deleted successfully!" };
  } catch (error) {
    console.error("Error deleting document:", error);
    return { success: false, message: "Failed to delete bookmark." };
  }
}
