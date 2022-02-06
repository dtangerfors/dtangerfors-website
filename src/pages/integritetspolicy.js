import { PrismicRichText } from "@prismicio/react"
import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/seo"
import Hero from "../components/site_layout/hero"
import htmlSerializer from "../utils/htmlSerializer"
import Layout from "../components/site_layout/layout"
import { Container } from "../components/site_layout/containers"

// Query
export const query = graphql`
  query PrivacyPolicy {
    allPrismicPrivacyPolicy {
      edges {
        node {
          uid
          url
          data {
            page_content {
              richText
            }
            page_title {
              text
            }
          }
        }
      }
    }
  }
`

const PrivacyPolicyPage = ({ data }) => {
  const prismicContent = data.allPrismicPrivacyPolicy.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node.data

  return (
    <Layout center>
      <Seo title="Integritetspolicy" />
      <Hero title={document.page_title} />
      <Container>
      <div className="w-full max-w-screen-lg">
      
      <PrismicRichText
        field={document.page_content.richText}
        components={htmlSerializer}
      />
    </div>
      </Container>
      
      
    </Layout>
  )
}

export default PrivacyPolicyPage
