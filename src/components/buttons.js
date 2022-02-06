import React from "react"
import { Link } from "gatsby"

const ButtonPrimary = ({to, children}) => (
   <Link className="group inline-flex items-center m-4 bg-black border border-black leading-none text-sm text-white uppercase tracking-widest py-6 pr-8 pl-12 rounded-[3rem] hover:bg-neutral-800 hover:border-x-neutral-800 dark:text-black dark:bg-neutral-50 dark:border-white dark:hover:bg-neutral-300 dark:hover:border-neutral-300 transition-all duration-300 ease-in-out" to={to}>{children} <i className="relative ri-arrow-right-line text-sm mx-8 group-hover:mr-0 group-hover:ml-16 transition-all duration-300 ease-in-out"></i></Link>
)

const ButtonSecondary = ({to, children}) => (
   <Link className="group inline-flex items-center m-4 bg-transparent border border-black leading-none text-sm text-black uppercase tracking-widest py-6 pr-8 pl-12 rounded-[3rem] dark:text-neutral-50 dark:border-white transition-all duration-300 ease-in-out" to={to}>{children} <i className="relative ri-arrow-right-line text-sm mx-8 group-hover:mr-0 group-hover:ml-16 transition-all duration-300 ease-in-out"></i></Link>
)

export {ButtonPrimary, ButtonSecondary}