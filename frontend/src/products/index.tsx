import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import Filter from "./components/filter";


export default function Productlist() {

    const [list,setList]=useState([]) as any;
    const [filterList,setFilterList]=useState() as any;

    useEffect(() => {
      axios
        .get(`http://localhost:3000/filter`)
        .then((response) => {
          let items = response.data.results;
          setList(items);
        })
    }, []);
    console.log(list)


  return (
    <>
    <div className="relative">
        <div className="absolute ">
            <Filter/>
        </div>
    
      <div className="flex  flex-wrap justify-center gap-2 p-6">
        {list.map((index:any ) => (
          <Card key={index.product_id} className="w-fit">
            <a href={`/product/${index.product_id}`}>
              <div className="h-60 flex items-center overflow-hidden">
                <img className="w-min" src={index.image} />
              </div>
            </a>

            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
              {index.title}
            </h5>

            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-bold text-cyan-700">${index.price}</h4>
              <button className="p-3 border-transparent rounded bg-cyan-700 hover:bg-transparent font-semibold hover:text-cyan-700 text-white capitalize border-2 hover:border-cyan-700">
                +add to cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
   
    </>
  );
}
