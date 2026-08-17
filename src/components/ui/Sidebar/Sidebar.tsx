import { LogoutButton } from "../LogoutButton";
import { SidebarLink, Props as ISidebarLink } from "./SidebarLink";

interface Props {
  links: ISidebarLink[];
}

export function Sidebar({ links }: Props) {
  return (
    <>
      <aside className="hidden sm:min-w-46 sm:w-46 lg:min-w-56 lg:w-56 border-r border-gray-200 bg-white sm:flex sm:flex-col">
        <ul className="py-6 px-0 grow">
          {links.map((link, idx) => (
            <li key={`${link.title}-${idx}`}>
              <SidebarLink {...link} className="justify-start h-14 px-8" />
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200">
          <LogoutButton />
        </div>
      </aside>
      {/* Mobile navbar */}
      <nav className="fixed  z-10 bottom-0 left-0 right-0 h-16 border-t border-gray-200 bg-white sm:hidden">
        <ul className="flex items-stretch w-full h-full gap-1">
          {links.map((link, idx) => (
            <li key={`${link.title}-${idx}`} className="grow h-full">
              <SidebarLink className="flex flex-col justify-center items-center text-xs my-0 h-full" {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
