import axios from "axios";
import { Rating } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  let { productId } = useParams();
  const [product, setProduct] = useState([]) as any;
  useEffect(() => {
    axios.get(`http://localhost:3000/product/${productId}`).then((response) => {
      let detail = response.data.results;
     
      setProduct(detail);
      
    });
  }, []);
  
  return (
    <>
      <div className="flex items-center flex-col lg:flex-row justify-around">
        <div className="">
           <h2 className=" lg:hidden capitalize text-2xl font-bold m-5">
          {product.title}
        </h2>
        </div>
       
        <div id="image" className="border-b-2 mr-4 lg:w-1/4 md:w-2/4 p-10">
          <img src={product.image} />
        </div>
        <div id="content" className="m-3 lg:w-3/6 lg:block flex flex-col">
          <div className="border-b-2 order-2">
            <h2 className="lg:block hidden  capitalize text-2xl font-bold m-5">
              {product.title}
            </h2>
            <h1 className="text-3xl text-orange-500 font-bold m-5">
              ${product.price}
            </h1>
          </div>
          <div className="border-b-2 order-1">
            <h4 className="text-slate-500  pb-2">{product.description}</h4>
          </div>
          <div className="border-b-2 order-3 pt-4">
            <div className="mt-1">
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {product?.rating?.rate}
                </p>
              </Rating>
            </div>
            <div className="my-5">
              <h5 className="font-bold">
                count:
                <span className=" ml-2 font-thin">
                  {product.count}
                </span>
              </h5>
            </div>
            <div className="lg:flex">
              <button className="uppercase px-5 py-3 rounded border-2 text-black mx-1 hover:bg-gray-900 hover:text-white w-full">
                add to cart
              </button>
              <button className="uppercase px-5 py-3 rounded bg-gray-900 text-white mx-1 hover:bg-amber-400 hover:text-black w-full">
                buy now
              </button>
            </div>
            <div className="flex justify-around mt-5 mb-3">
              <button className="capitalize">wishlist</button>
              <button className="capitalize">size guide</button>
              <button className="capitalize">question</button>
              <button className="capitalize">share</button>
            </div>
          </div>
          <div className="my-5 order-4">
            <h4 className="font-semibold">
              Delivery:
              <span className="text-slate-500 m-5">
                {product.delivery}
              </span>
            </h4>
            <h4 className="font-semibold">
              Returns:
              <span className="text-slate-500 m-5">
                {product.returns}
              </span>
            </h4>
            <h4 className="font-semibold">
              Sku:<span className="text-slate-500 m-5">{product.sku}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
