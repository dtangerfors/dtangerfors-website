import React, {useEffect, useRef, useState} from "react"
import { graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../../components/site_layout/layout"
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Text, Image, Parallax, Carousel } from "../../components/slices"
import { letterVariants } from "../../components/AnimatedTitle"
import AdditionalInfo from "../../components/single_project/AddionalInfo"
import { fadeUp, transition } from "../../animation"
import {
  Container,
  InnerContainer,
} from "../../components/site_layout/containers"

// Query
export const query = graphql`
  query Project($uid: String) {
    allPrismicProject(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          data {
            title {
              text
            }
            subtitle {
              text
            }
            featured_image {
              alt
              copyright
              url
              gatsbyImageData(
                width: 1920
                placeholder: BLURRED
                imgixParams: { q: 80 }
              )
            }
            categories
            excerpt {
              text
            }
            project_demo {
              type
              url
            }
            github_repo {
              type
              url
            }
            body {
              ... on PrismicProjectDataBodyText {
                id
                primary {
                  text {
                    richText
                  }
                }
                slice_label
                slice_type
              }
              ... on PrismicProjectDataBodyImage {
                id
                primary {
                  image {
                    alt
                    copyright
                    url
                    gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      imgixParams: { q: 80 }
                    )
                  }
                }
                slice_label
                slice_type
              }
              ... on PrismicProjectDataBodyImageCarousel {
                id
                items {
                  image {
                    alt
                    copyright
                    url
                    gatsbyImageData(
                      width: 1200
                      placeholder: BLURRED
                      imgixParams: { q: 80 }
                    )
                  }
                }
                slice_label
                slice_type
              }
              ... on PrismicProjectDataBodyParallaxImage {
                id
                primary {
                  image {
                    alt
                    copyright
                    url
                  }
                }
                slice_label
                slice_type
              }
            }
          }
          uid
          type
        }
      }
    }
  }
`

// Sort and display the different slice options
const SliceItems = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case "text":
          return <Text slice={slice} key={index} />

        case "image":
          return <Image slice={slice} key={index} />

        case "parallax_image":
          return <Parallax slice={slice} key={index} />

        case "image_carousel":
          return <Carousel slice={slice} key={index} />

        default:
          return
      }
    })()

    return res
  })
}

const letterContainerVariants = {
  before: { transition: { staggerChildren: 0.02 } },
  after: {
    transition: { staggerChildren: 0.035, delayChildren: 0.01 },
  },
}

const SingleProject = ({ data }) => {
  const [opacity, setOpacity] = useState(1);
  const [windowHeight, setWindowHeight] = useState(1);
  const pictureRef = useRef(null);
  
  useEffect(() => {
    const pictureHeight = window.innerHeight;
    const range = 200;
    const offset = pictureHeight / 3;

    setWindowHeight(pictureHeight)
    
    const didScrollPage = e => {
      let calc = 1 - (window.scrollY - offset + range) / range;
      
      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }
      
      setOpacity(calc);
    };
    
    window.addEventListener("scroll", didScrollPage);
    
    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  });
  
  if (!data) return null
  const project = data.allPrismicProject.edges.slice(0, 1).pop()

  let {
    title,
    subtitle,
    featured_image,
    excerpt,
    project_demo,
    github_repo,
    body,
    categories,
  } = project.node.data

  const image = getImage(featured_image);

  return (
    <Layout projectTitle={title.text}>
      <Seo title={title.text} />
      <AnimatePresence>
        <header
          key="project-header"
          className="relative z-10 flex p-8 h-screen supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]"
        >
          <div key="header-div" className="max-w-screen-md self-end bottom-0 sticky">
            <motion.h1
              variants={letterContainerVariants}
              initial={"before"}
              animate={"after"}
              exit={"before"}
              key={title.text}
              aria-label={title.text}
              aria-live={"polite"} // dont do this on production if it loops.
              className={`relative inline-block text-3xl font-display leading-tight max-w-full z-10 break-words ${opacity <= 0.5 ? "text-black dark:text-white" : "text-white"}`}
            >
              {title.text
                .split(" ")
                .map((letter, letterI) => (
                  <motion.span
                    key={`letter-${letter}-${letterI}`}
                    className="relative inline-block w-auto"
                    // Position elements
                    variants={letterVariants}
                  >
                    {letter === " " ? "\u00A0" : `${letter}`}
                  </motion.span>
                ))
                .reduce((prev, curr) => [prev, "\u00A0", curr])}
              <motion.span
                key="title-dot"
                className="relative inline-block w-auto font-display"
                variants={letterVariants}
              >
                .{"\u00A0"}
              </motion.span>
              {subtitle.text
                .split(" ")
                .map((letter, letterI) => (
                  <motion.span
                    key={`letter-${letter}-${letterI}`}
                    className="relative inline-block w-auto italic"
                    // Position elements
                    variants={letterVariants}
                  >
                    {letter === " " ? "\u00A0" : `${letter}`}
                  </motion.span>
                ))
                .reduce((prev, curr) => [prev, "\u00A0", curr])}
              <motion.span
                key="title-dot-end"
                className="relative inline-block w-auto font-display"
                variants={letterVariants}
              >
                .{"\u00A0"}
              </motion.span>
            </motion.h1>
          </div>

          <figure
            key="header-figure"
            className="fixed w-full -z-10 inset-0"
            ref={pictureRef}
            style={{ opacity: opacity, height: windowHeight }}
          >
            <GatsbyImage
              image={image}
              className="w-full h-full object-cover"
              alt={featured_image.alt}
            />
            <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black/40 to-black/5"></div>
          </figure>
        </header>

        <div className="relative z-10">
          <Container key="project-additional-info">
            <div className="py-12">
              <InnerContainer>
                <motion.div
                  key="project-info-tab"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3, ...transition }}
                  className="col-span-full lg:col-span-3"
                >
                  <AdditionalInfo
                    category={categories}
                    demo={project_demo}
                    github={github_repo}
                  />
                </motion.div>
                <motion.div
                  key="project-intro"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4, ...transition }}
                  className="col-span-7 lg:col-start-4"
                >
                  <p className="font-display text-2xl text-neutral-800 dark:text-neutral-300 max-w-prose pb-0">
                    {excerpt.text}
                  </p>
                </motion.div>
              </InnerContainer>
            </div>
          </Container>
          {body ? <SliceItems key="project-body" slices={body} /> : null}
        </div>
      </AnimatePresence>
    </Layout>
  )
}

export default SingleProject
