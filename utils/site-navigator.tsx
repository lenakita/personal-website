import Link from "next/link";
import { Dispatch, ReactElement, SetStateAction } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

abstract class SiteNavigation {
  protected navItems: string[];
  constructor() {
    this.navItems = [
      'Home',
      'Bio',
      'Books',
      'Aethia',
      'Gallery',
      'Contact',
    ];
  }

  navigation(props: DarkModeProps): ReactElement<any, any> { return(<div></div>) }

  generateNavList(): React.JSX.Element[] { return []; }
}

export class NavBar extends SiteNavigation {
  constructor() {
    super();
  }

  navigation(props: DarkModeProps): ReactElement<any, any> {  
    return(
      <div className="flex sm:flex-col flex-row pb-10 pt-10 justify-center dark:bg-emerald-900 bg-emerald-700 text-stone-200 pt-12 pb-12">
        <nav>
          <ul className="flex">
            {this.generateNavList()}
            <li className="pl-16">
              <BsMoonStarsFill
                onClick={() => props.setDarkMode(!props.darkMode)}
                className="cursor-pointer"
              />
            </li>  
          </ul>
        </nav>
      </div>
    )
  }

  generateNavList(): React.JSX.Element[] {
    let navItems: React.JSX.Element[] = [];
  
    for (const navItem of this.navItems) {
      let hrefLink = navItem.toLowerCase();
      if (navItem == 'Home') {
        hrefLink = '/';
      }
      navItems.push(<li key={navItem} className="pl-16 pr-16">
        <Link className="font-semibold hover:underline" href={hrefLink}>
          {navItem}
        </Link>
      </li>);
    }
  
    return navItems;
  }
}

export class Footer extends SiteNavigation {
  constructor() {
    super();
  }

  navigation(props?: DarkModeProps): ReactElement<any, any> {
    // FIXME: tidy up to use a loop like NavBar
    return (
      <div className="pt-4">
        <div className="dark:bg-emerald-900 bg-emerald-700 pb-8">
          <footer className="pt-16 text-stone-200">
            <ul className="grid grid-cols-2 gap-2">
              <li key="email" className="cursor-pointer pl-6 pr-6">
                <Link
                  className="hover:underline"
                  href="mailto:elenathomas293@gmail.com"
                >
                  Email
                </Link>
              </li>
              <li key="home" className="cursor-pointer pl-6 pr-6">
                <Link
                  className="hover:underline"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li key="goodreads" className="cursor-pointer pl-6 pr-6">
                <Link
                  className="hover:underline"
                  href="https://www.goodreads.com/user/show/155336112-elena"
                >
                  Goodreads
                </Link>
              </li>
              <li key="Bio" className="cursor-pointer pl-6 pr-6">
                <Link
                  className="hover:underline"
                  href="/bio/"
                >
                  Bio
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }

  generateNavList(): JSX.Element[] {
    return [];
  }
}