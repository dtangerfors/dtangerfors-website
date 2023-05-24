import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/seo"
import Layout from "../../components/site_layout/layout"
import Hero from "../../components/site_layout/hero"
import {
  Container,
  InnerContainer,
} from "../../components/site_layout/containers"
import GridCard from "../../components/grid_card"
import { H2 } from "../../components/typography"

// Query
export const query = graphql`
  {
    allPrismicProject(sort: { order: DESC, fields: last_publication_date }) {
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
              gatsbyImageData(
                width: 1200
                placeholder: BLURRED
                imgixParams: { q: 80 }
              )
            }
            work_in_progress
            categories
            thumbnail_video {
              url
            }
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
  const devProjects = projects.filter(
    project => project.node.data.categories === "Development"
  )
  const designProjects = projects.filter(
    project => project.node.data.categories === "Design"
  )

  return (
    <Layout>
      <Seo title={pageTitle.text} />
      <Hero title={pageTitle}></Hero>
      <Container>
        <InnerContainer>
          <div className="display-grid grid grid-cols-12 grid-rows-[auto] col-span-full gap-4 md:gap-8">
            {devProjects.map((project, i) => {
              return (
                <GridCard item={project.node} index={i} key={`project-${i}`} />
              )
            })}
          </div>
        </InnerContainer>
      </Container>
      <Container>
        <header className="pb-12">
          <H2>Design Work</H2>
        </header>
        <InnerContainer>
          <div className="grid grid-cols-12 grid-rows-[auto] col-span-full gap-4 md:gap-8">
            {designProjects.map((project, i) => {
              return (
                <GridCard item={project.node} index={i} key={`project-${i}`} />
              )
            })}
          </div>
        </InnerContainer>
      </Container>
    </Layout>
  )
}

export default WorkPage
