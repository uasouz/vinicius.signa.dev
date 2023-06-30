import Link from "next/link";
import ScrollLink from "../ScrollLink";

interface IStyledLink {
  linkText: string;
  link: string;
}

export default function StyledLinks({ links, linkClassName = "text-yellow-300 p-5", listClassName = "flex md:flex-row flex-col" }: { links: IStyledLink[], linkClassName?: string, listClassName?: string }) {
  return (
    <nav>
      <ol className={listClassName}>
        {links.map((link, index) => (
          <li id={`link-${index}`} key={`styled-link-${link.link}-${index}`} className={linkClassName}>
            <span className="text-2xl">{(index + 1).toString().padStart(2, '0')}</span>. <ScrollLink className="text-white hover:text-yellow-300 text-xl font-thin" href={link.link}>{link.linkText}</ScrollLink>
          </li>
        ))}
      </ol>
    </nav>
  )
}
