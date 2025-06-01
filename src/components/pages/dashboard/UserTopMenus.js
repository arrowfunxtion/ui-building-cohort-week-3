import { CalendarIcon } from "@/components/icons/calendar";
import { NotificationIcon } from "@/components/icons/notification";
import { BadgeIcon } from "@/components/ui/BadgeIcon";

const UserAvatar = (props) => {
  const initial = props.name
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
  return (
    <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center shrink-0">
      {initial}
    </div>
  );
};

export function UserTopMenus(props) {
  return (
    <div className="flex items-center gap-x-3">
      <div class="flex gap-1.5">
        <BadgeIcon>
          <CalendarIcon size={20} strokeWidth={1} />
        </BadgeIcon>
        <BadgeIcon>
          <NotificationIcon />
        </BadgeIcon>
      </div>
      <div className="flex gap-1.5 items-center">
        <UserAvatar name={props.name} />
        {props.name}
      </div>
    </div>
  );
}
