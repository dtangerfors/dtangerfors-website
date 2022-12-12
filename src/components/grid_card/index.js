import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import { fadeUp, transition } from "../../animation"
import "./style.css"

const GridCard = ({ item, index }) => {
  const image = getImage(item.data.thumbnail);
  return (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    transition={{ delay: 0.1 + index / 10, ...transition }}
    className="card"
  >
    <Link id={item.uid} to={item.url} className="card-link">
      <div className="card-text">
        <h2 className="font-serif text-xl text-black dark:text-white">
          {item.data.title.text}
        </h2>
        <p className="text-sm font-body text-neutral-800 dark:text-neutral-300">
          {item.data.subtitle.text}
        </p>
      </div>
      <figure className="card-figure">
        {item.data.thumbnail_video.url ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="card-image"
          >
            <source src={item.data.thumbnail_video.url}></source>
          </video>
        ) : (
          <GatsbyImage image={image} alt={item.data.thumbnail.alt} className="absolute w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
        )}
      </figure>
    </Link>
  </motion.div>
)
}

export default GridCard
