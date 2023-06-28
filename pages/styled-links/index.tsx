
interface IStyledLink {
  linkText: string;
  link: string;
}

export default function StyledLinks({ links }: { links: IStyledLink[] }) {
  return (
    <div className="">
      <ol className="flex md:flex-row flex-col">
        {links.map((link, index) => ( 
          <li id={`link-${index}`} className="text-yellow-300 p-5">
            {(index+1).toString().padStart(2,'0')}. <a className="text-white hover:text-yellow-300" href={link.link}>{link.linkText}</a>
          </li>
        ))}
      </ol>
    </div>
  )
}
