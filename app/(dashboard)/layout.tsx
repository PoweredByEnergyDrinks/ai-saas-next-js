import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className="grow relative">
      <div className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] md:w-72">
        <Sidebar />

      </div>
      <main className="md:pl-72 min-h-screen">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
export default DashboardLayout;