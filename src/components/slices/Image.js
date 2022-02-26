import React from "react"
import { Container, InnerContainer } from "../site_layout/containers"
import { Figcaption } from "../typography"

const Image = ({ slice }) => (
    <Container>
      <InnerContainer>
        <figure className="col-span-full lg:col-start-4 -mr-8 lg:-mr-12 xl:-mr-20">
          <img className="w-full" src={slice.primary.image.url} alt={slice.primary.image.alt} />
          <Figcaption>{slice.primary.image.alt}</Figcaption>
        </figure>
      </InnerContainer>
    </Container>
    
  )

export default Image