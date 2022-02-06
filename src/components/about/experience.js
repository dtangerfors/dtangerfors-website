import React from "react";
import { motion } from "framer-motion";

const JobList = props => (
   <motion.ul {...props} className="w-full flex flex-wrap gap-12">
      {props.children}
   </motion.ul>
)

const JobItem = props => (
   <motion.li {...props} className="w-full">{props.children}</motion.li>
)

export {JobList, JobItem}  