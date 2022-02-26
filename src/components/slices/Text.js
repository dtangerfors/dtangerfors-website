import React from "react"
import { PrismicRichText } from "@prismicio/react"
import htmlSerializer from "../../utils/htmlSerializer"

import { Container, InnerContainer } from "../site_layout/containers"

const Text = ({ slice }) => {
  return (
    <Container>
      <InnerContainer>
        <div className="col-span-7 lg:col-start-4">
          <PrismicRichText
            field={slice.primary.text.richText}
            components={htmlSerializer}
          />
        </div>
      </InnerContainer>
    </Container>
  )
}

export default Text
