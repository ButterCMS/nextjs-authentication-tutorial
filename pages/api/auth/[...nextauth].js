import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.GitHub({
      clientId: "d6693462b10dff4aa590",
      clientSecret: "7e842511fa0a396a023c59db72ddc81ad00997b2",
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
