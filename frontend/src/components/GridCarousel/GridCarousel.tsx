import React, { ReactNode } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsiveDefault = {
  desktop: {
    breakpoint: { max: 3000, min: 1023 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1023, min: 639 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 2
  }
};

type GridCarouselProps = {
  children: ReactNode
  responsive?: typeof responsiveDefault
}

export const GridCarousel = ({ children, responsive = responsiveDefault }: GridCarouselProps) => {

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}

    >
      { children }
  </Carousel>
  )
}
