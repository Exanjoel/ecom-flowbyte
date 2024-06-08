import ProductCard from "./card";
import { Carousel } from "flowbite-react";

export default function List() {
  const products = [
    { imageUrl: "watemelon.webp", title: "fresh fruit1", price: "$2000" },
    { imageUrl: "watemelon.webp", title: "fresh fruit2", price: "$2000" },
    { imageUrl: "watemelon.webp", title: "fresh fruit3", price: "$2000" },
    { imageUrl: "watemelon.webp", title: "fresh fruit3", price: "$2000" },
    { imageUrl: "watemelon.webp", title: "fresh fruit3", price: "$2000" },
    { imageUrl: "watemelon.webp", title: "fresh fruit3", price: "$2000" },
    { imageUrl: "watemelon.webp", title: "fresh fruit3", price: "$2000" },
    { imageUrl: "watemelon.webp", title: "fresh fruit3", price: "$2000" },
    { imageUrl: "watemelon.webp", title: "fresh fruit3", price: "$2000" },
    
  ];

  return (
    <>
      <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)} className="flex">
           {products.map((product)=>(<ProductCard cardDetails={product}/> ))}
      </Carousel>

    
   
    </>
  );
}
