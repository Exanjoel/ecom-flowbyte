import { useState } from "react";
import MenuSidebar from "./menusidebar";
import Search from "./searchbar";
import { useSelector } from "react-redux";
import Icons from "./icons";

export default function Header() {
  const [show, setshow] = useState(false);
  function clickbutton() {
    setshow(!show);
  }

  const cartValue = useSelector((state: any) => {
    return state.cart.value;
  });

  return (
    <>
      <div className="flex justify-between items-center my-6  ">
        <div className="block lg:hidden pr-5 ">
          <button type="button" onClick={clickbutton}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div className="font-sans text-2xl font-bold  tracking-widest flex flex-row-reverse lg:flex-row  justify-between">
          <a href="/home"><h1>UBONE</h1></a>
        </div>

        <div className="hidden lg:block">
          <Search />
        </div>

        <div className=" items-center font-medium">
          <div className="flex items-center" id="nav_content">
            <Icons/>
            <a href="/cart">
              <div className="lg:border-2 rounded-full lg:mx-3 position:relative">
             <div className="absolute top-3.5 right-5 bg-cyan-700 text-white h-auto text-xs px-3 py-2 rounded-full">
                  <p>{cartValue || "cartValue"}</p>
                </div>
                <button type="button" className="m-2 lg:m-5 ">
                  
                <i className="fa-solid fa-cart-shopping"></i>  
              </button>
            </div>
              </a> 
            
          </div>
        </div>
      </div>

      {show && <MenuSidebar />}
    </>
  );
}
