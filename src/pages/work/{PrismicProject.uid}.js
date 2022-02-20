import React from "react"
import { graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../../components/site_layout/layout"
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Label, Paragraph } from "../../components/typography"
import { Text, Image, Parallax, Carousel } from "../../components/slices"
import {
  letterVariants,
} from "../../components/AnimatedTitle"
import AdditionalInfo from "../../components/single_project/AddionalInfo"
import { fadeUp, transition } from "../../animation"

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
            featured_image {
              alt
              copyright
              url
              gatsbyImageData
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
   before: { transition: { staggerChildren: 0.35 } },
   after: {
     transition: { staggerChildren: 0.035, delayChildren: 0.3 },
   },
 }

const SingleProject = ({ data }) => {
  if (!data) return null
  const project = data.allPrismicProject.edges.slice(0, 1).pop()

  let {
    title,
    featured_image,
    excerpt,
    project_demo,
    github_repo,
    body,
    categories,
  } = project.node.data

  const image = getImage(featured_image)

  return (
    <Layout>
      <Seo title={title.text} />
      <AnimatePresence>
        <header key="project-header" className="relative z-10 flex items-end p-8 lg:p-12 xl:p-20 min-h-[50vh] lg:min-h-[60vh]">
          <div key="header-div" className="max-w-screen-2xl w-full mx-auto">
          <motion.h1
            variants={letterContainerVariants}
            initial={"before"}
            animate={"after"}
            exit={"before"}
            key={title.text}
            aria-label={title.text}
            aria-live={"polite"} // dont do this on production if it loops.
            className="relative inline-block text-display font-serif font-thin max-w-full z-10 break-words text-neutral-50"
          >
            {title.text.split("").map((letter, letterI) => (
              <motion.span
                key={`letter-${letter}-${letterI}`}
                className="relative inline-block w-auto font-thin"
                // Position elements
                variants={letterVariants}
              >
                {letter === " " ? "\u00A0" : `${letter}`}
              </motion.span>
            ))}
          </motion.h1>
          </div>
          
          <figure key="header-figure" className="absolute w-full h-full -z-10 inset-0">
            <GatsbyImage image={image} className="w-full h-full object-cover" alt={featured_image.alt}/>
            <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black/40 to-black/5"></div>
          </figure>
        </header>
        <div key="project-additional-info" className="px-8 lg:px-12 xl:px-20 border-y border-neutral-900/10 dark:border-white/30">
          <div className="flex flex-wrap w-full max-w-screen-2xl mx-auto">
            <motion.div variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3, ...transition }} className="md:w-1/2 py-8 lg:py-12 xl:py-20 border-b md:border-b-0 md:border-r border-neutral-900/10 dark:border-white/30">
              <Label>About</Label>
              <Paragraph className="max-w-prose pt-8 pb-0">{excerpt.text}</Paragraph>
            </motion.div>
            <motion.div variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4, ...transition }} className="md:w-1/2 py-8 lg:py-12 xl:py-20 md:pl-8 lg:pl-12 xl:pl-20">
              <Label>Additional info</Label>

              <AdditionalInfo category={categories} demo={project_demo} github={github_repo} />
            </motion.div>
          </div>
        </div>
          {body ? <SliceItems key="project-body" slices={body} /> : null}
        
      </AnimatePresence>
    </Layout>
  )
}

export default SingleProject
