import { Me } from "../types/me";

export default function Hero({me,className}:{me: Me, className?: string}) {
  return (
      <div className={className}>
        <p className="text-3xl text-gray-400">Hi, my name is</p>
        <h1 className="text-7xl text-yellow-300">{me.name}</h1>
        <p className="text-4xl text-gray-400"> and I enjoy creating and delivering
          digital products that make people's lives easier.</p>
        <p className="lg:text-2xl text-xl text-gray-400 py-3">
          I'm a Software Developer with knowledge in multiple languages and platforms, that
          had the opportunity to work in multiple areas of software development, from mobile to backend
          and leading great development teams.
        </p>
      </div>
  )

}
