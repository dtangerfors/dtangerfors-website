import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import { fadeUp, transition } from "../../animation"
import "./style.css"

const GridCard = ({ item, index }) => {
  const image = getImage(item.data.thumbnail)
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 + index / 10, ...transition }}
      className="card relative"
    >
      <Link id={item.uid} to={item.url} className="card-link">
        <div className="card-text">
          <h2 className="font-sans text-xl text-black dark:text-white">
            {item.data.title.text}
          </h2>
          <p className="text-sm font-body text-neutral-800 dark:text-neutral-300">
            &raquo; {item.data.subtitle.text}
          </p>
        </div>
        {item.data.thumbnail_video.url ? (
          <figure className="card-figure">
            <video autoPlay muted loop playsInline className="card-image">
              <source src={item.data.thumbnail_video.url}></source>
            </video>
          </figure>
        ) : (
          <GatsbyImage
            image={image}
            alt={item.data.thumbnail.alt}
            className="card-figure"
          />
        )}
      </Link>
    </motion.div>
  )
}

export default GridCard