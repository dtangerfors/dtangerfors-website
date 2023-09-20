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
             className="grid lg:grid-cols-3 gap-8 mt-40 first:mt-0"
           >
              <motion.header 
               variants={fadeUpItem}
               custom={i}
               initial="hidden"
               animate="visible"
               transition={transition}
               className="relative col-span-full"
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
