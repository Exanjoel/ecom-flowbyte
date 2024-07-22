import { Carousel } from "flowbite-react";
export default function Caroussel() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 w-full">
        <Carousel slideInterval={5000}>
          <img src=".\public\grocery-slider1.webp" alt="..." />
          <img src=".\public\grocery-slider2.webp" alt="..." />
          <img src=".\public\grocery-slider3.webp" alt="..." />
        </Carousel>
      </div>
    </>
  );
}
