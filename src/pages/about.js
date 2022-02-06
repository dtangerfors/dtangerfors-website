import React from "react"
import { graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "../components/site_layout/layout"
import Seo from "../components/seo"
import { H3, Ingress, Label, Paragraph } from "../components/typography"
import { AnimatedTitle } from "../components/AnimatedTitle"
import aboutImage from "../images/daniel-about-me-image-1500.jpg"
import { blobAnimation, blobTransition } from "../components/Blob"
import { ContactOption, ContactWrapper } from "../components/about/contact"
import { fadeUp, fadeUpList, transition, fadeUpItem } from "../animation"
import { JobItem, JobList } from "../components/about/experience"
import { SkillList, SkillWrapper, SkillItem } from "../components/about/skills"

// GraphQL
export const query = graphql`
  query AboutPage {
    allPrismicAboutPage {
      edges {
        node {
          data {
            title {
              text
            }
            sub_title {
              text
            }
            lead {
              text
            }
            body {
              ... on PrismicAboutPageDataBodyExperience {
                id
                items {
                  job_description {
                    text
                  }
                  job_title {
                    text
                  }
                  end_date
                  start_date
                  work_place {
                    text
                  }
                }
                slice_type
              }
              ... on PrismicAboutPageDataBodyEducation {
                id
                slice_type
                items {
                  end_date
                  start_date
                  university {
                    text
                  }
                  degree {
                    text
                  }
                }
              }
              ... on PrismicAboutPageDataBodySkills {
                id
                slice_type
                primary {
                  heading {
                    text
                  }
                  skills {
                    richText
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

const AboutPage = ({ data }) => {
  if (!data) return null

  const aboutContent = data.allPrismicAboutPage.edges.slice(0, 1).pop()
  const about = aboutContent.node.data
  const experience = about.body.filter(
    slice => slice.slice_type === "experience"
  )[0]
  const education = about.body.filter(
    slice => slice.slice_type === "education"
  )[0]

  return (
    <Layout>
      <Seo title="About me" />
      <AnimatePresence>
        <section className="max-w-screen-xl mx-auto px-safe lg:px-12 xl:px-20 pt-40 lg:pt-80">
          <header className="grid grid-cols-12">
            <div className="col-span-full lg:col-end-9 lg:pr-12 order-2 lg:order-first">
              <Label
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1, ...transition }}
              >
                {about.title.text}
              </Label>
              <AnimatedTitle text={about.sub_title.text} textSize="text-3xl" />
              <Ingress
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="pt-8"
                transition={{ delay: 0.3, ...transition }}
              >
                {about.lead.text}
              </Ingress>
              <ContactWrapper>
                <ContactOption
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1, ...transition }}
                  href="https://github.com/dtangerfors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-line"></i>{" "}
                  <span className="pl-2">@dtangerfors</span>
                </ContactOption>
                <ContactOption
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2, ...transition }}
                  href="https://www.linkedin.com/in/daniel-t%C3%A4ngerfors/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-line"></i>{" "}
                  <span className="pl-2">Daniel Tängerfors</span>
                </ContactOption>
                <ContactOption
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3, ...transition }}
                  href="mailto:daniel@dtangerfors.se"
                >
                  <i className="ri-at-line"></i>{" "}
                  <span className="pl-2">daniel@dtangerfors.se</span>
                </ContactOption>
              </ContactWrapper>
            </div>
            <div className="col-span-full md:col-span-4 lg:col-start-9 order-1 pb-20 lg:pb-0">
              <motion.figure
                initial="hidden"
                animate="visible"
                variants={blobAnimation}
                transition={blobTransition}
                className="w-full aspect-square overflow-hidden border border-neutral-900/10 dark:border-white/30"
                style={{ borderRadius: "36% 64% 60% 40% / 57% 53% 47% 43%" }}
              >
                <img
                  src={aboutImage}
                  className="w-full h-full object-cover"
                  alt="A closeup portrait of Daniel in black and white"
                />
              </motion.figure>
            </div>
          </header>
          <div className="mt-40 grid grid-cols-12 gap-12">
            <div className="col-span-full md:col-end-9">
              <Label
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3, ...transition }}
              >
                Experience
              </Label>
              <JobList
                key="experience-list"
                variants={fadeUpList}
                initial="hidden"
                animate="visible"
              >
                {experience.items.map((job, index) => (
                  <JobItem
                    key={`job-item-${index}`}
                    variants={fadeUpItem}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3, ...transition }}
                  >
                    <H3>
                      {job.job_title.text} &mdash; {job.work_place.text}
                    </H3>
                    <Paragraph className="max-w-prose">
                      {job.job_description.text}
                    </Paragraph>
                    <time className="inline-block pt-2 text-sm font-body font-normal italic capitalize leading-relaxed text-neutral-500 dark:text-neutral-400">
                      <span className="capitalize">
                        {new Date(job.start_date).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>{" "}
                      &mdash;{" "}
                      <span className="capitalize">
                        {!job.end_date
                          ? "Present"
                          : new Date(job.end_date).toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })}
                      </span>
                    </time>
                  </JobItem>
                ))}
              </JobList>
            </div>

            <div className="col-span-full md:col-start-9 flex flex-wrap gap-20">
              <div>
                <Label
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3, ...transition }}
                >
                  Education
                </Label>
                <JobList
                  key="education-list"
                  variants={fadeUpList}
                  initial="hidden"
                  animate="visible"
                >
                  {education.items.map((edu, index) => (
                    <JobItem
                      key={`edu-item-${index}`}
                      variants={fadeUpItem}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3, ...transition }}
                    >
                      <H3>
                        {edu.degree.text} &mdash; {edu.university.text}
                      </H3>
                      <time className="inline-block pt-2 text-sm font-body font-normal italic capitalize leading-relaxed text-neutral-500 dark:text-neutral-400">
                        <span className="capitalize">
                          {new Date(edu.start_date).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              year: "numeric",
                            }
                          )}
                        </span>{" "}
                        &mdash;{" "}
                        <span className="capitalize">
                          {!edu.end_date
                            ? "Present"
                            : new Date(edu.end_date).toLocaleDateString(
                                "en-US",
                                {
                                  month: "long",
                                  year: "numeric",
                                }
                              )}
                        </span>
                      </time>
                    </JobItem>
                  ))}
                </JobList>
              </div>
              {about.body.map((slice, index) => {
                if (slice.slice_type === "skills") {
                  return (
                    <SkillWrapper key={`skill-${index}`}>
                      <Label
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1, ...transition }}
                      >
                        {slice.primary.heading.text}
                      </Label>
                      <SkillList
                        variants={fadeUpList}
                        initial="hidden"
                        animate="visible"
                      >
                        {slice.primary.skills.richText.map((skill, index) => (
                          <SkillItem
                            key={`${slice.primary.heading.text}-${index}`}
                            variants={fadeUpItem}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1, ...transition }}
                          >
                            {skill.text}
                          </SkillItem>
                        ))}
                      </SkillList>
                    </SkillWrapper>
                  )
                }
              })}
            </div>
          </div>
        </section>
      </AnimatePresence>
    </Layout>
  )
}

export default AboutPage
