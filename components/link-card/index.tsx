
interface LinkCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  image?: string;
}

export default function LinkCard({ title,description,link, linkText }: LinkCardProps) {

  return (
    <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-5 m-5 w-full">
      <h2 className="text-2xl text-yellow-300">{title}</h2>
      <p className="text-gray-400">{description}</p>
      {/* <a className="text-yellow-300 hover:text-white" href={link}>{linkText}</a> */}
    </div>
  )

}
