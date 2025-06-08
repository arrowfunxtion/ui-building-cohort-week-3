import { useUserVital } from "@/hooks/userUserVital";

export const UserVital = () => {
  const vital = useUserVital();
  if (vital.status === "error") {
    return <div>Terjadi kesalahan saat mengambil data vital</div>;
  }
  if (vital.status === "pending") {
    return <div>Memuat data vital ...</div>;
  }
  return (
    <div>
      <div className="text-xl">Current Heart Rate</div>
      <div className="text-6xl font-bold ">
        <span className="text-(--indigo)">{vital.data.heart_rate_bpm}</span> BPM
      </div>
    </div>
  );
};
