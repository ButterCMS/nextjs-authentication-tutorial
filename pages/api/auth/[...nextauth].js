import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: "your-client-id",
      clientSecret: "your-client-secret",
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  database: {
    type: "sqlite",
    database: ":memory:",
    synchronize: true,
  },
};

export default (req, res) => NextAuth(req, res, options);
