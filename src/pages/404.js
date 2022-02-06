import * as React from "react"
import { motion } from "framer-motion"

import Layout from "../components/site_layout/layout"
import Seo from "../components/seo"
import blob from "../images/pride-gradient.jpg"
import { blobAnimation, blobTransition } from "../components/Blob"
import { letterVariants } from "../components/AnimatedTitle"
import { Ingress } from "../components/typography"
import { fadeUp, transition } from "../animation"
import { ButtonPrimary } from "../components/buttons"

const letterContainerVariants = {
  before: { transition: { staggerChildren: 0.35 } },
  after: {
    transition: { staggerChildren: 0.035, delayChildren: 0.3 },
  },
}

const pageTitle = { text: "404" }

const NotFoundPage = () => (
  <Layout>
    <Seo title="404 &ndash; Not found" />
    <div className="w-full min-h-screen relative grid place-items-center">
      <div className="relative z-10 text-center">
        <motion.h1
          variants={letterContainerVariants}
          initial={"before"}
          animate={"after"}
          exit={"before"}
          key={pageTitle.text}
          aria-label={pageTitle.text}
          aria-live={"polite"} // dont do this on production if it loops.
          className="relative inline-block text-[17rem] font-serif font-thin max-w-full z-10 break-words text-neutral-50"
        >
          {pageTitle.text.split("").map((letter, letterI) => (
            <motion.span
              key={`letter-${letter}-${letterI}`}
              className="relative inline-block w-auto font-thin"
              // Position elements
              variants={letterVariants}
            >
              {letter === " " ? "\u00A0" : `${letter}`}
            </motion.span>
          ))}
        </motion.h1>
        <Ingress
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, ...transition }}
        >
          Opps! That page couldn't be found. But hey, check out my work below!
        </Ingress>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, ...transition }}
          className="mt-8"
        >
          <ButtonPrimary to="/work">Work</ButtonPrimary>
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <motion.div
          key="blob-1"
          initial="hidden"
          animate="visible"
          variants={blobAnimation}
          transition={blobTransition}
          style={{ borderRadius: "36% 64% 60% 40% / 57% 53% 47% 43% " }}
          className="w-[40vw] h-[40vw] min-w-[40rem] min-h-[40rem] overflow-hidden border border-neutral-900/10 dark:border-white/30"
        >
          <img src={blob} className="w-full h-full object-contain"  alt=""/>
        </motion.div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
