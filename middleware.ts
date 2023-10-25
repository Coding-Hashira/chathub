import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: [
    "/users/:path*", // Match all requests starting with /users/, GOOD PRACTICE, Not required here
  ],
};
