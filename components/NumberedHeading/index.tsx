

export default function NumberedHeading({ headingText, headingNumber }: { headingText: string, headingNumber: number }) {
  return (
    <div className="flex flex-row items-center" id={`${headingText.replace(/\s/g, '' ).toLowerCase()}`}>
      <span className="flex-shrink mx-1 text-2xl text-yellow-500">
        {headingNumber.toString().padStart(2, "0")}.
      </span>
      <span className="flex-shrink text-xl mx-2 text-white">
        {headingText}
      </span>
      <div className="flex-grow border-t border-gray-400" />
    </div>
  )
}
