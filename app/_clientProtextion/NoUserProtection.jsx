"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../_firebase/config";
import { useRouter } from "next/navigation";
import LoaderPage from "../_components/loaderpage";
import { useContext } from "react";
import { Provider } from "../_context/appcontext";

export default function NoUserProtection({ children }) {
  const [user, loading] = useAuthState(auth);
  const { userData } = useContext(Provider);
  const route = useRouter();
  if (loading) return <LoaderPage />;

  if (!user || !userData) {
    route.push("/login");
    return null;
  }
  return children;
}
