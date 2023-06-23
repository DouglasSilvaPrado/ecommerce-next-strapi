import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductCard } from '../Card/Product';
import { useAppStore } from '@/store/store';


export const GridCarousel = () => {

  const { fetchShoes, shoes } = useAppStore()
  

  useEffect(() => {
    fetchShoes()
  },[])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 389 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 389, min: 0 },
      items: 1
    }
  };
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
      {shoes.map((shoe) => (
        <ProductCard shoe={shoe} key={shoe.id} />
      ))}
  </Carousel>
  )
}
