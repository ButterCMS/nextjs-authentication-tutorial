import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session] = useSession();
  return (
    <div>
      <Head>
        <title>Auth Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!session && (
          <>
            <h1> Sign in to continue</h1> <br />
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            <h1>Successfully signed in as {session.user.email}</h1>

            <button onClick={signOut}>sign out</button>
          </>
        )}
      </main>
    </div>
  );
}
