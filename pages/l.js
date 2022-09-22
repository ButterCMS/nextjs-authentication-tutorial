import { getSession, useSession } from "next-auth/client";

export default function ProtectedRoute() {
  const [session] = useSession({ required: true });
  return (
    <div>
      <h1>Welcome to the protected route {session.user.name}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      session: session,
    },
  };
}
