import Link from "next/link";
import { PotatoMark } from "./PotatoMark";
import { ThemeToggle } from "./ThemeToggle";
import { SITE } from "@/lib/site";

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/">
          <PotatoMark />
          Potato Projects
        </Link>
        <nav className="nav-links">
          <Link href="/technology">Technology</Link>
          <a className="portfolio" href={SITE.portfolioUrl}>
            Portfolio ↗
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
