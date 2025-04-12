export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://keeply-mlvu.vercel.app/sitemap.xml",
  };
}
