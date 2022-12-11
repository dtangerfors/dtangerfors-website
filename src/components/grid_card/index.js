import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import { fadeUp, transition } from "../../animation"
import "./style.css"

const GridCard = ({ item, index }) => (
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
          <img
            src={item.data.thumbnail.url}
            alt={item.data.thumbnail.alt}
            className="card-image"
          />
        )}
      </figure>
    </Link>
  </motion.div>
)

export default GridCard
