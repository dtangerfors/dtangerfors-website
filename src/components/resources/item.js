import { motion } from "framer-motion"
import React from "react"
import { H3, Paragraph } from "../typography"
import { transition, fadeUpItem } from "../../animation"
import AnimationWrapper from "../AnimationWrapper"

const ResourceItems = ({ items }) => {
  return items.map((resource, i) => (
    <AnimationWrapper>
      <motion.div
        variants={fadeUpItem}
        custom={i}
        initial="hidden"
        animate="visible"
        transition={transition}
        key={i}
        className="bg-neutral-200 dark:bg-neutral-900 p-12 rounded-[1rem] h-full"
      >
        <H3 className="pt-0">
          <a
            href={resource.item_link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-inherit hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#ae5ae0] via-[#ffcb00] to-[#ff5500]"
          >
            {resource.item_title.text}
            <i className="ri-external-link-line text-base align-baseline ml-auto"></i>
          </a>
        </H3>
        <div className="pt-8">
          <Paragraph>{resource.item_desc.text}</Paragraph>
        </div>
      </motion.div>
    </AnimationWrapper>
  ))
}

export default ResourceItems
