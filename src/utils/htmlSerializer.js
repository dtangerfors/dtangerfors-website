// -- The HTML Serializer
// This function will be used to modify the way that a Rich Text or Title field is rendered.
import React from "react"
import { Element } from "@prismicio/react"

import { H1, H2, H3, H4, Paragraph, Ul, Li } from "../components/typography"
import AnimationWrapper from "../components/AnimationWrapper"

	
  // -- HTML Serializer
  const htmlSerializer = function(type, element, content, children, key) {
   
    switch(type) {
      case Element.heading1: // Heading 1
        return <AnimationWrapper><H1 key={`h1-${key}`}>{children}</H1></AnimationWrapper>

      case Element.heading2: // Heading 2
        return <AnimationWrapper><H2 key={`h2-${key}`}>{children}</H2></AnimationWrapper>

      case Element.heading3: // Heading 3
        return <AnimationWrapper><H3 key={`h3-${key}`}>{children}</H3></AnimationWrapper>
    
      case Element.heading4: // Heading 4
        return <AnimationWrapper><H4 key={`h4-${key}`}>{children}</H4></AnimationWrapper>

      case Element.paragraph: // Paragraph
        return <AnimationWrapper><Paragraph secondary key={`paragraph-${key}`}>{children}</Paragraph></AnimationWrapper>
      
      case Element.list: // Unordered list
        return <AnimationWrapper><Ul secondary key={`ul-${key}`}>{children}</Ul></AnimationWrapper>

      case Element.listItem: // List item
        return <Li secondary key={`li-${key}`}>{children}</Li>

      default: // Always include a default that returns null
        return null
    }
  }

  export default htmlSerializer