import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Section3() {
  // const [products, setProducts] = useState([]);

  

  // useEffect(()=>{
  //   axios.get("https://fakestoreapi.com/products").then((response) => {
  //     let Allproducts=response.data
  //     setProducts(Allproducts);
  //   });
  // },[]);
 
  const categoryList = [
     {
      id: 1,
    title: "color print",
    imgUrl: "color print.webp",
    itemCount: 12,
  },
  {
    id: 2,
    title: "formal t shirt",
    imgUrl: "formal t shirt.webp",
    itemCount: 10,
  },
  {
    id: 3,
    title: "bucket hat",
    imgUrl: "bucket hat.webp",
    itemCount: 1,
  },
  {
    id: 4,
    title: "half sleeve",
    imgUrl: "half sleeve.webp",
    itemCount: 12,
  },
  ];

  return (
    <>
      <div>
        <div className="ml-3 px-1 py-3  flex flex-col items-center">
          <h2 className="font-bold">we have your occasion covered</h2>
          <h1 className="font-bold text-3xl">featured products</h1>
        </div>
      </div>
      <div className="block m-4 lg:gap-3 flex justify-center flex-wrap ">
        {categoryList.map((item:any) => (
          <Card key={item.id} className=" lg:w-1/5  w-6/12 rounded-none">
            <img className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" src={item?.imgUrl} />
            <div className="flex flex-col items-center">
              <h5 className="font-bold uppercase text-2xl ">{item?.title}</h5>
              <p>{item?.itemCount} items</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
