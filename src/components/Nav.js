import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { bool } from "prop-types"

import Arrow from "./Arrow"
import { ContactOption, ContactWrapper } from "./about/contact"

const NavItem = props => (
  <motion.li
    {...props}
    animate = {{
      y: props.open ? 0 : 30,
      opacity: props.open ? 1 : 0,
    }}
    className="relative border-b border-neutral-900/10 dark:border-white/30 mb-12 last:mb-0 py-6"
  >
    {props.children}
  </motion.li>
)

const NavLink = props => (
  <Link
    to={props.to}
    title={props.title}
    className="group block font-serif text-3xl font-thin leading-none text-black dark:text-white"
  >
    {props.children}{" "}
    <Arrow
      style={{ transform: "rotate(45deg)", top: "1.3rem", right: "1rem" }}
    />{" "}
  </Link>
)

const Nav = ({ open }) => (
  <motion.nav
    open={open}
    initial={{
      y: "-100%",
    }}
    animate={{
      y: open ? 0 : "-100%",
    }}
    transition={{ delay: open ? 0 : 1, type: "tween", duration: 0.4 }}
    className="fixed inset-0 -z-[1] flex flex-col w-screen h-screen bg-white/80 dark:bg-black/80 backdrop-blur-2xl p-8 pb-safe px-safe lg:p-12 xl:p-20"
  >
    <ul className="flex flex-col pt-20 lg:pt-40">
      <NavItem
        open={open}
        transition={{
          delay: open ? 0.8 : 0.6,
          type: "spring",
          stiffness: 75,
          duration: 0.1,
        }}
      >
        <NavLink title="Learn more about me" to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem
        open={open}
        transition={{
          delay: open ? 0.7 : 0.4,
          type: "spring",
          stiffness: 75,
          duration: 0.1,
        }}
      >
        <NavLink title="View my recent work" to="/work">
          Work
        </NavLink>
      </NavItem>
      <NavItem
        open={open}
        transition={{
          delay: open ? 0.6 : 0.2,
          type: "spring",
          stiffness: 75,
          duration: 0.1,
        }}
      >
        <NavLink title="Great resources for design & code" to="/resources">
          Resources
        </NavLink>
      </NavItem>
    </ul>
    <div className="mt-auto">
      <ContactWrapper>
        <ContactOption
          animate = {{
            y: open ? 0 : 30,
            opacity: open ? 1 : 0,
          }}
          transition={{
            delay: open ? 0.6 : 0.6,
            type: "spring",
            stiffness: 75,
            duration: 0.1,
          }}
          href="https://github.com/dtangerfors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-line"></i>{" "}
          <span className="pl-2">@dtangerfors</span>
        </ContactOption>
        <ContactOption
          animate = {{
            y: open ? 0 : 30,
            opacity: open ? 1 : 0,
          }}
          transition={{
            delay: open ? 0.7 : 0.4,
            type: "spring",
            stiffness: 75,
            duration: 0.1,
          }}
          href="https://www.linkedin.com/in/daniel-t%C3%A4ngerfors/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-line"></i>{" "}
          <span className="pl-2">Daniel Tängerfors</span>
        </ContactOption>
        <ContactOption
          animate = {{
            y: open ? 0 : 30,
            opacity: open ? 1 : 0,
          }}
          transition={{
            delay: open ? 0.8 : 0.2,
            type: "spring",
            stiffness: 75,
            duration: 0.1,
          }}
          href="mailto:daniel@dtangerfors.se"
        >
          <i className="ri-at-line"></i>{" "}
          <span className="pl-2">daniel@dtangerfors.se</span>
        </ContactOption>
      </ContactWrapper>
    </div>
  </motion.nav>
)

Nav.propTypes = {
  open: bool.isRequired,
}

export default Nav
