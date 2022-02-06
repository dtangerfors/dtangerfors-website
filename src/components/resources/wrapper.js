import React from "react"
import { motion } from "framer-motion"
import ResourceItems from "./item"
import { transition, fadeUpItem, fadeUpList } from "../../animation"
import { H2 } from "../typography"

const ResourceContent = ({ resources }) => {
   if (!resources) return null
 
   return (
     <div className="col-span-full">
       {resources.map((resource, i) => {
         return (
           <motion.div
             key={i}
             initial="hidden"
             animate="visible"
             variants={fadeUpList}
             className="grid md:grid-cols-3 gap-12 mt-40 first:mt-0"
           >
              <motion.header 
               variants={fadeUpItem}
               custom={i}
               initial="hidden"
               animate="visible"
               transition={transition}
               style={{marginRight: 'calc(-1 * (1536px / 2) - 50vw)'}}
               className="relative md:col-span-3 after:absolute after:w-full after:h-px after:bottom-0 after:right-0 after:block after:bg-gradient-to-r from-[#ae5ae0] via-[#ffcb00] to-[#ff5500]"
               >
              <H2>
               {resource.primary.category_title.text}
             </H2>
              </motion.header>
             
             <ResourceItems items={resource.items} />
           </motion.div>
         )
       })}
     </div>
   )
 }

 export default ResourceContent
