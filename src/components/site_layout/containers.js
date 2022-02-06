import React from "react";


const Container = ({children}) => (
   <section className="p-8 px-safe lg:p-12 xl:p-20">
      {children}
   </section>
)

const InnerContainer = ({children}) => (
   <div className="max-w-screen-2xl mx-auto grid grid-cols-4 lg:grid-cols-12">
      {children}
   </div>
)

export {Container, InnerContainer}