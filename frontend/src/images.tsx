import Caroussel from "./caroussel";
import { motion } from "framer-motion";


export default function Body() {
  return (
    <>
      <div className="flex p-5  justify-evenly items-center ">
        <div className=" m-9 hidden lg:block relative">
          <img src=".\grocery-banner5.webp" />

          <div className="absolute w-full top-12  flex flex-col ">
                      <motion.div animate={{ x: 100 }} transition={{ delay: 1 }} /><h3 className="text-white font-bold text-3xl text-center">
              Vegetable <br />
              Items
            </h3>
            <a href="./product/:id" className="bg-amber-400 p-3 px-5 m-auto w-fit  text-sm rounded-lg text-slate-950 font-bold text-center uppercase"> 
              Shop now 
            </a>
          </div>
        </div>

        <Caroussel />

        <div className="m-9 hidden lg:block relative">
          <img src=".\grocery-banner4.webp" />
          <div className="absolute w-full top-12 flex flex-col">
            <h3 className="text-white font-bold text-3xl text-center">
              Bakery <br />
              products
            </h3>
            <button className="bg-amber-400 p-3 px-5 m-auto w-fit  text-sm rounded-lg text-slate-950 font-bold uppercase">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
