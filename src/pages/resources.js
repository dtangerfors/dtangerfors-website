import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/site_layout/layout"
import {Container, InnerContainer} from "../components/site_layout/containers"
import Hero from "../components/site_layout/hero"
import { Ingress } from "../components/typography"
import ResourceContent from "../components/resources/wrapper"
import { motion } from "framer-motion"
import { fadeUp } from "../animation"

// Query
export const query = graphql`
  query ResourcePage {
    allPrismicResources {
      edges {
        node {
          data {
            title {
              text
            }
            lead {
              text
            }
            body {
              ... on PrismicResourcesDataBodyResourceItem {
                primary {
                  category_title {
                    text
                  }
                }
                slice_type
                items {
                  item_desc {
                    text
                  }
                  item_link {
                    url
                  }
                  item_title {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const ResourcePage = ({ data }) => {
  const prismicContent = data.allPrismicResources.edges.slice(0, 1).pop()
  if (!prismicContent) return null

  let { title, lead, body } = prismicContent.node.data

  return (
    <Layout>
      <Seo title={title.text} />
      <Hero title={title}>
         <motion.div key="hero-lead" initial="hidden"
             animate="visible"
             variants={fadeUp} className="pt-10">
         <Ingress>{lead.text}</Ingress>
         </motion.div>
         
      </Hero>
      <Container>
        <InnerContainer>
          <ResourceContent resources={body}/>
        </InnerContainer>
        
      </Container>
    </Layout>
  )
}

export default ResourcePage
