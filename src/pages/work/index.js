import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/site_layout/layout"
import Hero from "../../components/site_layout/hero"
import {
  Container,
  InnerContainer,
} from "../../components/site_layout/containers"
import ProjectCard from "../../components/ProjectCard"
import GridCard from "../../components/grid_card"

// Query
export const query = graphql`
  {
    allPrismicProject(
      sort: {fields: first_publication_date, order: DESC}
    ) {
      edges {
        node {
          data {
            title {
              text
            }
            subtitle {
              text
            }
            thumbnail {
              alt
              copyright
              url
            }
            work_in_progress
            categories
          }
          id
          uid
          type
          url
        }
      }
    }
  }
`

const WorkPage = ({ data }) => {
  if (!data) return null

  const projects = data.allPrismicProject.edges
  const pageTitle = { text: "Selected works" }

  return (
    <Layout>
      <Seo title={pageTitle.text} />
      <Hero title={pageTitle}></Hero>
      <Container>
          <InnerContainer>
          <div className="grid grid-cols-12 grid-rows-[auto] col-span-full gap-4 md:gap-8">
          {projects
              .map((project, i) => {
                return <GridCard item={project.node} index={i} key={`project-${i}`} />
              })}
              
          </div>
          
          </InnerContainer>
        </Container>
    </Layout>
  )
}

export default WorkPage
