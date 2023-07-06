// @ts-ignore
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
import CredentialProvider from "next-auth/providers/credentials";
import connectDb from "../../plugins/connectDb";
const runtimeConfig = useRuntimeConfig();
export default NuxtAuthHandler({
  pages: {
    signIn: "/signIn",
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: runtimeConfig.githubClientId,
      clientSecret: runtimeConfig.githubClientSecret,
    }),

    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialProvider.default({
      name: "Credentials",
      async authorize(credentials: any) {
        const client = await connectDb();
        if (!client) return;
        const db = await client.db("quiz");
        const users = await db.collection("users").find().toArray();

        return users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );
      },
    }),
  ],
});
