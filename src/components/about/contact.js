import React from "react";
import { motion } from "framer-motion";

const ContactOption = props => (
   <motion.a {...props} className="flex items-center mr-8 mb-4 font-body text-base text-neutral-700 dark:text-neutral-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#ae5ae0] via-[#ffcb00] to-[#ff5500]">
      {props.children}
   </motion.a>
)

const ContactWrapper = ({children}) => (
   <address className="flex flex-wrap not-italic mt-8">
      {children}
   </address>
)

export {ContactOption, ContactWrapper}