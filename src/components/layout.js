import Link from "next/link";
import { CalendarIcon } from "./icons/calendar";
import { LogoIcon } from "./icons/logo";
import { DashboardIcon } from "./icons/dashboard";
import { FileIcon } from "./icons/file";
import { MessageIcon } from "./icons/message";

export function AppLayout(props) {
  return (
    <div className="flex bg-gradient-to-tr from-blue-100 to-yellow-100 via-indigo-100 text-black">
      <aside className="w-[112px] bg-white/60 h-screen flex flex-col items-center pt-14 rounded-r-[20px] border border-white">
        <div className="mb-20">
          <LogoIcon />
        </div>
        <nav className="">
          <ul className="flex flex-col gap-16">
            <li>
              <Link href="/dashboard">
                <DashboardIcon />
              </Link>
            </li>
            <li>
              <Link href="/calendar">
                <CalendarIcon />
              </Link>
            </li>
            <li>
              <Link href="/files">
                <FileIcon />
              </Link>
            </li>
            <li>
              <Link href="/messages">
                <MessageIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 min-h-screen">{props.children}</main>
    </div>
  );
}
