import React from "react";
import { motion } from "framer-motion";
import AnimationWrapper from "../AnimationWrapper";

const JobList = props => (
   <motion.ul {...props} className="w-full flex flex-wrap gap-12">
      {props.children}
   </motion.ul>
)

const JobItem = props => (
   <li className="w-full border-b border-black dark:border-white pb-12">
      <AnimationWrapper>
         <motion.div {...props}>
         {props.children}
         </motion.div>
      </AnimationWrapper>
   </li>
)

export {JobList, JobItem}  