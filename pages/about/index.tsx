import NumberedHeading from "../components/NumberedHeading";
import { Me } from "../types/me";

const paragraphOne = `My name is Vinícius Lopes, and I am passionate about creating innovative solutions and solving complex problems. From a young age, I immersed myself in the digital world, delving into the realms of PHP, JavaScript, SQL, and HTML when I was just 11 years old. As my skills grew, I became increasingly fascinated by the fields of Cybersecurity and Game Development, which paved my path towards a career in IT.`
const paragraphTwo = `Since then I found oportunities to learn and work with many technologies and impact the life of hundreds of thousand of people with the software developed on the companies I worked for.`
const paragraphThree = `I believe in the power of continuous learning and strive to enhance my expertise in order to deliver cutting-edge solutions that meet the ever-evolving demands of the digital landscape into a scalable, responsible and safe way.`
const paragraphFour = `I am truly passionate about what I do, and I approach each project with dedication, creativity, and a solution-oriented mindset.`


export default function AboutMe({ me }: { me: Me }) {
  return (
    <div className="max-w-m rounded shadow-lg lg:w-1/2 lg:max-w-full lg:flex lg:flex-col">
      <NumberedHeading headingText="About Me" headingNumber={1} />
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="text-gray-300 text-m p-5">
              <p className="text-yellow-300 text-xl">Olá!</p>
              <p>{paragraphOne}</p>
              <br></br>
              <p>{paragraphTwo}</p>
              <br></br>
              <p>{paragraphThree}</p>
              <br></br>
              <p>{paragraphFour}</p>
              <br></br>
            </div>
            <img src={me.photo} className="rounded w-80 h-80" />
          </div>
          <div className="flex flex-col items-start rounded shadow-lg bg-gray-700 p-2 w-full">
            <h3 className="text-m text-white">A few things on my tech stack:</h3>
            <div className="grid grid-cols-3 gap-5 w-full">
              {me.about.skills.map((skill) => (
                <div className="text-white flex flex-row items-center">
                  <p className="text-yellow-300 text-3xl">&#8226;  </p>{skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
