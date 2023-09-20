import { motion } from "framer-motion"
import React from "react"
import { H3, Paragraph } from "../typography"
import { transition, fadeUpItem } from "../../animation"
import AnimationWrapper from "../AnimationWrapper"

function convertURL(url) {
  const convertedURL = (new URL(url));
  const domain = convertedURL.hostname
  return domain;
}

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
        className="relative h-full"
      >
        <a className="flex flex-col h-full p-12 bg-neutral-100 dark:bg-neutral-800 hover:bg-primary transition-all duration-300 group"
          href={resource.item_link.url}
          target="_blank"
          rel="noopener noreferrer">
        <H3 className="pt-0 pb-0 group-hover:text-white">{resource.item_title.text}</H3>
        
        <div className="pt-8">
          <Paragraph className="group-hover:text-white">{resource.item_desc.text}</Paragraph>
        </div>
        <div className="mt-auto pt-4 text-right">
          <span className="py-2 px-4 bg-white font-sans text-sm text-black rounded-3xl opacity-0 group-hover:opacity-100 duration-300 overflow-hidden">
            <span className="relative inline-block align-middle pr-2 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 delay-100 transition-all duration-300"><i className="ri-arrow-right-line"></i></span>
            {convertURL(resource.item_link.url)}
            </span>
        </div>
        </a>
      </motion.div>
    </AnimationWrapper>
  ))
}

export default ResourceItems
