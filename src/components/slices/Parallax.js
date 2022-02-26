import React from "react"
import { Figcaption } from "../typography"

const Parallax = ({ slice }) => {
  return (
    <div className="relative w-full">
      <div className="relative h-[50vh] bg-cover bg-fixed bg-no-repeat -z-10 border-y border-neutral-900/10 dark:border-white/30" style={{ backgroundImage: `url(${slice.primary.image.url})` }}></div>
        <div className="grid grid-cols-4 lg:grid-cols-12 px-8 lg:px-12 xl:px-20">
          <div className="col-span-full lg:col-start-4">
            <Figcaption>{slice.primary.image.alt}</Figcaption>
          </div>
             
        </div>
         
    </div>
  )
}

export default Parallax
