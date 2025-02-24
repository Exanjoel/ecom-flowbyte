import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Filter from "../products/components/filter";


export default function Category() {
  // const categorylist = [
  //   {
  //     img: "watemelon.webp",
  //     title: "hello",
  //     price: "454",
  //   },
  //   {
  //     img: "watemelon.webp",
  //     title: "hello",
  //     price: "454",
  //   },
  //   {
  //     img: "watemelon.webp",
  //     title: "hello",
  //     price: "454",
  //   }

  // ];
  const [Category, setCategory] = useState([]);
  let { categoryId } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/${categoryId}`)
      .then((response) => {
        let items = response.data.results;

        setCategory(items);
      });
  }, []);

  return (
    <>
    <Filter/>
      <div className="flex flex-wrap justify-center gap-2 p-2 ">
     
        {Category.map((item: any) => (
          <Card className="max-w-sm lg:w-1/4">
            <a href={`/product/${item.product_id}`}>
              <div className="h-60 flex items-center overflow-hidden">
                <img className="w-min" src={item.image} />
              </div>
            </a>

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
              {item.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 truncate">
              {item.description}
            </p>
            <div className="flex justify-between">
              <button className="p-3 rounded bg-cyan-700 hover:bg-yellow-300 font-bolder hover:text-black text-white">
                Buy now
              </button>
              <button className="p-3 rounded bg-cyan-700 hover:bg-yellow-300 font-bolder hover:text-black text-white">
                +add to cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
