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
    className="col-span-6 first:col-span-full md:col-span-4 md:col-end-auto md:first:col-span-8 md:first:col-end-auto md:first:row-span-2"
  >
    <Link id={item.uid} to={item.url} className="group relative flex flex-col">
      <figure className="relative w-full flex-1 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        <img
          src={item.data.thumbnail.url}
          alt={item.data.thumbnail.alt}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col justify-end flex-wrap pt-2 mt-4 md:mt-8 md:pt-4 pb-8 bg-transparent border-t border-neutral-900/10 dark:border-white/30 transition-all duration-300 ease-in-out">
        <h2 className="font-serif text-lg text-black dark:text-white">
          {item.data.title.text}
        </h2>
        <p className="text-sm text-neutral-800 dark:text-neutral-300">
          {item.data.subtitle.text}
        </p>
      </div>
      <Arrow />
    </Link>
  </motion.div>
)

export default ProjectCard
