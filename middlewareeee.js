// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const token = req.cookies.get("token"); // Assuming you store auth token in cookies

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/"], // Protect these routes
// };
