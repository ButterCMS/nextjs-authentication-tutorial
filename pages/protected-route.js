import { authOptions } from '../pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
 
export default function ProtectedRoute({user}) {
  
  return (
    <div>
      <h1>Welcome to the protected route {user?.name}</h1>
    </div>
  );
}
 
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const {user} = session
  return {
    props: {
      user,
    },
  }
}