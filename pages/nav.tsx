import Link from "next/link";

export default function navigation() {
  const navItems = [
    'Home',
    'Bio',
    'Books',
    'Aethia',
    'Gallery',
    'Contact',
  ]

  return(
    <div className="flex sm:flex-column flex-row justify-center pb-12">
      <nav>
        <ul className="flex">
          {generateNavList(navItems)}
        </ul>
      </nav>
    </div>
  )
}

function generateNavList(navItemsToCreate: string[]) {
  let navItems: React.JSX.Element[] = [];

  for (const navItem of navItemsToCreate) {
    let hrefLink = navItem.toLowerCase();
    if (navItem == 'Home') {
      hrefLink = '/';
    }
    navItems.push(<li className="pl-16 pr-16">
      <Link className="font-semibold hover:underline" href={hrefLink}>
        {navItem}
      </Link>
    </li>);
  }

  return navItems;
}
