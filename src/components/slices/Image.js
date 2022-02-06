import React from "react"
import { Container, InnerContainer } from "../site_layout/containers"
import { Figcaption } from "../typography"

const Image = ({ slice }) => (
    <Container>
      <InnerContainer>
        <figure className="col-span-full">
          <img className="w-full" src={slice.primary.image.url} alt={slice.primary.image.alt} />
          <Figcaption>{slice.primary.image.alt}</Figcaption>
        </figure>
      </InnerContainer>
    </Container>
    
  )

export default Image