
import React from "react"
import {motion} from "framer-motion"
import blob from '../images/pride-gradient.jpg'

export const blobTransition = {
  duration: 1.2,
  ease: "easeInOut",
}

export const blobAnimation = {
  hidden: {scale: 5, opacity: 0},
  visible: { 
    scale: [5, 0.97, 1.04, 1],
    times: [0, 0.7, 0.8, 1], 
    opacity: 1
  }
}

export default function Blob() {
  return <motion.div 
  key="blob-1" 
  initial="hidden"
  animate="visible"
  variants={blobAnimation}
  transition={blobTransition}
  style={{borderRadius: '36% 64% 60% 40% / 57% 53% 47% 43% '}}
  className="absolute w-[100vw] h-[100vw] lg:w-[55vw] lg:h-[55vw] bottom-[-10%] -left-8 lg:left-auto lg:right-[-10%] overflow-hidden border border-neutral-900/10 dark:border-white/30">
    <img src={blob} className="w-full h-full object-contain" alt=""/>
  </motion.div>
}
