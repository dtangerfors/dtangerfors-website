import React from "react"
import { bool, func } from "prop-types"
import { motion } from "framer-motion"

const Hamburger = ({ setOpen, open }) => (
  <motion.button
    key="hamburger"
    open={open}
    onClick={() => setOpen(!open)}
    className="group relative appearance-none flex items-center p-8 -m-4 mr-0 border-l border-neutral-900/10 dark:border-white/30 font-sans text-sm uppercase tracking-widest no-underline mx-4 text-black dark:text-white"
  >
    Menu
    <span className="relative top-0 w-8 h-8 inline-flex flex-col justify-around ml-4 transition-all duration-200">
      <span
      className={`absolute -translate-y-1/2 w-full h-px bg-black dark:bg-white transition-all ${open ? 'top-1/2 rotate-45 group-hover:rotate-[-135deg] duration-700' : 'top-[6px] rotate-0 group-hover:top-[8px] duration-200'}`}></span>
      <span className={`absolute -translate-y-1/2 w-full h-px bg-black dark:bg-white transition-all ${open ? 'top-1/2 -rotate-45 group-hover:rotate-[135deg] duration-700' : 'top-[14px] rotate-0 group-hover:top-[12px] duration-200'}`}></span>
    </span>
  </motion.button>
)

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Hamburger
