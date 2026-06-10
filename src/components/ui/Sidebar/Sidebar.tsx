import { LogoutButton } from "../LogoutButton";
import { SidebarLink, Props as ISidebarLink } from "./SidebarLink";

interface Props {
  links: ISidebarLink[];
}

export function Sidebar({ links }: Props) {
  return (
    <aside className="w-56 border-r border-gray-200 bg-white flex flex-col">
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
