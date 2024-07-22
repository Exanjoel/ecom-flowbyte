import axios from "axios";
import { CustomFlowbiteTheme } from "flowbite-react";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

const customTheme: CustomFlowbiteTheme = {
  root: {
    base: "flex  ",
    children: "flex h-full flex-col justify-center gap-4 p-2 ",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row",
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
    },
  },
};
export default function Section2() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        let detail = response.data;
        setCategory(detail);
        
      });
  }, []);

  const categoryList = [
    {
      title: "shirts",
      imgUrl: "shirt.webp",
      itemCount: 12,
    },
    {
      title: "shoes",
      imgUrl: "shoe.webp",
      itemCount: 12,
    },
    {
      title: "bags",
      imgUrl: "bagg.webp",
      itemCount: 12,
    },
    {
      title: "glasses",
      imgUrl: "glasses.webp",
      itemCount: 12,
    },
  ];


  return (
    <>
      <div className="text-center leading-loose capitalize mb-14">
        <div className="font-bold text-slate-500">
          <h2>follow the most popular trends</h2>
        </div>
        <div className="font-bold text-4xl sm:line-clamp-1">
          <h2>explore the top categories</h2>
          
        </div>
      </div>
      <div className="block flex flex-wrap ">
        {categoryList.map((item, index) => (
          <Card
            theme={customTheme}
            className="lg:w-1/4  w-1/2 rounded-none relative"
          >
            <img src={item.imgUrl} />
            <div className="absolute left-3 top-10">
            
               <a href={`/category/${category[index]}`}> <h5 className="font-bold uppercase text-2xl ">{category[index]}</h5></a> 
           
              <p>{item.itemCount} items</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
