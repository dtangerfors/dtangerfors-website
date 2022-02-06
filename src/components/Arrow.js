import React from "react";

const Arrow = props => (
   <div {...props} className="w-20 h-20 absolute right-0 top-0">
      <div className="absolute top-0 left-1/3 h-px w-0 rounded bg-black dark:bg-white group-hover:w-2/3 transition-all duration-300 delay-[0ms] group-hover:delay-300"></div>
      <div className="absolute bottom-1/3 right-0 h-0 w-px rounded bg-black dark:bg-white group-hover:h-2/3 transition-all duration-300 delay-[0ms] group-hover:delay-300"></div>
      <div className="absolute bottom-0 left-0 h-0 w-px rounded bg-black dark:bg-white group-hover:h-[100%] rotate-45 origin-bottom-left transition-all duration-300 delay-[0ms] group-hover:delay-300"></div>
   </div>
)

export default Arrow