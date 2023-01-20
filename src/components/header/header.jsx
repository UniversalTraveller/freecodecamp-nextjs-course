import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header>
    <div>
      <div className="topNavigation">
        <Image alt="logo" src={"/images/logo.png"} width={50} height={50} />
        <nav>
          <ul>
            <li>
              {" "}
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/events"> Events</Link>
            </li>
            <li>
              <Link href="/about-us"> About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>The great event page</h1>
    </div>
  </header>
);
