import React from "react";
import { motion } from "framer-motion";

const ContactOption = props => (
   <motion.div {...props}  className="bg-neutral-200 dark:bg-neutral-900 mr-4 mb-4 rounded-[4rem] hover:bg-primary ">
      <a href={props.href} className="flex items-center p-1 px-4 font-sans text-sm text-neutral-700 dark:text-neutral-300 hover:text-white">
         {props.children}
      </a>
   </motion.div>
)

const ContactWrapper = ({children}) => (
   <address className="flex flex-wrap not-italic mt-8">
      {children}
   </address>
)

const ContactBlockWrapper = ({children}) => (
   <address className="flex flex-col items-start not-italic mt-8">
      {children}
   </address>
)

export {ContactOption, ContactWrapper, ContactBlockWrapper}