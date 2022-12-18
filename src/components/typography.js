import React from "react"
import { motion } from "framer-motion"

const H1 = props => (
   <motion.h1 {...props} className={`font-sans text-3xl font-normal leading-tight text-black dark:text-neutral-200 pt-[1em] pb-[.3em]`}>{props.children}</motion.h1>
)

const H2 = props => (
   <motion.h2 {...props} className={`font-sans text-2xl font-normal leading-tight text-black dark:text-neutral-200 pt-[1em] pb-[.3em]`}>{props.children}</motion.h2>
)

const H3 = props => (
   <motion.h3 {...props} className={`font-sans text-xl font-normal leading-tight text-black dark:text-neutral-200 pt-[1em] pb-[.3em] ${props.className}`}>{props.children}</motion.h3>
)

const H4 = props => (
   <motion.h4 {...props} className={`font-sans text-lg font-normal leading-tight text-black dark:text-neutral-200 pt-[1em] pb-[.3em] ${props.className}`}>{props.children}</motion.h4>
)

const Paragraph = props => (
   <motion.p {...props} className={`text-lg font-body font-light leading-relaxed text-neutral-800 dark:text-neutral-400 pb-[.8em] ${props.className}`}>{props.children}</motion.p>
)

const Ul = props => (
   <motion.ul {...props} className={`list-disc pl-8 my-4 ${props.className}`}>{props.children}</motion.ul>
)

const Li = props => (
   <motion.li {...props} className={`text-base font-body font-light leading-relaxed text-neutral-800 dark:text-neutral-400 pb-4 last:pb-0 ${props.className}`}>{props.children}</motion.li>
)

const Ingress = props => (
   <motion.p {...props} className={`text-lg font-body font-light leading-relaxed max-w-screen-sm text-neutral-900 dark:text-neutral-50 ${props.className}`}>{props.children}</motion.p>
)

const Label = props => (
   <motion.h2 {...props} className={`text-sm font-body font-medium leading-relaxed uppercase tracking-widest text-neutral-900 dark:text-neutral-100 ${props.className}`}>{props.children}</motion.h2>
)

const Figcaption = props => (
   <figcaption {...props} className={`pt-4 text-sm font-sans text-neutral-800 dark:text-neutral-400 ${props.className}`}>{props.children}</figcaption>
)

export {H1, H2, H3, H4, Paragraph, Ingress, Label, Li, Ul, Figcaption}