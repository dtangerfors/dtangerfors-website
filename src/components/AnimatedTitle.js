import React from "react"
import { motion } from "framer-motion"

// Add staggering effect to the children of the container
export const letterContainerVariants = {
  before: { transition: { staggerChildren: 0.35 } },
  after: {
    transition: { staggerChildren: 0.035, delayChildren: 0.2 },
  },
}

// Variants for animating each letter
export const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 50,
    },
  },
}

export const AnimatedTitle = ({ children, text, textSize, color }) => {

  return (
    <motion.h1
      variants={letterContainerVariants}
      initial={"before"}
      animate={"after"}
      exit={"before"}
      key={children}
      aria-label={children}
      aria-live={"polite"} // dont do this on production if it loops.
      className={`${textSize} ${color} relative inline-block leading-tight font-sans font-normal z-10 break-words`}
    >
      {text.split(" ").map((word, wordI) => (
        <motion.span
          key={`word-${word}-${wordI}`}
          className="relative inline-block w-auto"
          // Position elements
          variants={letterVariants}
        >
          {word === " " ? "\u00A0" : `${word}\u00A0`}
        </motion.span>
      ))}
    </motion.h1>
  )
}
