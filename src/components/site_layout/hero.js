import React from "react"
import { AnimatedTitle } from "../AnimatedTitle"

const Hero = ({ children, title }) => (
  <header className="block px-8 px-safe lg:px-12 xl:px-20 pt-40 lg:pt-80 pb-40">
    <div className="max-w-screen-2xl mx-auto ">
      <div className="border-b border-neutral-900/10 dark:border-white/30">
        <AnimatedTitle text={title.text} textSize="text-display"/>
      </div>
      {children}
    </div>
  </header>
)

export default Hero
