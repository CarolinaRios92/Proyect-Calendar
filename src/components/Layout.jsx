import NavBar from "./NavBar";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Layout() {
  const { data: session } = useSession();
  console.log(session);

  if (!session) {
    return (
      <div>
        <NavBar session={session} />
        <p>Por favor logueate para poder empezar a organizarte!</p>
        <button onClick={signIn}>Sign In</button>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
    </div>
  );
}
