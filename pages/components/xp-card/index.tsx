
interface XPCardProps {
  title: string;
  achievements: string[];
  company: string;
  startDate: string;
  endDate: string;
  image?: string;
}

export default function XPCard({ title, achievements, company, startDate, endDate }: XPCardProps) {

  return (
    <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-5 mb-2 md:mb-5 w-full">
      <h2 className="text-2xl text-yellow-300">{title} @ {company} </h2>
      <h3 className="text-xl text-yellow-300">{startDate} - {endDate}</h3>
      <ul className="mt-4">
        {
          achievements.map((achievement,index) => {
            return (
              <li className="text-gray-300 list-item list-disc ml-4" key={`${title}-${index}`}>
                <p>{achievement}</p>
              </li>
            )
          })
        }
      </ul>
      {/* <a className="text-yellow-300 hover:text-white" href={link}>{linkText}</a> */}
    </div>
  )

}
