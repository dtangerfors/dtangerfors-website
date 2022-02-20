import React from "react"
import { Container, InnerContainer } from "../site_layout/containers"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, A11y } from "swiper"

// Import Swiper styles
import "swiper/css"
import "../../styles/swiper.css"

const Carousel = ({ slice }) => {
  return (
    <div className="relative border-y border-neutral-900/10 dark:border-white/30">
      <Container>
        <InnerContainer>
          <div className="col-span-7 lg:col-start-3">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={10}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                1024: {
                  spaceBetween: 30,
                },
                1280: {
                  spaceBetween: 50,
                },
              }}
              items={slice.items}
            >
              {slice.items.map(item => (
                <SwiperSlide>
                  <figure className="col-span-full">
                    <img
                      className="w-full"
                      src={item.image.url}
                      alt={item.image.alt}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </InnerContainer>
      </Container>
    </div>
  )
}

export default Carousel
