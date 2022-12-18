import React from "react";
import { motion } from "framer-motion";
import AnimationWrapper from "../AnimationWrapper";

const SkillWrapper = props => (
   <motion.div {...props} className="w-full">
      {props.children}
   </motion.div>
)

const SkillList = props => (
   <motion.ul {...props} className="flex flex-wrap bg-neutral-200 dark:bg-neutral-900 p-12 rounded-[1rem] w-full">
      {props.children}
   </motion.ul>
)

const SkillItem = props => (
   <AnimationWrapper>
      <motion.li {...props} className={`${props.className} bg-neutral-300 dark:bg-neutral-800 mr-2 mb-4 p-1 px-4 rounded-[4rem] text-sm font-sans font-normal leading-relaxed text-neutral-800 dark:text-neutral-300`}>{props.children}</motion.li>
   </AnimationWrapper>
)

export {SkillWrapper, SkillList, SkillItem}