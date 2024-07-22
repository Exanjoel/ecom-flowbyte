import { Card } from "flowbite-react";
import Addition from "./add";
import { CustomFlowbiteTheme } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addCart } from "./store/slice";


const customTheme: CustomFlowbiteTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-2 ",
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

export default function ProductCard(props: any) {
  const { cardDetails } = props;
 
  const cartDispatch = useDispatch();
  return (
    <>
      <Card theme={customTheme}   className=" p-4 m-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
      
       
      
        <div   className=" h-60  overflow-hidden">
        <a  href={`product/${cardDetails.id}`}>
        <img  className="p-2" src={cardDetails.image} />
        </a>
        </div>

        <h5
          onChange={() => {
            cartDispatch(addCart());
          }}
          className="text-md font-bold tracking-tight text-gray-900 min-h-10 dark:text-white line-clamp-2"
        >
          {cardDetails.title}
        </h5>
        <p className="font-semibold text-sm text-gray-700 dark:text-gray-400">
          $ {cardDetails.price}
        </p>
    
        <div className="flex justify-evenly">
          <select className="rounded mr-0 lg:-3 ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div className="flex justify-end">
            <Addition />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            cartDispatch(addCart());
          }}
          className="p-3 bg-gray-500 text-white hover:bg-yellow-300 hover:text-black rounded"
        >
          Add to cart
        </button>
      </Card>
    </>
  );
}
