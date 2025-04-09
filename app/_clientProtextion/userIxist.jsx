"use client";

import { useContext } from "react";
import { Provider } from "../_context/appcontext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../_firebase/config";
import { useRouter } from "next/navigation";
import LoaderPage from "../_components/loaderpage";

export default function UserIxist({ children }) {
  const { userData } = useContext(Provider);
  const [user, loading] = useAuthState(auth);
  const route = useRouter();

  if (user) {
    route.push("/");
    return null;
  }
  return children;
  //   return <></>;
}
