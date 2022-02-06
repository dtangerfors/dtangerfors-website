import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Paragraph } from "../typography"

import { fadeUp } from "../../animation"

function wordWrap(str, maxWidth) {
  let newLineStr = "\n"
  let done = false
  let res = ""
  while (str.length > maxWidth) {
    let found = false
    // Inserts new line at first whitespace of the line
    for (let i = maxWidth - 1; i >= 0; i--) {
      if (testWhite(str.charAt(i))) {
        res = res + [str.slice(0, i), newLineStr].join("")
        str = str.slice(i + 1)
        found = true
        break
      }
    }
    // Inserts new line at maxWidth position, the word is too long to wrap
    if (!found) {
      res += [str.slice(0, maxWidth), newLineStr].join("")
      str = str.slice(maxWidth)
    }
  }

  return res + str
}

function testWhite(x) {
  var white = new RegExp(/^\s$/)
  return white.test(x.charAt(0))
}

const ParagraphMotion = ({ text }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const wrappedText = wordWrap(text, 65)

  console.log(wrappedText)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  return (
    <>
      <Paragraph>
        {wrappedText.replace(/.+$/gm, (line, index) => {
           const lineString = JSON.stringify(line)
          return (
            <motion.span
              ref={ref}
              key={`line-${index}`}
              className="relative inline-block w-auto"
              animate={controls}
              transition={{ delay: index / 100 }}
              variants={fadeUp}
              initial="hidden"
            >
              {lineString}
            </motion.span>
          )
        })}
      </Paragraph>
    </>
  )
}

export default ParagraphMotion
