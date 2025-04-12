import AppContextProvider from "./_context/appcontext";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
export const metadata = {
  title: "Keeply",
  description:
    "Save and organize your favorite websites with ease. Our bookmarking app lets you categorize, search, and access your saved links anytime, anywhere.",
  keywords: [
    "Bookmark manager",
    "Save websites",
    "Online bookmarks",
    "Organize links",
    "Web bookmarking",
    "Cloud bookmarks",
    "Bookmark app",
    "Next.js bookmarking",
  ],
  other: {
    "google-site-verification": "yyLnDZt_22TQ8S2Jps5aUWo4DQhsujFo5b_aDptBjpM",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <AppContextProvider>
          {children}
          <ToastContainer />
        </AppContextProvider>
      </body>
      <GoogleAnalytics gaId="G-BYGWHZ78F0" />
    </html>
  );
}
