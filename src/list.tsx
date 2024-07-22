import { useEffect, useState } from "react";
import ProductCard from "./card";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from "axios";

export default function List() {
 const [cardproduct, setCardproducts] = useState([]);
//  const products = [
//     { imageUrl: "watemelon.webp", title: "fresh fruit1", price: "$2000" },
//     { imageUrl: "watemelon.webp", title: "watermelon", price: "$1500" },
//     { imageUrl: "watemelon.webp", title: "jack fruit", price: "$10000" },
//     { imageUrl: "watemelon.webp", title: "strawberry", price: "$2000" },
//     { imageUrl: "watemelon.webp", title: "fresh fruit2", price: "$2000" },
//     { imageUrl: "watemelon.webp", title: "fresh fruit2", price: "$2000" },
//     { imageUrl: "watemelon.webp", title: "fresh fruit2", price: "$2000" },
//     { imageUrl: "watemelon.webp", title: "fresh fruit2", price: "$2000" },
//     { imageUrl: "watemelon.webp", title: "fresh fruit2", price: "$2000" },

    
  

  
//   ];
useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((response) => {
      let Allproducts=response.data
      setCardproducts(Allproducts);
    });
  },[]);
  

  return (
    <>
      {/* <Carousel
        onSlideChange={(index) => console.log("onSlideChange()", index)}
        className="flex"
      >
        {products.map((product) => (
          <ProductCard cardDetails={product} />
        ))}
      </Carousel> */}

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >

          {cardproduct.map((product: any) => (
            <ProductCard cardDetails={product} />
          ))}
        
     
        
      </Carousel>
    </>
  );
}
