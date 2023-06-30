import React, { useEffect } from "react";
import NumberedHeading from "../components/NumberedHeading";
import { Me } from "../types/me";

export default function Experience({ me }: { me: Me }) {

  const [currentExperience, setCurrentExperience] = React.useState(0)

  useEffect(() => {
    const tabListSelector = document.querySelector(".bg-yellow-300") as HTMLElement
    if (tabListSelector) {
      tabListSelector.style.transform = `translateX(${120 * currentExperience}px)`
    }
  }, [currentExperience])

  return (
    <div className="w-screen p-5 rounded shadow-lg lg:w-2/3 xl:w-1/2 lg:max-w-full overflow-hidden">
      <NumberedHeading headingText="Experience" headingNumber={2} />
      <div className="flex flex-row w-screen">
        <div className={`
                  overflow-x-auto
                  flex flex-row
                  items-center
                  snap-x snap-mandatory
                  scroll-smooth`}>

          <div role="tablist" className={`
                flex flex-row flex-shrink-0
                overflow-x-auto relative
                items-center`}>
            {
              me.experience.map((experience, index) => {
                return (
                  <button role="tab" key={`experience-${index}`} className="p-3 border-b-2 overflow-hidden w-[120px] max-w-[120px]" onClick={() => { setCurrentExperience(index) }}>
                    {experience.company}
                  </button>
                )
              })
            }
            <div className={`bg-yellow-300 bottom-0 w-[120px] absolute h-[2px]
              transition duration-500 ease-in-out`} />
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="text-xl font-bold">
          {me.experience[currentExperience].title} @ {me.experience[currentExperience].company}
        </div>
        <div className="text-base">
          {me.experience[currentExperience].startDate} - {me.experience[currentExperience].endDate}
        </div>
        <ul className="list-disc list-outside p-5">
          {me.experience[currentExperience].achievements.map((achievement,index) => <li key={`achievement-${index}`}>{achievement}</li>)}
        </ul>
      </div>
    </div>
  )
}

