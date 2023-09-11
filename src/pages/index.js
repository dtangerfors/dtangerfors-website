import * as React from "react"
import { graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import { Helmet } from "react-helmet"

// Components
import Layout from "../components/site_layout/layout"
import { Container, InnerContainer } from "../components/site_layout/containers"
import Seo from "../components/seo"
import { AnimatedTitle } from "../components/AnimatedTitle"
import { fadeUp, transition } from "../animation"
import meta_card from "../images/juice-meta-card.jpg"
import GridCard from "../components/grid_card"
import Blob from "../components/blob-circle"

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
          <header className="relative min-h-[55vh] lg:min-h-[80vh] w-full flex items-center justify-center text-center p-8 bg-black overflow-hidden">
            <div className="relative z-10 w-full max-w-screen-md">
              <AnimatedTitle
                text="Daniel. Frontend developer. Designer."
                textSize="text-display"
                color="text-primary"
                key="index-tite"
              />
             
            </div>
            <Blob />
            <div className="absolute z-40 w-full h-full inset-0 mix-blend-difference">
              {/* <img src={bgImage} alt=""  class="w-full h-full object-cover"/> */}
              {/* <motion.div
                key="blob-1"
                animate={{
                  rotate: 360,
                }}
                transition={{ ease: "easeOut", duration: 20, repeat: Infinity }}
                style={{
                  borderRadius: "36% 64% 60% 40% / 57% 53% 47% 43%",
                  transform: "translate(-50%, 50%)",
                }}
                className="absolute w-[100vw] h-[100vw] bottom-0 left-1/2 bg-primary"
              ></motion.div> */}
            </div>
          </header>
          <Container>
            <InnerContainer>
              <div className="col-span-full text-center">
              <motion.p
                key="index-subtitle"
                className="text-xl font-body font-normal leading-relaxed max-w-screen-md mt-8 mx-auto text-primary"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3, ...transition }}
              >
                Welcome to my page. Originally a photographer, turned graphic
                designer who now does frontend development. View my work below.
              </motion.p>
              </div>
            
            </InnerContainer>
            </Container>
          <Container>
              <div className="display-grid grid grid-cols-12 grid-rows-[auto] col-span-full gap-4 md:gap-8">
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
