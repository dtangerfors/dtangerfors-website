import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, InnerContainer } from "../site_layout/containers"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper"

// Import Swiper styles
import "swiper/css"
import "../../styles/swiper.css"

const Carousel = ({ slice }) => {
  return (
    <Container>
        <div className="-mb-8 pb-8 border-b border-neutral-900/10 dark:border-white/30">
        <InnerContainer>
          <div className="col-span-7 lg:col-start-4">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                1024: {
                  spaceBetween: 20,
                },
                1280: {
                  spaceBetween: 20,
                },
              }}
              items={slice.items}
            >
              {slice.items.map(item => {
                const image = getImage(item.image)
                return (
                  <SwiperSlide>
                    <figure className="col-span-full">
                      {/* <img
                      className="w-full"
                      src={item.image.url}
                      alt={item.image.alt}
                    /> */}
                      <GatsbyImage image={image} alt={item.image.alt} />
                    </figure>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </InnerContainer>
    </div>
      </Container>
  )
}

export default Carousel
