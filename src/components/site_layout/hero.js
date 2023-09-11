import React from "react"
import { AnimatedTitle } from "../AnimatedTitle"

const Hero = ({ children, title }) => (
  <>
  <header className="flex items-end min-h-[30vh] lg:min-h-[45vh] p-8 px-safe bg-neutral-200 dark:bg-neutral-900">
    <div className="grid grid-cols-12 gap-8 w-full grid-flow-col">
      <div className="col-start-4 col-span-8">
        <AnimatedTitle text={title.text} textSize="text-display" color="text-black dark:text-white"/>
      </div>
      {children ? <div className="col-start-6 col-span-6">{children}</div> : null}
    </div>
  </header>
  
  </>
)

export default Hero
