import { signIn } from "next-auth/react";
import Link from "next/link";
 
export default function CustomSignInPage() {
  return (
    <div>
      <h1>Welcome to your custom sign-in page</h1>
      <button onClick={() => signIn('github', {callbackUrl: 'http://localhost:3000'})}>Cool Custom GitHub Button</button>
    </div>
  );
}