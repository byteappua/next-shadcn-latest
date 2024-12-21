import { auth } from "@/app/(auth)/auth";
import LogoutBtn from "../components/logout-button";

export default async function DashboardPage() {
  const session = await auth();
  console.log(session);
  if (!session) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutBtn />
    </div>
  );
}
