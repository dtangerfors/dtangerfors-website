import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, InnerContainer } from "../site_layout/containers"
import { Figcaption } from "../typography"

const Image = ({ slice }) => {
  const image = getImage(slice.primary.image);
   return ( <Container>
      <InnerContainer>
        <figure className="col-span-full lg:col-start-4 -mr-8 lg:-mr-12 xl:-mr-20">
          {/* <img className="w-full" src={slice.primary.image.url} alt={slice.primary.image.alt} /> */}
          <GatsbyImage image={image} alt={slice.primary.image.alt} />
          <Figcaption>{slice.primary.image.alt}</Figcaption>
        </figure>
      </InnerContainer>
    </Container>)
    
}

export default Image