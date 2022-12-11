import React from "react"
import { AnimatedTitle } from "../AnimatedTitle"

const Hero = ({ children, title }) => (
  <header className="block px-8 px-safe pt-40 lg:pt-80 pb-40">
    <div className="max-w-screen-2xl mx-auto ">
      <div className="">
        <AnimatedTitle text={title.text} textSize="text-display" color="text-black dark:text-white"/>
      </div>
      {children}
    </div>
  </header>
)

export default Hero
