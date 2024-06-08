import Caroussel from "./caroussel";
import { motion } from "framer-motion";


export default function Body() {
  return (
    <>
      <div className="flex p-5  justify-evenly items-center ">
        <div className=" p-9 hidden lg:block relative">
          <img src=".\public\grocery-banner5.webp" />

          <div className="absolute  top-12 left-20 flex flex-col ">
                      <motion.div animate={{ x: 100 }} transition={{ delay: 1 }} /><h3 className="text-white font-bold text-3xl text-center">
              Vegetable <br />
              Items
            </h3>
            <a href="./product" className="bg-amber-400 p-3 px-5 mt-5 text-sm rounded-lg text-slate-950 font-bold uppercase"> 
              Shop now 
            </a>
          </div>
        </div>

        <Caroussel />

        <div className="p-9 hidden lg:block relative">
          <img src=".\public\grocery-banner4.webp" />
          <div className="absolute  top-12 left-20 flex flex-col">
            <h3 className="text-white font-bold text-3xl text-center">
              Bakery <br />
              products
            </h3>
            <button className="bg-amber-400 p-3 px-5 mt-5 text-sm rounded-lg text-slate-950 font-bold uppercase">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
