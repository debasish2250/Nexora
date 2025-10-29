import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Add "/api/socket/io" to your publicRoutes array
  publicRoutes: ["/api/uploadthing", "/api/socket/io"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};