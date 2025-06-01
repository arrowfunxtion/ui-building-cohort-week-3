import { AppLayout } from "../../components/layout";
import { UserTopMenus } from "@/components/pages/dashboard/UserTopMenus";
import { UserGreeting } from "@/components/pages/dashboard/UserGreeting";
import { useUserVital } from "@/hooks/userUserVital";

const UserVital = () => {
  const vital = useUserVital();
  if (vital.status === "error") {
    return <div>Terjadi kesalahan saat mengambil data vital</div>;
  }
  if (vital.status === "loading") {
    return <div>Memuat data vital ...</div>;
  }
  return (
    <div>
      <div>{vital.data.heart_rate_bpm} BPM</div>
    </div>
  );
};

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
        </div>
        <div id="right-content" className="w-[456px] bg-white">
          Konten kanan
        </div>
      </div>
    </AppLayout>
  );
}
