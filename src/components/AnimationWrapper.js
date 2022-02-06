import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { fadeUp, transition } from "../animation"

const AnimationWrapper = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px 0px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      animate={controls}
      transition={transition}
      variants={fadeUp}
      initial="hidden"
    >
      <>{React.cloneElement(children)}</>
    </motion.div>
  )
}

export default AnimationWrapper
