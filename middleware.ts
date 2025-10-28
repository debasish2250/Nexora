import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Add the homepage "/" to your public routes
  publicRoutes: ["/", "/api/uploadthing"] 
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};

/*import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/api/uploadthing"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
};*/
