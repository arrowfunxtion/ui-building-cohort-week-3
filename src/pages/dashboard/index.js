import { AppLayout } from "../../components/layout";
import { UserTopMenus } from "@/components/pages/dashboard/UserTopMenus";
import { UserGreeting } from "@/components/pages/dashboard/UserGreeting";
import { UserVital } from "@/components/UserVital";

export default function DashboardPage() {
  const fullName = "Muhammad Azamuddin";
  return (
    <AppLayout>
      <div className="flex w-full h-full">
        <div id="main-content" className="flex-1 px-10 ">
          <div id="user-info" className="flex justify-between py-3.5">
            <UserGreeting name={fullName} />
            <UserTopMenus name={fullName} />
          </div>
          <UserVital />
        </div>
        <div id="right-content" className="w-[456px] bg-white">
          Konten kanan
        </div>
      </div>
    </AppLayout>
  );
}
