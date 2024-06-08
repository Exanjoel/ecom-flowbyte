import { useState } from "react";
import MenuSidebar from "./menusidebar";
import Search from "./searchbar";
export default function Header() {
  const [show, setshow] = useState(false);
  function clickbutton() {
    setshow(!show);
  }

  return (
    <>
      <div className="flex justify-between items-center my-6  ">
      <div className="block lg:hidden pr-5 ">
            <button type="button" onClick={clickbutton}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        <div className="font-sans text-2xl font-bold  tracking-widest flex flex-row-reverse lg:flex-row  justify-between">
          <h1>UBONE</h1>
          
        </div>
        
        <div className="hidden lg:block">
           <Search />
        </div>
       
        <div className=" items-center font-medium">
          

          <div className="flex items-center" id="nav_content">
            <div className=" lg:border-2 rounded-full lg:mx-3">
              <button type="button" className="m-2 lg:m-5 ">
                <i className="fa-solid fa-user"></i>
              </button>
            </div>
            <div className="lg:border-2 rounded-full lg:mx-3">
              <button type="button" className="m-2 lg:m-5">
                <i className="fa-solid fa-heart"></i>
              </button>
            </div>
            <div className="lg:border-2 rounded-full lg:mx-3">
              <button type="button" className="m-2 lg:m-5 ">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          </div>
          
        </div>
        
      </div>
      {show && <MenuSidebar />}
    </>
  );
}
