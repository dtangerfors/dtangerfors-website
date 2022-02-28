import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Arrow from "./Arrow"

import { fadeUp, transition } from "../animation"

const ProjectCard = ({ item, index }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: (0.1 + (index / 10)), ...transition }}
    className="col-span-6 first:col-span-full md:col-span-4 md:col-end-auto md:first:col-span-8 md:first:col-end-auto md:first:row-span-2 overflow-hidden h-full"
  >
    <Link id={item.uid} to={item.url} className="group relative flex flex-col h-full">
      <figure className="relative w-full flex-1 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        <img
          src={item.data.thumbnail.url}
          alt={item.data.thumbnail.alt}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col justify-end flex-wrap pt-2 mt-4 md:mt-8 md:pt-4 lg:mt-0 pb-8 bg-transparent border-t border-neutral-900/10 dark:border-white/30 transition-all duration-300 ease-in-out lg:absolute lg:bottom-0 lg:left-0 lg:p-8 lg:w-full lg:h-full lg:border-none lg:bg-gradient-to-t from-black/40 to-transparent lg:translate-y-10 lg:group-hover:translate-y-0">
        <h2 className="font-serif text-lg text-black lg:text-white lg:group-hover:text-black lg:dark:group-hover:text-white lg:border-b lg:group-hover:border-neutral-900/10 lg:dark:group-hover:border-white/30 border-white/30 lg:h-12 lg:mb-2">
          {item.data.title.text}
        </h2>
        <p className="text-sm text-neutral-800 lg:text-neutral-300 lg:group-hover:text-neutral-800 lg:dark:group-hover:text-neutral-300 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-4 lg:group-hover:translate-y-0 transition-all delay-75 group-hover:delay-200">
          {item.data.subtitle.text}
        </p>
      </div>
      <Arrow />
    </Link>
  </motion.div>
)

export default ProjectCard
