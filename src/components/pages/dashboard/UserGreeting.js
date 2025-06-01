import { SunIcon } from "@/components/icons/sun";

export const UserGreeting = (props) => {
  return (
    <div>
      <div className="flex items-center gap-[2px]">
        <SunIcon />
        Good Morning
      </div>
      <div className="font-bold text-2xl">{props.name}</div>
    </div>
  );
};
