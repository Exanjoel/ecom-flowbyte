import { Card } from "flowbite-react"
import Addition from "./add"
import { CustomFlowbiteTheme } from "flowbite-react";


const customTheme: CustomFlowbiteTheme ={
  "root": {
    "base": "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    "children": "flex h-full flex-col justify-center gap-4 ",
    "horizontal": {
      "off": "flex-col",
      "on": "flex-col md:max-w-xl md:flex-row"
    },
    "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  "img": {
    "base": "",
    "horizontal": {
      "off": "rounded-t-lg",
      "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
}

export default function ProductCard (props:any){
    const {cardDetails}=props;

    return(
        <>
           <Card theme={customTheme} className="w-1/4 p-4 m-1 ">
        <img className="w-3/4" src={cardDetails.imageUrl} />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {cardDetails.title}
        </h5>
        <p className="font-semibold text-gray-700 dark:text-gray-400">$2000</p>
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
        <button type="button" className="p-3 bg-gray-500 text-white hover:bg-gray-100 hover:text-black">
          Add to cart
        </button>
      </Card>
        </>
    )
}