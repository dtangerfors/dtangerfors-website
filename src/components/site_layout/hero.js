import React from "react"
import { AnimatedTitle } from "../AnimatedTitle"

const Hero = ({ children, title }) => (
  <>
  <header className="flex items-end min-h-[30vh] lg:min-h-[45vh] px-8 px-safe pt-28 pb-8 bg-neutral-200 dark:bg-neutral-900">
    <div className="max-w-screen-2xl w-full mx-auto ">
      <div className="">
        <AnimatedTitle text={title.text} textSize="text-display" color="text-black dark:text-white"/>
      </div>
    </div>
  </header>
  {children ? <div className="py-20 px-8 px-safe">
    <div className="max-w-screen-2xl w-full mx-auto py-16 border-y border-neutral-900/10 dark:border-white/30">
        {children}
    </div>
  </div> : null}
  </>
)

export default Hero
