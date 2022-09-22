export default function UserProfile({ user }) {
  return <p>{user.name}</p>;
}

export async function getServerSideProps({ req, res }) {
  const session = await getUserSession(req);
  if (!session) {
    //If no user, redirect to login page
    res.writeHead(307, { Location: "/login" });
    res.end();
    return { props: {} };
  }

  //If there is a session, return the current session
  return {
    props: { session },
  };
}
