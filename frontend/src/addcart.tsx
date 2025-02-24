import axios from "axios";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
export default function Cart() {
  const [cartdata, setCartdata] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/carts/5").then((response) => {
      setCartdata(response.data);
    });
  }, []);
  console.log(cartdata)
  return (
    <>
      <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex justify-between gap-2">
          <button className="p-3 w-full bg-gray-500 text-white hover:bg-yellow-300 hover:text-black rounded">
            Buy now
          </button>
          <button className="p-3 w-full bg-gray-500 text-white hover:bg-yellow-300 hover:text-black rounded">
            Remove from cart{" "}
          </button>
        </div>
      </Card>
    </>
  );
}
