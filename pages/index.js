import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
 
export default function Home() {
  const {data: session} = useSession();
  return (
    <div>
      <Head>
        <title>NextAuth Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <main>
        {!session && (
          <>
            <h1> Sign in to continue</h1>
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
