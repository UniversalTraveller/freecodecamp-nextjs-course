import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header>
    <div className="topNavigation">
      <Image alt="logo" src={"/images/logo.png"} width={50} height={50} />
      <nav>
        <Link href="/"> Home</Link>
        <Link href="/events"> Events</Link>
        <Link href="/about-us"> About Us</Link>
      </nav>
    </div>
    <h1>The great event page</h1>
  </header>
);
