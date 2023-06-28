import { Me } from "../types/me";

export default function Hero({me}:{me: Me}) {
  return (
      <div className="lg:w-1/2 xl:w-1/2 flex flex-col items-left py-9">
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
