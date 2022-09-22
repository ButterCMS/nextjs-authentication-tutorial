export default function UserProfile() {
  // Fetch the user on the client-side
  const { user } = useUser({ redirectTo: "/login" });

  // Server-render loading skeleton
  if (!user) {
    return <LoadingSkeleton />;
  }

  // Once the user request finishes, show the user's name
  return <p>{user.name}</p>;
}
