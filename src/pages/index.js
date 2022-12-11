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
import { fadeUp, transition } from "../animation"
import { ButtonSecondary } from "../components/buttons"
import aboutImage from "../images/daniel-about-me-image-1500.jpg"
import meta_card from "../images/juice-meta-card.jpg"
import GridCard from "../components/grid_card"

import bgImage from "../images/gradient-bg.webp"

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
        {/* <header
          className="relative flex flex-wrap overflow-hidden border-b border-neutral-900/10 dark:border-white/30 py-20 px-8 lg:py-40 lg:px-12 xl:px-20 bg-cover"
          key="index-header"
          style={{backgroundImage: `url(${bgImage})`}}
        >
          <div className="flex items-center w-full max-w-screen-lg">
            <div className="w-full max-w-screen-xl">
              <AnimatedTitle
                text={homepage.title.text}
                textSize="text-display"
              />
            </div>
          </div>
        </header> */}
        {/* <header className="relative min-h-[55vh] lg:min-h-[75vh] w-full grid place-items-center px-8 lg:px-12 xl:px-20">
            <div className="relative z-10 w-full max-w-screen-xl mx-auto lg:top-[-70px] text-center">
              <AnimatedTitle
                text="Daniel. Frontend developer. Designer."
                textSize="text-display"
                key="index-tite"
              />
              <Ingress
              key="index-subtitle"
              className="text-center mx-auto mt-8"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, ...transition }}>
              Welcome to my page. Originally a photographer, turned graphic designer who now does frontend development. View my work below.
              </Ingress>
            </div>
          <div className="absolute w-full h-full inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-bottom dark:hidden" 
            >
              <source
                src="https://files.dtangerfors.se/videos/gradient-1.mp4"
                type="video/mp4"
              />
            </video>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-bottom hidden dark:block"
            >
              <source
                src="https://files.dtangerfors.se/videos/gradient-1-dark.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute bottom-0 left-0 w-full">
              <svg
                className="fill-neutral-50 dark:fill-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1080 75"
              >
                <path d="M1080,66.34C970.1,26.55,771.92,0,545.68,0S107.23,28.47,0,70.63v4.37H1080v-8.66Z"/>
              </svg>
            </div>
          </div>
        </header> */}
        <header className="relative min-h-[55vh] lg:min-h-[75vh] w-full flex items-end p-8">
            <div className="relative z-10 w-full max-w-screen-md">
              <AnimatedTitle
                text="Daniel. Frontend developer. Designer."
                textSize="text-display"
                color="text-white"
                key="index-tite"
              />
              <p
              key="index-subtitle"
              className="text-lg font-body font-normal leading-relaxed max-w-screen-sm mt-8 text-white"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, ...transition }}>
              Welcome to my page. Originally a photographer, turned graphic designer who now does frontend development. View my work below.
              </p>
            </div>
          <div className="absolute w-full h-full inset-0">
            <img src={bgImage} alt=""  class="w-full h-full object-cover"/>
            
          </div>
        </header>
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
        <Container>
          <InnerContainer>
            <div className="col-span-full flex flex-wrap-reverse flex-row-reverse max-w-screen-xl mx-auto">
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
