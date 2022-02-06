import * as React from "react"
import { graphql } from "gatsby"
import { AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet"

// Components
import Layout from "../components/site_layout/layout"
import { Container, InnerContainer } from "../components/site_layout/containers"
import { Ingress } from "../components/typography"
import Seo from "../components/seo"
import { AnimatedTitle } from "../components/AnimatedTitle"
import AnimationWrapper from "../components/AnimationWrapper"
import Blob from "../components/Blob"
import { ButtonSecondary } from "../components/buttons"
import ProjectCard from "../components/ProjectCard"
import aboutImage from "../images/daniel-about-me-image-1500.jpg"
import meta_card from "../images/juice-meta-card.jpg"

// Query
export const query = graphql`
query IndexPage {
  allPrismicHomepage {
    edges {
      node {
        data {
          title {
            text
          }
          excerpt {
            text
          }
        }
      }
    }
  }
  allPrismicProject(
    sort: {fields: first_publication_date, order: DESC}
    limit: 3
    filter: {data: {categories: {eq: "Development"}}}
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
      next {
        first_publication_date
      }
    }
  }
}

`

const IndexPage = ({ data }) => {
  const prismicContent = data
  if (!prismicContent) return null
  const homepage = prismicContent.allPrismicHomepage.edges[0].node.data
  const projects = prismicContent.allPrismicProject.edges
  return (
    <Layout>
      <Seo title="Frontend developer | Stockholm" />
      <Helmet>
        <meta property="og:image" content={meta_card}></meta>
        <meta property="twitter:image" content={meta_card}></meta>
      </Helmet>
      <AnimatePresence>
        <header
          className="relative flex flex-wrap overflow-hidden border-b border-neutral-900/10 dark:border-white/30 lg:min-h-[70vh] py-20 px-8 lg:py-40 lg:px-12 xl:px-20"
          key="index-header"
        >
          <div className="absolute right-0 bottom-0 w-full h-[40vh] lg:h-full lg:overflow-hidden">
            <Blob />
          </div>
          <div className="flex items-center w-full max-w-screen-2xl mx-auto">
            <div className="w-full max-w-screen-xl">
              <AnimatedTitle
                text={homepage.title.text}
                textSize="text-display"
              />
            </div>
          </div>
        </header>
        <Container>
          <InnerContainer>
            <div className="grid grid-cols-12 grid-rows-[auto] col-span-full gap-8">
              {projects
                .map((project, i) => {
                  return (
                    <ProjectCard
                      item={project.node}
                      index={i}
                      key={`project-${i}`}
                    />
                  )
                })}
            </div>
          </InnerContainer>
        </Container>
        <Container>
          <InnerContainer>
            <div className="col-span-full flex flex-wrap-reverse flex-row-reverse">
              <div className="w-full lg:w-8/12 pt-12 lg:p-40 flex flex-col justify-center items-start">
                <AnimationWrapper>
                  <Ingress>{homepage.excerpt.text}</Ingress>
                </AnimationWrapper>
                <AnimationWrapper>
                  <div className="pt-8 -ml-4">
                    <ButtonSecondary to="/about">About</ButtonSecondary>
                  </div>
                </AnimationWrapper>
              </div>
              <figure
                className="w-full lg:w-4/12 overflow-hidden border border-neutral-900/10 dark:border-white/30"
                style={{ borderRadius: "36% 64% 60% 40% / 57% 53% 47% 43%" }}
              >
                <img
                  src={aboutImage}
                  className="w-full h-full object-cover"
                  alt="A closeup portrait of Daniel in black and white"
                />
              </figure>
            </div>
          </InnerContainer>
        </Container>
      </AnimatePresence>
    </Layout>
  )
}

export default IndexPage
