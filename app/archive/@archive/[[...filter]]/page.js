import Link from "next/link";
import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import { getAvailableNewsYears } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const links = getAvailableNewsYears();
  const filter = params.filter;
  // const news = getNewsForYear(newsYear);

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
