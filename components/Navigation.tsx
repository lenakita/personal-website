import { useTheme } from "next-themes";
import Link from "next/link";
import { BsMoonStarsFill } from "react-icons/bs";

export default function Navigation() {
  const navItems: string[] = [
    'Home',
    'Bio',
    'Books',
    'Aethia',
    'Gallery',
    'Contact',
  ]

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <nav id="navbar-sticky" className="flex sm:flex-col flex-row pb-10 pt-10 justify-center bg-emerald-700 dark:bg-emerald-900 text-stone-200 pt-12 pb-12 border-b border-gray-700">
        <ul className="flex">
          {generateNavList(navItems)}
          <li className="pl-16">
            <BsMoonStarsFill
              onClick={() => theme == "dark"? setTheme("light"): setTheme("dark")}
              className="cursor-pointer text-2xl"
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

function generateNavList(navItems: string[]): React.JSX.Element[] {
  let reactNavItems: React.JSX.Element[] = [];

  for (const navItem of navItems) {
    let hrefLink = navItem.toLowerCase();
    if (navItem == 'Home') {
      hrefLink = '/';
    }
    reactNavItems.push(<li key={navItem} className="pl-16 pr-16">
      <Link className="font-semibold hover:underline" href={hrefLink}>
        {navItem}
      </Link>
    </li>);
  }

  return reactNavItems;
}
