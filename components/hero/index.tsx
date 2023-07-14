import { Me } from "../../types/me";

const introPartOne = "Hi, my name is"
const introPartTwo = "and I enjoy creating and delivering digital products that make people's lives easier."
const introPartThree = "I'm a Software Developer with knowledge in multiple languages and platforms, that had the opportunity to work in multiple areas of software development, from mobile to backend and leading great development teams."


export default function Hero({me,className}:{me: Me, className?: string}) {
  return (
      <div className={className}>
        <p className="text-3xl text-gray-400 mb-5 ">{introPartOne}</p>
        <h1 className="text-7xl text-yellow-300 mb-5 font-bold">{me.name}</h1>
        <p className="text-4xl text-gray-400 mb-5">{introPartTwo}</p>
        <p className="lg:text-2xl text-xl text-gray-300 mb-5 py-3">{introPartThree}</p>
      </div>
  )

}
