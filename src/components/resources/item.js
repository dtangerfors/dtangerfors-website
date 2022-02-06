import { motion } from 'framer-motion';
import React from 'react';
import { H3, Paragraph } from '../typography';
import { transition, fadeUpItem } from "../../animation"

const ResourceItems = ({ items }) => {
   return items.map((resource, i) => (
     <motion.div
       variants={fadeUpItem}
       custom={i}
       initial="hidden"
       animate="visible"
       transition={transition}
       key={i}
     >
       <H3>
         <a href={resource.item_link.url} target="_blank" rel="noopener noreferrer" className='block text-inherit hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-[#ae5ae0] via-[#ffcb00] to-[#ff5500]'>
           {resource.item_title.text} 
           <i className="ri-external-link-line text-base align-baseline ml-4"></i>
         </a>
       </H3>
       <Paragraph>{resource.item_desc.text}</Paragraph>
     </motion.div>
   ))
 }
 
export default ResourceItems