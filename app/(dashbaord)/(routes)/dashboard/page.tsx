import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-indigo-500 text-6xl">Dashboard Page (Protected)</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default DashboardPage;