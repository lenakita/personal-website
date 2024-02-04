import { Link } from "react-scroll";

export interface SidebarNavigationProps {
  navItems: string[]
}

export default function SidebarNavigation(props: SidebarNavigationProps): React.JSX.Element {
  let reactNavItems: React.JSX.Element[] = [];

  for (let idx = 0; idx < props.navItems.length; idx++) {
    reactNavItems.push(
      <li className="cursor-pointer pb-2 list-none font-semibold text-lg">
        <Link
          activeClass="active"
          to={props.navItems[idx]}
          spy={true}
          smooth={true}
          duration={500*(idx+1)}
        >
          <p>{props.navItems[idx]}</p>
        </Link>
      </li>
    )
  }

  return (
    <div id="sidenav-sticky">
      <ul>
        {...reactNavItems}
      </ul>
    </div>
  )
}