import React from "react"
import { AnimatedTitle } from "../AnimatedTitle"

const Hero = ({ children, title }) => (
  <>
  <header className="p-8 px-safe bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
    <div className="flex flex-col min-h-[30vh] lg:min-h-[45vh] pt-24">
      <div className="col-start-4 col-span-8 pb-12">
        <AnimatedTitle text={title.text} textSize="text-display" color="text-black dark:text-white"/>
      </div>
      {children ? <div className="max-w-screen-md mt-auto self-end">{children}</div> : null}
    </div>
  </header>
  
  </>
)

export default Hero
