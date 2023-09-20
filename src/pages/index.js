import * as React from "react"
import { graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import { Helmet } from "react-helmet"

// Components
import Layout from "../components/site_layout/layout"
import { Container } from "../components/site_layout/containers"
import Seo from "../components/seo"
import { AnimatedTitle } from "../components/AnimatedTitle"
import { fadeUp, transition } from "../animation"
import meta_card from "../images/juice-meta-card.jpg"
import GridCard from "../components/grid_card"

import bgImage from "../images/gradient-bg-blue.webp"

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
      sort: { fields: last_publication_date, order: DESC }
      filter: { data: { categories: { eq: "Development" } } }
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
  const projects = prismicContent.allPrismicProject.edges
  return (
    <Layout>
      <Seo title="Frontend developer | Stockholm" />
      <Helmet>
        <meta property="og:image" content={meta_card}></meta>
        <meta property="twitter:image" content={meta_card}></meta>
      </Helmet>
      <AnimatePresence>
        <div className="">
          <header className="relative flex flex-col min-h-screen w-full p-8 pt-32 lg:p-20 lg:pt-40 overflow-hidden supports-[min-height:100cqh]:min-h-[100cqh] supports-[min-height:100svh]:min-h-[100svh]">
            <div className="relative z-10 w-full max-w-screen-sm">
              <AnimatedTitle
                text="Digital designer who thinks in code"
                textSize="text-display"
                color="text-white"
                key="index-tite"
              />
            </div>
            <div className="max-w-screen-md mt-auto self-end">
            <motion.p
              key="index-subtitle"
              className="text-xl font-body font-normal leading-relaxed text-white"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, ...transition }}
              >
              Welcome to my page. Originally a photographer, turned graphic
              designer who now does frontend development. View my work below.
            </motion.p>
              </div>
            <div className="absolute -z-10 w-full h-full inset-0">
              <img src={bgImage} alt="" class="w-full h-full object-cover" />
            </div>
          </header>
          <Container>
            <div className="display-grid grid grid-cols-12 grid-rows-[auto] col-span-full gap-4 md:gap-8 md:gap-y-4">
              {projects.map((project, i) => {
                return (
                  <GridCard
                    item={project.node}
                    index={i}
                    key={`project-${i}`}
                  />
                )
              })}
            </div>
          </Container>
        </div>
      </AnimatePresence>
    </Layout>
  )
}

export default IndexPage