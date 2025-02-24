import { useState } from "react";
import Search from "./searchbar";
import { useSelector } from "react-redux";
import Icons from "./icons";
import FilterDrawer from "./products/components/filterbody";

export default function Header() {
  // const [show, setshow] = useState(false);
  // function clickbutton() {
  //   setshow(!show);
  // }

  const cartValue = useSelector((state: any) => {
    return state.cart.value;
  });

  const sideMenu = [
    {
      id: 1,
      title: "home",
      content:"",
      path:"/home"
    },
    {
      id: 2,
      title: "about",
      content:"",
      path:""
    },
    {
      id: 3,
      title: "product",
      content:"",
      path:"/products"
    },
    {
      id: 4,
      title: "contact",
      content:"",
      path:""
    },
    {
      id: 5,
      title: "login",
      content:"",
      path:"/login"
    },
  ];



  return (
    <>
      <div className="flex justify-between items-center my-6  ">
        <div className="block lg:hidden pr-5 ">
          <FilterDrawer
            buttonClassName="fa-solid fa-bars"
            drawerClassName="font-bold"
            buttonText=""
            drawerItems={sideMenu}
            direction={"right"}
           
          />
        </div>
        <div className="font-sans text-2xl font-bold  tracking-widest flex flex-row-reverse lg:flex-row  justify-between">
          <a href="/home">
            <h1>UBONE</h1>
          </a>
        </div>

        <div className="hidden lg:block">
          <Search />
        </div>

        <div className=" items-center font-medium">
          <div className="flex items-center" id="nav_content">
            <Icons />
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

      {/* {show && <MenuSidebar />} */}
    </>
  );
}
