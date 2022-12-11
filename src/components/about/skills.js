import React from "react";
import { motion } from "framer-motion";

const SkillWrapper = props => (
   <motion.div {...props}>
      {props.children}
   </motion.div>
)

const SkillList = props => (
   <motion.ul {...props}>
      {props.children}
   </motion.ul>
)

const SkillItem = props => (
   <motion.li {...props} className={`${props.className} text-base font-body font-normal leading-relaxed text-neutral-800 dark:text-neutral-300`}>{props.children}</motion.li>
)

export {SkillWrapper, SkillList, SkillItem}