import { LogoutButton } from "../LogoutButton";
import { SidebarLink, Props as ISidebarLink } from "./SidebarLink";

interface Props {
  links: ISidebarLink[];
}

export function Sidebar({ links }: Props) {
  return (
    <aside className="hidden sm:min-w-46 sm:w-46 lg:min-w-56 lg:w-56 border-r border-gray-200 bg-white sm:flex sm:flex-col">
      <ul className="py-6 px-3 grow">
        {links.map((link, idx) => (
          <li key={`${link.title}-${idx}`}>
            <SidebarLink {...link} />
          </li>
        ))}
      </ul>
      <div className="border-t border-gray-200">
        <LogoutButton />
      </div>
    </aside>
  );
}
