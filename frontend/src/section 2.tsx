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
  const [category, setCategory] = useState([]) as any ;
  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((response) => {
        console.log(response)
        let detail = response.data.results;
        setCategory(detail);
        
      });
  }, []);
  


 

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
        {category.map((item:any) => (
          <Card
            key={item.category_id}
            theme={customTheme}
            className="lg:w-1/4  w-1/2 rounded-none relative"
          >
            <img src={item.image} />
            <div className="absolute left-3 top-10">
            
               <a href={`/category/${item.category_id}`}> <h5 className="font-bold uppercase text-2xl ">{item.category_name}</h5></a> 
           
              <p>{item.category_id} items</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
