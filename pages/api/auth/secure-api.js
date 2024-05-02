import { authOptions } from './auth/[...nextauth]'
import { getServerSession } from "next-auth/next" 

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
 
  if (session) {
    res.status(200).json({
     	name: "John Doe",
	    message: "Welcome authenticated user",
    });
  } else {
    res.status(403).json({
      error: "You must sign-in to view the content on this page.",
    });
  }
};