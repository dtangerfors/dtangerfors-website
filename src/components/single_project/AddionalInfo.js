import React from "react";

const Li = ({children}) => (
   <li className="text-xs font-sans font-normal text-neutral-600 dark:text-neutral-300 mr-2 mb-2">
      <span className="inline-block px-4 py-2 border border-neutral-900/10 dark:border-white/30 rounded-full leading-none">{children}</span>
   </li>
)

const AdditionalInfo = ({category, demo, github}) => {

   return (
      <ul className="flex flex-wrap pb-8">
         {category ? <Li>{category} <i className="ri-stack-line align-bottom"></i></Li> : null}
         {demo.url ? <Li><a href={demo.url} target="_blank" rel="noopener noreferrer">View demo <i className="ri-arrow-right-up-line align-bottom"></i></a></Li> : null}
         {github.url ? <Li><a href={github.url} target="_blank" rel="noopener noreferrer">Github Repo <i className="ri-github-line align-bottom"></i></a></Li> : null}
      </ul>
   )
}

export default AdditionalInfo