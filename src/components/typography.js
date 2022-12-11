import React from "react"
import { motion } from "framer-motion"

const H1 = props => (
   <motion.h1 {...props} className={`font-serif text-3xl font-thin leading-tight text-black dark:text-white pt-[1em] pb-[.3em]`}>{props.children}</motion.h1>
)

const H2 = props => (
   <motion.h2 {...props} className={`font-serif text-2xl font-thin leading-tight text-black dark:text-white pt-[1em] pb-[.3em]`}>{props.children}</motion.h2>
)

const H3 = props => (
   <motion.h3 {...props} className={`font-serif text-xl font-thin leading-tight text-black dark:text-white pt-[1em] pb-[.3em] ${props.className}`}>{props.children}</motion.h3>
)

const H4 = props => (
   <motion.h4 {...props} className={`font-serif text-lg font-thin leading-tight text-black dark:text-white pt-[1em] pb-[.3em] ${props.className}`}>{props.children}</motion.h4>
)

const Paragraph = props => (
   <motion.p {...props} className={`text-base font-body font-normal leading-relaxed text-neutral-800 dark:text-neutral-300 pb-[.8em] ${props.className}`}>{props.children}</motion.p>
)

const Ul = props => (
   <motion.ul {...props} className={`list-disc pl-8 my-4 ${props.className}`}>{props.children}</motion.ul>
)

const Li = props => (
   <motion.li {...props} className={`text-base font-body font-normal leading-relaxed text-neutral-800 dark:text-neutral-300 pb-4 last:pb-0 ${props.className}`}>{props.children}</motion.li>
)

const Ingress = props => (
   <motion.p {...props} className={`text-lg font-body font-normal leading-relaxed max-w-prose text-neutral-900 dark:text-neutral-50 ${props.className}`}>{props.children}</motion.p>
)

const Label = props => (
   <motion.h2 {...props} className={`text-sm font-body font-medium leading-relaxed uppercase tracking-widest text-neutral-900 dark:text-neutral-100 ${props.className}`}>{props.children}</motion.h2>
)

const Figcaption = props => (
   <figcaption {...props} className={`pt-4 text-sm font-body text-neutral-800 dark:text-neutral-300 ${props.className}`}>{props.children}</figcaption>
)

export {H1, H2, H3, H4, Paragraph, Ingress, Label, Li, Ul, Figcaption}